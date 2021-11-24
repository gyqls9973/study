import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../Module/userSlice";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn: true,
    }));
  }

  return (
    <div>
      <div>
        <h1>Login Here</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
        />
        <input type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;