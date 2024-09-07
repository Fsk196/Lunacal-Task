import React from "react";

const RenderContent = ({ activeTab }) => {
  switch (activeTab) {
    case "about":
      return (
        <>
          <h2 className="text-xl text-[#969696] font-normal">
            Hello! I’m <span className="font-bold">Faisal</span>, Recently
            completed my Master's in Computer Science
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
        <div></div>
          <h2 className="text-xl text-[#969696] font-normal">I recommend my projects that you must see.
            <li className="list-none">
              <a href="https://youtubeclonebyfsk.netlify.app/" target="_blank">
                Youtube CLone
              </a>
            </li>
            <li className="list-none">
              <a href="https://e2h.netlify.app/" target="_blank">
                Text-to-Text Translator
              </a>
            </li>
            <li className="list-none">
              <a href="https://vblogsfsk.netlify.app/" target="_blank">
                Blog
              </a>
            </li>
            <li className="list-none">
              <a href="https://nike-fsk.netlify.app/" target="_blank">
                Nike
              </a>
            </li>
            <a href="https://github.com/fsk196" target="_blank">
              Github
            </a>
          </h2>
        </>
      );
    default:
      return null;
  }
};

export default RenderContent;
