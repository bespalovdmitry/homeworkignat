import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (newUser: string) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {
    const inputClass = error === 'Error' ? s.error : ''

    return (
        <div className={s.paper}>
            <div>
                <input value={name} onChange={(e) => setNameCallback(e.currentTarget.value)} className={inputClass}/>
                <button onClick={addUser} className={s.glow_on_hover} style={{marginLeft: '5px'}}>add</button>
                <span style={{color: 'white'}}>{totalUsers}</span>
            </div>

            <div>
                <span style={{color: 'red'}}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
