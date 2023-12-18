import * as React from "react"
import {
  GridItem,
  Heading,
  SimpleGrid,
  Tab,
  Tabs,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { Sidebar } from "../Organisms/Sidebar"
import { CurriculumVitae } from "../Organisms/CurriculumVitae"



export const Main = () => {
  const bg = useColorModeValue("white", "gray.700");
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <SimpleGrid columns={{ sm: 1, md: 12 }} mx={10} spacing={5}>
      
      <GridItem colSpan={{ sm: 1, md: 4 }}>
      {isDarkMode && (<Tabs align="start" variant="unstyled">
          <Tab bg={bg} borderTopRadius={5} css={{ pointerEvents: "none" }}>
          <Heading size='xs' textTransform='uppercase'>
            Profile
          </Heading>
          </Tab>
        </Tabs>)}
        <Sidebar />
      </GridItem>

      <GridItem colSpan={{ sm: 1, md: 8 }}>
      {isDarkMode && (<Tabs align="start" variant="unstyled">
          <Tab bg={bg} borderTopRadius={5} css={{ pointerEvents: "none" }}>
          <Heading size='xs' textTransform='uppercase'>
            CV
          </Heading>
          </Tab>
        </Tabs>)}
        <CurriculumVitae />
      </GridItem>
    </SimpleGrid>
  )
}

