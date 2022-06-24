import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import paperStyle from '../../common/styles/Paper.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const leadingZero = (num: number) => `0${num}`.slice(-2);
    const formatTime = (date: Date) =>
        [date.getHours(), date.getMinutes(), date.getSeconds()]
            .map(leadingZero)
            .join(':');
    let correctMonth = date.getMonth() + 1

    const stringTime = formatTime(date)
    const stringDate = `${(date.getDate() < 10 ? '0' : '') + date.getDate()}/${(correctMonth < 10 ? '0' : '') + correctMonth}/${date.getFullYear()}`
    return (
        <div>
            <div className={paperStyle.paper} style={{height: '40px', width: '125px'}}>
                <div
                    style={{fontSize: '20px', fontWeight: 'bold'}}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div style={{fontSize: '20px', fontWeight: 'bold'}}>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton def onClick={start}>start</SuperButton>
            <SuperButton red onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
