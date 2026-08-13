import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import type { PrerenderArguments, PrerenderResult } from 'vite-prerender-plugin'
import './index.css'
import App from './App.tsx'
import { getRouteImage, getRouteMeta } from './meta'

if (typeof window !== 'undefined') {
  const target = document.getElementById('root')!
  if (import.meta.env.DEV) {
    createRoot(target).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } else {
    hydrateRoot(
      target,
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}

export async function prerender({
  url,
}: PrerenderArguments): Promise<PrerenderResult> {
  // react-dom/server's browser build leaks a MessagePort when imported in
  // Node, which would keep the build process alive. The edge build is
  // isomorphic, renders fine in Node, and shares the bundled React instance.
  const { renderToString } = await import('react-dom/server.edge')

  const { parseLinks } = await import('vite-prerender-plugin/parse')

  const path = url.replace(/\/+$/, '') || '/'
  const meta = getRouteMeta(path)
  const image = getRouteImage(path)
  const canonical = `https://alimansour.com${path === '/' ? '/' : `${path}/`}`

  const html = renderToString(<App pathname={url} />)
  const links = new Set(parseLinks(html))

  return {
    html,
    links,
    head: {
      lang: 'en',
      title: meta.title,
      elements: new Set<{
        type: string
        props: Record<string, string>
      }>([
        { type: 'meta', props: { name: 'description', content: meta.description } },
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        { type: 'meta', props: { property: 'og:description', content: meta.description } },
        { type: 'meta', props: { property: 'og:type', content: 'website' } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
        { type: 'meta', props: { property: 'og:image', content: image } },
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
        { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
        { type: 'meta', props: { name: 'twitter:description', content: meta.description } },
        { type: 'meta', props: { name: 'twitter:image', content: image } },
      ]),
    },
  }
}
