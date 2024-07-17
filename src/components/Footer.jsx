import { Link } from "react-router-dom";
import { Container } from "./StylesComponents/Footer";

export function Footer() {
  return (
    <Container>
      <button className="btnCancel">
        <Link to="/" className="buttonLink">
          Cancel
        </Link>
      </button>
      <button className="btnSave">
        <Link to="/" className="buttonLink">
          Save
        </Link>
      </button>
    </Container>
  );
}
