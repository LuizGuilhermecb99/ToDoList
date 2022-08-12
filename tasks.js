const tasks = [];

let caixa = document.getElementById("tarefa");
caixa.autofocus;

function incluirTarefa(task){

    if(task){
    tasks.push(task);
    caixa.value = "";
    caixa.autofocus;
    exibeTarefa(tasks);
    }

}

function exibeTarefa(task){

    let tabela = document.getElementById("tab");
    tabela.innerHTML = "";
    for(i=0;i<tasks.length;i++){
        let tr = document.createElement("tr");
        tabela.appendChild(tr);

        let td1 = document.createElement("td");
        td1.id = i;
        td1.innerText = task[i];
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.id = i;
        tr.appendChild(td2);

        let a = document.createElement("a");
        a.href=`javascript:excluiTarefa(${i})`;
        a.innerHTML = "<button class='btnExcluir'><img src='trash-fill.svg'  />excluir</button"
        td2.appendChild(a);

    }
      

}

function excluiTarefa(i){
    tasks.splice(i,1);
    exibeTarefa(tasks);
    

}

function limpaTudo(){

    if(tasks.length){
        var answer = window.confirm("Apagar todas as tarefas da lista ?");

        if(answer){
            tasks.splice(0,tasks.length);
            exibeTarefa(tasks);
            caixa.autofocus;
        


        }

    }else{
        alert('Sua lista de tarefas está vazia!');
        caixa.autofocus;
    }
   

}

document.addEventListener('keypress', function(event){
    if(event.key == "Enter"){
        incluirTarefa(tarefa.value);
    }

})
