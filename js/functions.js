let url = "https://tt905-2021-mensagens-vitor.herokuapp.com/mensagens/"

async function callFetchWithGet(){
     let headers = new Headers();
     const options={
         method : 'GET',
         mode: 'cors',
         headers: headers,
     }
     const output = document.getElementById("json");
     const response = await fetch(url, options);
     if (response.status>=200 && response.status<=300){
        console.log("Funcionou!");
        output.innerHTML = await response.text();
     }
     else{
         console.log("Deu ruim!");
     }
}

/*Formulários*/

function submitPost(){
    const form =  document.forms['postForm'];
    const nome = form["nome"].value;
    const apelido = form["apelido"].value;
    const aniversario = form["aniversario"].value;
    const matfav = form["matfav"].value;
    const jogo = form["jogo"].value;
    
    const novo = 
        {
           "nome": nome, "apelido": apelido, "aniversario": aniversario, "materia_favorita": matfav, "jogo": jogo
        };
    
    callFetchWithPost(novo);
    return false;//evita o reload da tela
}

function submitPut(){
    const form =  document.forms['putForm'];
    const id = form["id"].value;
    const mensagem = form["mensagem"].value;
    callFetchWithPut(id, mensagem);
    return false;//evita o reload da tela
}

function submitDelete(){
    const form =  document.forms['deleteForm'];
    const id = form["id"].value;
    callFetchWithDelete(id);
    return false;//evita o reload da tela
}