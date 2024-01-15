import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

export const SidebarFooter = () => {

    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                Made with:
            </Heading>
                <UnorderedList fontSize={"sm"} pt={1}>
                    <ListItem>React</ListItem>
                    <ListItem>Chakra UI</ListItem>
                    <ListItem>MUI Icons</ListItem>
                    <ListItem>Postgres</ListItem>
                    <ListItem>Prisma ORM</ListItem>
                    <ListItem>Moment.js</ListItem>
                </UnorderedList>
        </Box>
    );
}