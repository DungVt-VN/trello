import React, { Fragment, useState, useEffect } from "react";
import Button from '@mui/material/Button';

import "./Boards.css"

import Project from "../../components/project/Project";
import Profile from "../../components/profile/Profile.jsx";
import ProjectBoard from "../../components/project-board/ProjectBoard";

const Boards = () => {

    const [viewProfile, setViewProfile] = useState(false);
    const [viewProject, setShowProject] = useState(false);

    const handleClickProfile = (progs) => {
        setViewProfile(true);
    }

    const handleClickProject = () => {
        setShowProject(true);
    }

    useEffect(() => {

    }, [])

    return <Fragment>
        <div className="my-board-container">
            <div className="col-33">
                <div className="mission">
                        <Button className="ms-button" onClick={ handleClickProfile }>Thông tin các nhân</Button>
                        <Button>Lịch làm việc</Button>
                        <Button>Việc đã làm</Button>
                        <Button>Tin nhắn</Button>
                </div>
                <div className="all-project">
                    <div>
                        { <Project callbackHandleClick={ handleClickProject }/> }
                    </div>
                </div>
            </div>

            <div className="col-66">
                { viewProject ? <ProjectBoard /> : null }
                {viewProfile ? <Profile /> : null}
            </div>
        </div>
    </Fragment>
}

export default Boards;
