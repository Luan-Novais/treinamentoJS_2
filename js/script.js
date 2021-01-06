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

let nome = 'Luan Araujo de Santana Novais';

console.log(nome.indexOf('Novais')); //Conta onde esta a primeira letra do valor procurado, caso não ache seu valor é -1
console.log(nome.length); //Contar a quantidade de caracteres q tem uma string
console.log(nome.slice(-4)); //Busca string nas posições de trás para frente
console.log(nome.substring(0,10)); // Busca string somente das posições positivas, posição inicial até a posição 10 
console.log(nome.substr(0,2)); // Inicia a leitura da posição 0 e conta 2 caracteres