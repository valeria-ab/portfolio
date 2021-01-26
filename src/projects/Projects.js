import React from 'react';
import style from './Projects.module.css';
import styleContainer from "./../common/styles/Container.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={styleContainer.container}>
                <h2 className={styleContainer.title}>Мои работы</h2>
                <div className={style.projects}>
                    <Project title={"Социальная сеть"} description={"Краткое описание"} />
                    <Project title={"Todo лист"} description={"Краткое описание"} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
