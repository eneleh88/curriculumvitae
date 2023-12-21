import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"
import { Main } from "./Templates/Main"
import { extendedTheme } from "./Theme/theme"
import { RainbowSwitch } from "./Atoms/RainbowSwitch"

export const App = () => {
  
  return (
    <ChakraProvider theme={extendedTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <RainbowSwitch/>
        </Grid>
        <Main />
      </Box>
    </ChakraProvider>
  );
}
