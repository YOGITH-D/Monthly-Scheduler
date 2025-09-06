function keyDownEvent(event){
    if(event.key=='Enter'){
        //console.log("inside-text-box-enter-pressed");
        addTask();  
        displayText();  
    }
}

const todolist=[];
function addTask(){
    let inputText=document.querySelector('.input-task-js');
    const task=inputText.value; 
    let inputDate=document.querySelector('.input-date-js');
    const date=inputDate.value;
    if(inputText.value!=="" && inputDate.value!==""){
        todolist.push({Task:task,Date:date});
    }
    //console.log(todolist);
    inputText.value=null;
    inputDate.value=null;
}

function displayText(){
    let gridDiv2=document.querySelector('.grid-div-2-js');
    gridDiv2.innerHTML=``;
    for(let i=0;i<todolist.length;i++){
        let generatedHTML=`
            <div class="display-task">(${i+1}) ${todolist[i].Task}</div>
            <div class="display-date">${todolist[i].Date}</div>
            <div class="display-delete">
                <button class="delete-button" Onclick="todolist.splice(${i},${1}); displayText();">delete</button>
            </div>
        `;
        gridDiv2.innerHTML+=generatedHTML;
    }
}
