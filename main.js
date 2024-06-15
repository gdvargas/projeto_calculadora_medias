const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
    adcionaLinha();
    atualizaTabela();
    formatarTelefone();
    
});

function adcionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    if (telefones.includes(inputTelefone.value)){
        alert(`O telefone ${inputTelefone.value} já existe`);

    } else{
    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    }
    
    inputNome.value = '';
    inputTelefone.value = '';

}  

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

}

function adicionacontato(){

    let contato = 0;
    for(let i = 0; i< telefones.length; i++){
        contato += nomes[i];
    }
    return  contato ;
}
function formatarTelefone(input) {
    let telefone = input.value.replace(/\D/g, '');
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    input.value = telefone;

}
