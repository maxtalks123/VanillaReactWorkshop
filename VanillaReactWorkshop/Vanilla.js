const button = document.getElementById("button");

button.addEventListener("click", () => {
  console.log("button clicked");
});

const app = document.querySelector("#app");
const isLoggedIn = false;

if (isLoggedIn) {
  app.innerHTML = "<h1>You are logged in</h1>";
} else {
  app.innerHTML = "<h1>You need to log in</h1>";
}

const fetchData = document.getElementById("fetchData");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

async function main() {
  const posts = await getPosts();
  fetchData.innerHTML = `
    <ul>${posts.map((post) => `<li>${post.title}</li>`).join("")}
    </ul>
    `;
}
main();

const updateData = document.getElementById("updateData");

let count = 0;

updateData.innerHTML = `<p>You clicked ${count} times</p>
<button>THIS IS A NEW BUTTON</button>`;

const updateButton = document.querySelector("#updateButton");

updateButton.addEventListener("click", () => {
  count++;
  updateData.innerHTML = `
    <p>You clicked ${count} times</p>
    <button>Click me</button>`;
});

const dataPassDiv = document.getElementById("dataPass");

function Button(props) {
  return `<button>${props.text}</button>`;
}

dataPassDiv.innerHTML = Button({ text: "Click me" });

const formContainer = document.getElementById("formContainer");

function Form() {
  return `
    <form>
        <input type="text" name="name" />
        <button>Submit</button>
    </form>`;
}

formContainer.innerHTML = Form();

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  console.log(formData.get("name"));
});

const navBar = document.getElementById("navBar");

function Home() {
  return "<h1>Home</h1>";
}

function About() {
  return "<h1>About</h1>";
}

function Contact() {
  return "<h1>Contact</h1>";
}

function renderPage() {
  const path = window.location.pathname;

  if (path === "/") {
    navBar.innerHTML = Home();
  } else if (path === "/about") {
    navBar.innerHTML === About();
  } else if (path === "/contact") {
    navBar.innerHTML = Contact();
  }
}

window.addEventListener("popstate", renderPage);

renderPage();
