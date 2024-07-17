import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomePage,
  LogoContainer,
  LogoBackground,
} from "./StylesPages/HomePage";
import logo from "../assets/favicon.svg";
import darkLogo from "../assets/logo-dark.svg";
import redLogo from "../assets/logo-red.svg";

// eslint-disable-next-line react/prop-types
export function Home({ title, text }) {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsRed((prev) => !prev);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <HomePage>
      <LogoContainer>
        <img src={logo} className="logo" />
        <LogoBackground
          src={darkLogo}
          alt="Fire icon dark"
          className={isRed ? "fade-out" : "fade-in"}
        />
        <LogoBackground
          src={redLogo}
          alt="Fire icon red"
          className={isRed ? "fade-in" : "fade-out"}
        />
      </LogoContainer>
      <div>
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
      <NavLink to="/report" className="button">
        Open
      </NavLink>
    </HomePage>
  );
}
