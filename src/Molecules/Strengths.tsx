import { Heading, Box } from "@chakra-ui/react";
import { Strength } from "../Atoms/Strength";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';


export const Strengths = () => {
    const strengths = [
        { icon: <Diversity3Icon />, text: "Team Player" },
        { icon: <InventoryIcon />, text: "Organized" },
        { icon: <ChangeCircleIcon />, text: "Quick Learner" },
    ];
    return (
        <Box>
            <Heading size="xs" textTransform="uppercase">
                Strengths
            </Heading>
            {strengths.map((strength, index) => (
                <Strength key={index} icon={strength.icon} text={strength.text} />
            ))}

        </Box>
    );
}