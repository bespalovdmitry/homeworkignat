import React from 'react'
import styles from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.chat}>
            <div className={styles.messages}>
                <img className={styles.avatar} src={props.avatar} alt="avatar"/>
                <div className={styles.message}>
                    <h5 className={styles.name}>{props.name}</h5>
                    <p className={styles.message_text}>{props.message}</p>
                    <p className={styles.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
