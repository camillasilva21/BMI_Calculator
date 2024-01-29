function calculator_IMC(){
    let height, weight, imc, text_IMC;

    height = (document.getElementById("input_height").value) / 100;
    weight = document.getElementById("input_weight").value;

    imc=weight/(height ** 2);

    if(imc < 18.5){
        text_IMC = "Baixo Peso";
    } else if(imc <= 24.9 && imc >= 18.5){
        text_IMC = "Peso ideal";
    } else if(imc <=29.9 && imc >= 25) {
        text_IMC = "Sobrepeso";
    } else if(imc <= 34.9 && imc >= 30){
        text_IMC = "Obesidade Grau I";
    } else if(imc <= 39.9 && imc >= 35){
        text_IMC = "Obesidade Grau II";
    } else if(imc >= 40){
        text_IMC = "Obesidade Grau III ";
    }

    document.getElementById("text_area").innerHTML = "Seu IMC é: " + imc.toFixed(2).replace('.', ',') + ", indicando " + text_IMC;
}