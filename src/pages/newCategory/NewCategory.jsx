import "./newUser.css";
import MultiImageInput from 'react-multiple-image-input';
import { useState } from "react";
export default function NewUser() {

  const [imagePath, setImagePath] = useState([]);
  const [title, setTitle] = useState();
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
};
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Category</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Title</label>
          <input type="text" placeholder="category title" />
        </div>

        {/* <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div> */}
        {/* <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div> */}
      
        <button className="newUserButton">Add</button>
      </form>
    </div>
  );
}
