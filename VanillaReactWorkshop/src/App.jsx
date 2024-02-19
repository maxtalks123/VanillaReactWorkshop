import { useState, useEffect } from "react";

export function Button() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here</button>
      <h1>This is a new title</h1>
    </div>
  );
}

export function ConditionalRender() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <h1>You are logged in</h1>;
  } else {
    return <h1>You need to log in</h1>;
  }
}

export function GetData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      setPosts(posts);
    }
    getPosts();
  }, []);
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export function UpdateData() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click to update data</button>
    </div>
  );
}

export function PropsButtonWorking(props) {
  return <button>{props.text}</button>;
}
export function PropsButton() {
  return <PropsButton text="You should definitely click here" />;
}

export function Form() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log(formData.get("name"));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button>Submit</button>
    </form>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export function NavBar() {
  const path = window.location.pathname;

  if (path === "/") {
    return <Home />;
  } else if (path === "/about") {
    return <About />;
  } else if (path === "/contact") {
    return <Contact />;
  }
}
