import { LoginForm } from "../../components/login/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-[0%] md:mt-[5%] lg:mt-[10%] ">
        <h1 className="text-[30px]">Login Page</h1>
        <div className="flex justify-center items-center w-[100%]">
          <LoginForm />
        </div>
      </div>
    </>
  );
};
