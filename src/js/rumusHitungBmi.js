export default function hitungBmi(heightCm, weightKg ){

    const heightM = heightCm/100;

    //berat dibagi dengan tinggi dalam meter kuadrat
    const bmi = weightKg / (heightM*heightM)

    return bmi
    
    
}

//testcase
// console.log(hitungBmi(170,70));

