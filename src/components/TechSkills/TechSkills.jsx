import "./TechSkillsStyling/TechSkillsMain.scss";
import techSkills from "../../utils/techSkills";

const TechSkillsCards = (props) => {
    const id = props;

    const techSkillsJSX = techSkills.map((techSkill, index) => (
        <div className='techSkill__tile' key={id + (index + 1)}>
            <img src={techSkill.image} alt='' className='techSkill__image' />
            <h2 className='techSkill__name'>{techSkill.skill}</h2>
        </div>
    ));

    return (
        <>
            <div className='techSkills'>{techSkillsJSX}</div>
        </>
    );
};

export default TechSkillsCards;
