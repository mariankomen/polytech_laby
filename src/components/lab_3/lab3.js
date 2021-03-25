import React, {useState, useEffect} from 'react'

import './../../styles/css/lab3.css'

const Lab3 = () => {
    const [text, setText] = useState('')

    useEffect(()=>{
        alert(`Ви ввели: ${text}`)
    },[text])

    return(
        <div className={'lab_3_block'}>
            <input type='text'
                   className={'lab_3_block__text'}
                   value={text}
                   placeholder={'Введіть будь-який символ: '}
                   onChange={(e) => {
                       setText(e.target.value)
                   }}
            />
        </div>
    )
}

export default Lab3