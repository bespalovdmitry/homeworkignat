import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    value: number
    // value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        type,
        onChange, onChangeRange,
        className,
        value,

        ...restProps// все остальные пропсы попадут в объект restProps

        // min, max, step, disable, ...
    }
) => {

    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                value={value}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>

    )
}

export default SuperDoubleRange
