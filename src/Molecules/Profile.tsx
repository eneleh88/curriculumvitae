import { Box, Heading, IconButton, Link, Stack, StackDivider, Text } from "@chakra-ui/react";
import { ProfilePicture } from "../Atoms/ProfilePicture";
import { LocationTag } from "../Atoms/LocationTag";
import { Skills } from "./Skills";
import  { StrengthComponent }  from "../Atoms/StrengthComponent";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useDataContext } from "../App";

export const MyProfile = () => {
    const { data } = useDataContext();

    const getIcon = (icon: string) => {
        switch (icon) {
            case "<GitHub />":
                return <GitHub />
            case "<LinkedIn />": 
                return <LinkedIn />
            default: <></>
        }
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Stack divider={<StackDivider />} spacing='4' paddingTop={5}>
                <Box>
                    <Heading size='md'>
                        {data?.name}
                    </Heading>
                    <Text fontSize="sm">
                       {data?.profileText}
                    </Text>
                    <LocationTag location={data?.location}></LocationTag>
                </Box>
                <Box>
                    <Heading size="xs" textTransform="uppercase">
                        Strengths
                    </Heading>
                    {data?.Strength.map((strength) => (
                        <StrengthComponent
                            key={strength.id}
                            name={strength.name}
                            icon={strength.icon}
                        />
                    ))}
                </Box>
                <Box>
                    <Skills mySkills={data?.skills}></Skills>
                </Box>
                <Box textAlign={"center"}>
                {data?.Social.map((social) => (
                        <Link key={social.id} isExternal href={social.link}>
                            <IconButton aria-label={social.name} icon={getIcon(social.icon)} variant={"subtle"} color={"black"}/>
                        </Link>
                    ))}
                </Box>
            </Stack>
        </>
    );
}