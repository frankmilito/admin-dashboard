import React from 'react'
import './newUser.css'
const NewUser = () => {
  return (
    <div className="newUser"> 
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder='Enter Username' />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='Enter Full Name' />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="text" placeholder='Enter email' />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="text" placeholder='Enter Password' />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder='Enter Address' />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
               <div className="newUserGender">
                    <input type="radio" name="gender" value='male' id='male'/>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" value='female' id='female'/>
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" value='other' id='other'/>
                <label htmlFor="other">Other</label>
               </div>
            </div>
            <div className="newUserItem">
                <label htmlFor="active">Active</label>
                <select name="active" id="active" className='newUserSelect'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserBtn">Create</button>
        </form>
    </div>
  )
}

export default NewUser