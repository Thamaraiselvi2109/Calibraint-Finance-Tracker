import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const userLogout = () => {
    localStorage.removeItem("token");
    console.log("clicked");
    navigate("/auth/login");
  };

  return (
    <>
      <button
        className="border-[1px] px-6 py-2 rounded-full"
        onClick={() => userLogout()}
      >
        Logout
      </button>
    </>
  );
};
