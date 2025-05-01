import { useDispatch } from "react-redux";
import "./App.css";
import { Router } from "./router/Routes";
import { AppDispatch } from "./store/Store";
import { useEffect } from "react";
import { FetchTransactions } from "./components/dashboard/FetchTransactions";
import { LoginApi } from "./features/auth/LoginApi";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchTransactions());
    dispatch(LoginApi());
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
