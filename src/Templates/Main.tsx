import {
  GridItem,
  Heading,
  SimpleGrid,
  Tab,
  Tabs,
} from "@chakra-ui/react"
import { Sidebar } from "../Organisms/Sidebar"
import { CurriculumVitae } from "../Organisms/CurriculumVitae"



export const Main = () => {
  const cardbg = "#f8f6e8";

  return (
    <SimpleGrid columns={{ sm: 1, md: 12 }} mx={10} spacing={5}>
      
      <GridItem colSpan={{ sm: 1, md: 4 }}>
      <Tabs align="start" variant="unstyled">
          <Tab bg={cardbg} borderTopRadius={5} css={{ pointerEvents: "none" }}>
          <Heading size='xs' textTransform='uppercase'>
            Profile
          </Heading>
          </Tab>
        </Tabs>
        <Sidebar />
      </GridItem>

      <GridItem colSpan={{ sm: 1, md: 8 }}>
      <Tabs align="start" variant="unstyled">
          <Tab bg={cardbg} borderTopRadius={5} css={{ pointerEvents: "none" }}>
          <Heading size='xs' textTransform='uppercase'>
            CV
          </Heading>
          </Tab>
        </Tabs>
        <CurriculumVitae />
      </GridItem>
    </SimpleGrid>
  )
}

