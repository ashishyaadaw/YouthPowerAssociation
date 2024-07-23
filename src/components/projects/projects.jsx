import React, { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "JAAGO",
      category: "Awareness Program",
      logo: "/cliparts/jaago.png",
      background: "/health_n_well_being.webp",
      href: "/projects/jaago",
      paragraph: ` Awareness Program on various issues like Cancer in health
                      sector, Sanitation on Society.`,
      location: "Uttar Pradesh",
      benificiary: "2500+ Benifeciaries",
    },
    {
      title: "Smart Yuva",
      category: "Personality DEvelopment Program",
      logo: "./smart_yuva.png",
      background: "/youth.webp",
      href: "/projects/smart_yuva",
      paragraph: `Crafting individual a better version, YPA organising many events and program like Nukkad Natak , Workshops etc.`,
      location: "Gorakhpur, Uttar Pradesh",
      benificiary: "500+ Benifeciaries",
    },
    {
      title: "Jal Rakshak",
      category: "Awareness Program",
      logo: "/cliparts/jal_rakshak_logo.png",
      background: "/jal-hai-toh-kal-hai.webp",
      href: "/projects/jaago",
      paragraph: `Aware people for effective use of water and conservating rain water . Water bodies care and sustain it's life.`,
      location: "Bihar & Uttar Pradesh",
      benificiary: "4500+ Benifeciaries",
    },
  ]);
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-bold font-bona-nova-sc-bold text-[#145589] ">
            Our Projects
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Youth Power Association succesfully running many projects.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {projects.map((project, key) => {
            return (
              <li key={key}>
                <div href="#" className="group relative block bg-black">
                  <img
                    alt=""
                    src={project.background}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <img src={project.logo} className="h-28 absolute right-0" />
                    <p className="text-sm font-medium font-playwrite-de-grund  tracking-widest text-pink-500">
                      {project.benificiary}
                    </p>

                    <p className="text-xl font-poppins uppercase font-bold text-white sm:text-2xl">
                      {project.title}
                    </p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <a href={project.href}>
                          <span className="mt-1.5 inline-block bg-[#145589] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                            Explore
                          </span>
                        </a>
                        <h1 className="font-rajdhani-bold uppercase text-pink-500">
                          {project.category}
                        </h1>
                        <p className=" text-white font-quicksand">
                          <i className="text-md text-red-600 flex ">
                            <img
                              className="h-6"
                              src="https://img.icons8.com/ios/50/FF0000/marker--v1.png"
                              alt="marker--v1"
                            />
                            <span className="mt-1">{project.location}</span>
                          </i>
                          {project.paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center">
        <a
          className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          <a
            href="/projects"
            className="cursor-pointer
            font-medium transition-colors group-hover:text-white"
          >
            {" "}
            Find out more{" "}
          </a>

          <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
