// function alterar(titulo2){
//     let titulo = document.getElementById('titulo');
//     titulo.innerHTML = titulo2;

//     let campo = document.getElementById('campo');
//     campo.value = titulo2;
// }


// function somar(x, y){
//     let total = x + y;

//     return total;
// }

// // var result = somar(20, 5);
// // console.log(result);

// function clicou(){
//     document.getElementById('titulo').innerHTML = 'Obrigado'
// }

// function digitou(e){
//     if(e.keyCode == 13 && e.ctrlKey == true){
//        let texto = document.getElementById('campo').value;
//        console.log(texto);
//     }
// }

// function azul(){
//     limpar();
//     document.getElementById('titulo').classList.add('azul');
// }

// function vermelho(){
//     limpar();
//     document.getElementById('titulo').classList.add('vermelho');
// }

// function verde(){
//     limpar();
//     document.getElementById('titulo').classList.add('verde');
// }

// function limpar(){
//     document.getElementById('titulo').classList.remove('azul');
//     document.getElementById('titulo').classList.remove('verde');
//     document.getElementById('titulo').classList.remove('vermelho');

// }

// function mostrarTelefone(){
//     document.getElementById('telefone').style.display = 'block'

// }


// // let carros = ['palio','uno','corolla','ferrari'];
// // console.log(carros)

// let carro = {
//     marca: 'Fiat',
//     modelo: 'Uno',
//     peso: '800kg',
//     ligado: false,
//     ligar:function(){ 
//         this.ligado = true;
//         console.log('VRUMM VRUMM');
//     },
//     acelerar:function(){
//         if(this.ligado == true){
//             console.log('Riiiiiiiiihihhh');
//         }
//     }

// };

// console.log('Modelo: '+carro.modelo);

// // carro.ligar();
// carro.acelerar();

// function menuToggle(){
//     let menuArea =  document.getElementById('menu-area');
//     if(menuArea.classList.contains('menu-opened') == true){
//         menuArea.classList.remove('menu-opened');
//     }else{
//         menuArea.classList.add('menu-opened');
//     }

// };


// let dia = 3;
// let diaNome = '';

// switch(dia){
//     case 1:
//         diaNome = 'segunda-feira';
//         break;
//     case 2:
//         diaNome = 'terça-feira';
//         break;
//     case 3:
//         diaNome = 'quarta-feira';
//         break;
//     case 4:
//         diaNome = 'quinta-feira'
//         break;
//     case 5:
//         diaNome = 'sexta-feira';
//         break;
//     case 6:
//         diaNome = 'Sábado';
//         break;
//     default:
//         diaNome = 'Domingo';
//         break;
// };

// let texto = '';

// for(i=0; i<50; i++){
//     texto = texto + i + '<br>';
// };

// let carros = ['Ferrari','Palio','Uno','Fusca','Brasilia']

// let html  = '<ul>'; 

// for(i in carros){
//     html += '<li>' + carros[i] +'</li>';
// }

// html += '</ul>'

// document.getElementById('exemplo').innerHTML = html

// let html = '';
// let c = 0;

// while(c <= 10){
//     html += 'Numero: '+c+ '<br/>'
//     c++;
// }

// document.getElementById('exemplo').innerHTML = html

//let nome = 'Luan Araujo de Santana Novais';

// console.log(nome.indexOf('Novais')); //Conta onde esta a primeira letra do valor procurado, caso não ache seu valor é -1
// console.log(nome.length); //Contar a quantidade de caracteres q tem uma string
// console.log(nome.slice(-4)); //Busca string nas posições de trás para frente
// console.log(nome.substring(0,10)); // Busca string somente das posições positivas, posição inicial até a posição 10 
// console.log(nome.substr(0,2)); // Inicia a leitura da posição 0 e conta 2 caracteres - funciona com valores negativos tbm
// console.log(nome.replace('Luan','Jardel'))  substitui um pelo outro, primeiro parametro, valor a ser substituido, valor é o novo texto a ser inserido. 
// console.log(nome.toUpperCase()) // deixar todo conteudo da variavel em maiusculo
// console.log(nome.toLocaleLowerCase()) // deixar todo o conteudi da variavel em minusculo
// console.log(nome.concat(' Mais ummmmmmm')) // concatenar , mas podemos usar o + para isso 
// console.log(nome.trim()) // remover espaçoes da string
// console.log(nome.charAt(3)); // verificar posição de um caracter especifico passando o numero
// console.log(nome.split(' '))// tranforma uma string em um array, eu passo o delimitador que separa os valores da string.


// Trabalhando com numeros:
//toString() - Tranforma um number em string
//toFixed() - passo a quantidade de casas decimais
//parseInt() - tranforma de string para inteiro , passando a variavel como parametro. 
//parseFloat() - tranforma string em decimal, passando a variavel como parametro 
// let n = '10.8888';

// let res = parseFloat(n).toFixed(2)
// console.log(res);

//trabalhando com Arrays


// let res = lista.toString(); - tranforma array em uma string
// let res = lista.join(' - ');  tranforma array em uma string separando os itens pelo parametro que eu passar
// let res = lista.indexOf('Farinha'); - Procura o item na  lista e retorna a 
// lista.pop(); - Remove o ultimo item do array 
// lista.shift(); - Remove o primeiro item do array
// lista.push('Chocolate'); - Adiciona um novo item no array
// lista[0] = 'Ovos' - Alterando o valor de um conteudo do array
// delete lista[1]; // Mantem a posição mas apaga o valor
// lista.splice(1,1) // remove a partir do item 1 , um unico item, que foi oq passei no parametro. 
// let res = lista.concat(lista2); - Junta os arrays 
// let res = lista.sort(); Ordena o array em forma alfabetica
// let res = lista.reverse(); Inverte as oposições do array 
/*
lista2 = lista.map(function(item){
    return item * 2
});
Faz um loopping no array e retona um novo multiplicado por 2. 

------------------------------------------------------------------------

lista2 = lista.filter(function(a){
    if(a < 20){
        return true
    }
});
Filtra o array e joga o valor dos que retonaram true em uconst namesThatStartsWithM = names.filter(startsWithM); // ["Marcos"]
m novo array

------------------------------------------------------------------------

lista2 = lista.every(function(item){
    if(item < 20){
        return true;
    }
})
Faz uma verificação em todo o array

------------------------------------------------------------------------


lista2 = lista.some(function(item){
    return (item > 3) ? true:false
});
Faz uma verificação em todo o array e se um satisfazer a condição ele retorna true

--------------------------------------------------------------------------------

lista2 = lista.find(function(item){
    return (item == 16) ? true:false
}); 
Retorna o item , faz uma busca no array pela condição que eu coloquei

------------------------------------------------------------------------------------

lista2 = lista.findIndex(function(item){
    return (item == 16) ? true:false
}); 
Retorna a posição do elemento TRUE do array 

------------------------------------------------------------------------

*/

// let lista = [
//     {id:'123', nome:'Luan',sobrenome:'Novais'},
//     {id:'451', nome:'Jatde',sobrenome:'Silva'},
//     {id:'154', nome:'Thaiane',sobrenome:'Novais'},

// ];

// let pessoa = lista.find(function(a){
//     return (a.sobrenome == 'Novais') ? true:false
// });

// lista = pessoas.find(function(item){
//     return (item == 'Luan') ? true:false
// });

// let lista2 = [];

// lista2 = lista.split(' - ');

//TRABALHANDO COM DATAS 

// let d = new Date();
//let  d = Date.now(); = Retorna a data atual em milesegundos
// let d = new Date(); - Criando um objeto do tipo Date, posso colocar até 7 parametros
// d.toDateString(); Retorna somente data, sem horarios
// d.toUTCString(); Retorna data com Horarios HHMMSS
// getFullYear(); = retorna ano 
// getMonth(); = retorna mes
// getDay(); = retorna o dia da semana (semana começa no domingo)
// getDate(); = Pega o dia da semana 
// getHours();
// getSeconds(); 
// getMilliseconds();
// getTime();
// PARA TROCAR OS VALORES DE DATA IREMOS MUDAR O GET por SET 

// MATEMATICA 
// Math é a classe de matematica do JS
// Math.round() - Arredondar numeros 
// Math.floor() - Sempre arredonda para baixo
// Math.ceil () - Sempre arredonda para cima 
// Math.abs() - Busca o numero absoluto  
// Math.min(7,2,5,3,1) - retorna o menor numero deles 
// Math.max(;7,2,5,3,1) - retorna o maior numero deles
// Math.random() - retorna um numero aleatorio entre 0 e 1 
// Math.floor(Math.random() * 100); 
// let novoValor = Math.floor(Math.random() * 100); 

// INTERVALOS - TIMES 
// let timer;

// function comecar(){
//     timer = setInterval(showTime, 100);
// }

// function parar(){
//     clearInterval(timer);
// }


// function showTime(){
//     let d = new Date();
//     let mm = d.getMilliseconds();
//     let s = d.getSeconds();
//     let m = d.getMinutes();
//     let h = d.getHours();
//     let txt = h+':'+m+':'+s+':'+mm;

//     document.querySelector('.demo').innerHTML = txt;
// }

// function limparCronometro(){
//     document.querySelector('.demo').innerHTML =''
// }

// setTimeout(function(){(
//     document.querySelector('.demo').innerHTML = 'FOOOII'
// )}, 2000);

/*
TEMPLATE STRING
let nome = 'Luan';
let idade = 90;
console.log(`meu nom é ${nome} e eu tenho ${idade + 1} anos`); */

// DESCONSTRUINDO OBJETOS
/*
let pessoa = {
    nome: 'Luan',
    idade: 28,
    sobrenome: 'Novais',
    social:{
        facebook: 'luan.novais@outlook.com',
        instagran:{
            url: '@lasnovais',
            seguidores:1000
        }
    },
};

let { nome, sobrenome, social:{ facebook}, social:{instagran: { url }}} = pessoa
console.log(`Guest: ${nome} ${sobrenome} ,Facebook: ${facebook} and Instagran ${url}`)


function pegarNomeCompleto({nome, sobrenome}) {
    return `${nome} ${sobrenome}`;
 }

 console.log(pegarNomeCompleto(pessoa));

DESCONSTRUINDO ARRAYS
// let info = [ 'Luan Novais', 'Luan', 'Novais', '@lasnovais' ];
// let [ nomeCompleto, nome, sobrenome, instagran ] = info;

// console.log(nomeCompleto, nome, sobrenome, instagran);*/


// ARROW FUNCTIONS
// const somar = (x, y) => {return x + y;}
// const somar = (x, y) => x + y
// const letrarNoNome = (nome) => {
//     return nome.length;
// }


// let result = letrarNoNome('Luan');
// console.log(result);

// let numeros = [1,2,3,4];

// let outros = [...numeros,6,7,8];
// console.log(outros);

// let info = {
//     nome:'Luan',
//     sobrenome:'Novais',
//     idade:30
// };

// let novaInfo = {
//     ...info,
//     cidade:'Santana de parnaiba',
//     estado:'sp',
//     pais:'Brasil'
// };


// function adicionarInfo(info){
//     let novasInfo = {
//         ...info,
//         status:0,
//         token:'fdsjkgds51gs',
//         data_cadastro:new Date()
//     };

//     return novasInfo
// };

// console.log(adicionarInfo({nome:'Luan', sobrenome:'Novais'}))
 
//OPERADOR SPREAD - APROVEITA OS VALORES DE UM ARRAY OU OBJETO , EM UM NOVO.. SINTAXE -  ...ARRAY, 

/*
let numeros = [1,2,3];
let outros = [
    ...numeros,
    3,4,5,6
];

console.log(outros) */

// OPERADOR REST - quandoe u não sei quantos itens serão enviados, eu recebo todos em formato de array
/*
let nomes = [ 'JOao','Maria']

function adicionar(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto
}


let outros = adicionar(nomes,'Antonio','João','Marias');

console.log(outros)*/

// -------------- INCLUDES -----------
/*
let lista = ['ovo', 'cafe', 'arroz', 'feijão', 'macarrão'];
// console.log( lista.includes('ovo') );

let nome = 'Luan';
// console.log( nome.includes('n') );

console.log( 'x'.repeat(20) );*/

//----------------------------OBJECT KEY/VALUES -----------

// Object.values(); = retorna os valores do array ou objeto
// Object.keys(); = retorna as chaves do objeto ou array 

/*
let lista = ['ovo', 'cafe', 'arroz', 'feijão', 'macarrão'];
let pessoa = {
    nome:'Luan',
    sobrenome: 'NOvaios',
    idade: 90
};

console.log( Object.values(pessoa) );*/

// let cartao = '1234123412341234';
// let lastDigital = cartao.slice(-4);

// console.log( 'Seu cartão é: ' + lastDigital.padStart(16, '*') );
// // console.log( telefone );

// ---- PROMISE ---- 
/*
function fazer(){
    let promessa = new Promise( (resolve,reject) => {
        setTimeout( () =>{
            resolve('OK');
        }, 3000 )
       
    });

    return promessa
}

fazer().then( (resposta) =>{
    console.log(resposta);
});*/

// -- fetch -- REQUISIÇÕES AJAX
function requisitar(){
    const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'POST',
    body:JSON.stringify({
        nome:'Luan',
        idade: 99
    })
};

fetch(url,params)
    .then((r)=>r.json())
    .then((json)=>{
        console.log(json);
    });
}

async function requisitar2(){
    const url = 'https://alunos.b7web.com.br/api/ping';


    const r = await fetch(url)
    const jason = await r.json();

    console.log(jason)
}

requisitar2();