import { document } from "postcss";
import "./header.css";
import { useState } from "react";
import { MadewithLove } from "../footer/footer";

function Header({ toprightlogos }) {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [toprightlogo, setTopRightLogo] = useState(toprightlogos);
  const HandleToddle = () => {
    if (!sidebarStatus) {
      setSidebarStatus(true);
    } else {
      setSidebarStatus(false);
    }
  };
  const menus = [
    {
      title: "About Us",
      href: "#",
      submenu: [
        { title: "About ypa", href: "#" },
        { title: "How YPA came to live", href: "#" },
        { title: "How we work", href: "#" },
        { title: "Vision & Misson", href: "#" },
        { title: "Team", href: "#" },
        { title: "Our reach", href: "#" },
        { title: "Legal Status and Empanelments", href: "#" },
      ],
    },
    {
      title: "What we do",
      href: "#",
      submenu: [
        { title: "Water Conservation", href: "#" },
        { title: "Environment Protection", href: "#" },
        { title: "Health & Well Being", href: "#" },
        { title: "Youth Development", href: "#" },
        { title: "YPA Theatre", href: "#" },
        { title: "YPA Band", href: "#" },
      ],
    },
    {
      title: "Projects",
      href: "#",
      submenu: [
        { title: "Smart Yuva", href: "#" },
        { title: "Jaago", href: "#" },
        { title: "Paryavaran Mitra", href: "#" },
        { title: "Jal Rakshak", href: "#" },
      ],
    },
    {
      title: "Media Corner",
      href: "#",
      submenu: [
        { title: "Blog & Articles", href: "#" },
        { title: "Publications", href: "#" },
        { title: "Stories of Change", href: "#" },
        { title: "In the news", href: "#" },
      ],
    },
    {
      title: "Gallery",
      href: "#",
      submenu: [
        { title: "Photo Gallery", href: "#" },
        { title: "Video Gallery", href: "#" },
      ],
    },
    {
      title: "Activities",
      href: "#",
      submenu: [
        { title: "Our Campaign & Activities", href: "#" },
        { title: "Events", href: "#" },
      ],
    },
    {
      title: "Join us",
      href: "#",
      submenu: [
        { title: "Join as Volunteer", href: "#" },
        { title: "Became a Member", href: "#" },
        { title: "Join Street Play Team", href: "#" },
        { title: "Internship", href: "#" },
        { title: "Campus Ambassador", href: "#" },
        { title: "Researcher", href: "#" },
        { title: "District Coordinator", href: "#" },
        { title: "CSR Partner/Granter", href: "#" },
      ],
    },
  ];
  const subMenus = menus[0].submenu;
  return (
    <>
      <div className=" lg:relative w-full  z-50 bg-white">
        <div class="md:flex  hidden flex-row  h-6 xl:h-8 xl:pt-1 text-md font-quicksand bg-[#891414] text-gray-300 font-medium">
          <div class="basis-2/3 flex gap-4">
            {/* Phone Number --1  */}
            <a href="tel:+91-8299252791" className="flex">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/glyph-neue/64/D9D9D9/phone.png"
                alt="phone"
              />
              &nbsp; +91 82992 52791
            </a>
            &nbsp;
            {/* email address */}
            <a href="mail:info@rpmacademy.org" className="flex">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios-glyphs/30/D9D9D9/secured-letter--v1.png"
                alt="phone"
              />
              &nbsp; ypa4india@gmail.com
            </a>
          </div>
          <div class="basis-1/3">
            <div className="basic-1 text-end mr-10 text-[#FFDE59] font-bold uppercase">
              <a href="/donate" className="cursor-pointer">
                DONATE
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-row h-20 font-poppins-bold  text-[#891414] font-bold bg-[#f5ac4041]">
          <div class="basis-3/4 flex gap-5 mt-2 ml-2">
            <img src="/cliparts/logo_ypa.png" width={76}></img>
            <div className="mt-2 hidden sm:block">
              <h1 className="text-xl md:text-4xl">
                Youth Power Association
                {/* ,<i>Registered NGO</i> */}
              </h1>
              <p className="font-noyo-serif font-semibold  text-[8px] md:text-[10.5px] text-[#145589]">
                ( Registered under section 21 in the Societies Registration Act,
                1860 in Uttar Pradesh )
              </p>
            </div>
          </div>
          <div class="basis-1/4">
            <div className="flex flex-row-reverse gap-5 mt-2 text-end mr-10 text-[#FFDE59] font-bold uppercase">
              {toprightlogo.map((logo, keys) => (
                <a className={logo.visibility ? "" : "hidden"} href={logo.href}>
                  <img
                    className="w-16 h-16 md:flex hidden"
                    src={logo.src}
                    alt={logo.title}
                  />
                </a>
              ))}

              <button
                onClick={() => HandleToddle()}
                class="block md:hidden rounded-sm  top-0 mt-3 pb-1 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class={` w-8  ${sidebarStatus ? "h-0 hidden" : ""}`}
                  fill="none"
                  viewBox="3 1 18 18"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M4 7L7 7M20 7L11 7"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M20 17H17M4 17L13 17"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M4 12H7L20 12"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class={` w-8 ${!sidebarStatus ? "h-0 hidden" : ""}`}
                  fill="none"
                  viewBox="0 -1 32 39"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <g>
                    <path
                      fill="#808184"
                      d="M16,0C11.726,0,7.708,1.664,4.687,4.687C1.665,7.708,0,11.727,0,16s1.665,8.292,4.687,11.313   C7.708,30.336,11.726,32,16,32s8.292-1.664,11.313-4.687C30.335,24.292,32,20.273,32,16s-1.665-8.292-4.687-11.313   C24.292,1.664,20.274,0,16,0z M26.606,26.606C23.773,29.439,20.007,31,16,31s-7.773-1.561-10.606-4.394S1,20.007,1,16   S2.561,8.227,5.394,5.394S11.993,1,16,1s7.773,1.561,10.606,4.394S31,11.993,31,16S29.439,23.773,26.606,26.606z"
                    ></path>
                    <path
                      fill="#808184"
                      d="M22.01,9.989c-0.195-0.195-0.512-0.195-0.707,0L16,15.293l-5.303-5.304c-0.195-0.195-0.512-0.195-0.707,0   s-0.195,0.512,0,0.707L15.293,16L9.99,21.304c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146   s0.256-0.049,0.354-0.146L16,16.707l5.303,5.304c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146   c0.195-0.195,0.195-0.512,0-0.707L16.707,16l5.303-5.304C22.206,10.501,22.206,10.185,22.01,9.989z"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class=" flex-row md:flex hidden h-6 xl:h-8 text-md font-poppins-regular bg-[#145589] text-gray-300 ">
          <ul className="flex gap-5 uppercase font-rajdhani-bold ">
            <li className="hover:bg-[#f98f2b] xl:p-1 xl:pl-10 xl:pr-10 ">
              <a href="#" className="flex">
                <img
                  className="w-6 h-6"
                  src="https://img.icons8.com/sf-black-filled/64/D9D9D9/home.png"
                  alt="home"
                />
                &nbsp;Home
              </a>
            </li>
            {menus.map((menu, key) => {
              return (
                <li
                  onMouseEnter={() => {
                    setDisplay("block");
                  }}
                  onMouseLeave={() => {
                    setDisplay("none");
                  }}
                  className="relative  dropdown hover:bg-[#145589] hover:text-[#f98f2b] xl:p-1"
                >
                  <a key={key} href="#" className="flex">
                    {menu.title}
                    &nbsp;
                    <img
                      className="w-4 mt-1 h-4 hidden lg:flex"
                      src="https://img.icons8.com/sf-regular-filled/48/D9D9D9/expand-arrow.png"
                      alt="home"
                    />
                  </a>
                  <div class="dropdown-content text-lg font-rajdhani-bold text-[#145589]   w-48 rounded-md">
                    <ul>
                      {menus[key].submenu.map((listMenu, keys) => {
                        return (
                          <li className="h-auto cursor-pointer pl-2 pt-1 border bg-white hover:text-white  first:rounded-t-md last:rounded-b-md hover:bg-red-600">
                            {listMenu.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className={`${
          !sidebarStatus ? "h-0 hidden" : "h-dvh"
        } top-0  w-full overflow-y-auto fixed pt-20 bg-[#145589] z-40`}
      >
        <ul className="space-y-1 uppercase  font-poppins-medium pt-1 ">
          {menus.map((menu, key) => {
            return (
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden ">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 text-white hover:text-[#145589]">
                    <span className="text-sm "> {menu.title} </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2  px-4">
                    {menus[key].submenu.map((listMenu, keys) => {
                      return (
                        <li className="bg-red-700 rounded-r-lg ">
                          <a
                            href="#"
                            className="block rounded-r-lg px-4 py-2 text-sm font-medium text-gray-300 bg-[#145589] ml-1 hover:bg-red-700 hover:text-gray-50"
                          >
                            {listMenu.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            );
          })}

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm "> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Details
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Security
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <MadewithLove className={"fixed bottom-0"} />
      </div>
    </>
  );
}

export default Header;
