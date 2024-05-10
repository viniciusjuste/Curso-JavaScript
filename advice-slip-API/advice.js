const p_advice = document.getElementById('p_advice');
const btn_advice = document.getElementById('btn_advice');

const obterConselho = () => {
    const originalAdviceEndpoint = 'https://api.adviceslip.com/advice';
    const translateEndpoint = 'https://api.mymemory.translated.net/get?q=';

    fetch(originalAdviceEndpoint)
        .then(response => response.json())
        .then(data => {
            const originalAdvice = data.slip.advice;
            const encodedAdvice = encodeURIComponent(originalAdvice);
            const languagePair = 'en|pt'; // Inglês para Português

            return fetch(translateEndpoint + encodedAdvice + '&langpair=' + languagePair);
        })
        .then(response => response.json())
        .then(translationData => {
            const translatedAdvice = translationData.matches[0].translation;
            p_advice.innerHTML = translatedAdvice;
        });
};

btn_advice.addEventListener('click', obterConselho);
