import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AllContextProvider from "./Context/AllContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AllContextProvider>
      <App />
      </AllContextProvider>
      
    </BrowserRouter>
  </ChakraProvider>
);
