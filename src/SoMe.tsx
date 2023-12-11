import { GridItem, IconButton, SimpleGrid } from "@chakra-ui/react";
import {LinkedIn, MailOutline, Facebook} from '@mui/icons-material';

export const SoMe = () => (

    <SimpleGrid columns={{ sm: 3, md: 3 }} textAlign={"center"} m={3} maxWidth={"50%"}mx={"auto"}>
    <GridItem colSpan={{ sm: 1, md: 1 }}><IconButton aria-label='Mail' icon={<MailOutline />
} /></GridItem>
    <GridItem colSpan={{ sm: 1, md: 1 }}><IconButton aria-label='LinkedIn' icon={<LinkedIn />} /></GridItem>
    <GridItem colSpan={{ sm: 1, md: 1 }}><IconButton aria-label='Facebook' icon={<Facebook />
} /></GridItem>
    </SimpleGrid>
)