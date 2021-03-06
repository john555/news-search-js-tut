const apiKey = "";

function el(id) {
  return document.getElementById(id);
}

const form = el("search-form");
const searchInput = el("search");
const newsList = el("news");

form.addEventListener("submit", submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();

  const searchTerm = searchInput.value;

  fetchNews(searchTerm).then(results => renderNews(results.articles));
}

function fetchNews(searchTerm) {
  const url = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2019-11-07&sortBy=publishedAt&apiKey=${apiKey}`;
  return fetch(url).then(response => response.json());
}

function renderNews(articles) {
  newsList.innerHTML = "";

  // let html = "";

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    const li = createEl("li", null, [
      createEl("a", { href: article.url }, [
        createEl("img", { src: article.urlToImage }),
        createEl("h2", { className: "title" }, article.title)
      ])
    ]);

    newsList.appendChild(li);

    // html += `
    // <li>
    //   <a href="${article.url}">
    //     <img src="${article.urlToImage}" />
    //     <h2 class="title">${article.title}</h2>
    //   </a>
    // </li>
    // `;
  }

  // newsList.innerHTML = html;
}
