import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text, ListItem, UnorderedList } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { SoMe } from "../Molecules/SoMe";
import { Skills } from "../Molecules/Skills";

export const Sidebar = () => (
    <Card textAlign="left" borderTopLeftRadius={0}>
        <CardHeader>
            <Heading size='md'>Helene Bakken</Heading>
        </CardHeader>

        <CardBody>
            <Logo mx={"auto"} mb={10}></Logo>
            <Stack divider={<StackDivider />} spacing='4'>
                <Skills/>
                <Box>
                    <SoMe></SoMe>
                </Box>
                <Box>
                <Heading size='xs' textTransform='uppercase'>
                    Stack
                </Heading>
                    <Text pt='2' fontSize='sm'>
                        This app is made using:
                    
                    <UnorderedList>
                        <ListItem>React</ListItem>
                        <ListItem>Chakra UI</ListItem>
                    </UnorderedList>
                    </Text>
                </Box>
            </Stack>
        </CardBody>
    </Card>
)