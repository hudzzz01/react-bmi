import React from 'react';
import olahragaBarbel from '../assets/olahraga_barbel.svg';
import olahragaBike from '../assets/olahraga_bike.svg';
import minum from '../assets/minum.svg';
import eat from '../assets/eat.svg';
import moonLight from '../assets/moon_light.svg';



const HasilBmi = ({ bmiObj }) => {


    const categoryImages = {
        "Obesitas": olahragaBarbel,
        "Kelebihan Berat Badan": olahragaBike,
        "normal": minum,
        "kurus": eat,
        "default": moonLight
    };

    const imageSrc = categoryImages[bmiObj.category] || categoryImages["default"];
    
    const imageMaskot = (
        <img className='mt-0 mb-2 around' style={{ width: "200px" }} src={imageSrc} alt="maskot" />
    );

    return (

        <div className='d-flex justify-content-center'>
              <div className="card text-center pt-5  bg-semi-green border-0 shadow" style={{ width: "18rem" }} >
            <div className="border-0 card-header bg-semi-green font-weight-bold fs-4 color-dark-green kanit-bold">
                Hasil BMI <i class="bi bi-person-arms-up"></i>
            </div>
            <div className=" shadow rounded border-0 card-body bg-light-green kanit-bold color-dark-green">
                <h5 className="card-title">{bmiObj.count}</h5>
                <p className="card-text">{bmiObj.category}</p>

            </div>
            <div className="card-footer text-muted bg-semi-green font-weight-bold fs-6 color-dark-green kanit-bold d-flex flex-column align-items-center justify-content-center gap-2">
                {bmiObj.id == 0 ? "silakan hitung BMI" : bmiObj.id}

                {imageMaskot}

            </div>
        </div>
        </div>
      
    );
}

export default HasilBmi;
