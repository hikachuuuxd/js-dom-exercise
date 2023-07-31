import { useState } from 'react';
import './Calculator.css';

export default function Calculator(){
    const [calc, setCalc] = useState('')
    const  [result, setResult] = useState('')

    const ops = ['/', '*', '-', '+', '.'];
    const updateCalc = value => {
        if(
            ops.includes(value) && calc == '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) return;
        setCalc(calc + value)

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
        console.log(calc)
    }

    const getEquals = () => {
        setCalc(eval(calc).toString())
    }

    const setDelete = () => {
        if(calc == '0') return ;
        const value = calc.slice(0, -1);
        setCalc(value);
    
        if(ops.includes(value.slice(-1))){
            setResult(eval(value.toString().slice(0, -1)))
        }else{
            setResult(eval(value.toString()));
        }
    }
    
    const createDigits = () =>{
        const digits = [];
        for(let i = 1; i<10; i++){
            digits.push(
                <button 
                    key={i} 
                    onClick={() => updateCalc(i.toString())}>
                    {i}
                    </button>
            )
        }
    return digits;
    }
 return(
    <div className='app'>
    <div className='calculator'>
    <div className='display'>
        {result && <span>({result})</span>} {calc || '0'}
    </div>
    <div className='operator'>
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={setDelete}>DEL</button>
    </div>
    <div className='digits'>
        {createDigits()}
        <button onClick={() => updateCalc(0)}>0</button>
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={getEquals}>=</button>
    </div>
</div>
    </div>
 )
}