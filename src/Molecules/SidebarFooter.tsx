import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

export const SidebarFooter = () => {

    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                Stack
            </Heading>
                <UnorderedList fontSize={"sm"} pt={1}>
                    <ListItem>React</ListItem>
                    <ListItem>Chakra UI</ListItem>
                    <ListItem>MUI Icons</ListItem>
                </UnorderedList>
        </Box>
    );
}