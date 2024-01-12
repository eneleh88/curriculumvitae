import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box } from "@chakra-ui/react";
import { CvExperience } from "../Molecules/CvExperience";
import { CvEducation } from "../Molecules/CvEducation";
import { CvCertifications } from "../Molecules/CvCertifications";
import { Certification, Education, Experience } from "@prisma/client";
import { useEffect, useState } from "react";
import axios from "axios";
import { CvHeader } from "../Atoms/CvHeader";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";




type MyCv = {
    Experience: Experience[]
    Education: Education[]
    Certification: Certification[]
}

export const CurriculumVitae = () => {
    const bgColor = "#f8f6e8";

    const [cv, setCv] = useState<MyCv>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3011/cv');
                setCv(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <Card variant={"filled"} textAlign="left" mb={3} borderTopLeftRadius={0} backgroundColor={bgColor}>
            <CardHeader>
                <Heading size='xl'>Curriculum Vitae</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                    <CvHeader text="Experience" icon={<WorkHistoryIcon fontSize="large" />} />
                        {cv?.Experience.map((exp)=> (
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
                        <CvEducation />
                    </Box>
                    <Box>
                    <CvHeader text="Certifications" icon={<VerifiedIcon fontSize="large" />} />
                        <CvCertifications />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}