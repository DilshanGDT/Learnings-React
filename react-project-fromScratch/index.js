import React from "react";
import { createRoot } from "react-dom/client";

// Create a React component
const App = () => {         // (create element, props, children)
  return React.createElement('h1', null, 'This is a React script');
}

// Render the component to the DOM
const container = document.getElementById("root");
const root = createRoot(container);

//root.render(<App />);   // by default JSX not supported in most browsers
root.render(React.createElement(App));  // without JSX
