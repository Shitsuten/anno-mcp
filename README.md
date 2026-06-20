# Anno

Book annotation MCP server with a web-based reader. Upload PDF, EPUB, or TXT files, read them in a paginated view, highlight passages, and annotate via the Model Context Protocol.

## Setup

```bash
cd server
npm install
pip install pymupdf ebooklib
node server.mjs
```

The server runs on port 3300 by default. Set `PORT`, `DATA_DIR`, or `UPLOAD_DIR` environment variables to customize.

## Structure

- `client/` -- Web reader frontend (static HTML/CSS/JS)
- `server/` -- MCP server + REST API + Python extraction scripts

## Client

Serve the `client/` directory with any static file server or configure your reverse proxy to point to it.

## MCP

The server exposes MCP tools for listing books, reading pages, writing annotations, and managing bookmarks. Connect via SSE at `/mcp` or Streamable HTTP at `/mcp`.
