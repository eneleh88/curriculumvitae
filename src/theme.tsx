import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

export const extendedTheme = extendTheme({
    styles: {       
        global: {
          body: {
            bg: '#fbcb74'
          },
        },
      },
    });