const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.csv': 'text/csv; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/login.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);
  
  // Prevent directory traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Access Denied');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end(`
        <div style="font-family:sans-serif;padding:40px;text-align:center;background:#07121f;color:#e6f2fb;min-height:100vh;">
          <h2>404 - Not Found</h2>
          <p>Requested file <code>${reqPath}</code> does not exist.</p>
          <p><a href="/login.html" style="color:#7fd3f7">Go to Login</a> · <a href="/index.html" style="color:#7fd3f7">Go to Dashboard</a></p>
        </div>
      `);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Antarctic Digital Twin running at http://localhost:${PORT}/`);
  console.log(`Login: http://localhost:${PORT}/login.html`);
  console.log(`Dashboard: http://localhost:${PORT}/index.html`);
});
