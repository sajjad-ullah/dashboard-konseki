
import React, { useState } from "react";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";
import { FaBars } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti';

import MultiImageInput from 'react-multiple-image-input';
import image1 from '../../assests/illustration1.png'

export default function Categories({ image, collapsed, rtl, toggled, handleToggleSidebar }) {
    const [selected, setSelected] = useState(null);
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: "Cat1",
            img: image1
        },
        {
            id: 2,
            title: "Cat2",
            img: image1
        },
        {
            id: 3,
            title: "Cat3",
            img: image1
        },
        {
            id: 4,
            title: 'Cat4',
            img: image1
        }
    ]);
    const [imagePath, setImagePath] = useState([]);

    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
    };

    return (
        <main>

            <div className="userTitleContainer">
                <div
                    style={{
                        width: 35,
                        height: 35,
                        height: 35,
                        color: '#353535',
                        textAlign: 'center',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        cursor: 'pointer'
                    }}
                    onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
                <h1 className="userTitle">Categories</h1>
                <Link to="/newCate">
                    <button className="userAddButton">Add</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <h3>All Categories</h3>
                        {categories.map((item, key) => (

                            <div className="category-container" >
                                <div className="category" >
                                    <div className="icon-container">
                                        <BsListTask />
                                    </div>
                                    <p className="text" >{item.title}</p>
                                </div>
                                <div
                                    className="EditBtn"
                                    onClick={() => {
                                        setSelected(item)
                                        setShow(true)
                                    }}>
                                    <p>Edit</p>
                                </div>
                                <div onClick={() => alert("Hi")}>
                                    <TiDeleteOutline className="deleteIcon" />
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">

                        {show ?
                            (
                                <>
                                    <div className="userUpdateLeft">
                                        <div className="userUpdateItem">
                                            <label>Category Name</label>
                                            <input
                                                type="text"
                                                placeholder="annabeck99"
                                                className="userUpdateInput"
                                                value={selected.title}
                                            />
                                        </div>
                                        {/* <div className="userUpdateItem">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Anna Becker"
                                                className="userUpdateInput"
                                            />
                                        </div> */}

                                       
                                    </div>
                                    <div className="userUpdateRight">
                                        {/* <div className="userUpdateUpload">
                                            <img
                                                className="userUpdateImg"
                                                src={selected.img}
                                                alt=""
                                            />
                                         
                                        </div> */}
                                        <button className="userUpdateButton">Update</button>

                                    </div>
                                </>
                            ) : (
                                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={image1} style={{ width: 300, height: 300 }} />
                                    <label htmlFor="file">
                                        <h3>Select a Category to edit</h3>
                                    </label>
                                </div>
                            )}

                    </form>
                </div>
            </div>
        </main>
    );
}
