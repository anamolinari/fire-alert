import { useState } from "react";
import { ActionsPage, ActionsContainer } from "./StylesPages/ActionsPage";

import GeneralIcon from "../assets/icon-general.svg";
import GeneralIconGroup from "../assets/icon-general-group.svg";
import MuteIcon from "../assets/icon-mute.svg";
import ResetIcon from "../assets/icon-reset.svg";

// eslint-disable-next-line react/prop-types
export function ActionsButton({ icon, alt, label }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      aria-label={label}
      onClick={handleClick}
      className={isActive ? "active" : ""}
    >
      <img src={icon} alt={alt} />
      {label}
    </button>
  );
}

export function Actions() {
  return (
    <ActionsPage>
      <main>
        <ActionsContainer>
          <ActionsButton
            icon={GeneralIcon}
            alt="General alert"
            label="General alert"
          />

          <ActionsButton
            icon={GeneralIconGroup}
            alt="Group alert"
            label="Group alert"
          />

          <ActionsButton icon={MuteIcon} alt="Mute" label="Mute" />

          <ActionsButton icon={ResetIcon} alt="Reset" label="Reset" />
        </ActionsContainer>
      </main>
    </ActionsPage>
  );
}
