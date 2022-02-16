'use strict'

//querySelector: pega a tag pelo jeito que escreviramos no css
const container = document.querySelector('main')

//criar mais um elemento html pelo innerHTML
function criarElementoInnerHTML(){
    container.innerHTML += '<div><button>ok</button></div>'

}

function criarElementoAppendChild(numero){
    // 1 - Criar o elemento (ela existe apenas na memória do computador)
    const novaDiv = document.createElement('div')

    // 2 - Configurar o elemento
    novaDiv.textContent = numero

    // Inserir o elemento
    container.appendChild(novaDiv)
}

function criarElementoInsertBefore(){
    // 1 - Criar o elemento (ela existe apenas na memória do computador)
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')

    // 2 - Configurar o elemento
    novaDiv.id = "sete"
    novaDiv.textContent = 7
    novaDiv.classList.add('vermelho')

    // Inserir o elemento
    container.insertBefore(novaDiv, quintaDiv)
}

function criarElementoReplaceChild(){
    // 1 - Criar o elemento (ela existe apenas na memória do computador)
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')

    // 2 - Configurar o elemento
    novaDiv.id = "sete"
    novaDiv.textContent = 7
    novaDiv.classList.add('vermelho')

    // Inserir o elemento
    container.replaceChild(novaDiv, quintaDiv)

}

function criarElementoReplaceChildren(numero){
    // 1 - Criar o elemento (ela existe apenas na memória do computador)
    const novaDiv = document.createElement('div')

    // 2 - Configurar o elemento
    novaDiv.textContent = numero


    // Inserir o elemento
    container.replaceChildren(novaDiv)

}

for (let i=0; i <= 100; i++){
    criarElementoAppendChild(i)
}