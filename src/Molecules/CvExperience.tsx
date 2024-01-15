import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import moment from 'moment';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
export const CvExperience = (props: { workplace: string, role: string, startDate: Date, endDate: Date | null }) => {
    const startDate = moment(props.startDate).format('MMMM YYYY');
    const endDate = moment(props.endDate).format('MMMM YYYY');
    return (
        <>
            <Box paddingStart={5} paddingBottom={5} pt="2">
                <Heading size="sm">{props.workplace}</Heading>
                <Heading size="xs">{props.role}</Heading>
                <Text fontSize={"sm"}>
                    {startDate} - {props.endDate ? <>{endDate}</> : <Badge colorScheme={"green"} variant={"outline"} mb={1}>Current</Badge>}
                </Text>
            </Box>
        </>
    );
}