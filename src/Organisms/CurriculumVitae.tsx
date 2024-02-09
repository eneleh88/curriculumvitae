import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { CvExperience } from "../Molecules/CvExperience";
import { CvEducation } from "../Molecules/CvEducation";
import { CvCertifications } from "../Molecules/CvCertifications";
import { CvHeader } from "../Atoms/CvHeader";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";

export const CurriculumVitae = () => {
    const bgColor = "#f8f6e8";
    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardHeader>
                <Heading size='xl'>Curriculum Vitae</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <CvHeader text="Experience" icon={<WorkHistoryIcon fontSize="large" />} />
                            <CvExperience/>
                    </Box>
                    <Box>
                        <CvHeader text="Education" icon={<SchoolIcon fontSize="large" />} />
                            <CvEducation/>
                    </Box>
                    <Box>
                        <CvHeader text="Certifications" icon={<VerifiedIcon fontSize="large" />} />
                            <CvCertifications/>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}