export interface RouteMeta {
  title: string
  description: string
  image?: string
}

const defaultMeta: RouteMeta = {
  title: 'Ali Mansour — Software Engineer',
  description:
    'Ali Mansour is a full-stack software engineer building production web, mobile, cloud, and AI-powered systems.',
}

export const defaultImage = 'https://alimansour.com/og.png'

const routeMeta: Record<string, RouteMeta> = {
  '/engineering': {
    title: 'Engineering notes — Ali Mansour',
    description:
      'Case studies on building an AI video product: multimodal analysis, editorial scoring, automatic reframing, and the systems that make it run.',
  },
  '/engineering/ai-clipping': {
    title: 'Building ByteCap’s AI clipping pipeline — Ali Mansour',
    description:
      'How I built a multimodal video pipeline that analyzes long-form content, grades strong moments, tracks people across scenes, and turns landscape footage into composed 9:16 clips.',
  },
}

export function getRouteMeta(path: string): RouteMeta {
  return routeMeta[path] ?? defaultMeta
}

export function getRouteImage(path: string): string {
  return routeMeta[path]?.image ?? defaultImage
}
