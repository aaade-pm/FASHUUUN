import { Auth } from "@supabase/auth-ui-react";
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
    <>
      <h1 className="text-black text-center text-2xl font-bold mt-[20vh]">
        FASHUUN LOGIN PAGE
      </h1>

      <div className=" mx-12 lg:mx-60 mt-6">
        <Auth
          supabaseClient={supabase}
          appearance={{
            style: {
              button: {
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px",
                borderRadius: "7px",
              },

              input: {
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px",
                borderRadius: "7px",
              },

              label: {
                color: "#000",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              },
            },
          }}
          theme="default"
          providers={[]}
        />
      </div>
    </>
  );
};

export default LoginPage;
