const calculateBtn = document.querySelector("#calculateBtn");
const clearBtn = document.querySelector("#clearBtn");


document.addEventListener("DOMContentLoaded", () => {
  calculateBtn.addEventListener("click", handleFormSubmission);
  clearBtn.addEventListener("click", clearForm);
});

const handleFormSubmission = (event) => {
  event.preventDefault();
    const height = document.querySelector("#height");
    const weight = document.querySelector("#weight");
  
    console.log("Height:", height.value);
    console.log("Weight:", weight.value);

    // BMI Logic ---------------->
    let height_value = parseFloat(height.value);
    let weight_value = parseFloat(weight.value);

    let BMI = 0;
    BMI = (weight_value / (height_value / 100)**2).toFixed(2);
    console.log("BMI ", BMI);
    
    let category = "";
    if(BMI < 18.5){
      category = "Underweight";
    }
    else if(BMI >= 18.5 && BMI < 24.9){
      category = "Normal";
    }
    else if(BMI >= 25 && BMI < 29.9){
      category = "Overweight";
    }
    else if(BMI >= 30 && BMI < 34.9){
      category = "Obese";
    }
    else if(BMI > 35.0){
      category = "Extream Obese"
    }
    
    if(height.value !== "" && weight.value !== ""){
        let output = document.querySelector("#output");
        output.innerText = `BMI = ${BMI} kg/m² \n(${category})`;
    }
  };
  
  const clearForm = (event) => {
    event.preventDefault();
    calculateBtn.disabled = false;
    document.getElementById("bmiForm").reset();
  };
  