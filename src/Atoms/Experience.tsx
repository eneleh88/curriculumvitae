import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CurrentBadge } from "./CurrentBadge";

export const Experience = ({start, end, workplace, role}: {start: string, end: string, workplace: string, role: string}) => (
        <Box paddingStart={5} paddingBottom={5} pt="2">
                <Heading size="sm">{workplace}</Heading>
                <Heading size="xs">{role}</Heading>
                <Text fontSize={"sm"}>
                        <ChevronRightIcon w={4}/> {start} - <CurrentBadge date={end}/>
                </Text>     
        </Box>
)