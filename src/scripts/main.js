AOS.init();

document.addEventListener('DOMContentLoaded', function(){
    const endPoint = 'https://api.github.com/users/johnicassere';
    const avatar = document.querySelector('.header__logo');
    const dataAniversario = new Date("may 09, 2025 18:00:00");
    const timeStampAniversario = dataAniversario.getTime();
    const quando = ' 09/05/2025'
    

    fetch(endPoint).then(function(res){
        return res.json()
    })
    .then(function(json){
        //console.log(json.avatar_url);
        avatar.src = json.avatar_url;
        
    })
    .catch(function(err){
        console.log(err);
    })

    const contasHoras = setInterval(function(){
        const agora = new Date;
        const timeStampAtual = agora.getTime();

        const distanciaAniversario = timeStampAniversario - timeStampAtual;

        const diaMs = 1000 * 60 * 60 * 24;
        const horasMs = 1000 * 60 * 60;
        const minutosMs = 1000 * 60;

        const diasAteEvento = Math.floor(distanciaAniversario / diaMs)
        const horasAteEvento = Math.floor((distanciaAniversario % diaMs) / (horasMs))
        const minutosAteEvento = Math.floor((distanciaAniversario % horasMs) / (minutosMs))
        const segundosEvento = Math.floor((distanciaAniversario % minutosMs) / 1000)

        document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosEvento}s`
        document.getElementById("quando").innerHTML = `${quando}`

        if( distanciaAniversario < 0){
            clearInterval(contasHoras)
            document.getElementById("contador").innerHTML = "Aniversário já passou";
        }
        
    },1000)


})

$(document).ready(function(){
    $('#cep').mask('00000-000');
    const cep = '01031-970';
    const endPoint = `https://viacep.com.br/ws/${cep}/json`;
    

    fetch(endPoint).then(function(res){
        return res.json()
    })
    .then(function(json){
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;
        const endereco = `${logradouro} - ${bairro}:  ${cidade} - ${estado}`;
        
        const ender = document.querySelector('#endereco')
        const valorPreco = document.querySelector('#preco')
        const preco = '0800 - grátis'

        valorPreco.innerText = preco
        ender.innerText = endereco   
        
    })
    .catch(function(err){
        console.log(err);
    })
})
    
    

    