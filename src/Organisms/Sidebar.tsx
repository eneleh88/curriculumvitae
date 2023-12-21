import { Card, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { SoMe } from "../Molecules/SoMe";
import { Skills } from "../Molecules/Skills";
import { Profile } from "../Molecules/Profile";
import { Strengths } from "../Molecules/Strengths";
import { SidebarFooter } from "../Molecules/SidebarFooter";

export const Sidebar = () => {
    const bgColor = "#f8f6e8";

    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Profile />
                    </Box>
                    <Box>
                        <Strengths />
                    </Box>
                    <Box>
                        <Skills />
                    </Box>
                    <Box>
                        <SoMe />
                    </Box>
                    <Box>
                        <SidebarFooter />
                    </Box>
                </Stack>
            </CardBody>
        </Card >
    );
}