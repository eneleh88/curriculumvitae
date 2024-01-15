import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ProfilePicture } from "../Atoms/ProfilePicture";
import { useState, useEffect } from "react";
import { Profile, Social, Strength } from "@prisma/client"
import axios from "axios";
import { LocationTag } from "../Atoms/LocationTag";
import { Strengths } from "./Strengths";
import { Skills } from "./Skills";
import { SoMe } from "./SoMe";
import { useProfile } from "../hooks/ProfileContext";

export const MyProfile = () => {
    // const [profile, setProfile] = useState<TMyProfile>();
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3011/profile');
    //             setProfile(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);
    // const strengthArray = profile?.Strength

    const myProfile = useProfile();

    return (
        <>
            <Stack divider={<StackDivider />} spacing='4' paddingTop={5}>
                <Box>
                    <Heading size='md'>
                        {myProfile.}
                    </Heading>
                    <Text fontSize="sm">

                    </Text>
                    <LocationTag location=""></LocationTag>
                </Box>
                <Box>
                    {/* <Strengths myStrengths={[]}></Strengths> */}
                </Box>
                <Box>
                    <Skills></Skills>
                </Box>
                <Box>
                    <SoMe></SoMe>
                </Box>
            </Stack>
        </>
    );
}
