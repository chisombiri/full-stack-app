import { useState } from "react";
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
  const [submittedLink, setSubmittedLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleBtnSubmit = () => {
    // console.log("click");
    setSubmittedLink(input);
    setSubmitted(true);
    if (input.length !== 0) {
      fetch("http://localhost:3002/link", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user.id,
        }),
      })
        .then((res) => res.json())
        .then((count) => {
          setUser(
            Object.assign(user, {
              entries: count,
            })
          );
        });
    }
  };

  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined,
    });

    // console.log(user);
  };

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
        <SignIn
          loadUser={loadUser}
          onHome={handleHome}
          onRegister={handleRegister}
        />
      )}
      {route.register && (
        <Register
          loadUser={loadUser}
          onHome={handleHome}
          onSignin={handleSignIn}
        />
      )}
      {route.home && (
        <>
          <Navigation onSignin={handleSignIn} />
          <Logo />
          <Rank username={user.name} entries={user.entries} />
          <LinkForm
            handleBtnSubmit={handleBtnSubmit}
            handleInputChange={handleInputChange}
            submitted={submitted}
            submittedLink={submittedLink}
          />
        </>
      )}
    </div>
  );
}

export default App;
