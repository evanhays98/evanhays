import MainContainer from "../components/MainContainer";

const ExperienceComp = (
    {name,
        image,
        lieu,
        date,
        time,
        description}
) => {

    return (
        <div className='ExperienceComp'>
            <MainContainer {...D}/>
        </div>
    );
};

export default ExperienceComp;