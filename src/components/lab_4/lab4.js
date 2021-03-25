import React, {useState} from 'react'

import './../../styles/css/lab3.css'

const Lab4 = () => {
    const [text, setText] = useState('')


    return(
        <div className={'lab_3_block'}>
            <input type='number'
                   className={'lab_3_block__text'}
                   value={text}
                   placeholder={'Введіть будь-яке число: '}
                   onChange={(e) => {
                       setText(e.target.value)
                   }}
            />
            <button
                onClick={() => alert(`Your number is: ${text}`)}
            >Click</button>
        </div>
    )
}

export default Lab4
