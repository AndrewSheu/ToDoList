//Dom

var sendData = document.querySelector('#send');
var list = document.querySelector('#del-btn');
//  JSOM.parse 轉為字串    | [] ->> 如果沒有資料,值會變為空值
dataBase = JSON.parse(localStorage.getItem('listitem')) | [];

//Listener

sendData.addEventListener('click', addData);
list.addEventListener('click', deleteData);
updataList(dataBase);


//Function

function addData(e){
    e.preventDefault();
    var txt = document.querySelector('#typing').value;
    if (txt.trim() === ""){
        alert('You need to type something !!!');
        return;
    }
    var todo ={
        context: txt
    };

    // dataBase.push(todo);
    updataList(dataBase);

    localStorage.setItem('listitem', JSON.stringify(dataBase));

    // document.querySelector('#text').value = ' '
}

function deleteData(e){
    e.preventDefault();
    if (e.target.nodeName !== 'A'){return;};

    var num = e.target.dataset.num;
    dataBase.splice(num, 1);
    console.log('delete work~~~');

    // localStorage.setItem('listItem', JSON.stringify(dataBase));
    // updataList(dataBase);
}

function updataList(dataBase){
    let str = '';
    for (let i = 0; i < dataBase.length; i++) {
       str += ` <li><a href='#' data-num` + `Del</a>` + (i+1) + '.' + dataBase[i].context + '<li>';
    }
    console.log('updataList~')
    list.innerHTML = str;
}