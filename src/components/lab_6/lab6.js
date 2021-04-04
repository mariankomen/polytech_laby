import React, {useState} from 'react'

import styles from '../../styles/css/lab6.module.css'
import SupportComponent from "./support_component";

const Lab6 = () => {

    const [value, setValue] = useState(10)
    const [visible, setVisible] = useState(true)
    const [color, setColor] = useState('black')
    let style_for_circle = {
        width: '250px',
        height: '250px',
        border: `${value}px solid ${color}`,
        borderRadius: '50%',
        margin: '50px 15px 50px',
        background: '#FFF0F5'

    }

    const ChangeColor = (val) => {
        setColor(val)
    }

    return(
        <div className={styles.general}>
            <div className={styles.main_block}>
                <div className={styles.main_block__first}>
                    <div className={styles.main_block__disp_first}>

                        <div style={style_for_circle}></div>

                    </div>
                    <div className={styles.main_block__disp_first}></div>
                </div>
                <div className={styles.main_block__second}>
                    <button>Exit</button>
                    <button
                        onClick={() => setVisible(!visible)}
                    >Draw graphics...</button>
                </div>
                <input type="range"
                       min="1"
                       max="100"
                       value= {value}
                       onChange= {(e) => setValue(e.target.value)}
                       />

            </div>


            {visible && <SupportComponent ChangeColor={ChangeColor}
                                          setVisible={setVisible}

            />}
        </div>
    )
}

export default Lab6