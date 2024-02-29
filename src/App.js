import "./App.css";

import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Signup from "./Pages/Signup/Signup";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
     <Signup/>
    </ChakraProvider>
  );
}
export default App;
