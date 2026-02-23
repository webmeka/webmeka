import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'WEBMEKA STUDIO',
    short_name: 'WEBMEKA',
    description: 'Strategy-driven creative design agency crafting digital experiences that work.',
    start_url: '/',
    scope: '/',
    lang: 'en',
    display: 'standalone',
    categories: ['design', 'business', 'productivity'],
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}