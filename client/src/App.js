import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return <ChakraProvider theme={theme}>Sustainazon</ChakraProvider>;
}

export default App;