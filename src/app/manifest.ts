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
    theme_color: '#00FFFF',
    icons: [
       {
    "purpose": "maskable",
    "sizes": "1024x1024",
    "src": "/logo/app_icon.png",
    "type": "image/png"
  },
  {
    "purpose": "maskable",
    "sizes": "192x192",
    "src": "/logo/app_icon_x192.png",
    "type": "image/png"
  },
  {
    "purpose": "maskable",
    "sizes": "512x512",
    "src": "/logo/app_icon_x512.png",
    "type": "image/png"
  }
    ],
  }
}