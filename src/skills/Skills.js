import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={styleContainer.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"JavaScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"Redux"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
