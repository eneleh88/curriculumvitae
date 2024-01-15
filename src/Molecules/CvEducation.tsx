import { CalendarIcon } from "@chakra-ui/icons";
import { Heading, Badge, Box, Text} from "@chakra-ui/react";
import moment from "moment";

export const CvEducation = (props: {institution: string, degree: string, startYear: Date, endYear: Date | null}) => {
    const startYear = moment(props.startYear).format('YYYY');
    const endYear = moment(props.endYear).format('YYYY');
    return (
        <>
            <Box paddingStart={5} paddingBottom={5} pt="2">
                <Heading size="sm">{props.institution}</Heading>
                <Heading size="xs">{props.degree}</Heading>
                <Text fontSize={"sm"}>
                    {startYear} - {props.endYear ? <>{endYear}</> : <Badge colorScheme={"green"} variant={"outline"} mb={1}>Current</Badge>}
                </Text>
            </Box>
        </>
    );
}