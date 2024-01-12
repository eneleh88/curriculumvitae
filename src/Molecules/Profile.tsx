import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ProfilePicture } from "../Atoms/ProfilePicture";
import { useState, useEffect } from "react";
import { Profile, Social, Strength } from "@prisma/client"
import axios from "axios";
import { LocationTag } from "../Atoms/LocationTag";
import { Strengths } from "./Strengths";
import { Skills } from "./Skills";
import { SoMe } from "./SoMe";

interface TMyProfile extends Profile {
    Social: Social;
    Strength: Strength;
}

export const MyProfile = () => {
    const [profile, setProfile] = useState<TMyProfile>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3011/profile');
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const strengthArray = profile?.Strength

    return (
        loading ? (
            <>Loading...</>
        ) : (
            <>
                <Stack divider={<StackDivider />} spacing='4' paddingTop={5}>
                    <Box>
                        <Heading size='md'>{profile?.name}</Heading>
                        <Text fontSize="sm">
                            {profile?.profileText}
                        </Text>
                        <LocationTag location={profile?.location}></LocationTag>
                    </Box>
                    <Box>
                        {strengthArray && (
                            <Strengths myStrengths={[strengthArray]}></Strengths>
                        )}
                    </Box>
                    <Box>
                        <Skills></Skills>
                    </Box>
                    <Box>
                        <SoMe></SoMe>
                    </Box>
                </Stack>
            </>
        )
    );
}
