import React, { Component } from 'react';
import '../assests/Home.css';


import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import UsersList from './UsersList';

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
  
    const logout = (e) => {
      dispatch(logout());
    };
  
    return (
      <form className="logout">
        <h1>
          Welcome <span className="user__name">{user.fname}</span>!
        </h1>
        <button className="logout__button" onClick={(e) => logout(e)}>
          Log out
        </button>
      </form>
    );
  };

const onInterval = (refresh) => (WrappedComponent) => {
	return class WithInterval extends Component {
		constructor(props) {
		  super(props);
      this.state = { ticks: 0 };
		  this.interval = setInterval(this.tick.bind(this), refresh);
		}
    
    tick() {
      this.setState({ ticks: this.state.ticks + 1 })
    }
    
		componentWillUnmount() {
		  clearInterval(this.interval);
		}
    
		render() {
		  return <WrappedComponent {...this.props} />;
		}
	};
};


const Time = () => {
  const countDownDate = new Date("Dec 31, 2021 20:00:00").getTime();
	const now = new Date().getTime();
  const distance = countDownDate - now;
  if (distance < 0) {
    return <p>Expired</p>;
  }
  else{
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return (
        <div className="home">
        <Logout/>
        <h1>Countdown till New Year Event</h1>
        <div className="countbox">
          <p>{days} <span>days</span></p>
          <p>{hours} <span>hours</span></p>
        </div>

        <h2 className="add"><b>Location:</b> #405, 4th Floor, Iscon Atria 1,Gotri Road, Vadodara 390021</h2>
        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0351785707376!2d73.14075491495493!3d22.314509285316223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc88c5f0bb67b%3A0x4b0b74f5de809500!2sIscon%20Atria%202!5e0!3m2!1sen!2sin!4v1636630065235!5m2!1sen!2sin"} width="600" height="450" allowfullscreen="" loading="lazy" />
        <p>Date: 31st December 2021</p>
        <p>Time: 08:00 p.m. IST</p>
        
        
        <UsersList />
        
        </div>
    );
  }
};

const Home = onInterval(1000)(Time);

export default Home;