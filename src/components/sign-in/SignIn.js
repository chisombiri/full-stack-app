import { useState } from "react";

const SignIn = ({ onHome, onRegister }) => {
  const [signInEmail, setsignInEmail] = useState("");
  const [signInPassword, setsignInPassword] = useState("");

  const onEmailChange = (e) => {
    setsignInEmail(e.target.value);
    // console.log(signInEmail);
  };

  const onPasswordChange = (e) => {
    setsignInPassword(e.target.value);
    // console.log(signInPassword);
  };

  const onSubmitSignIn = () => {
    fetch("http://localhost:3002/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "success") {
          onHome();
        }
      });
  };

  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={onSubmitSignIn}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              href="#0"
              className="pointer f6 link dim black db"
              onClick={onRegister}
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default SignIn;
