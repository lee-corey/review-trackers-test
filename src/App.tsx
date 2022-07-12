import { ChakraProvider, theme } from "@chakra-ui/react";

import Router from "./router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);
