import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { CvExperience } from "../Molecules/CvExperience";
import { CvEducation } from "../Molecules/CvEducation";
import { CvCertifications } from "../Molecules/CvCertifications";
import { CvHeader } from "../Atoms/CvHeader";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import { useDataContext } from "../App";

export const CurriculumVitae = () => {
    const bgColor = "#f8f6e8";

    const { data } = useDataContext();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardHeader>
                <Heading size='xl'>Curriculum Vitae</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <CvHeader text="Experience" icon={<WorkHistoryIcon fontSize="large" />} />
                        {data?.Experience.map((exp) => (
                            <CvExperience
                                key={exp.id}
                                workplace={exp.workplace}
                                role={exp.role}
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                            ></CvExperience>
                        ))}
                    </Box>
                    <Box>
                        <CvHeader text="Education" icon={<SchoolIcon fontSize="large" />} />
                        {data?.Education.map((edu) => (
                            <CvEducation
                                key={edu.id}
                                institution={edu.institution}
                                degree={edu.degree}
                                startYear={edu.startYear}
                                endYear={edu.endYear}
                            ></CvEducation>
                        ))}
                    </Box>
                    <Box>
                        <CvHeader text="Certifications" icon={<VerifiedIcon fontSize="large" />} />
                        {data?.Certification.map((cert) => (
                            <CvCertifications
                                key={cert.id}
                                certificationName={cert.certificationName}
                                issuedBy={cert.issuedBy}
                                earnedDate={cert.earnedDate}
                                credentialId={cert.credentialId}
                                credentialLink={cert.credentialLink}
                            ></CvCertifications>
                        ))}
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}