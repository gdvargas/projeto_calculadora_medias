const form = document.getElementById('form-atividade');
const imgAprovado = '<img src = "./images/aprovado.png" alt ="Emoji celebrado" />';
const imgreprovado = '<img src = "./images/reprovado.png" alt ="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseInt(prompt("Digite uma nota mínima:"));
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adcionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} ja existe`);

    } else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgreprovado } </td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}  

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanreprovado ;
}
function calculaMediaFinal(){

    let somanotas = 0;
    for(let i = 0; i< notas.length; i++){
        somanotas += notas[i];
    }
    return  somanotas / notas.length;
}
