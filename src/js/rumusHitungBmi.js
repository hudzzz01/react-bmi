export function hitungBmi(heightCm, weightKg ){

    const heightM = heightCm/100;

    //berat dibagi dengan tinggi dalam meter kuadrat
    const bmi = weightKg / (heightM*heightM)

    let category = "";

    if(bmi > 30.0){
        category = "Obesitas"
    }else if (bmi <=29.0 && bmi >= 25.0){
        category = "Kelebihan Berat Badan"
    }else if (bmi <25.0 && bmi >= 18.5){
        category = "normal"
    }else if(bmi <18.5){
        category = "kurus"
    }else{
        category = "tidak valid"
    }

    return {
        category :category,
        bmi : bmi
    }
    
    
}


// console.log(hitungBmi(168,80));

