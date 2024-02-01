import { Heading, Box, Badge } from "@chakra-ui/react";

export const Skills = (props: { mySkills: Array<string> | undefined }) => {
    const skills = props.mySkills;
    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                Skills
            </Heading>
                {skills?.map((skill, index) => (
                    <Badge key={index} m={1} variant={"outline"} color={"black"}>{skill}</Badge>
                ))}
        </Box>
    );
}
