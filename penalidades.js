
let btn = document.querySelector('#ver');
    btn.addEventListener('click', calcular);
    function calcular(){
        let via = Number(maxima.value)
        let carro = Number(velocidade.value)

        if(carro < via){
            resultado.innerHTML = '<br> Você não foi autuado :)'
            resultado.className = 'result ok'
        }
        if((carro > via) && (carro <= via + 7)){
            resultado.innerHTML = '<br> Advertência'
            resultado.className = 'result advertencia'
        }
        if((carro > via + 7) && (carro <= via + via * 0.20)){
            resultado.innerHTML = '<br> Autuado! Infração Media <br> Multa: R$130,16 <br> Pontos CNH: 4'
            resultado.className = 'result media'
        }
        if((carro > via + via * 0.20) && (carro <= via + via * 0.50)){
            resultado.innerHTML = '<br> Autuado! Infração Grave <br> Multa: R$195,23 <br> Pontos CNH: 5'
            resultado.className = 'result grave'
        }
        if(carro > via + via * 0.50){
            resultado.innerHTML = '<br> Autuado! Infração Gravíssima <br> Multa: R$880,41 <br> Penalidade de suspensão do direito de dirigir.'
            resultado.className = 'result gravissima'
        }
    }