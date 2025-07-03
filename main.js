const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-rresultado");

const perguntas = [
    {
        enunciado: "Você acorda e percebe o clima mais intenso. Percebe que isso não é comum, mas por conta das obrigações diárias apenas continua sua rotina. Mais tarde, ao abrir o celular, abre o aplicativo do clima e se espanta: está 37 graus! Diante disso, o quê você faria?",
        alternativas: [
            {
                texto: "Buscaria entender o por quê",
                afirmacao:"afirmacao"
            },
            {
                texto:"Apenas ignoraria",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Você vai dormir e sente dificuldade ao respirar, sente o ar mais seco. Você procura por uma solução rápida, mas não encontra. Logo decidi que vai adquirir um umidificador de ar, mas antes se questiona por quê o ar está mais seco que o normal. O quê você argumentaria para responder sua pergunta? ",
        alternativas: [
            {
                texto: "Diria que era apenas porque não choveu e voltaria a dormir.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Pesquisaria o por quê para corrigir esse problema.",
                afirmacao: "afirmacao"
            }
            
        ]
    }, 
    {
        enunciado: "Ao preparar suas refeições, você percebe que está gerando uma quantidade considerável de lixo orgânico. Pensando em maneiras de reduzir seu impacto, o que você faria com esses resíduos?",
        alternativas: [
            {
                texto: "Descartaria tudo no lixo comum, como de costume",
                afirmacao:"afirmacao"
            },
            {
                texto:"Procuraria informações sobre compostagem para transformar o lixo em adubo.",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Você está planejando uma viagem curta e precisa decidir qual meio de transporte usar. Sua prioridade é minimizar sua pegada de carbono. Qual seria sua escolha?",
        alternativas: [
            {
                texto: "Pegaria seu carro particular para maior comodidade.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Optaria por transporte público ou bicicleta, se possível.",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Ao comprar um novo produto, você se depara com duas opções similares: uma de uma marca que se preocupa com a sustentabilidade e outra de uma marca que não demonstra essa preocupação, mas é um pouco mais barata. Qual você escolheria?",
        alternativas: [
            {
                texto: "Compraria a opção mais barata para economizar dinheiro.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Escolheria o produto da marca sustentável, priorizando o impacto ambiental.",
                afirmacao: "afirmacao"
            }
            
        ]
    }

];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();   