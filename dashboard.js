let snippets =
JSON.parse(
localStorage.getItem("snippets")
) || [];

let categories =
new Set(
snippets.map(
item => item.category
)
);

document.getElementById(
"snippetCount"
).textContent =
snippets.length;

document.getElementById(
"categoryCount"
).textContent =
categories.size;