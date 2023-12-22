import { CvHeader } from "../Atoms/CvHeader";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Experience } from "../Atoms/Experience";

export const CvExperience = () => {
    const experience = [
        { id: "1", workplace: "Capgemini Norway", start: "Aug 2023", end: "", role: "Software Engineer" },
        { id: "2", workplace: "Cloud Master AS", start: "Jan 2022", end: "Jul 2023", role: "System Developer" },
    ];
    return (
        <>
            <CvHeader text="Experience" icon={<WorkHistoryIcon fontSize="large" />} />
                {experience.map((exp) => (
                    <Experience key={exp.id} start={exp.start} end={exp.end} workplace={exp.workplace} role={exp.role} />
                ))}
        </>
    );
}