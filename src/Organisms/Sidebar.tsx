import { Card, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { MyProfile } from "../Molecules/Profile";
import { SidebarFooter } from "../Molecules/SidebarFooter";

export const Sidebar = () => {
    const bgColor = "#f8f6e8";
    
    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <MyProfile />
                    </Box>
                    <Box>
                        <SidebarFooter />
                    </Box>
                </Stack>
            </CardBody>
        </Card >
    );
}