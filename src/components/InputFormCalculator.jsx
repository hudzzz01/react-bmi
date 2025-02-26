import React, { useRef } from 'react';
import { hitungBmi } from "../js/rumusHitungBmi";

const InputFormCalculator = ({setBmiObj, setArrHistory}) => {

    const weightKg = useRef();
    const heightCm = useRef();
    const name = useRef();

    function hanldeEnter(event){
        event.preventDefault();
        calculateBmi()
    }

    function handleClickSumbit(event) {
        
        //prevent reload my page
        event.preventDefault();

        //get bmi result and passing
        const result = calculateBmi();

        //add to history in local storage
        addHistory(result);
            
        



    }

    function addHistory(resultBmiObj){
        const oldHistory = JSON.parse(localStorage.getItem("history")) || [];
        const newHistory = [...oldHistory, resultBmiObj]
        
        //save to the local storage
        localStorage.setItem("history", JSON.stringify(newHistory));

        console.log("ini local storage");
        
        console.log(JSON.parse(localStorage.getItem("history")));

        //add new history to my state for trigger history component
        setArrHistory(newHistory)
        
    }

    function calculateBmi(){
        let nameDisplay = name.current.value;
        let height = heightCm.current.value;
        let weight = weightKg.current.value;
        console.log(typeof (height));

        //adding some validation input becouse some browser cant't handle it
        try {
            validation(height, weight)
        } catch (e){
            alert(e.message)
            return
        }


        const result = hitungBmi(height, weight);
        const bmi = result.bmi;
        const category = result.category
        console.log(bmi);
        console.log(category);
        
        

        //set bmi pass to anotercomponent
        const resultObjBmi = {
            name : nameDisplay,
            count : bmi,
            category : category,
            id : Date.now()
        }

        console.log(resultObjBmi);
        
        
        setBmiObj(resultObjBmi)

        return resultObjBmi;
    }
    

    function validation(h, w) {
        h = Number(h);
        w = Number(w);
        console.log(h);
        console.log(w);
        

        if (h <= 1 || w <= 1) {
            
            throw Error(" Input tidak boleh kurang dari 1")
        }
        
        if (h == 0 || w == 0) {
      
            throw Error(" Input harus angka")
        }

        if (h >= 1000 || w >= 1000) {
            
            throw Error(" Input terlalu besar maximal 1000")
        }
    
        


    }

    return (
        <form className='bg-semi-green mx-5 pb-5 rounded shadow'>
            <h1 className='text-center fs-4 kanit-bold pt-4 color-dark-green'>Calculator </h1>
            <div classNameName=''>
                <div className="input-group px-5 pt-5">
                    <span className="input-group-text bg-dark-green rounded border-0 color-light-green kanit-light" id="inputGroup-sizing-default">Your Name </span>
                    <input type="text" ref={name} className="form-control bg-light-green border-0" placeholder='Ex. Hudzaifah' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className='d-flex gap-2 px-5 pt-4'>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text bg-dark-green rounded border-0 color-light-green kanit-light" id="inputGroup-sizing-sm">Height <span className='pt-2 ms-1 fs-5'>cm</span></span>
                        <input type="number" ref={heightCm} className="form-control bg-light-green border-0 " placeholder='Ex. 179' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text bg-dark-green rounded border-0 color-light-green kanit-light" id="inputGroup-sizing-sm">Weight<span className='pt-2 ms-1 fs-5'>kg</span></span>
                        <input type="number" ref={weightKg} className="form-control bg-light-green border-0 " placeholder='Ex. 64' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center mx-5 '>
                    <button onClick={handleClickSumbit} type="submit" className="btn btn-success bg-dark-green rounded border-0 color-light-green kanit-light">Submit</button>

                </div>


            </div>
        </form>
    );
}

export default InputFormCalculator;
