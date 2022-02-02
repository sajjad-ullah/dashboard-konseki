import React, { useState } from 'react'
import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaUserShield } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs'
import sidebarBg from '../../assests/bg1.jpg';

import '../../styles/app.scss';


export default function Sidebar({ image, collapsed, toggled, handleToggleSidebar }) {

    const intl = useIntl();
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <ProSidebar
            image={image ? sidebarBg : false}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            style={{ height: height }}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 16,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'white',
                        letterSpacing: 2
                    }}
                >
                    <p>Dashboard</p>
                </div>
            </SidebarHeader>

            <SidebarContent>


                <Link to="/">
                    <Menu iconShape="circle">

                        <MenuItem icon={<BsListTask />} style={{color:'#BEBEC2', textDecoration:'none'}}> {intl.formatMessage({ id: 'Categories' })}</MenuItem>


                    </Menu>
                </Link>
                <Link to="/products">
                    <Menu iconShape="circle">

                        <MenuItem icon={<FaUserShield />} style={{color:'#BEBEC2', textDecoration:'none'}}> {intl.formatMessage({ id: 'Users' })}</MenuItem>


                    </Menu>
                </Link>

            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {intl.formatMessage({ id: 'viewSource' })}
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar >
    );
}
