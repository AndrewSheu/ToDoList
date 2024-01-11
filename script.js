//Dom

var sendData = document.querySelector('#send');
var list = document.querySelector('#list');
//  JSOM.parse 轉為字串    | [] ->> 如果沒有資料,值會變為空值
// dataBase = JSON.parse(localStorage.getItem('listitem')) | [];
const dataBase = []

//Listener

sendData.addEventListener('click', addData);
list.addEventListener('click', deleteData);
updataList(dataBase);


//Function

function addData(e){
    e.preventDefault();
    console.log('add working')

    var txt = document.querySelector('#typing').value;
    if (txt.trim() === ""){
        alert('You need to type something !!!');
        return;
    }
    var todo ={
        context: txt
    };

    dataBase.push(txt);
    updataList(dataBase);

    localStorage.setItem('listitem', JSON.stringify(dataBase));

    document.querySelector('#typing').value = ' '
}

function deleteData(e){
    e.preventDefault();
    console.log('delete working')

    if (e.target.nodeName !== 'A'){return;};

    var num = e.target.dataset.num;
    dataBase.splice(num, 1);
    console.log('delete work~~~');

    // localStorage.setItem('listItem', JSON.stringify(dataBase));
    updataList(dataBase);
}

function updataList(dataBase){
    console.log('updataList working')
    
    let str = '';
    for (let i = 0; i < dataBase.length; i++) {
    //    str += ` <li>` + (i+1) + `<a href='#' data-num` + `>DEL</a>`  + ' . ' + dataBase[i] + '<li>';
       str += (i+1) + ' . ' + dataBase[i] +  ` <a href='#' data-num>Delete</a><li> ` ;
    }
    console.log(str)
    list.innerHTML = str;
}