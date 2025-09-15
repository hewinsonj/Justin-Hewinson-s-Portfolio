// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import AutoDismissAlert from "./components/shared/AutoDismissAlert/AutoDismissAlert";
import Header from "./components/shared/Header";
import RequireAuth from "./components/shared/RequireAuth";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import ChangePassword from "./components/auth/ChangePassword";
import ShowProject from "./components/projects/ShowProject";
import AboutMe from "./components/NewComponents/AboutMe";
import LandingPage from "./components/NewComponents/LandingPage";
import CreateAccount from "./components/NewComponents/CreateAccount";
import Projects from "./components/NewComponents/Projects";
import Contact from "./components/NewComponents/Contact";
import Skills from "./components/NewComponents/Skills";
import Documents from "./components/NewComponents/Documents";
import Experience from "./components/NewComponents/Experience";
import Education from "./components/NewComponents/Education";
import ProjectDetail from "./components/NewComponents/ProjectDetail";
import { Ref } from "semantic-ui-react";

const App = () => {
  const [user, setUser] = useState(null);
  const [project] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const segmentRef = React.useRef();

  const clearUser = () => {
    setUser(null);
  };

  const deleteAlert = (id) => {
    setMsgAlerts((prevState) => {
      return prevState.filter((msg) => msg.id !== id);
    });
  };

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid();
    setMsgAlerts(() => {
      return [{ heading, message, variant, id }];
    });
  };

  return (
    <Fragment>
      <>
        <Header user={user} msgAlert={msgAlert} />
        <Ref innerRef={segmentRef}>
          <Routes>
            <Route
              path="/sign-in"
              element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
            />
            <Route
              path="/sign-out"
              element={
                <RequireAuth user={user}>
                  <SignOut
                    msgAlert={msgAlert}
                    clearUser={clearUser}
                    user={user}
                  />
                </RequireAuth>
              }
            />
            <Route
              path="/create-account"
              element={<CreateAccount msgAlert={msgAlert} />}
            />
            <Route
              path="/change-password"
              element={
                <RequireAuth user={user}>
                  <ChangePassword msgAlert={msgAlert} user={user} />
                </RequireAuth>
              }
            />
            <Route path="/" element={<LandingPage msgAlert={msgAlert} />} />
            <Route
              path="/about-me"
              element={<AboutMe msgAlert={msgAlert} />}
            />
            <Route
              path="/projects/:projectId"
              element={<ShowProject msgAlert={msgAlert} user={user} />}
            />
            <Route
              path="/projects"
              element={
                <Projects msgAlert={msgAlert} user={user} project={project} />
              }
            />
            <Route path="/contact" element={<Contact msgAlert={msgAlert} />} />
            <Route path="/skills" element={<Skills msgAlert={msgAlert} />} />
            <Route
              path="/documents"
              element={<Documents msgAlert={msgAlert} />}
            />
            <Route
              path="/experience"
              element={<Experience msgAlert={msgAlert} />}
            />
            <Route
              path="/education"
              element={<Education msgAlert={msgAlert} />}
            />

            <Route
              path="/projectDetail/:projectId"
              element={
                <ProjectDetail
                  user={user}
                  project={project}
                  msgAlert={msgAlert}
                />
              }
            />
          </Routes>
        </Ref>
      </>
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
    </Fragment>
  );
};

export default App;
