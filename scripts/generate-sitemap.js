#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
const robotsPath = path.join(publicDir, 'robots.txt');

const siteUrl = (process.env.VITE_SITE_URL || 'https://example.com').replace(/\/$/, '');

const routes = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/marketing', changefreq: 'monthly', priority: '0.8' },
  { loc: '/ugc', changefreq: 'monthly', priority: '0.8' },
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;

fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
fs.writeFileSync(robotsPath, robots, 'utf-8');
console.log(`✓ Sitemap & robots.txt generated: ${siteUrl}`);

