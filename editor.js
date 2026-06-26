const saveBtn =
document.getElementById("saveBtn");

const titleInput =
document.getElementById("title");

const categoryInput =
document.getElementById("category");

const contentInput =
document.getElementById("content");

const message =
document.getElementById("message");

saveBtn.addEventListener(
"click",
saveSnippet
);

function saveSnippet(){

const title =
titleInput.value.trim();

const category =
categoryInput.value;

const content =
contentInput.value.trim();

if(
title === "" ||
content === ""
){

showMessage(
"Please fill all fields",
"red"
);

return;
}

let snippets =
JSON.parse(
localStorage.getItem("snippets")
) || [];

const snippet = {

id: Date.now(),

title,

category,

content,

createdAt:
new Date()
.toLocaleDateString()

};

snippets.push(
snippet
);

localStorage.setItem(
"snippets",
JSON.stringify(snippets)
);

showMessage(
"Snippet Saved Successfully ✅",
"#00e676"
);

titleInput.value = "";
contentInput.value = "";
}

function showMessage(
text,
color
){

message.textContent =
text;

message.style.color =
color;

setTimeout(()=>{

message.textContent="";

},3000);

}