function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector(".main");
  json.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
}

function fetchNews() {
  return fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2021-03-15&to=2021-03-15&sortBy=popularity&apiKey=c59b8672503f45b6b542a1158e099b97"
  )
    .then((resp) => resp.json())
    .then((json) => {
      renderNews(json);
    });
}

function renderNews(json) {
  console.log(json);
  const main = document.querySelector(".main");
  json.articles.forEach((article) => {
    const card = document.createElement("div");
    card.className += "card";
    card.innerHTML = `
    <h1>${article.title}</h1>
    <br>
    <h4>${article.description}</h4>
    <br>
    <p>${article.source.name}</p>
    `;
    main.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchNews();
});