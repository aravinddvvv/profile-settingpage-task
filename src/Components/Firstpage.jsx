import React from 'react';
import './Firstpage.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { IoIosMail } from "react-icons/io";

const Firstpage = () => {
  return (
    <div className="firstpage-container">
      <div className="container">
        <div className="header">
          <img src="https://images.unsplash.com/photo-1552954277-0c45bd503b54?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE2fHx8ZW58MHx8fHx8" alt="Profile Picture" />
          <div className="info">
            <h3>Alexa Rawles</h3>
            <p>alexarawles@gmail.com</p>
          </div>
          <MDBBtn color='primary'>
            EDIT
          </MDBBtn>
        </div>
        <div className="form-group-horizontal">
          <div className="form-item">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Your First Name" className="form-control" />
          </div>
          <div className="form-item">
            <label htmlFor="nickName">Nick Name</label>
            <input type="text" id="nickName" placeholder="Your Nick Name" className="form-control" />
          </div>
        </div>
        <div className="form-group-horizontal">
        <div className="form-group">
            <label htmlFor="language">Gender</label>
            <select id="language" className="form-control">
              <option value="" disabled selected>Gender</option>

              <option value="en">Male</option>
              <option value="es">Female</option>
             

            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Country</label>
            <select id="language" className="form-control">
              <option value="" disabled selected>Your Country</option>

              <option value="en">India</option>
              <option value="es">USA</option>
              <option value="fr">Latvia</option>

            </select>
          </div>
        </div>
        <div className="form-group-horizontal">
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select id="language" className="form-control">
              <option value="" disabled selected>Your Language</option>

              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>

            </select>
          </div>
          <div className="form-group">
            <label htmlFor="language">Time Zone</label>
            <select id="language" className="form-control">
              <option value="" disabled selected>Your Time Zone</option>
              <option value="Australia/Sydney">Sydney, Australia</option>
              <option value="Asia/Dubai">Dubai, UAE</option>
              <option value="Asia/Kolkata">Kolkata, India</option>
              <option value="Asia/Shanghai">Shanghai, China</option>

             

            </select>
          </div>
        </div>
        <div className="email-section">
          <h5>My Email Address</h5>
          <div className="email-item">
            <div className="email">
              <div className='email-icon'>
              <IoIosMail />
              </div>
              <span>alexarawles@gmail.com</span>
            </div>
            <br />

          </div>
          <div className="date">1 month ago</div>
          <button className="add-email">+ Add Email Address</button>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
