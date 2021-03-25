import React, {useState} from 'react'

import './../../styles/css/lab3.css'

const Lab4 = () => {
    const [text, setText] = useState('')


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
            <button>Click</button>
        </div>
    )
}

export default Lab4
