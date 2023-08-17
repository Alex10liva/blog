const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3000;

const markdownLoader = require("./markdownLoader");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");

const tagClasses = {
  JavaScript: "js",
  Node: "node",
  Web: "web",
  Git: "git",
};

// Función para convertir la cadena de fecha a objeto Date
const parseDate = (dateString) => {
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const dateParts = dateString.split(" ");
  const day = parseInt(dateParts[0]);
  const monthIndex = months.findIndex((month) => month === dateParts[2]);
  const year = parseInt(dateParts[4]);

  return new Date(year, monthIndex, day);
};

const removeDiacritics = (text) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

app.get("/", (req, res) => {
  let posts = markdownLoader.loadMarkdownPosts(path.join(__dirname, "posts"));
  // Ordenar las publicaciones por fecha de manera ascendente
  posts.sort((a, b) => parseDate(b.date) - parseDate(a.date));

  res.render("index", { posts, tagClasses, name: "Blog." }); // Renderizar la vista "blog" con los posts
});

app.get("/results", (req, res) => {
  let posts = markdownLoader.loadMarkdownPosts(path.join(__dirname, "posts"));
  const searchTerm = req.query.search;

  if (searchTerm) {
    const searchTermWithoutDiacritics = removeDiacritics(
      searchTerm.toLowerCase()
    );
    posts = posts.filter((post) => {
      const postTitleWithoutDiacritics = removeDiacritics(
        post.title.toLowerCase()
      );
      return postTitleWithoutDiacritics.includes(searchTermWithoutDiacritics);
    });
  }

  // Ordenar las publicaciones por fecha de manera ascendente
  posts.sort((a, b) => parseDate(b.date) - parseDate(a.date));

  res.render("results", {
    posts,
    tagClasses,
    searchTerm,
    name: `Resultados para: ${searchTerm}`,
  }); // Renderizar la vista "blog" con los posts
});

app.get("/:slugP", (req, res) => {
  const { slugP } = req.params;
  const posts = markdownLoader.loadMarkdownPosts(path.join(__dirname, "posts"));
  const post = posts.find((post) => post.slug === slugP);
  let morePosts = posts.filter((post) => post.slug !== slugP);
  morePosts.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  morePosts = morePosts.slice(0, 7);
  res.render("show", { post, tagClasses, morePosts, name: `${post.title}` });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
