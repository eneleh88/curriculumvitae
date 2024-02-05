import { Box, Heading, Stack, StackDivider, Text, extendTheme } from "@chakra-ui/react";
import { ProfilePicture } from "../Atoms/ProfilePicture";
import { useState, useEffect } from "react";
import { Profile, Social, Strength } from "@prisma/client"
import axios from "axios";
import { LocationTag } from "../Atoms/LocationTag";
import { Skills } from "./Skills";
import { SoMe } from "./SoMe";
import { useProfile } from "../hooks/ProfileContext";
import { StrengthComponent } from "../Atoms/StrengthComponent";

interface MyProfileT extends Profile{
    Strength: Strength[]
    Social: Social[]
}

export const MyProfile = () => {
    
    const [profile, setProfile] = useState<MyProfileT>();
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

    return (
        <>
            <Stack divider={<StackDivider />} spacing='4' paddingTop={5}>
                <Box>
                    <Heading size='md'>
                        {profile?.name}
                    </Heading>
                    <Text fontSize="sm">
                       {profile?.profileText}
                    </Text>
                    <LocationTag location={profile?.location}></LocationTag>
                </Box>
                <Box>
                    <Heading size="xs" textTransform="uppercase">
                        Strengths
                    </Heading>
                    {profile?.Strength.map((strength) => (
                        <StrengthComponent
                            key={strength.id}
                            name={strength.name}
                            icon={strength.icon}
                            profileId={strength.profileId}
                        />
                    ))}
                </Box>
                <Box>
                    <Skills mySkills={profile?.skills}></Skills>
                </Box>
                <Box>
                    <SoMe></SoMe>
                </Box>
            </Stack>
        </>
    );
}