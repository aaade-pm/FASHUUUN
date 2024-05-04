import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../supabase";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session !== null && event === "SIGNED_IN") {
        navigate("/");
        window.location.reload();
      } else if (session === null && event === "SIGNED_OUT") {
        navigate("/");
        window.location.reload();
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
        providers={[]}
      />
    </div>
  );
};

export default LoginPage;
