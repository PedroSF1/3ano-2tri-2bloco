const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-rresultado");

const perguntas = [
    {
        enunciado: "Você acorda e percebe o clima mais intenso. Percebe que isso não é comum, mas por conta das obrigações diárias apenas continua sua rotina. Mais tarde, ao abrir o celular, abre o aplicativo do clima e se espanta: está 37 graus! Diante disso, o quê você faria?",
        alternativas: [
            "Buscaria entender o por quê",
            "Apenas ignoraria"
        ]
    },
    {
        enunciado: "Você vai dormir e sente dificuldade ao respirar, sente o ar mais seco. Você procura por uma solução rápida, mas não encontra. Logo decidi que vai adquirir um umidificador de ar, mas antes se questiona por quê o ar está mais seco que o normal. O quê você argumentaria para responder sua pergunta? ",
        alternativas: [
            "Diria que era apenas porque não choveu e voltaria a dormir.",
            "Pesquisaria o por quê para corrigir esse problema."
        ]
    }, 
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }

];