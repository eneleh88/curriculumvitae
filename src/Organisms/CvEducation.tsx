import { Text } from "@chakra-ui/react";
import { CvHeader } from "../Atoms/CvHeader";
import SchoolIcon from "@mui/icons-material/School";

export const CvEducation = () => (
    <>
        <CvHeader text="Education" icon={<SchoolIcon fontSize="large"/>}/>
        <Text pt="2" fontSize="sm">
            Blah
        </Text>
    </>
)