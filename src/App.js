import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import Rank from "./components/rank/Rank";
import LinkForm from "./components/link-form/LinkForm";
import SignIn from "./components/sign-in/SignIn";
import Register from "./components/register/Register";

function App() {
  const [route, setRoute] = useState({
    signin: true,
    home: false,
    register: false,
  });

  //connecting to server
  // useEffect(() => {
  //   fetch("http://localhost:3002/")
  //     .then((res) => res.json())
  //     .then(console.log);
  // });

  const handleSignIn = () => {
    setRoute({ home: false, signin: true, register: false });
  };

  const handleRegister = () => {
    setRoute({ home: false, signin: false, register: true });
  };

  const handleHome = () => {
    setRoute({ home: true, signin: false, register: false });
  };

  return (
    <div className="App">
      {route.signin && (
        <SignIn onHome={handleHome} onRegister={handleRegister} />
      )}
      {route.register && (
        <Register onHome={handleHome} onSignin={handleSignIn} />
      )}
      {route.home && (
        <>
          <Navigation onSignin={handleSignIn} />
          <Logo />
          <Rank />
          <LinkForm />
        </>
      )}
    </div>
  );
}

export default App;
