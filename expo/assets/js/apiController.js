/*
CASO DER ERRO DE CORS COLOCAR O LINK ABAIXO ANTES DO LINK DO FECH TUDO JUNTO MESMO
https://cors-anywhere.herokuapp.com/

console.log(response)

const baseUrl = 'https://emojihub.yurace.pro'

async function getData() {

    console.log("ghst")

    let response = await fetch(`${baseUrl}/api/random`)

    response = await response.json()
    return response
}

*/

document.getElementById('fetchButton').addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://emojihub.yurace.pro/api/random')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p><strong>Nome do Emoji:</strong> ${data.name}</p>
                <p><strong>Categora:</strong> ${data.category}</p>
                <p><strong>Grupo:</strong> ${data.group}</p>
                <p><strong>Código HTML:</strong> ${data.htmlCode}</p>
                <p><strong>Código de Unidade:</strong> ${data.unicode}</p>
                
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});