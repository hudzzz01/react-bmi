import React from 'react';
import InputFormCalculator from './InputFormCalculator';
import HasilBmi from './HasilBmi';

const Calculator = () => {
    return (
        <div className='bg-dark-green py-5'>
            <InputFormCalculator />

            <HasilBmi />

        </div>
    );
}

export default Calculator;
