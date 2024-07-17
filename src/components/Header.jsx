import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Container,
  LogoContainer,
  LogoBackground,
  DateTime,
} from "./StylesComponents/Header";
import logo from "../assets/favicon.svg";
import darkLogo from "../assets/logo-dark.svg";
import redLogo from "../assets/logo-red.svg";

const useCurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentDateTime;
};

const formatDate = (date) => {
  return format(date, "MM/dd/yy");
};

const formatTime = (time) => {
  return format(time, "hh:mm a");
};

// eslint-disable-next-line react/prop-types
export function Header({ title, text }) {
  const currentDateTime = useCurrentDateTime();
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
    <Container>
      <LogoContainer>
        <img src={logo} className="logo" />
        <LogoBackground
          src={darkLogo}
          className={isRed ? "fade-out" : "fade-in"}
        />
        <LogoBackground
          src={redLogo}
          className={isRed ? "fade-in" : "fade-out"}
        />
      </LogoContainer>
      <div>
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
      <DateTime>
        <span>{formatDate(currentDateTime)}</span>
        <p>{formatTime(currentDateTime)}</p>
      </DateTime>
    </Container>
  );
}
