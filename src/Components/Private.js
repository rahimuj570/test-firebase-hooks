import React from "react";

const Private = () => {
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
        Successfully Logged in
      </h1>
      <div className="text-center">
        <button className="hover:bg-red-500 duration-300 py-2 rounded-lg px-4 bg-red-400 text-white font-bold">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Private;
