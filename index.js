const header = document.createElement("header");
const nav = document.createElement("nav");
const logoText = document.createElement("h1");
const ul = document.createElement("ul");
const link = document.createElement("link");
const style = document.createElement("style");

const cssRule = "* { margin: 0; padding: 0; box-sizing: border-box; }";

style.textContent = cssRule;

document.head.appendChild(style);

// link.rel = "stylesheet";
// link.href =
//   "https://fonts.googleapis.com/css2?family=Averia+Gruesa+Libre&display=swap";
// document.head.appendChild(link);

header.appendChild(nav);
nav.appendChild(ul);

const linkTexts = ["Home", "About", "Contact"];

// ul with a content
for (let i = 0; i < linkTexts.length; i++) {
  const a = document.createElement("a");
  a.textContent = linkTexts[i];
  ul.appendChild(a);
  a.style.cssText = `
    font-size: 1.5rem;
    color: white;
    font-family: Averia Gruesa, Libre, system-ui;
    font-weight: 400;
    font-style: normal;
`;
}

// ul with a content END

// style

// Header

logoText.textContent = "DOM Manipulation";
logoText.style.color = "white";
header.appendChild(logoText);
header.style.cssText = `
    display: flex;
    justify-content:
    space-between; 
    align-items: center; 
    flex-direction: 
    row-reverse; 
    background-color: #EFBC9B; 
    padding: 30px; 
    height: 5rem;
`;

// Header END

// ul

ul.style.cssText = "display: flex;" + "gap: 3rem;" + "margin-right: 4rem;";

// ul END

document.body.appendChild(header);

// first container div

const firstContainerDiv = document.createElement("div");
const firstContainerContentHandler = document.createElement("div");
const firstContainerText = document.createElement("h1");

// container div

firstContainerDiv.style.cssText = `
    background-color: #9CAFAA; 
    height: 88.5vh;
`;

// container div END

// container text

firstContainerText.textContent =
  "This is my first time creating webpage Using DOM Manipulation";
firstContainerText.style.cssText = `
    width: 550px;
    margin: auto;
    padding: 30px 0;
    text-align: center;
    color: #5F374B;
`;

firstContainerContentHandler.appendChild(firstContainerText); // div with text content
firstContainerDiv.appendChild(firstContainerContentHandler);
document.body.appendChild(firstContainerDiv);

// container text END

// text one and two style

const firstContainerHandlerText = document.createElement("div");
firstContainerHandlerText.style.cssText = `
    display: flex;
    justify-content: space-evenly;
    transform: translateY(80px)
`;

// text one and two style END

const firstContainerTextDiv = document.createElement("div");
const firstContainerSecondTextDiv = document.createElement("div");
const firstContainerTextAbout = document.createElement("p");
const firstContainerSecondTextAbout = document.createElement("p");

firstContainerDiv.appendChild(firstContainerHandlerText); // container text handler
firstContainerDiv.appendChild(firstContainerTextDiv);
firstContainerDiv.appendChild(firstContainerSecondTextDiv);

firstContainerTextAbout.textContent =
  "This is my experience trying to code html and css using JavaScript, it's difficult because most of code is really sensitive, you need to make that your code is complete especially with styling container or text";
firstContainerTextAbout.style.cssText = `
    font-size: 20px;
    width: 400px;
    background-color: #BE7B72;
    padding: 30px;
    border-radius: 8px;
    border: 2px solid black;
    color: white;
`;

firstContainerTextDiv.appendChild(firstContainerTextAbout);
firstContainerHandlerText.appendChild(firstContainerTextDiv); // container text handler

firstContainerSecondTextAbout.textContent =
  "This is my experience trying to code html and css using JavaScript, it's difficult because most of code is really sensitive, you need to make that your code is complete especially with styling container or text";

firstContainerSecondTextAbout.style.cssText = `
    font-size: 20px;
    width: 400px;
    background-color: #824D74;
    padding: 30px;
    border-radius: 8px;
    border: 2px solid black;
    color: white;
`;

firstContainerSecondTextDiv.appendChild(firstContainerSecondTextAbout);
firstContainerHandlerText.appendChild(firstContainerSecondTextDiv); // container text handler

// first container div END
