var jafoi =[7,7,7,7,7];
var contador =0;
let perguntas = ["quem é o pai de lorion","quantos anos lorion tem?","qual a marca do celular de lorion","qual o nome da mãe de lorion","qual o nome do irmão de lorion"];
let respostas = [["Juca","José","Raimundo","Carlos"],["31","30","49","36"],["Motorola","Samsung","Apple","Zenfone"],["Amanda","Carla","Bruna","Eliana"],["Salomão","Pedro","Lucas","Levi"]];
let certas = ["c","a","b","d","c"];
var passar = false;
var jresposta = 8;
var pontos=0;

function carregamento(){
    if (contador <5) {
        while (passar != true){
        passar = true;
        jresposta = Math.floor(Math.random() * 5);
        jafoi[contador]=jresposta;
            if (contador == 0){ 
            passar=false;
            break;
            }else{
                for(i=0;i<contador;i++) {
                    if(jafoi[i]!=jresposta){}else{
                    passar = false;
                }
            }
        }
    }
 let msg = window.document.getElementById('pergunta')
     msg.innerHTML = perguntas[jresposta];

let respa = window.document.getElementById('a')
    respa.innerHTML = respostas[jresposta][0]

let respb = window.document.getElementById('b')
    respb.innerHTML = respostas[jresposta][1]

let respc = window.document.getElementById('c')
    respc.innerHTML = respostas[jresposta][2]

let respd = window.document.getElementById('d')
    respd.innerHTML = respostas[jresposta][3]
    } else {
        alert('Você concluiu o Game! Sua pontuação total foi: '+pontos);
        location.reload();
    }
}
function verificar(param){
    if(param == certas[jresposta]){
        pontos=pontos+5;
        window.document.getElementById('pontos').innerHTML=pontos.toString();
    }else{}
    contador++;
    let contador2 = contador+1
    window.document.getElementById('perguntaV').innerHTML=contador2.toString();
    passar=false;
    carregamento();
   

}