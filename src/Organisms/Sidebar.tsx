import { Card, Heading, CardBody, Stack, StackDivider, Box, Text, ListItem, UnorderedList } from "@chakra-ui/react";
import { SoMe } from "../Molecules/SoMe";
import { Skills } from "../Molecules/Skills";
import { Profile } from "../Molecules/Profile";
import { Strengths } from "../Molecules/Strengths";

export const Sidebar = () => (
    <Card textAlign="left" borderTopLeftRadius={0}>
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Profile/>
                </Box>
                <Box>
                    <Strengths />
                </Box>
                <Box>
                    <Skills/>
                </Box>
                <Box>
                    <SoMe/>
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