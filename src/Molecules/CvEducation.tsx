import { Heading, Badge, Box, Text} from "@chakra-ui/react";
import moment from "moment";
import { useDataContext } from "../App";

export const CvEducation = () => {
    const { data } = useDataContext();

    return (
        <>
        {data?.Education.map((edu) => (   
            <Box key={edu.id} paddingStart={5} paddingBottom={5} pt="2">
                <Heading size="sm">{edu.institution}</Heading>
                <Heading size="xs">{edu.degree}</Heading>
                <Text fontSize={"sm"}>
                    {moment(edu.startYear).format('YYYY')} - {edu.endYear ? <>{moment(edu.endYear).format('YYYY')}</> : <Badge colorScheme={"green"} variant={"outline"} mb={1}>Current</Badge>}
                </Text>
            </Box>
        ))}
        </>
    );
}