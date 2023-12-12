import { Text } from "@chakra-ui/react";
import { CvHeader } from "../Atoms/CvHeader";
import VerifiedIcon from "@mui/icons-material/Verified";

export const CvCertifications = () => (
    <>
        <CvHeader text="Certifications" icon={<VerifiedIcon fontSize="large"/>}/>
        <Text pt="2" fontSize="sm">
            Blah
        </Text>
    </>
)