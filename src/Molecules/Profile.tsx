import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { ProfilePicture } from "../Atoms/ProfilePicture";

export const Profile = () => {
    return (
        <Stack paddingTop={5}>
            <Center><ProfilePicture /></Center>
            <Heading size='md'>Helene Bakken</Heading>
            <Text fontSize="sm">
            Helene is a structured and determined developer with a bachelor's degree in IT and Information Systems from the University of South-East Norway. 
            Alongside her studies, she has held several positions within the field, including roles as a developer and student assistant. 
            She has also gained experience in security testing through an internship at Capgemini. 
            Currently, she is thriving as a frontend developer at Capgemini.
            </Text>
        </Stack>
    );
}
