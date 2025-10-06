const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um jovem do interior que encontra uma antiga câmera no sótão da casa do seu avô. Dentro dela, há rolos de filmes e um bilhete:Quem entender Mazzaropi, entende o Brasil.Você decide embarcar numa viagem para descobrir o legado de Amácio Mazzaropi, o caipira mais famoso do cinema nacional.A cada decisão, você molda o final dessa jornada;Qual é a principal característica dos personagens interpretados por Mazzaropi?",

        alternativas: [
            {
                texto: "Humor caipira e crítica social disfarçada.",
                afirmacao: "No início ficou em duvida sobre o mundo do mazzaropi. "
            },
            {
                texto: "Violência e ação no campo.",
                afirmacao: "você não conhece bem o mundo do mazzaropi."
            }
        ]
    },
    {
        enunciado: "Em (O Corintiano) (1966), Mazzaropi interpreta um torcedor fanático. O que esse filme retrata além do futebol?",
        alternativas: [
            {
                texto: "A relação entre fanatismo esportivo e o cotidiano da classe média.",
                afirmacao: "começando a entender melhor o mundo do mazzaropi."
            },
            {
                texto: "A ascensão de clubes milionários no futebol europeu. ",
                afirmacao: "não está entendendo o mundo do mazzaropi."
            }
        ]
    },
    {
        enunciado: "Mazzaropi produzia seus próprios filmes. Qual foi o estúdio criado por ele?",
        alternativas: [
            {
                texto: "PAM Filmes.",
                afirmacao: "agora sim está entendendo mais ainda."
            },
            {
                texto: "Estúdios Globo Rural.",
                afirmacao: "é da globo né então pense bem."
            }
        ]
    },
    {
        enunciado: "Por que os filmes de Mazzaropi foram considerados à margem do cinema “oficial” brasileiro por muitos críticos da época?",
        alternativas: [
            {
                texto: "Por seu tom popular, com foco em humor simples e linguagem acessível.",
                afirmacao: "se tu respondeu é porque sabe."
            },
            {
                texto: " Porque ele filmava apenas em Hollywood e ignorava a cultura brasileira.",
                afirmacao: "claramente não era essa."
            }
        ]
    },
    {
        enunciado: "O legado de Mazzaropi ainda é lembrado hoje em... ",
        alternativas: [
            {
                texto: "Museus, festivais e homenagens no interior paulista.",
                afirmacao: "só os brabo respondem certo."
            },
            {
                texto: "Videogames e séries de ficção científica.",
                afirmacao: "tu é burro cara. "
            }
        ]
    },
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
    caixaPerguntas.textContent = "após tudo isso você percebeu que tu manja do mundo do mazzaropi";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
