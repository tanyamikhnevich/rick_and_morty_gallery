import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "app/app";
import { Wrapper } from "components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Wrapper>
    <App />
  </Wrapper>
);
