import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../supabase";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_IN") {
        navigate("/");
      } else if (event === "SIGNED_OUT") {
        navigate("/");
      }
    });
  }, [navigate]);
  return (
    <div className="bg-black grid place-items-center h-[100vh]">
      <h1>LoginPage</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord"]}
      />
    </div>
  );
};

export default LoginPage;
