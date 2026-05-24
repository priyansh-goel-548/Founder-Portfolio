const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Log incoming requests
  console.log(`${req.method} ${req.url}`);

  // Parse URL and remove query strings
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let filePath = path.join(
    __dirname,
    parsedUrl.pathname === "/" ? "index.html" : parsedUrl.pathname,
  );

  // Security: prevent directory traversal
  const normalizedPath = path.normalize(filePath);
  const normalizedDir = path.normalize(__dirname);
  if (!normalizedPath.startsWith(normalizedDir)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(`File not found: ${filePath}`);
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - File Not Found</h1><p>" + filePath + "</p>");
      } else {
        console.error(`Server error: ${err.message}`);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      }
    } else {
      const ext = path.extname(filePath);
      const mimeTypes = {
        ".html": "text/html; charset=utf-8",
        ".js": "application/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".woff": "font/woff",
        ".woff2": "font/woff2; charset=utf-8",
        ".txt": "text/plain; charset=utf-8",
      };
      const contentType = mimeTypes[ext] || "application/octet-stream";

      // Add CORS and cache headers
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(content);
    }
  });
});

server.listen(PORT, "localhost", () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
