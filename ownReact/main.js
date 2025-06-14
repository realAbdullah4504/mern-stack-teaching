// element is h1,p,div
// <a href="https://www.google.com" target="_blank">Click me to visit google</a>


function customRender(element, container) {
  const { type, props, children } = element;
  const domElement = document.createElement(type);
  for (const prop in props) {
    console.log(prop, props[prop]);
    domElement.setAttribute(prop, props[prop]);
  }
  domElement.textContent = children;
  container.appendChild(domElement);
}

const container = document.getElementById("root");
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click Google",
};

const reactElement2 = {
  type: "a",
  props: {
    href: "about:blank",
    target: "_blank",
  },
  children: "chtrome new tab",
};

customRender(reactElement, container);
customRender(reactElement2, container);