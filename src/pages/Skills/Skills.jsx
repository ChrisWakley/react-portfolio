import "./SkillsStyling/SkillsMain.scss";
import TechSkillsCards from "../../components/TechSkills/TechSkills";
import SoftSkills from "../../components/SoftSkills/SoftSkills";

const Skills = () => {
    return (
        <div className='skills'>
            <h1 className='skills__header'>Technical Skills:</h1>
            <TechSkillsCards />
            <h1 className='skills__header'>Soft Skills:</h1>
            <SoftSkills />
        </div>
    );
};

export default Skills;
