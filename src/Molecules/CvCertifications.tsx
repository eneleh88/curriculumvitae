import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Link, Box, Text } from "@chakra-ui/react";
import moment from "moment";
import { useDataContext } from "../App";

export const CvCertifications = () => {
    const { data } = useDataContext();

    return ( 
        <>      
        {data?.Certification.map((cert) => (
        <Box key={cert.id} paddingStart={5} paddingBottom={5} pt="2">
            <Heading size="sm">{cert.certificationName} from {cert.issuedBy}</Heading>
            <Text fontSize={"sm"}>
                Certified Date: {moment(cert.earnedDate).format('L')}<br></br>
                {cert.credentialId ? <>Certification ID: {cert.credentialId}<br></br></> : ""}
                {cert.credentialLink ? <><ExternalLinkIcon w={4} marginEnd={1} /><Link href={cert.credentialLink} isExternal>{cert.credentialLink}</Link></> : ""}    
            </Text>
        </Box>
        ))}
        </>
    );
}