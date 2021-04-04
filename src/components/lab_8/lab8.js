import React, {useState, useEffect} from 'react'

import styles from '../../styles/css/lab8.module.css'

const Lab8 = () => {

    const [bank, setBank] = useState(100)

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [thirdNumber, setThirdNumber] = useState(0)
    const [fourthNumber, setFourthNumber] = useState(0)

    const [firstNumberImage, setFirstNumberImage] = useState(`${process.env.REACT_APP_CHERVA}`)
    const [secondNumberImage, setSecondNumberImage] = useState(`${process.env.REACT_APP_PIKA}`)
    const [thirdNumberImage, setThirdNumberImage] = useState(`${process.env.REACT_APP_BYBA}`)
    const [fourthNumberImage, setFourthNumberImage] = useState(`${process.env.REACT_APP_HRESTA}`)

    let numbers_arr = [firstNumber, secondNumber, thirdNumber, fourthNumber]

    let first_counter = 0
    let second_counter = 0
    let third_counter = 0
    let fourth_counter = 0

    let Randomizer = () => {
        setFirstNumber(Math.floor(Math.random() * 4) + 1)
        setSecondNumber(Math.floor(Math.random() * 4) + 1)
        setThirdNumber(Math.floor(Math.random() * 4) + 1)
        setFourthNumber(Math.floor(Math.random() * 4) + 1)
        console.log(`1: ${first_counter}, 2: ${second_counter}, 3: ${third_counter}, 4: ${fourth_counter}`)

    }

    useEffect(() => {
        for (let i = 0; i <= numbers_arr.length; i++) {
            if (numbers_arr[i] === 1) {
                first_counter++
            } else if (numbers_arr[i] === 2) {
                second_counter++
            } else if (numbers_arr[i] === 3) {
                third_counter++
            } else if (numbers_arr[i] === 4) {
                fourth_counter++
            }
        }
    }, [numbers_arr])

    const check_same = () => {
        setBank(bank - 2)
        first_counter === 4 ? setBank(bank + 9) :
            second_counter === 4 ? setBank(bank + 9) :
                third_counter === 4 ? setBank(bank + 9) :
                    fourth_counter === 4 ? setBank(bank + 9) :
                        first_counter === 2 && second_counter === 2 ? setBank(bank + 6) :
                            first_counter === 2 && third_counter === 2 ? setBank(bank + 6) :
                                first_counter === 2 && fourth_counter === 2 ? setBank(bank + 6) :
                                    second_counter === 2 && third_counter === 2 ? setBank(bank + 6) :
                                        second_counter === 2 && fourth_counter === 2 ? setBank(bank + 6) :
                                            third_counter === 2 && fourth_counter === 2 ? setBank(bank + 6) :
                                                first_counter === 3 ? setBank(bank + 6) :
                                                    second_counter === 3 ? setBank(bank + 6) :
                                                        third_counter === 3 ? setBank(bank + 6) :
                                                            fourth_counter === 3 ? setBank(bank + 6) :
                                                                first_counter === 2 ? setBank(bank + 3) :
                                                                    second_counter === 2 ? setBank(bank + 3) :
                                                                        third_counter === 2 ? setBank(bank + 3) :
                                                                            fourth_counter === 2 ? setBank(bank + 3) :
                                                                                console.log('You are lose!')
    imageChanger()
    }
    const imageChanger = () => {
        FirstImageChanger()
        SecondImageChanger()
        ThirdImageChanger()
        FourthImageChanger()
    }
    const FirstImageChanger = () => {
        firstNumber === 1 ? setFirstNumberImage(`${process.env.REACT_APP_CHERVA}`) :
            firstNumber === 2 ? setFirstNumberImage(`${process.env.REACT_APP_BYBA}`) :
                firstNumber === 3 ? setFirstNumberImage(`${process.env.REACT_HRESTA}`) :
                    firstNumber === 4 ? setFirstNumberImage(`${process.env.REACT_APP_PIKA}`) : console.log('You are lose!')
    }
    const SecondImageChanger = () => {
        secondNumber === 1 ? setSecondNumberImage(`${process.env.REACT_APP_CHERVA}`) :
            secondNumber === 2 ? setSecondNumberImage(`${process.env.REACT_APP_BYBA}`) :
                secondNumber === 3 ? setSecondNumberImage(`${process.env.REACT_HRESTA}`) :
                    secondNumber === 4 ? setSecondNumberImage(`${process.env.REACT_APP_PIKA}`) : console.log('You are lose!')
    }
    const ThirdImageChanger = () => {
        thirdNumber === 1 ? setThirdNumberImage(`${process.env.REACT_APP_CHERVA}`) :
            thirdNumber === 2 ? setThirdNumberImage(`${process.env.REACT_APP_BYBA}`) :
                thirdNumber === 3 ? setThirdNumberImage(`${process.env.REACT_HRESTA}`) :
                    thirdNumber === 4 ? setThirdNumberImage(`${process.env.REACT_APP_PIKA}`) : console.log('You are lose!')
    }
    const FourthImageChanger = () => {
        fourthNumber === 1 ? setFourthNumberImage(`${process.env.REACT_APP_CHERVA}`) :
            fourthNumber === 2 ? setFourthNumberImage(`${process.env.REACT_APP_BYBA}`) :
                fourthNumber === 3 ? setFourthNumberImage(`${process.env.REACT_HRESTA}`) :
                    fourthNumber === 4 ? setFourthNumberImage(`${process.env.REACT_APP_PIKA}`) : console.log('You are lose!')
    }

    const cashout = () => {
        alert(`You win: ${bank}. Congratulation!`)
        setBank(0)
    }

    return (
        <div className={styles.main_block}>
            <div className={styles.main_block__header}>
                <h1>Fourup</h1><p>3 od a kinds</p>
            </div>
            <div className={styles.main_block__randoms}>
                <div className={styles.main_block__randoms__bank}>
                    <p>Amount remaining {bank}$</p>
                </div>
                <div className={styles.main_block__randoms__items}>
                    <div className={styles.main_block__randoms__items__block}>
                        {/*{firstNumber}*/}
                        <img src={firstNumberImage}/>
                    </div>
                    <div className={styles.main_block__randoms__items__block}>
                        {/*{secondNumber}*/}
                        <img src={secondNumberImage}/>
                    </div>
                    <div className={styles.main_block__randoms__items__block}>
                        {/*{thirdNumber}*/}
                        <img src={thirdNumberImage}/>
                    </div>
                    <div className={styles.main_block__randoms__items__block}>
                        {/*{fourthNumber}*/}
                        <img src={fourthNumberImage}/>
                    </div>
                </div>
            </div>
            <div className={styles.main_block__info_count}>
                <p>Payots</p>
                <div className={styles.main_block__info_count__lies}>
                    <div>
                        <ul>
                            <li>2 pair</li>
                            <li>3 of kids</li>
                            <li>4 of kids</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>3.00</li>
                            <li>6.00</li>
                            <li>9.00</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={styles.main_block__buttons}>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        Randomizer()
                        check_same()
                    }}
                >Deal - $2.00
                </button>
                <button
                    onClick={() => cashout()}
                >Cash out</button>
            </div>
        </div>
    )
}

export default Lab8