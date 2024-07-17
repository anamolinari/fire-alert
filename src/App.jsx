import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";
import { Notify } from "./pages/Notify";
import { Actions } from "./pages/Actions";
import { Layout } from "./components/Layout";

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            currentPath !== "/" ? null : (
              <Layout
                expandedWidth={366}
                expandedHeight={72}
                showElements={false}
              >
                <Home title="fire alert" text="D24bnu-cooper-12937" />
              </Layout>
            )
          }
        />
        <Route
          path="/report"
          element={
            <Layout
              expandedWidth={510}
              expandedHeight={386}
              showElements={true}
            >
              <Report />
            </Layout>
          }
        />
        <Route
          path="/notify"
          element={
            <Layout
              expandedWidth={510}
              expandedHeight={412}
              showElements={true}
            >
              <Notify />
            </Layout>
          }
        />
        <Route
          path="/actions"
          element={
            <Layout
              expandedWidth={510}
              expandedHeight={292}
              showElements={true}
            >
              <Actions />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
