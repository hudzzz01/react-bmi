import React, { useState } from 'react';
import InputFormCalculator from './InputFormCalculator';
import HasilBmi from './HasilBmi';
import HistoryBmi from './HistoryBmi';

const Calculator = () => {
    const [bmiObj, setBmiObj] = useState({
        name: "",
        count: 0,
        category: null,
        id: 0
    });

    const [arrHistory, setArrHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);



    const deleteHistoryById = (id) => {
        const newHistory = arrHistory.filter(history => history.id !== id);
        setArrHistory(newHistory)
        localStorage.setItem("history", JSON.stringify(newHistory));

        console.log(JSON.parse(localStorage.getItem("history")``.length));

    }

    return (
        <div className='bg-dark-green py-5'>
            <div className='d-flex flex-wrap justify-content-center gap-3'>
                <InputFormCalculator setBmiObj={setBmiObj} setArrHistory={setArrHistory} />

                <HasilBmi bmiObj={bmiObj} />

            </div>

            <HistoryBmi arrHistory={arrHistory} deleteHistoryById={deleteHistoryById} />
        </div>
    );
}

export default Calculator;
