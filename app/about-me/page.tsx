"use client";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import { useState } from "react";

export default function About() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "About Me + Hobbies",
  );

  const handleToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const isAnyAccordionOpen = openAccordion !== null;

  return (
    <main className="flex h-screen w-screen bg-base">
      <div className="flex h-screen w-screen flex-row bg-main-texture">
        <div className="absolute flex h-screen w-[50%] flex-col items-center justify-center text-highlight">
          <div className="mb-2">
            <Image
              alt="Image of Lucas Furlong"
              src="/about-1.jpeg"
              width={200}
              height={200}
              className="h-[200px] w-[200px] rounded-[50%] border-[8px] border-[#FF6F3D] object-cover"
            ></Image>
          </div>
          <h2 className="mb-4 text-4xl font-semibold">Lucas Furlong</h2>
          <h2 className="text-2xl font-semibold">Jr. Software Engineer</h2>
          <h2 className="mb-3 text-2xl font-semibold">
            OWL Computing Development
          </h2>
          <div className="mb-3 w-[85%] text-center italic text-complementary">
            I&apos;m a Full-Stack Developer creating custom software solutions,
            from websites to complex hardware integrations. My work spans design
            to deployment, focusing on innovative, client-centered development.
          </div>
          <div className="mb-5 flex flex-col items-center">
            <h1 className="mb-5 text-center text-2xl font-semibold">
              Technologies
            </h1>
            <div className="flex w-[55%] flex-grow-0 flex-wrap items-center justify-around gap-3">
              <Image
                src="/typescript.svg"
                width={80}
                height={80}
                alt="TypeScript Logo"
              ></Image>
              <Image
                src="/react.svg"
                width={80}
                height={80}
                alt="React Logo"
              ></Image>
              <Image
                src="/angular.svg"
                width={80}
                height={80}
                alt="Angular Logo"
              ></Image>
              <Image
                src="/nodejs.svg"
                width={80}
                height={80}
                alt="Node Logo"
              ></Image>
              <Image
                src="/csharp.svg"
                width={80}
                height={80}
                alt="C Sharp Logo"
              ></Image>
              <Image
                src="/c++.svg"
                width={80}
                height={80}
                alt="C Plus Plus Logo"
              ></Image>
              <Image
                src="/firebase.svg"
                width={80}
                height={80}
                alt="Firebase Logo"
              ></Image>
              <Image
                src="/python.svg"
                width={80}
                height={80}
                alt="Python Logo"
              ></Image>
            </div>
          </div>
        </div>
        <div
          className={`relative ml-auto flex h-screen w-[50%] flex-col overflow-y-auto transition-all duration-[400ms] ${
            isAnyAccordionOpen ? "pt-0" : "pt-[35vh]"
          }`}
        >
          {/* This pseudo-element will push the content down when no accordions are open */}
          <div
            className={`absolute left-0 right-0 top-0 transition-all duration-[400ms] ${
              isAnyAccordionOpen ? "h-0" : "h-[35vh]"
            }`}
            aria-hidden="true"
          ></div>
          <div className="">
            <Accordion
              title="About Me + Hobbies"
              isOpen={openAccordion === "About Me + Hobbies"}
              onToggle={() => handleToggle("About Me + Hobbies")}
            >
              <div className="flex flex-col items-center">
                <span className="mt-4 text-lg font-semibold text-highlight">
                  Coding and Technology
                </span>
                <span className="text-center text-complementary">
                  From my first day working with ROBOTC in an engineering class,
                  I developed a love for technology and coding that continues to
                  grow. This initial spark led me to immerse myself in various
                  programming languages, expanding my expertise daily.
                </span>
                <br></br>

                <span className="mt-2 text-lg font-semibold text-highlight">
                  Personal Growth and Mindset
                </span>
                <span className="text-center text-complementary">
                  I am someone who believes there is always room for improvement
                  in every aspect of life, be it professional, physical, or
                  mental. This drive for constant self-betterment is something I
                  actively pursue, finding joy in challenges and
                  problem-solving, both independently and collaboratively.
                </span>
                <br></br>

                <span className="mt-2 text-lg font-semibold text-highlight">
                  Military Experience
                </span>
                <span className="text-center text-complementary">
                  My military experience has significantly honed these
                  qualities. Achieving Honor Graduate and Distinguished Honor
                  Graduate in Basic Combat Training and Advanced Individual
                  Training, respectively, highlights the impact of my dedication
                  and adaptability. Working with individuals from diverse
                  cultures and backgrounds in the military has not only elevated
                  my professional standing but has also enhanced my work ethic,
                  teamwork, leadership, and communication skills – attributes
                  deeply rooted in my family values as well.
                </span>
                <br></br>

                <span className="mt-2 text-lg font-semibold text-highlight">
                  Jiu-Jitsu
                </span>
                <span className="text-center text-complementary">
                  Beyond my professional and military pursuits, I have a
                  profound passion for jiu-jitsu. This martial art challenges
                  both my physical and mental limits. Achieving my blue belt was
                  not just a milestone in jiu-jitsu; it was a testament to my
                  perseverance and commitment to continuous learning and
                  self-improvement.
                </span>
                <br></br>

                <span className="mt-2 text-lg font-semibold text-highlight">
                  Photography
                </span>
                <span className="text-center text-complementary">
                  Photography is another hobby that holds a special place in my
                  life. It allows me to capture and appreciate the world from
                  unique perspectives, further enriching my understanding of the
                  diverse beauty that surrounds us. This hobby not only serves
                  as a creative outlet but also as a way to document and share
                  experiences, contributing to my overall growth and perspective
                  on life.
                </span>
              </div>
            </Accordion>
            <Accordion
              title="Job Experience"
              isOpen={openAccordion === "Job Experience"}
              onToggle={() => handleToggle("Job Experience")}
            >
              <div className="mt-3 text-highlight">
                <div>
                  <div className="flex flex-row text-lg font-bold">
                    <h3>OWL Computing Development</h3>
                    <p className="ml-auto">Apr 2023 - Current</p>
                  </div>
                  <p className="mt-1 font-semibold">Full-Stack Developer</p>
                  <ul className="mt-2 list-inside list-disc">
                    <li>
                      Completed projects 30-45% ahead of schedule, saving
                      clients approximately $50,000 in projected costs.
                    </li>
                    <li>
                      Designed, deployed, and lead 3 projects until completion
                      using a multitude of different frameworks.
                    </li>
                    <li>
                      Integrated third-party API’s such as Shopify, QuickBooks,
                      Google Maps, and Sage.
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <div className="flex flex-row text-lg font-bold">
                    <h3>Bradford White Corporation</h3>
                    <p className="ml-auto">Sep 2022 – Apr 2023</p>
                  </div>
                  <p className="mt-1 font-semibold">Software Engineer Intern</p>
                  <ul className="mt-2 list-inside list-disc">
                    <li>
                      Worked with a team of 4-6 individuals to produce C-based,
                      low-level code for 2 projects.
                    </li>
                    <li>
                      Created an effective WinForms C#/VB .Net tool to test
                      hardware in development for production.
                    </li>
                    <li>
                      Designed, built, tested, and maintained 3 different tools
                      to facilitate testing of equipment.
                    </li>
                  </ul>
                </div>
              </div>
            </Accordion>
            <Accordion
              title="Education"
              isOpen={openAccordion === "Education"}
              onToggle={() => handleToggle("Education")}
            >
              <div className="mt-3 text-highlight">
                <div>
                  <div className="flex flex-row text-lg font-bold">
                    <h3>Davenport University</h3>
                    <p className="ml-auto">April 2023</p>
                  </div>
                  <div className="mt-2 flex flex-row font-semibold">
                    <p>Bachelor of Science in Computer Science</p>
                    <p className="ml-auto">GPA: 3.9</p>
                  </div>
                  <p className="mb-1 mt-2">Relevant Coursework:</p>
                  <ul className="ml-4 list-inside list-disc">
                    <li>CSCI260 – Software Engineering</li>
                    <li>CSCI312 – Data Structures/Algorithms</li>
                    <li>CSCI430 – Operating Systems</li>
                    <li>CSCI436 – Concepts of Program Languages</li>
                  </ul>
                </div>
                <div>
                  <div className="mt-3 flex flex-row text-lg font-bold">
                    <h3>Davenport University</h3>
                    <p className="ml-auto">April 2020</p>
                  </div>
                  <div className="mt-2 flex flex-row font-semibold">
                    <p>
                      Associates of Applied Science in Computer Information
                      Systems
                    </p>
                    <p className="ml-auto">GPA: 3.9</p>
                  </div>
                  <p className="mb-1 mt-2">Relevant Coursework:</p>
                  <ul className="ml-4 list-inside list-disc">
                    <li>CISP247 – Database Design</li>
                    <li>CISP238 – Server-Side Scripting I</li>
                    <li>CSCI234 – Object-Oriented Programming w/ C#</li>
                    <li>CISP220 – Web Page Applications</li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
