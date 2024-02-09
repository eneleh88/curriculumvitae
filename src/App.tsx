import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"
import { Profile, Social, Strength, Education, Experience, Certification } from "@prisma/client"
import { Main } from "./Templates/Main"
import { extendedTheme } from "./Theme/theme"
import { RainbowSwitch } from "./Atoms/RainbowSwitch"
import { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios"
interface ProfileData extends Profile {
    Strength: Strength[]
    Social: Social[]
    Education: Education[]
    Experience: Experience[]
    Certification: Certification[]
}

const DataContext = createContext<{ data: ProfileData | null }>({
  data: null,
});

export const useDataContext = () => useContext(DataContext);

export const App = () => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3011/profile');
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DataContext.Provider value={{data}}>
    <ChakraProvider theme={extendedTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <RainbowSwitch/>
        </Grid>
        <Main />
      </Box>
    </ChakraProvider>
    </DataContext.Provider>
  );
}
