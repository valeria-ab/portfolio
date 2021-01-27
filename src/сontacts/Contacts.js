import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";



function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`} >
                <h2 className={styleContainer.title}>Контакты</h2>
                <form className={style.contactForm} action="">
                    <input className={style.contactsInput} type="text"/>
                    <input className={style.contactsInput} type="text"/>
                    <textarea className={style.contactsInput} name="" id="" cols="30" rows="10">

                    </textarea>
                </form>
                <a className={style.projectButton}>Отправить</a>
            </div>
        </div>
    );
}

export default Contacts;
