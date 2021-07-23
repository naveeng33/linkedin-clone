import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="wrapper">
        <img
          src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png"
          alt="LinkedInImage"
        />

        <form onSubmit={loginToApp}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name (required if registering)"
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            type="text"
            placeholder="Photo URL (optional)"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoComplete="true"
          />
          <button type="submit">Sign In</button>
        </form>

        <p>
          Not a member? &nbsp;
          <span className="login__register" onClick={register}>
            Join Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
