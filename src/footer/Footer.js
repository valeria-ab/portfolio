import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={styleContainer.title}>Valeria Abutkina</h2>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div>©2021 Все права защищены</div>
            </div>
        </div>
    );
}

export default Footer;
