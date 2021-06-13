let url = "https://tt905-2021-mensagens-vitor.herokuapp.com/mensagens/"

async function callFetchWithGet(){
     let headers = new Headers();
     const options={
         method : 'Get',
         mode: 'cors',
         headers: headers
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

async function callFetchWithPost(nome, apelido, aniversario, materia_favorita, jogo){
    const options = {
        method : 'Post',
        mode: 'cors',
        headers:{
            'Accept':'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            'Nome':nome,
            'Apelido':apelido,
            'Aniversário':aniversario,
            'Matéria favorita':materia_favorita,
            'Jogo favorito':jogo
        })
    } 
    await fetch(url,options);
    console.log("Funcionou!");
}

async function callFetchWithPut(id, novonome, novoapelido, novoaniversario, novomateria_favorita, novojogo){
    const options = {
        method : 'Put',
        mode: 'cors',
        headers: {
            'Accept':'application/json',
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            'Nome':novonome,
            'Apelido':novoapelido,
            'Aniversário':novoaniversario,
            'Matéria favorita':novomateria_favorita,
            'Jogo favorito':novojogo

        })
    }   
  await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'Delete',
        mode: 'cors',
        headers: {
            'Accept':'application/json',
            'content-type' : 'application/json'
        }
    }   
  await fetch(`${url}${id}`, options);
}

/*Formulários*/

function submitPost(){
    const form =  document.forms['postForm'];
    const nome = form["nome"].value;
    const apelido = form["apelido"].value;
    const aniversario = form["aniversario"].value;
    const materia_favorita = form["materia_favorita"].value;
    const jogo = form["jogo"].value;
    
    callFetchWithPost(nome, apelido, aniversario, materia_favorita, jogo);
    return false;//evita o reload da tela
}

function submitPut(){
    const form =  document.forms['putForm'];
    const id = form["id"].value;
    const nome = form["nome"].value;
    const apelido = form["apelido"].value;
    const aniversario = form["aniversario"].value;
    const materia_favorita = form["materia_favorita"].value;
    const jogo = form["jogo"].value;
    callFetchWithPut(id, nome, apelido, aniversario, materia_favorita, jogo);
    return false;//evita o reload da tela
}

function submitDelete(){
    const form =  document.forms['deleteForm'];
    const id = form["id"].value;
    callFetchWithDelete(id);
    return false;//evita o reload da tela
}