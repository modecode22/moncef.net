import { NextRequest } from "next/server";
import sitemap from "../../../lib/sitemap";

export async function GET(req: NextRequest) {
    const TheSitemap = await sitemap();
  console.log('didid');
  
    const toXml = (urls: any) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((item: any) => {
      return `
  <url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastModified}</lastmod>
  </url>
      `;
    })
    .join('')}
  </urlset>`;
  
    return new Response(toXml(TheSitemap), {
      status: 200,
      headers: {
        'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
        'content-type': 'application/xml'
      }
    });
  }