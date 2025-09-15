const caixaPrincipal = documento.querySelector(".caixa-principal")
const caixaPerguntas = documento.querySelector(".caixa-perguntas")
const caixaAlternativas = documento.querySelector(".caixa-alternativas")
const caixaResultados = documento.querySelector(".caixa-resultados")
const textoResultado = documento.querySelector(".texto-resultados")

const perguntas = [
{
enunciado:"pergunta 1",
alternativas:[
    {
        texto: "alternativa 1",
        afirmacao: "afirmacao"
    },
     {
        texto: "alternativa 2",
        afirmacao: "afirmacao"
     }
    
    ]
},   
{    
enunciado: "pergunta 2",
alternativas: [
    {
        texto: "alternativa 1",
        afirmacao: "afirmacao"
    },
     {
        texto: "alternativa 2",
        afirmacao: "afirmacao"
     }
    ]
},
{    
    enunciado:"pergunta 3",
    alternativas:[{
        texto: "alternativa 1",
        afirmacao: "afirmacao"
    },
     {
        texto: "alternativa 2",
        afirmacao: "afirmacao"
     }]
},
{
    enunciado:"pergunta 4",
    alternativas:[{
        texto: "alternativa 1",
        afirmacao: "afirmacao"
    },
     {
        texto: "alternativa 2",
        afirmacao: "afirmacao"
     }]
},
{    
   enunciado:"pergunta 5",
   alternativas:[{
    texto: "alternativa 1",
    afirmacao: "afirmacao"
},
 {
    texto: "alternativa 2",
    afirmacao: "afirmacao"
 }]
},               

];

let atual = 0;
let perguntaAtual;

function mostrarperguntas(){
 perguntaAtual = pergunta[atual];  
 caixaPerguntas. textcontent = perguntaAtual. enunciado;
 mostrarAlternativas();
}
function mostrarAlternativas(){
 for(const alternativa of perguntaAtual.alternativas){
const botaoAlternativas = document.createElement(button)
botaoAlternativas.textcontent = alternativa.texto;
botaoAlternativa.addEventlistner("click", function(){
atual++;
mostrarpergunta();
})
caixaAlternativas.appendChild(botaoAlternativas);
 }   
}

mostrarperguntas();
