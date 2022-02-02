import React, { useState } from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { IntlProvider } from 'react-intl';
import messages from './messages';
import "./App.css";
import Home from "./pages/Categories/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newCategory/NewCategory";
import Product from "./pages/product/Product";
import Login from "./pages/Login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import './styles/app.scss';

function App() {
  const [locale, setLocale] = useState('en');

  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    console.log("val:", value)
    setToggled(value);
  };

  return (
    <Router>
      <Topbar />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="container">
          <Sidebar
            image={image}
            collapsed={collapsed}
            rtl={rtl}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar} />
          <Switch>
            <Route exact path="/">
              <Home 
              toggled={toggled}
              collapsed={collapsed}
              rtl={rtl}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
              handleRtlChange={handleRtlChange}
              handleImageChange={handleImageChange}/>
            </Route>
          
            <Route exact path="/users">
              <UserList 
                toggled={toggled}
                collapsed={collapsed}
                rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleRtlChange={handleRtlChange}
                handleImageChange={handleImageChange}/>
            </Route>
          
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </IntlProvider>
    </Router>
  );

}

export default App;
