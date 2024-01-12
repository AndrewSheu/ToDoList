//Dom

var sendData = document.querySelector('#send');
var list = document.querySelector('#list');
var typing = document.querySelector('#typing')
//  JSOM.parse 轉為字串    | [] ->> 如果沒有資料,值會變為空值
var dataBase = JSON.parse(localStorage.getItem('listitem')) || [];

 // dataBase = []

//Listener

sendData.addEventListener('click', addData);
typing.addEventListener('keyup', function(event) {
    if (event.key === "Enter"){
        addData()
    }
});
list.addEventListener('click', deleteData);
updataList(dataBase);


//Function

function addData(e){
    var txt = document.querySelector('#typing').value;
    if (txt.trim() === ""){
        alert('You need to type something !!!');
        return;
    }
    var todo ={
        context: txt
    };

    dataBase.push(todo);
    updataList(dataBase);

    localStorage.setItem('listitem', JSON.stringify(dataBase));

    document.querySelector('#typing').value = ' '
}

function deleteData(e){
    e.preventDefault();
    console.log('delete working')

    if (e.target.nodeName !== 'I'){return;};

    var num = e.target.dataset.num;
    dataBase.splice(num, 1);

    localStorage.setItem('listItem', JSON.stringify(dataBase));
    updataList(dataBase);
}

function updataList(dataBase){    
    let str = '';
    for (let i = 0; i < dataBase.length; i++) {
        str += `<li><a href='#'data-num> <i class="fas fa-trash-alt"></i> </a> ` + (i+1) + ' . ' + dataBase[i].context +  `</li> ` ;
    }
    list.innerHTML = str;
}