# Anno

和 AI 一起读书、一起批注的 MCP 服务器。

**与其他共读工具的区别：** Anno 支持文本级划线高亮，不止于段落级批注。你可以选中任意一句话画线，AI 也可以——两个人的划线和批注用不同颜色区分，像真正在同一本书上留下各自的笔迹。

上传 PDF / EPUB / TXT，在网页阅读器里翻页阅读。内置夜间模式、字体调节、书签、全文搜索、生词本。

## 试一试

`data.example/` 里有一份示例书籍数据（《简单的激情》节选两页），包含 reader 和 Claude 各自的划线与批注。复制到 data 目录即可体验：

```bash
cp -r data.example data
```

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
