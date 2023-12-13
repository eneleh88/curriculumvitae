import { Text } from "@chakra-ui/react";
import { CvHeader } from "../Atoms/CvHeader";
import SchoolIcon from "@mui/icons-material/School";
import { Education } from "../Atoms/Education";

export const CvEducation = () => {
    const education = [
        { id: "1", institution: "University of South Eastern Norway", start: "2020", end: "2023", degree: "B.Sc Information Technology & Information Systems" },
        { id: "2", institution: "Western Norway University of Applied Sciences", start: "2008", end: "2011", degree: "B.Sc Early Childhood Eduaction" },
    ];
    return(
    <>
        <CvHeader text="Education" icon={<SchoolIcon fontSize="large"/>}/>
        <Text pt="2" fontSize="sm">
        {education.map((edu) => (
                    <Education key={edu.id} start={edu.start} end={edu.end} institution={edu.institution} degree={edu.degree} />
                ))}
        </Text>
    </>
);
}