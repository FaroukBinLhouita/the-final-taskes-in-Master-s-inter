import React from "react";

function ChildComponent({ message }) {
  return <p>{message}</p>;
}

function ParentComponent() {
  const text = "Hello from the Parent Component";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={text} />
    </div>
  );
}

export default ParentComponent;
