import { Heading, Box, Badge } from "@chakra-ui/react";
import { useDataContext } from "../App";

export const Skills = () => {
    const { data } = useDataContext();
    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                Skills
            </Heading>
                {data?.skills.map((skill, index) => (
                    <Badge key={index} m={1} variant={"outline"} color={"black"}>{skill}</Badge>
                ))}
        </Box>
    );
}
