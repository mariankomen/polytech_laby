import React, {useState} from 'react'

import '../../styles/css/style.css'

const Lab1 = () => {
    const [text, setText] = useState('')
    const [conditional, setConditional] = useState('')
    const [BlockStyle, setBlockStyle] = useState('gen_block')
    const [InputStyle, setInputStyle] = useState('gen_block__input')
    const [DispNone, setDispNone] = useState('')
    const [radio, setRadio] = useState(true)
    const [radio_1, setRadio_1] = useState(true)

    if (conditional === "Calculator") {
        window.location.href = 'https://calculator888.ru/';
    } else if (conditional === "Paint") {
        window.location.href = 'https://jspaint.app/';
    }
    let ExitClick = () => {
        setBlockStyle('gen_block none')
    }
    if (!radio_1) {
        setInputStyle('none_in')
    }
    return (
        <div className={BlockStyle}>
            <div className='gen_block__item'>
                <div className='gen_block__text'>
                    <p>INSTRUCTIONS: To execute the Paint program: type Paint in the edit box. To execute the
                        Calculator programm, type Calculator in the edit box. To terminate the programm, type Exit
                        in the edit box.</p>
                </div>
                <div className={`${InputStyle}`}>
                    <input type='text'
                           onChange={e => setText(e.target.value)}
                           value={text}
                           readOnly={!radio}
                    />
                </div>
                <div className='gen_block__radios'>
                    <div><span><input type='checkbox'
                                      onChange={() => setRadio_1(!radio_1)}
                                      checked={radio_1}
                    /> Visible</span></div>

                    <div><span><input type='checkbox'
                                      onChange={() => setRadio(!radio)}
                                      checked={radio}
                    /> Enable</span></div>
                </div>
                <div className='gen_block__buttons'>
                    <button className={'gen_block__buttons__items'}
                            onClick={() => {
                                setConditional(text)
                                setText('')
                            }}
                    >Test
                    </button>
                    <button className={'gen_block__buttons__items'}
                            onClick={() => setText('')}
                    >Clear
                    </button>
                </div>
            </div>
            <button className={'gen_block__buttons__items'}
                    onClick={() => ExitClick()}
            >EXIT
            </button>
        </div>
    )
}

export default Lab1