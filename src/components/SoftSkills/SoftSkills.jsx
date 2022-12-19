import "./SoftSkillsStyling/SoftSkillsMain.scss";
import softSkillsArr from "../../utils/softSkills";

const SoftSkills = (props) => {
    const id = props;

    const softSkillsJSX = softSkillsArr.map((softSkill, index) => (
        <div className='softSkill__tile' key={id + (index + 1)}>
            <img src={softSkill.image} alt='' className='softSkill__image' />
            <h2 className='softSkill__name'>{softSkill.skill}</h2>
        </div>
    ));

    return (
        <>
            <div className='softSkills'>{softSkillsJSX}</div>
        </>
    );
};

export default SoftSkills;
