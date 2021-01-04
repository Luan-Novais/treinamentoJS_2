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

function menuToggle(){
    let menuArea =  document.getElementById('menu-area');
    if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
    }else{
        menuArea.classList.add('menu-opened');
    }

};

