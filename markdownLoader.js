const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const hljs = require("highlight.js"); // Importa highlight.js

// Configura markdown-it con resaltado de sintaxis
const md = markdownIt({
  html: true,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(code, { language: lang, ignoreIllegals: true }).value
        }</code></pre>`;
      } catch (__) {}
    }

    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`;
  },
});

function loadMarkdownPosts(postsFolderPath) {
  const posts = [];

  const files = fs.readdirSync(postsFolderPath);
  files.forEach((filename) => {
    const filePath = path.join(postsFolderPath, filename);
    const content = fs.readFileSync(filePath, "utf8");

    const parts = content.split("---");
    const metadataString = parts[1].trim();
    const markdownContent = parts.slice(2).join("---").trim();

    const metadataLines = metadataString.split("\n");
    const meta = {};

    for (const line of metadataLines) {
      const [key, ...valueParts] = line.split(":").map((item) => item.trim());
      const value = valueParts.join(":").trim();
      if (key && value) {
        if (key === "tags") {
          meta[key] = value.split(",").map((tag) => tag.trim()); // Convertir a un arreglo
        } else {
          meta[key] = value;
        }
      }
    }

    // Convierte el contenido markdown a HTML
    const htmlContent = md.render(markdownContent);

    const slug = filename.replace(".md", "");
    posts.push({ ...meta, content: htmlContent, slug });
  });

  return posts;
}

module.exports = { loadMarkdownPosts };
