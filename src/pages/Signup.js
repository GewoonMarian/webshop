import axios from "axios";
import React from "react";
import SignUpForm from "../components/SignUpFom";

export default function Signup() {
  try {
    async function postData(name, email, password) {
      const sendData = await axios.post("/localhost:4000/users/signup", {
        name,
        email,
        password,
      });
    }
    postData();
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      <SignUpForm />
    </div>
  );
}
