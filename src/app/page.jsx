import { FEEDBACK, PROJECTS, SERVICES, TAG_LINES, TEAM } from "@/constant";
import PageTitle from "@/components/ui/PageTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import FeedbackCard from "@/components/ui/FeedbackCard";
import ProjectCard from "@/components/ui/ProjectCard";
import TeamCard from "@/components/ui/TeamCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-dark relative z-10">
      <section
        id="home"
        className="hero w-full min-h-[350px] md:min-h-[100vh] md:px-20 lg:px-[10%] px-4 flex justify-center items-start flex-col"
      >
        <div className="z-20">
          <h6 className="uppercase font-extralight text-white text-lg md:text-2xl tracking-widest mb-0 md:mb-2">
            {TAG_LINES.header}
          </h6>
          <h2
            style={{ lineHeight: 1.2 }}
            className="uppercase font-extrabold text-main-text-color text-3xl md:text-6xl mb-6 md:mb-10 "
          >
            YOUR VIRTUAL TEAM OF <br /> EXPERT DEVELOPERS
          </h2>

          <Link href="/contact-us">
            <button className="bg-main-color text-white hover:bg-main-color-dark  py-3 px-6 md:py-4 md:px-8 text-base font-semibold rounded transition hero-cta">
              Schedule Free Consultation
            </button>
          </Link>
        </div>
      </section>

      <section
        id="services"
        className="w-full bg-secondary-dark md:px-20 lg:px-[10%] px-4 py-10"
      >
        <PageTitle subheading="Our Services" title="What do we offer?" />

        <div className="flex flex-wrap items-stretch justify-between">
          {SERVICES.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                title={item.title}
                body={item.body}
                src={item.image}
              />
            );
          })}
        </div>
      </section>

      <section
        id="work"
        className="w-full flex md:px-20 lg:px-[10%] px-4 py-[100px] flex-col bg-dark relative items-center"
      >
        <PageTitle
          title="Our Work"
          subtitle="A selection of our previous projects"
        />

        <div className=" w-full  min-[350px] flex flex-wrap items-center justify-center">
          {PROJECTS.map((item, index) => {
            return (
              <ProjectCard
                key={index}
                image={item.image}
                title={item.title}
                link={item.link}
              />
            );
          })}
        </div>
      </section>

      <section
        id="team"
        className="w-full bg-dark md:px-20 lg:px-[10%] px-4 py-16"
      >
        <div className="w-full flex justify-center mb-16">
          <div className="w-full md:w-[70%]">
            <h2 className="text-main-text-color font-bold text-2xl md:text-3xl mb-4 text-center">
              Meet The <span className="text-main-color">Team</span>
            </h2>
            <p className="text-main-text-color text-center">
              Welcome to our talented and diverse team! We are a group of
              dedicated professionals who are passionate about what we do. Get
              to know us better as we introduce the key members of our team,
              their roles, and what makes them tick.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between md:justify-center">
          {TEAM.map((item, index) => {
            return (
              <TeamCard
                key={index}
                name={item.name}
                position={item.position}
                profile={item.image}
              />
            );
          })}
        </div>
      </section>

      <section
        id="feedback"
        className="bg-secondary-dark w-full min-h-[100vh] md:px-20 lg:px-[10%] px-4 py-10 feedback"
      >
        <PageTitle title="What clients say" />

        <div className="flex flex-wrap items-center justify-between pt-[50px]">
          {FEEDBACK.map((item, index) => {
            return (
              <FeedbackCard
                key={index}
                avatar={item.image}
                name={item.name}
                email={item.email}
                feedback={item.feedback}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
