import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} //
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={s.affairArea}>

            {mappedAffairs}
            <div className={s.groupButton}>
                <SuperButton def onClick={setAll}>All</SuperButton>
                <SuperButton def onClick={setHigh}>High</SuperButton>
                <SuperButton def onClick={setMiddle}>Middle</SuperButton>
                <SuperButton def onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
