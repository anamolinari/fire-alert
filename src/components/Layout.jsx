import { useState, useEffect } from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Container, ContentWrapper } from "./StylesComponents/Layout";

export function Layout({
  children,
  expandedWidth,
  expandedHeight,
  showElements = true,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(true);
  }, [expandedWidth, expandedHeight]);

  return (
    <Container
      className={`container ${isExpanded ? "expanded" : ""}`}
      style={{ width: `${expandedWidth}px`, height: `${expandedHeight}px` }}
    >
      {showElements && (
        <>
          <ContentWrapper>
            <Header title="fire alert" text="D24bnu-cooper-12937" />
            <NavBar />
          </ContentWrapper>
        </>
      )}
      <main className="content">{children}</main>
      {showElements && <Footer />}
    </Container>
  );
}
