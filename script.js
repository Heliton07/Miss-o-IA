
const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")




const perguntas = [
   {
     enunciado: "Pergunta 1",
      alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {




           texto: "Alternativa 2",
           afirmacao: "afirmacao"}
        ]
       




    },
    {
         enunciado: "Pergunta 2",
         alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {




           texto: "Alternativa 2",
           afirmacao: "afirmacao"}
        ]




    },
    {
         enunciado: "Pergunta 3",
         alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {




           texto: "Alternativa 2",
           afirmacao: "afirmacao"}
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {




           texto: "Alternativa 2",
           afirmacao: "afirmacao"}
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
        {
            texto: "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {




           texto: "Alternativa 2",
           afirmacao: "a:root{
            --cor-fundo:#;
            --cor-principal:#;
            --cor-secundaria:#;
            --cor-destaque:#;
            --cor-texto:#;
            }firmacao"}
        ]
    }
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = " ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();:root{
    --cor-fundo:#;
    --cor-principal:#;
    --cor-secundaria:#;
    --cor-destaque:#;
    --cor-texto:#;
    }
