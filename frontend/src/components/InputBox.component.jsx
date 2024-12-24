import React from 'react'

const InputBox = ({ cls,type, placeholder , id, value, fxn }) => {
    return (
        <div>

            <input className={cls} value={value} onChange={(e) => fxn(e.target.value)} type={type} placeholder={placeholder} id={id}></input>
            
        </div>
    )
}

export default InputBox
