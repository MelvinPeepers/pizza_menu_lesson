import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

// Render the above to the DOM
// React v18
// Strict Mode - render components twice to find bugs or using outdated API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />), document.getElementById("root"));
