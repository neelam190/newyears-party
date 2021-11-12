import React, { useState } from "react";
import "../assests/Register.css";

import { register, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState("Yes");
  const [adults, setAdults] = useState("Select");
  const [kids, setKids] = useState("Select");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      register({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        attending: attending,
        adults: adults,
        kids: kids,
        note: note,
        loggedIn: true,
      })
    );

    console.log(fname, lname, email, phone, attending, adults, kids, note);

    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setAttending("");
    setAdults("Select");
    setKids("Select");
    setNote("");
  };

  return (
    <div className="login">
      <div className="glass">
        <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Register Here</h1>
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />

          <h3>Will you be attending the event?</h3>
          <div className="frm-container">
            <div
              className="frm-opt"
              onClick={() => {
                setAttending("Yes");
              }}
            >
              <input
                type="radio"
                value={attending}
                name="attending"
                checked={attending === "Yes"}
              />
              Yes
            </div>
            <div
              className="frm-opt"
              onClick={() => {
                setAttending("Yet to Decide");
              }}
            >
              <input
                type="radio"
                value={attending}
                name="attending"
                checked={attending === "Yet to Decide"}
              />
              Yet to Decide
            </div>
            <div
              className="frm-opt"
              onClick={() => {
                setAttending("Maybe");
              }}
            >
              <input
                type="radio"
                value={attending}
                name="attending"
                checked={attending === "Maybe"}
              />
              Maybe
            </div>
            <div
              className="frm-opt"
              onClick={() => {
                setAttending("No");
              }}
            >
              <input
                type="radio"
                value={attending}
                name="attending"
                checked={attending === "No"}
              />
              No
            </div>
          </div>


          <h3>Besides you, how many others are accompanying you?</h3>
          <div className="frm-container">

            <div className="accompany">
            <label>Adults</label>
              <select
              className="frm-opt"
              onChange={(e) => {
                const adults = e.target.value;
                setAdults(adults);
              }}
              >
                <option value="">Select</option>
                <option value="a-0">0</option>
                <option value="a-1">1</option>
                <option value="a-2">2</option>
                <option value="a-3">3</option>
                <option value="a-4">4</option>
                <option value="a-5">5</option>
              </select>
            </div>
            <div className="accompany">
            <label>Kids</label>
              <select
              className="frm-opt"
              onChange={(e) => {
                const kids = e.target.value;
                setKids(kids);
              }}
              >
                <option value="">Select</option>
                <option value="k-0">0</option>
                <option value="k-1">1</option>
                <option value="k-2">2</option>
                <option value="k-3">3</option>
                <option value="k-4">4</option>
                <option value="k-5">5</option>
              </select>
            </div>
          </div>

            <h3>Would you like to send a note to the host?</h3>
            <textarea name="note" cols="30" rows="10" placeholder="Please Write Your Message Here..."
            onChange={(e) => setNote(e.target.value)}
            ></textarea>

          <button type="submit" className="submit__btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
