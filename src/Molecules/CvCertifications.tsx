import { CvHeader } from "../Atoms/CvHeader";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Certification } from "../Atoms/Certification";

export const CvCertifications = (props: {certificationName: string, issuedBy: string, earnedDate: Date, credentialId: string | null, credentialLink: string | null }) => {
    const certifications = [
        { id: "1", certificationName: "Azure Fundementals: AZ-900", issuedBy: "Microsoft", earnedDate: "Nov 2023", credentialId: "4A79986D6273C1BF", credentialLink: "https://learn.microsoft.com/en-gb/users/ygardenbakkenhelene-7575/credentials/4a79986d6273c1bf" },
    ];
    return(
    <>
            {certifications.map((cert) => (
                    <Certification key={cert.id} certificationName={cert.certificationName} issuedBy={cert.issuedBy} earnedDate={cert.earnedDate} credentialId={cert.credentialId} credentialLink={cert.credentialLink}/>
                ))}
    </>
    );
}