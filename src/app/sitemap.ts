import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webmeka.com';
  return [
    {
      url: baseUrl + '/',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: baseUrl + '/services',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/about',
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: baseUrl + '/pricing',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
       {
      url: baseUrl + '/contact-us',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/faqs',
      changeFrequency: 'weekly',
      priority: 0.5,
    },
        {
      url: baseUrl + '/terms-of-service',
      changeFrequency: 'monthly',
      priority: 0.4,
    },
        {
      url: baseUrl + '/privacy-policy',
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}
