import { ChakraProvider, theme } from "@chakra-ui/react";

import Router from "./router";
import { ResponseProvider } from "./context/ResponseContext";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ResponseProvider>
      <Router />
    </ResponseProvider>
  </ChakraProvider>
);
