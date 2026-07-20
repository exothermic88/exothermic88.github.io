import { defineConfig } from 'astro/config';

// astro dev only serves public/ files on exact paths, so directory URLs
// like /wiki/home/ 404 during development. GitHub Pages resolves them to
// index.html, so production is unaffected; this shim mirrors that in dev.
const wikiDevServer = {
  name: 'wiki-dev-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const [path, query] = req.url.split('?');
      const suffix = query ? `?${query}` : '';
      if (path === '/wiki' || path === '/wiki/') {
        res.writeHead(302, { Location: '/wiki/home/' });
        res.end();
        return;
      }
      if (path.startsWith('/wiki/')) {
        if (path.endsWith('/')) {
          req.url = `${path}index.html${suffix}`;
        } else if (!path.split('/').pop().includes('.')) {
          res.writeHead(301, { Location: `${path}/${suffix}` });
          res.end();
          return;
        }
      }
      next();
    });
  },
};

export default defineConfig({
  site: 'https://exothermic88.github.io',
  // The wiki has no root index.html (its front page is /wiki/home/), so
  // generate a redirect page for /wiki/ in the built site.
  redirects: {
    '/wiki': '/wiki/home/',
  },
  vite: {
    plugins: [wikiDevServer],
  },
});
