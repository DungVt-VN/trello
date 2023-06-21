import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import { CSSTransition } from 'react-transition-group';

import "./Project.css"

const Project = (progs) => {
    
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem = (props) => {
        return (
        <Link href="#" className="menu-item ddi-project" onClick={() => {
          
          if(activeMenu !== "main" && props.name !== "my project") {
            handleClick();
          }
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </Link>
        );
    }

    const handleClick = () => {
      progs.callbackHandleClick(true);
    }

    const Infor_project = (props) => {
      return (
        <div>
              <DropdownItem goToMenu="main" name={ progs.name }><h5>{props.name}</h5></DropdownItem>
              <DropdownItem>Thông Tin Chi Tiết</DropdownItem>
              <DropdownItem>Thành Viên</DropdownItem>
              <DropdownItem>Cài Đặt</DropdownItem>
        </div>
      )
    }




    return <Fragment>
      <div className="tag-project">
        <div className="my-dropdown">
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
            <DropdownItem><h5>My Project</h5></DropdownItem>
              <DropdownItem
                goToMenu="settings">
                Settings
              </DropdownItem>
            </div>
          </CSSTransition>

          <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <Infor_project name="my project"/>
            </div>
          </CSSTransition>
        </div>
      </div>
    </Fragment>
}

export default Project;
