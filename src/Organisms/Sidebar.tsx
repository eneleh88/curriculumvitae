import { Card, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { SoMe } from "../Molecules/SoMe";
import { Skills } from "../Molecules/Skills";
import { Profile } from "../Molecules/Profile";
import { Strengths } from "../Molecules/Strengths";
import { SidebarFooter } from "../Molecules/SidebarFooter"   
import getProfile  from "../../backend/getProfile";
import { LocationTag } from "../Atoms/LocationTag";
import { useEffect } from "react";

interface IProfile {
    myProfile: {
        _id: string;
        name: {first: string, middle: string, last: string};
        birth: Date;
        location: string;
        strengths: string[];
        skills: string[];
        socials: string[];
    }
  }

export const Sidebar = () => {
    const bgColor = "#f8f6e8";
    useEffect(() => {
        const fetchData = async () => {
          try {
            const myProfile: IProfile = await getProfile();
            console.log('Profile retrieved:', myProfile);
            // Do something with myProfile in your component state or UI
          } catch (error) {
            console.error('Error retrieving profile:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Profile />
                        <LocationTag/>
                    </Box>
                    <Box>
                        <Strengths />
                    </Box>
                    <Box>
                        <Skills />
                    </Box>
                    <Box>
                        <SoMe />
                    </Box>
                    <Box>
                        <SidebarFooter />
                    </Box>
                </Stack>
            </CardBody>
        </Card >
    );
}