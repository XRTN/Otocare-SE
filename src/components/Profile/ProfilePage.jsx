import React from 'react'
import './ProfilePage.css';

function Profile() {
  return (
    <>
    <div className="profile-arrow">
      <img src="./arrow.png" alt="arrow" />
      <div className="arrowlogo"></div>
      <div className="profiletag">
        <h1>PROFILE</h1>
        </div>
      </div>
      <div className="container">
        <div className="profilepicturecontainer">
          
        </div>
        <div className="userprofile-box">

          <h2>User Profile</h2>
          <div className="form-group">
        <label htmlFor='username'>User Name</label>
          <input type="Username" id='username' name='username' required=""/>
        <label htmlFor="name">Name</label> 
          <input type="Name" id='name' name='name' required=""/>
        <label htmlFor="Email">E-mail</label>
          <input type="Email" id='email' name='Email' required=""/>
        <label htmlFor="PhoneNumber">Phone Number</label>
          <input type="Phonenumber" id='phonenumber' name='phonenumber' required="" />
        <label htmlFor="address">Address</label>
          <input type="Address" id='address' name='address' required="" />
        <label htmlFor="province">Province</label>
          <input type="Province" id='province' name='province' required=""/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Profile
