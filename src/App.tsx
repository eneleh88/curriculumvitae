import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Button,
  IconButton,
  Tooltip,
  Switch,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Main } from "./Templates/Main"
import { extendedTheme } from "./theme"
import { WarningIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react"

export const App = () => {
  
  return (
    <ChakraProvider theme={extendedTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <Tooltip label="Do not push!" placement="left-end" hasArrow><Switch aria-label="Do not touch!" justifySelf="flex-end" colorScheme={"gray"}/></Tooltip>
        </Grid>
        <Main />
      </Box>
    </ChakraProvider>
  );
}
