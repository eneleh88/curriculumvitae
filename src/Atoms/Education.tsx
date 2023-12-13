import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import { CurrentBadge } from "./CurrentBadge";

export const Education = ({start, end, institution, degree}:{start: string, end: string, institution: string, degree: string}) => {
    return(
    <Box paddingStart={5} paddingBottom={5}>
        <Heading size="sm">{institution}</Heading>
        <StarIcon w={3} marginEnd={2}/>{degree}<br></br>
        <ChevronRightIcon w={4} marginEnd={1}/>{start} - <CurrentBadge date={end}/>
    </Box>
    );
}