import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    disabled?: boolean
    def?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, disabled,def,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = `${disabled ? `${s.disabled} ${s.defaultBtn}` : s.defaultBtn} ${className}`
    let finalClassName = className
    if (disabled) {
        finalClassName = `${s.disabled} ${s.defaultBtn}`
    }
    if (red) {
        finalClassName = `${s.red} ${s.defaultBtn}`
    }
    if (def) {
        finalClassName = `${s.defaultBtn}`
    }
    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
