import React from "react";

const RenderContent = ({ activeTab }) => {
  switch (activeTab) {
    case "about":
      return (
        <>
          <h2 className="text-xl text-[#969696] font-normal">
            Hello! I’m <span className="font-bold">Faisal</span>, Recently completed my Master's in Computer
            Science
          </h2>
          <h2 className="text-xl text-[#969696]">
            I was born and raised in Mumbai INDIA, I play games in my free times
            read documentation sometimes, Chilling with friends after 7pm. For
            my experience Switch the tab
          </h2>
        </>
      );
    case "experiences":
      return (
        <>
          <h2 className="text-xl text-[#969696] font-normal">
            My career has been a journey filled with learning experiences. I
            Deep dived in frontend development made many{" "}
            <a
              href="https://github.com/Fsk196"
              className="underline font-medium"
            >
              projects
            </a>{" "}
            and even done a{" "}
            <a
              href="https://nutree123.netlify.app/"
              className="underline font-medium"
            >
              freelance project
            </a>
            <p>
              Technologies: JavaScript, ReactJS, TailwindCSS, Python,
              Java(Basic)
            </p>
          </h2>
          {/* Add more experience-related content here */}
        </>
      );
    case "recommended":
      return (
        <>
          <h2 className="text-xl text-[#969696] font-normal">
            Based on your preferences, I recommend my projects that you must see{" "}
            <span className="font-semibold">
              Blog application(Currently working)
            </span>
            <li>
              <a
                href="https://youtubeclonebyfsk.netlify.app/"
                className="underline font-medium"
              >
                Youtube CLone
              </a>
            </li>
            <li>
              <a
                href="https://e2h.netlify.app/"
                className="underline font-medium"
              >
                Text-to-Text Translator
              </a>
            </li>
            <li>
              <a
                href="https://vblogsfsk.netlify.app/"
                className="underline font-medium"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://nike-fsk.netlify.app/"
                className="underline font-medium"
              >
                Nike
              </a>
            </li>
            For more check my{" "}
            <a
              href="https://github.com/fsk196"
              className="underline font-medium"
            >
              Github
            </a>
          </h2>
          {/* Add recommendations content here */}
        </>
      );
    default:
      return null;
  }
};

export default RenderContent;
