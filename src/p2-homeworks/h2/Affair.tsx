import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    let priorityClass = `${s.lowColor}`

    if (props.affair.priority === 'middle'){
        priorityClass = `${s.middleColor}`
    }
    if (props.affair.priority === 'high'){
        priorityClass = `${s.highColor}`
    }
    return (
        <div style={{
            alignItems: 'center',
            display: 'grid',
            marginBottom: '1em',
            justifyContent: 'space-evenly',
            gridTemplateRows: '1fr',
            gridTemplateColumns: '30% 40% 30%'
        }}>
            <SuperButton red onClick={deleteCallback}>DEL</SuperButton>
            <div className={s.affairText} style={{width: '100px'}}>{props.affair.name}</div>
            <div className={priorityClass}>
                {props.affair.priority}
            </div>

        </div>
    )
}

export default Affair
