import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.int";

const Private = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div className="mx-auto mt-10 w-1/6">
        <img
          className=" w-full"
          alt=""
          src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-success-business-people-flatart-icons-lineal-color-flatarticons.png"
        />
      </div>
      <h1 className="my-2 text-lg text-green-300 text-center font-bold">
        Successfully Logged in Mr. {user.displayName} <br />
        Your Email is {user.email}
      </h1>
      <div className="text-center">
        <button
          onClick={() => signOut(auth)}
          className="hover:bg-red-500 duration-300 py-2 rounded-lg px-4 bg-red-400 text-white font-bold"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Private;
