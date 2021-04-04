import React, {useState} from 'react';

import styles from '../../styles/css/lab6.module.css'

const SupportComponent = (props) => {

    const [targetVal, setTargetVal] = useState('red')
    const [radio_1, setRadio_1] = useState(false)
    const [radio_2, setRadio_2] = useState(false)
    const [radio_3, setRadio_3] = useState(false)

    return (
        <div className={styles.support}>
            <div className={styles.support__radios}>
                <div><input type={'radio'}
                            checked={radio_1}
                            onClick={() => {
                                setRadio_1(!radio_1)
                                setRadio_2(false)
                                setRadio_3(false)
                                setTargetVal('red')
                            }}
                            className={styles.radios}

                /> Red
                </div>
                <div><input type={'radio'}
                            checked={radio_2}
                            onClick={() => {
                                setRadio_1(false)
                                setRadio_2(!radio_2)
                                setRadio_3(false)
                                setTargetVal('green')
                            }}
                            className={styles.radios}

                /> Green
                </div>
                <div><input type={'radio'}
                            checked={radio_3}
                            onClick={() => {
                                setRadio_1(false)
                                setRadio_2(false)
                                setRadio_3(!radio_3)
                                setTargetVal('blue')
                            }}
                            className={styles.radios}
                /> Blue
                </div>
            </div>
            <div className={styles.support__okexit}>
                <button
                    onClick={() => {
                        props.ChangeColor(targetVal)
                        props.setVisible(false)
                    }
                    }

                >Ok
                </button>
                <button
                    onClick={() => props.setVisible(false)}
                >Cancel
                </button>
            </div>
        </div>
    );
};

export default SupportComponent;