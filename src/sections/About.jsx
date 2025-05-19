import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
        {/* 1 */}
        <div className="">
          <div className="z-10">
            <p className="headtext">Hi, I'm Arunya Ochapong | May</p>
            <p className="subtext">
            Junior Software Developer with a background in Interior Design (5 years), Research Coordination 
            in Robotics & Automation (1 year), and UX/UI Design (volunteer, Nov 2024–present). Recently completed the Generation Bootcamp in Software Development, gaining strong coding and problem-solving skills. Passionate about innovation and seeking opportunities in a dynamic, tech-driven environment.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* 2 */}
        <div className="mt-10">
            <p className="flex items-end text-5xl text-gray-500">
            Behavioral Skills
            </p>
          <div className="flex flex-row items-center justify-start w-full h-full gap-4 mt-8">
            <Card text="Growth Mindset"/>
            <Card text="Teamwork"/>
            <Card text="Communication"/>
            <Card text="Creativity"/>
            <Card text="Active Learning"/>
          </div>
        </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Technical Skills</p>
            <p className="subtext">
            I specialize in UX/UI design using Figma and I have some experience using programming languages and have tried working with frameworks and various tools. I have a strong desire to learn and develop my skills in different areas of software development continuously.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
