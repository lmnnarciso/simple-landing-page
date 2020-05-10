import React from "react";
import Image from "../assets/character.png";
import Typist from "react-typist";

const cursorProp = ({ show }) => ({
  show: show,
  blink: true,
  element: "__",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
});

export default function Hero() {
  return (
    <div className="hero">
      <section className="introduction">
        <h1 className="name">
          <Typist cursor={cursorProp({ show: false })}>Migs</Typist>
        </h1>
        <h1 className="lastname">
          <Typist cursor={cursorProp({ show: true })}>Narciso</Typist>
        </h1>
        <h3 className="title">Software Developer</h3>
        <img src={Image} alt="character" />
      </section>
      <section className="introduction-content">
        <h1 className="title">About Me</h1>
        <article className="body">
          <Typist avgTypingDelay={20}>
            <p>
              Hello there, I'm Leandro Miguel Narciso, a Software Developer with
              almost 2-years of professional experience.
            </p>
            <Typist.Delay ms={1200} />
            <p>
              I've mainly worked with ReactJS which my I made reusable react
              components, ensure bug-free implementation and implemented tests
              that ensures confidence when shipping to production.
            </p>

            <Typist.Delay ms={1200} />
            <p>
              My Technology stack are: HTML, CSS, ReactJS, Gatsby, Jest,
              Cypress, NodeJS, Express, Mongo
            </p>
          </Typist>
        </article>
      </section>
    </div>
  );
}
