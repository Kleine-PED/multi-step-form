import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const YourInfoPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameValidate, setNameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [numberValidate, setNumberValidate] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameValidate(true);
    } else {
      setNameValidate(false);
    }

    if (email.trim() === "") {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }

    if (number.trim() === "") {
      setNumberValidate(true);
    } else {
      setNumberValidate(false);
    }

    if (name.trim() !== "" && email.trim() !== "" && number.trim() !== "") {
      navigate("/selectplan");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] font-ubuntu">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
        Personal info
      </h1>
      <p className="text-neutral-coolGray mb-6">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col">
        <div className="form-wrapper flex flex-col relative">
          <label className="text-primary-marineBlue font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            onChange={(e) => setName(e.target.value)}
            className={`${
              nameValidate
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
          />
          <span
            className={`${
              nameValidate ? "inline" : "hidden"
            } text-primary-strawberryRed font-medium absolute right-[10px]`}
          >
            This field is required
          </span>

          <label className="text-primary-marineBlue font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              emailValidate
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
          />
          <span
            className={`${
              emailValidate ? "inline" : "hidden"
            } text-primary-strawberryRed font-medium absolute top-[100px] right-[10px]`}
          >
            This field is required
          </span>

          <label className="text-primary-marineBlue font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            onChange={(e) => setNumber(e.target.value)}
            className={`${
              numberValidate
                ? "focus:outline-primary-strawberryRed"
                : "focus:outline-primary-marineBlue"
            } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
          />
          <span
            className={`${
              numberValidate ? "inline" : "hidden"
            } text-primary-strawberryRed font-medium absolute top-[200px] right-[10px]`}
          >
            This field is required
          </span>
        </div>

        <div className="flex justify-end items-end py-0.5 mt-[120px] sm:mt-[26px]">
          <button className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3  transform hover:scale-110 transition-all duration-300 ">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default YourInfoPage;
