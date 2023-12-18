import { Box, Heading, Text, ListItem, UnorderedList } from "@chakra-ui/react";

export const SidebarFooter = () => {

    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                Stack
            </Heading>
            <Text pt='2' fontSize='sm'>
                <UnorderedList>
                    <ListItem>React</ListItem>
                    <ListItem>Chakra UI</ListItem>
                    <ListItem>MUI Icons</ListItem>
                </UnorderedList>
            </Text>
        </Box>
    );
}