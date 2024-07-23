import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "/server/save_email", // Replace with your API base URL
});
function Footer({ setScreenData }) {
  const [email, setEmail] = useState("");
  const [className, setClassName] = useState("border-gray-200 bg-gray-100");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const handleSendData = async () => {
    try {
      await api.post("/", email);
      console.log("Response:", response.data);
      return 0;
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  function validateEmail() {
    const email_ = document.getElementById("email");

    const emailBtn_ = document.getElementById("emailBtn");

    const isValid = emailPattern.test(email);
    if (!isValid) {
      email_.setAttribute("placeholder", "Enter valid email address");
      setClassName(
        "border-red-200 bg-red-100 text-gray-400 placeholder:text-red-400"
      );
      emailBtn_.disabled = true;
    } else {
      email_.setAttribute("placeholder", "Enter your email address");
      setClassName("border-gray-200 bg-gray-100 text-gray-400");
      emailBtn_.disabled = false;
    }
  }
  function handleForm(event) {
    const email_ = document.getElementById("email");
    if (email == "") {
      email_.setAttribute("placeholder", "Enter your email address");
      setClassName("border-red-200 bg-red-100 text-red-400");
    } else {
      setScreenData({
        screenbox: true,
        filepath: "/widgets/email_success.txt",
      });
      email_.setAttribute("placeholder", "Enter your email address");
      setClassName("border-gray-200 bg-gray-100 text-gray-400");
      event.preventDefault();
      handleSendData();
    }
  }

  return (
    <footer className="bg-[#145589]">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-white sm:text-3xl">
            Want us to email you with the latest events, programs news?
          </strong>

          <form className="mt-6" name="email_form">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                Email
              </label>

              <input
                className={`${className} w-full rounded-full  p-4 pe-32 text-sm font-medium`}
                id="email"
                type="email"
                onChange={validateEmail}
                onInputCapture={() => {
                  let tempEmail = document.getElementById("email").value;
                  setEmail(tempEmail);
                }}
                placeholder="Enter your email address"
              />

              <button
                onClick={(event) => {
                  handleForm(event);
                }}
                id="emailBtn"
                type="submit"
                className="absolute disabled:bg-blue-600 end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-200 lg:text-left lg:text-lg">
              Thank you for your interest in our journey. Please subscribe
              yourself just by sending email for latest events, program and
              more.
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-gray-200 transition hover:text-gray-700/75"
                href="http://www.facebook.com/ypa4india"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="text-gray-200 transition hover:text-gray-700/75"
                href="https://www.instagram.com/ypa4india/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="text-gray-200 transition hover:text-gray-700/75"
                href="http://twitter.com/ypa4india"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a
                className="text-gray-200 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="text-gray-200 transition hover:text-gray-700/75"
                href="https://wa.link/e5jc6u"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Whatsapp </span>

                <svg
                  className="h-6 w-6 stroke-"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M128.00049,20A108.03119,108.03119,0,0,0,32.51807,178.50783l-8.09961,28.34961a19.99944,19.99944,0,0,0,24.72412,24.72461l28.35107-8.09961A108.00755,108.00755,0,1,0,128.00049,20Zm0,192A83.8647,83.8647,0,0,1,85.1377,200.25686a11.9994,11.9994,0,0,0-9.43165-1.22461l-26.23339,7.49512,7.49463-26.2334a11.99924,11.99924,0,0,0-1.22413-9.42969A84.01088,84.01088,0,1,1,128.00049,212ZM178.29,131.3799l-12.35059-7.41015a19.91277,19.91277,0,0,0-19.23486-.73828L141.749,125.71a24.131,24.131,0,0,1-11.458-11.459l2.47851-4.957a19.90682,19.90682,0,0,0-.73926-19.2334L124.61963,77.709A20.10266,20.10266,0,0,0,107.4707,68H104a35.93121,35.93121,0,0,0-35.99805,35.459A83.99965,83.99965,0,0,0,151.99219,188c.18261,0,.36572-.001.54785-.00195A35.93108,35.93108,0,0,0,188,152v-3.4707A20.09843,20.09843,0,0,0,178.29,131.3799ZM164,152a11.8734,11.8734,0,0,1-11.61084,11.99805c-.13135.001-.26025.00195-.3916.001A59.99844,59.99844,0,0,1,92.001,103.61135,11.87593,11.87593,0,0,1,104,92h1.20605l5.11475,8.52539-3.793,7.583a11.999,11.999,0,0,0-.84619,8.51953,48.15144,48.15144,0,0,0,33.69043,33.68945,12.01033,12.01033,0,0,0,8.51709-.8457l7.58545-3.793L164,150.79494Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-white"> Control </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/admin"
                  >
                    {" "}
                    Admin{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/volunteer"
                  >
                    Volunteer
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/members"
                  >
                    Members
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/partners"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-white"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/about"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/careers"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/history"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/our_team"
                  >
                    {" "}
                    Our Team{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-white"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/frequently_asked_questions"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-700/75"
                    href="/contacts"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-yellow-200 transition hover:text-gray-700/75"
                    href="/donate"
                  >
                    {" "}
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <MadewithLove />
      </div>
    </footer>
  );
}
export function MadewithLove({ className }) {
  return (
    <div
      className={`${className} mt-16  w-full border-t pb-3 border-gray-100 pt-8 bg-[#145589]`}
    >
      <p className="text-center text-xs/relaxed text-gray-100">
        © 2019 - 2024 Youth Power Association. All rights reserved.
        <br />
        Created with
        <a
          href="#"
          className="text-gray-200  transition hover:text-gray-700/75"
        >
          &#10084;
        </a>
        by &nbsp;
        <a
          href="https://www.instagram.com/ashishyaadaw/"
          className="text-gray-200 underline transition hover:text-gray-700/75"
        >
          Ashish Yadav
        </a>
        .
      </p>
    </div>
  );
}
export default Footer;
