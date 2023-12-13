import { ChevronRightIcon, ExternalLinkIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Heading, Link } from "@chakra-ui/react";

export const Certification = ({certificationName, issuedBy, earnedDate, credentialId, credentialLink}: {certificationName : string, issuedBy: string, earnedDate: string, credentialId: string, credentialLink: string}) => {
    return(
    <Box paddingStart={5} paddingBottom={5}>
        <Heading size="sm">{certificationName} from {issuedBy}</Heading>
        <ChevronRightIcon w={4} marginEnd={1}/>{earnedDate}<br></br>
        <InfoOutlineIcon w={4} marginEnd={1}/>{credentialId}<br></br>
        <ExternalLinkIcon w={4} marginEnd={1}/><Link href={credentialLink} isExternal>{credentialLink}</Link>
    </Box>
    );
}