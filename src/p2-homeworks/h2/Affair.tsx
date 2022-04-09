import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div style={{display: 'flex', marginBottom: '1em'}}>
            <button className={s.btn} onClick={deleteCallback}>Delete</button>
            <div style={{display: 'flex', marginLeft: '1em'}}>
                <div className={s.affairText} style={{width: '100px'}}>{props.affair.name}</div>
                <div className={props.affair.priority === 'high' ? `${s.highColor}` : ''}>
                    {props.affair.priority}
                </div>
            </div>

        </div>
    )
}

export default Affair
