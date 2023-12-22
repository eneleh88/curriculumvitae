import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import { ProfilePicture } from "../Atoms/ProfilePicture";

export const Profile = () => {

    return (
        <Stack paddingTop={5}>
            <Center><ProfilePicture /></Center>
            <Heading size='md'>Helene Bakken</Heading>
            <Text fontSize="sm">
            Helene is a structured and determined developer with a bachelor's degree in IT and Information Systems from the University of South-East Norway. 
            She has solid experience as a team leader in the early childhood education field, hence taking her soft skills into the tech world. 
            Her first experience with coding occured at the beginning of the 2000's, and was the catalyst for her turn in careers in 2020. 
            Alongside her studies, she has held several positions within the field, including roles as a developer and student assistant. 
            She has also gained experience in security testing through an internship at Capgemini. Since her graduations, Helene has been thriving
            as a front end developer at Capgemini Norway.
            </Text>
        </Stack>
    );
}
