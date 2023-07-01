import { BsPatchCheckFill } from "react-icons/bs";
import { skills } from "../constant";

function Experience() {
  return (
    <section id="experiences">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container grid gap-4 tablet:grid-cols-[1fr] laptop:grid-cols-[1fr,1fr] tablet:gap-8 tablet:m-auto m-auto">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-background-variant w-full py-8 px-4 tablet:w-[80%] laptop:w-full tablet:p-8 tablet:m-auto laptop:py-[2.4rem] laptop:px-10 rounded-[2rem] border-[1px] border-solid border-[transparent] hover:bg-[transparent] hover:border-primary-variant hover:cursor-default transition delay-150 duration-300 ease-in-out text-sm tablet:text-base"
          >
            <h3 className="text-center mb-8 text-primary">{skill.skillType}</h3>
            <div className="grid grid-cols-[1fr,1fr] gap-2 tablet:gap-y-8 laptop:gap-4">
              {skill.listSkill.map(({ id, skillName, skillExpertise }) => (
                <article key={id} className="flex gap-4">
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4>{skillName}</h4>
                    <small className="text-custom-light">
                      {skillExpertise}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
