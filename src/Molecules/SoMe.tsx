import { Box, IconButton, Link } from "@chakra-ui/react";
import { LinkedIn, GitHub } from '@mui/icons-material';

export const SoMe = () => {
    const socials = [
      {icon: <LinkedIn />, link: "https://www.linkedin.com/in/helenebakken/", label: "LinkedIn"},
      {icon: <GitHub />, link: "https://github.com/eneleh88", label: "GitHub"},
    ];
      
    return (
        <Box textAlign={"center"}>
            {socials.map((social, index) => (
          <Link key={index} isExternal href={social.link}><IconButton key={index} aria-label={social.label} icon={social.icon} variant={"subtle"} color={"black"} /></Link>
      ))}
        </Box>
    );
}