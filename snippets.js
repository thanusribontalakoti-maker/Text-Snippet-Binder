const container =
document.getElementById(
"snippetContainer"
);

const searchInput =
document.getElementById(
"searchInput"
);

const categoryFilter =
document.getElementById(
"categoryFilter"
);

const totalCount =
document.getElementById(
"totalCount"
);

let snippets =
JSON.parse(
localStorage.getItem("snippets")
) || [];

function renderSnippets(){

let filtered =
[...snippets];

const search =
searchInput.value
.toLowerCase();

const category =
categoryFilter.value;

if(search){

filtered =
filtered.filter(item=>

item.title
.toLowerCase()
.includes(search)

||

item.content
.toLowerCase()
.includes(search)

);

}

if(category !== "all"){

filtered =
filtered.filter(item=>

item.category === category

);

}

container.innerHTML = "";

totalCount.textContent =
filtered.length;

if(filtered.length === 0){

container.innerHTML =

`
<div class="empty">

No Snippets Found 📭

</div>
`;

return;
}

filtered.forEach(snippet=>{

const card =
document.createElement(
"div"
);

card.className =
"snippet-card";

card.innerHTML =

`
<h3>${snippet.title}</h3>

<div class="badge">
${snippet.category}
</div>

<div class="code-box">
${snippet.content}
</div>

<p>

Created:
${snippet.createdAt}

</p>

<div class="card-actions">

<button
class="copy-btn"
onclick="copySnippet(${snippet.id})">

Copy

</button>

<button
class="delete-btn"
onclick="deleteSnippet(${snippet.id})">

Delete

</button>

</div>
`;

container.appendChild(
card
);

});

}

function copySnippet(id){

const snippet =
snippets.find(
item=>item.id===id
);

navigator.clipboard
.writeText(
snippet.content
);

alert(
"Copied Successfully ✅"
);

}

function deleteSnippet(id){

const confirmDelete =
confirm(
"Delete this snippet?"
);

if(!confirmDelete)
return;

snippets =
snippets.filter(
item=>item.id!==id
);

localStorage.setItem(
"snippets",
JSON.stringify(snippets)
);

renderSnippets();

}

searchInput.addEventListener(
"input",
renderSnippets
);

categoryFilter.addEventListener(
"change",
renderSnippets
);

renderSnippets();