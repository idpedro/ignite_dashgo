import { ChakraProvider } from "@chakra-ui/react";
import { SideBarDrawerContextProvider } from "../context/SideBarDrawerContext";
import { theme } from "../styles/themes";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarDrawerContextProvider>
        <Component {...pageProps} />
      </SideBarDrawerContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
