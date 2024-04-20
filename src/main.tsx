import React from "react";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
