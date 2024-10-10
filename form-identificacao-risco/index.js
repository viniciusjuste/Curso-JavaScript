const form_riskIdentification = document.getElementById('form_riskIdentification');
const f_nameDawn = document.getElementById('f_nameDawn');
const f_valueDawn = document.getElementById('f_valueDawn');
const probabilityRisk = document.getElementById('probabilityRisk');
const severityImpact = document.getElementById('severityImpact');
const btn_risk = document.getElementById('btn_risk');

let numericValue = 0;

const assignValue = (e) => {
    if (e == 3) {
        numericValue = 3; // Alto
    } else if (e == 2) {
        numericValue = 2; // Médio
    } else if (e == 1) {
        numericValue = 1; // Baixo
    } else {
        numericValue = 0; // Valor padrão caso não corresponda
    }
    return numericValue;
}

btn_risk.addEventListener('click', (e) => {
    e.preventDefault()
    const valueDawn = f_valueDawn.value;
    const nameDawn = f_nameDawn.value;
    let riskScore = valueDawn * assignValue(severityImpact.value) * assignValue(probabilityRisk.value);

    console.log(`Ativo: ${nameDawn}`);
    console.log(`Pontuação de risco: ${riskScore}`);
    
    if(riskScore >= 0 && riskScore <= 500){
        console.log('Nível de risco: Baixo')
    } else if(riskScore > 500 && riskScore <= 1000){
        console.log('Nível de risco: Médio')
    } else if(riskScore > 1000){
        console.log('Nível de risco: Alto')
    }
})

