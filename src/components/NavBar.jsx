import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./StylesComponents/NavBar";

export function NavBar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("report");

  const handleNavigation = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  return (
    <Container>
      <div className="tabs">
        <input type="radio" id="report" name="tabs" />
        <input type="radio" id="notify" name="tabs" />
        <input type="radio" id="actions" name="tabs" />

        <label
          className={`tab ${activeTab === "/report" ? "active" : ""}`}
          htmlFor="report"
          onClick={() => handleNavigation("/report")}
        >
          Report
        </label>
        <label
          className={`tab ${activeTab === "/notify" ? "active" : ""}`}
          htmlFor="notify"
          onClick={() => handleNavigation("/notify")}
        >
          Notify
        </label>
        <label
          className={`tab ${activeTab === "/actions" ? "active" : ""}`}
          htmlFor="actions"
          onClick={() => handleNavigation("/actions")}
        >
          Actions
        </label>
        <span className="glider"></span>
      </div>
    </Container>
  );
}
