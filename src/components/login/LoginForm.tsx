import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../../features/auth/AuthSlice";

import { useNavigate } from "react-router-dom";
import { SetAuthToken } from "../../features/auth/SetAuthToken";


interface Inputs {
  name: string;
  password: string;
}
export const LoginForm = () => {
  const ApiUserData = useSelector(selectUserData);

  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    handleCheck();

  };
  
  
  const navigate = useNavigate();
  const handleCheck = () => {
    
    const { email, password, token } = ApiUserData[0];

    if (email === inputs.name && password === inputs.password) {
      console.log(email, password);
      SetAuthToken(token);
      console.log(token);
      navigate("/");
    } else {
      alert("User Or Password Is Wrong");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form
        className="flex flex-col gap-y-4 p-4 w-[100%] md:w-[70%] lg:w-[40%]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="border-[1px] rounded-[20px] px-4 py-2"
          name="name"
          type="text"
          placeholder="Enter Your email"
          value={inputs.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="border-[1px] rounded-[20px] px-4 py-2"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          value={inputs.password}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="border-[1px] p-2 rounded-[50px]">
          Login
        </button>
      </form>
    </>
  );
};