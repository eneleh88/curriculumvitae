import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";

export const Experience = ({start, end, workplace, role}: {start: string, end: string, workplace: string, role: string}) => (
        <Box paddingStart={5} paddingBottom={5}>
        <Heading size="sm">{role} @ {workplace}</Heading>
        <ChevronRightIcon boxSize={4}/> {start} - {end === "" ? "now" : end}
        </Box>
)