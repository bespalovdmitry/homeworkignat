import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name, className,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    console.log(`VALUE - ${value}`)
    console.log(`OPT - ${options}`)

    const mappedOptions: any[] = options ? options.map((o, i) => {
        console.log(o === value)
        return    <label htmlFor={o}  key={name + '-' + i} className={s.label}>
            <input
                id={o}
                type={'radio'}
                name={name}
                value={o}
                checked={o === value}
                className={s.realRadioBtn}
                onChange={onChangeCallback}
                {...restProps}
                // name, checked, value, onChange
            />
            <span className={s.customRadioBtn}></span>
            {o}
        </label>
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
