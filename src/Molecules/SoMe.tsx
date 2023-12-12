import { GridItem, IconButton, SimpleGrid } from "@chakra-ui/react";
import { LinkedIn, MailOutline, GitHub } from '@mui/icons-material';

export const SoMe = () => {
    const icons = [<MailOutline />,<LinkedIn />,<GitHub />];
      
    return (
        <SimpleGrid columns={{ sm: 3, md: 3 }} textAlign={"center"} m={3} maxWidth={"50%"} mx={"auto"}>
            {icons.map((icon, index) => (
        <GridItem key={index} colSpan={{ sm: 1, md: 1 }}>
          <IconButton aria-label={"Social Media"} icon={icon} />
        </GridItem>
      ))}
        </SimpleGrid>
    );
}