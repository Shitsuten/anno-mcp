# Anno

和 AI 一起读书、一起批注的 MCP 服务器。

上传 PDF / EPUB / TXT，在网页阅读器里翻页阅读，划线、写批注。AI 通过 MCP 协议连接后可以读同一本书、留下自己的批注——两个人的笔迹用不同颜色区分。

## 安装

```bash
cd server
npm install
pip install pymupdf ebooklib
node server.mjs
```

默认端口 3300。可通过环境变量 `PORT`、`DATA_DIR`、`UPLOAD_DIR` 自定义。

## 结构

```
client/     网页阅读器前端（纯静态 HTML/CSS/JS）
server/     MCP 服务器 + REST API + Python 文本提取脚本
```

## 前端

把 `client/` 目录用任意静态文件服务器托管，或通过反向代理指向它。

## MCP

服务器提供以下 MCP 工具：浏览书架、翻页阅读、写批注、划线、书签管理。支持 SSE (`/mcp`) 和 Streamable HTTP (`/mcp`) 两种传输方式。
