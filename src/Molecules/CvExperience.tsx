import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import moment from 'moment';
import { useDataContext } from "../App";

export const CvExperience = () => {
    const { data } = useDataContext();

    return (
        <>
        {data?.Experience.map((exp) => (
            <Box key={exp.id} paddingStart={5} paddingBottom={5} pt="2">
                <Heading size="sm">{exp.workplace}</Heading>
                <Heading size="xs">{exp.role}</Heading>
                <Text fontSize={"sm"}>
                    {moment(exp.startDate).format('MMMM YYYY')} - {exp.endDate ? <>{moment(exp.endDate).format('MMMM YYYY')}</> : <Badge colorScheme={"green"} variant={"outline"} mb={1}>Current</Badge>}
                </Text>
            </Box>
        ))}
        </>
    );
}