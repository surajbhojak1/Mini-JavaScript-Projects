const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result")

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter A Valid Height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter A Valid Weight ${weight}`
    }
    else{
       const BMI = (weight / ((height*height)/1000).toFixed(1));
       result.innerHTML = BMI;
    }
});