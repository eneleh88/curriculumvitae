import { GridItem, IconButton, Link, SimpleGrid } from "@chakra-ui/react";
import { LinkedIn, GitHub } from '@mui/icons-material';

export const SoMe = () => {
    const socials = [
      {icon: <LinkedIn />, link: "https://www.linkedin.com/in/helenebakken/", label: "LinkedIn"},
      {icon: <GitHub />, link: "https://github.com/eneleh88", label: "GitHub"},
    ];
      
    return (
        <SimpleGrid columns={{ base: 2}} textAlign={"center"} m={3} maxWidth={"50%"} mx={"auto"}>
            {socials.map((social, index) => (
        <GridItem key={index} colSpan={{ base: 1}} m={1}>
          <Link isExternal href={social.link}><IconButton aria-label={social.label} icon={social.icon}/></Link>
        </GridItem>
      ))}
        </SimpleGrid>
    );
}