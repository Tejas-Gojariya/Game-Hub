import React from "react";
import {
  ChakraBaseProvider,
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./components/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
