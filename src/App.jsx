import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Testimonial, {
  TestimonialType1,
} from "./components/testimonials/testimonial";
import Projects from "./components/projects/projects";
import Progress from "./components/progress/progress";
import Whatwedo from "./components/whatwedo/whatwedo";
import { data } from "autoprefixer";
import Screenbox from "./components/screenwidget/screenbox";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // NOTICES DATA FETCHING
  const [notices, setNotices] = useState([
    {
      heading: "Loading Notices ...",
      paragraph: " ",
      href: " ",
      date: " ",
    },
  ]);
  useEffect(() => {
    fetch("/api/notices/notices.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  // SCREEN DATA WIDGETS
  const [screenData, setScreenData] = useState({
    screenbox: false,
  });
  useEffect(() => {
    fetch("/api/screen_widgets/screen_widgets.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setScreenData(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const [links, setLinks] = useState({
    donation: {
      href: "#",
      disabled: false,
    },
    donationinwork: {
      href: "#",
      disabled: false,
    },
    projectpage: {
      href: "#",
      disabled: false,
    },
    testimonials: [
      {
        href: "#reviews",
        disabled: false,
      },
      {
        href: "#",
        disabled: false,
      },
    ],
  });

  var settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  var sliderSettingForPartner = {
    dots: false,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // SLIDER DATA
  const [slider, setSlider] = useState([
    {
      title: "",
      href: "#",
      src: "/slider/dummy.jpg",
      visibility: true,
    },
  ]);
  useEffect(() => {
    fetch("/api/slider/slider.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSlider(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const [partners, setpartner] = useState([
    {
      title: "Synergy",
      href: "#",
      logo: "/testimonials/synergy.png",
    },
    {
      title: "Aisshpra",
      href: "#",
      logo: "/testimonials/aisshpra.png",
    },
    {
      title: "DP MOtors",
      href: "#",
      logo: "/testimonials/dpmotors.jpg",
    },
    {
      title: "Wellfare association",
      href: "#",
      logo: "/testimonials/seva.jpg",
    },
    {
      title: "DNPG college",
      href: "#",
      logo: "/testimonials/dnpgc.png",
    },
    {
      title: "SEva",
      href: "#",
      logo: "/testimonials/gpbo_wellfareassociation.jpg",
    },
  ]);
  const [toprightlogos, setTopRightLogos] = useState([
    {
      title: "",
      href: ".",
      src: "/5.png",
      visibility: true,
    },
    {
      title: "jagaran excellence awards to Youth Power Assocciation",
      href: ".",
      src: "/jagaran-excellence-award-logo.png",
      visibility: true,
    },
  ]);

  return (
    <>
      <div>
        <div className="relative ">
          <Header toprightlogos={toprightlogos} />
          {/* <div className="h-[76px] lg:hidden sm:h-20 md:h-36 w-full"></div> */}
          <div className="grid grid-cols-1 pt-1 lg:grid-cols-3 ">
            <div className=" rounded-none md:rounded-lg lg:col-span-2">
              {" "}
              <div className="slider-box m-0 md:m-1 mt-0   h-auto rounded-none md:rounded-md overflow-hidden">
                <Slider {...settings}>
                  {slider.map((slide, keys) => (
                    <a
                      href={slide.href}
                      className={slide.visibility ? "" : "hidden"}
                    >
                      <div key={keys} className=" rounded-none md:rounded-md">
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="w-screen rounded-none md:rounded-md"
                        />
                      </div>
                    </a>
                  ))}
                </Slider>
              </div>
            </div>
            <div className=" rounded-lg ">
              <div className=" h-[500px]">
                <div className="notice-box m-1 mt-0  bg-red-900 rounded-md overflow-hidden">
                  <div className="bg-red-600 flex flex-row  h-10 rounded-t-md">
                    <div className="bg-white m-1  pt-0 pl-5 pr-5 text-xl rounded-t-md text-black">
                      Notice
                    </div>
                  </div>
                  <div className="bg-yellow-100 h-[420px] overflow-y-scroll">
                    <ul>
                      {notices.map((item, key) => {
                        return (
                          <li
                            key={key}
                            onClick={() => {
                              window.location = item.href;
                            }}
                            className="position-relative p-2 hover:cursor-pointer transition delay-150 duration-150 ease-in-out   hover:bg-[#145589] hover:text-white border border-cyan-200 mb-1"
                          >
                            <h1 className="font-rajdhani-bold text-lg">
                              {item.heading}
                            </h1>
                            <small className="font-rajdhani-bold ">
                              {item.date}
                            </small>
                            <p className="font-playwrite-de-grund text-sm">
                              {item.paragraph}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="bg-red-600 flex flex-row  h-10 rounded-b-md"></div>
                </div>
              </div>
            </div>
          </div>

          <Progress />
          <Whatwedo />

          <section className="overflow-hidden bg-gray-50  lg:grid lg:grid-cols-2">
            <img
              alt=""
              src="/img/founder-msg.webp"
              className="h-auto w-full  sm:h-full"
            />
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <Slider {...settings}>
                <div class="mx-auto max-w-xl text-center">
                  <h1 class="text-3xl font-extrabold sm:text-5xl">
                    Let us know more
                    <strong class="font-extrabold text-red-700 sm:block">
                      {" "}
                      About YPA
                    </strong>
                  </h1>

                  <p class="mt-4  text-lg font-playwrite-de-grund">
                    YPA is an NGO working in the field of youth development and
                    empowerment, environment conservation and sustainable
                    development, and water conservation. Along with it, YPA, in
                    co-operation with common people and district administration
                    also works for rectifying other social issues and making
                    people aware of them through public awareness programs.
                  </p>

                  <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                      href="#"
                    >
                      Join us
                    </a>

                    <a
                      class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="mx-auto max-w-xl text-center">
                  <h1 class="text-3xl font-extrabold sm:text-5xl">
                    About YPA's
                    <strong class="font-extrabold text-red-700 sm:block">
                      Vision
                    </strong>
                  </h1>

                  <p class="mt-4 text-lg font-playwrite-de-grund">
                    YPA strives to transform the society into a platform where
                    the youths are capable to understand and recognize their
                    true potential and their rights to the fullest, their duties
                    towards their environment, society and nation, VPA believes
                    in ancient Indian notion of Vasudhaiva Kutumbam, that is,
                    Whole World is One Family and therefore it aims to bring
                    positive changes in the world throughout.
                  </p>

                  <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                      href="#"
                    >
                      Join us
                    </a>

                    <a
                      class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="mx-auto max-w-xl text-center">
                  <h1 class="text-3xl font-extrabold sm:text-5xl">
                    About YPA's
                    <strong class="font-extrabold text-red-700 sm:block">
                      Mission
                    </strong>
                  </h1>

                  <p class="mt-4 text-lg font-playwrite-de-grund">
                    Support & aim nurturing emphatic young leaders and provide
                    opportunities to youth to advance their skills and sharpen
                    their personality making them more equitable, cooperative
                    and sustainable, not just for themselves but also for the
                    society, nation and at global level. YPA, working primarily
                    in environmental, cancer and Youth development, is leaving
                    no stone unturned to ensure enhancement of the living
                    standards of people globally.
                  </p>

                  <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                      href="#"
                    >
                      Join us
                    </a>

                    <a
                      class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </section>
          {/* our projects */}
          <Projects />

          <section>
            <div className="p-10">
              <img src="/map.webp" className="h-fit" />
            </div>
          </section>
          <TestimonialType1 links={links.testimonials} />
          <Testimonial />

          <section className="bg-gray-50 flex justify-center">
            <div className="mx-px max-w-[1340px]  px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Have a look at our&nbsp;
                    <span className="text-red-600 font-dancing-script ">
                      Partners
                    </span>
                  </h2>

                  <p className="mt-4 text-gray-700">
                    YPA is growing with the effort of volunteers, members and
                    our partners.Thank you for being in support .
                  </p>
                </div>

                <div className="-mx-6 lg:col-span-2 lg:mx-0 slider-container">
                  <Slider {...sliderSettingForPartner}>
                    {partners.map((partner, key) => (
                      <div key={key} className="h-56 w-56 p-10 bg-white">
                        <a href={partner.href}>
                          <img
                            src={partner.logo}
                            alt={partner.title}
                            className="h-auto w-fit"
                          />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          <Footer setScreenData={setScreenData} />
          <Screenbox screenData={screenData} setScreenData={setScreenData} />
        </div>
      </div>
    </>
  );
}

export default App;
