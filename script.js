
function create_tr(){
  var tr = document.createElement("tr");
  return tr;
}

function create_th(tagname,attrname,attrvalue,content){
  var ele = document.createElement(tagname);
  ele.setAttribute(attrname,attrvalue);
  ele.innerHTML = content;
  return ele;
}

function create_td(tagname,content){
  var ele = document.createElement(tagname);
  ele.innerHTML = content;
  return ele;
}

var table = document.createElement("table");
table.className = "table";

  var thead = document.createElement("thead");
thead.className = "thead-dark";

var thead_tr = create_tr();

var th =create_th("th","scope","col","#")
var th1 =create_th("th","scope","col","First")
var th2 =create_th("th","scope","col","Last")
var th3 =create_th("th","scope","col","Handle")

thead_tr.append(th,th1,th2,th3)
thead.append(thead_tr)

 var tbody = document.createElement("tbody");
 var body_tr = create_tr();
 var body_th = create_th("th","scope","row","1")
 var td1 = create_td("td","mark")
 var td2 = create_td("td","Otto")
 var td3 = create_td("td","@mdo")
 body_tr.append(body_th,td1,td2,td3)
 var body_tr1 = create_tr();
 var body_th1 = create_th("th","scope","row","2")
 var td4 = create_td("td","Jacob")
 var td5 = create_td("td","Thornton")
 var td6 = create_td("td","@fat")
 body_tr1.append(body_th1,td4,td5,td6)
 var body_tr2 = create_tr();
 var body_th2 = create_th("th","scope","row","3")
 var td7 = create_td("td","Larry")
 var td8 = create_td("td","the Bird")
 var td9 = create_td("td","@twitter")
body_tr2.append(body_th2,td7,td8,td9)
 tbody.append(body_tr,body_tr1,body_tr2)

 table.append(thead,tbody)
 document.body.append(table)
 

 

// var head =thead_create("thead")
// var tr =tr_create("tr")
// var th =th_create("th","scope","col","#")
// var th1 =th1_create("th","scope","col","First")
// var th2 =th2_create("th","scope","col","Last")
// var th3 =th3_create("th","scope","col","Handle")
// tr.append(th,th1,th2,th3,);
// head.append(tr);
// table.append(head);



// function break_create(){
//   var ele = document.createElement("br");
//   return ele;
// }

// function input_create(tagname,attrname1,attrvalue1,attrname2,attrvalue2){
//   var ele = document.createElement(tagname);
//   ele.setAttribute(attrname1,attrvalue1);
//   ele.setAttribute(attrname2,attrvalue2);
//   return ele;
// }

// function button_create(tagname,attrname3,attrvalue3,attrname4,attrvalue4,content){
//   var ele = document.createElement(tagname);
//   ele.setAttribute(attrname3,attrvalue3);
//   ele.setAttribute(attrname4,attrvalue4);
//   ele.innerHTML = content;
//   return ele;
// }


// var Firstname = label_create("label","for","Firstname","Firstname")
// var break1 = break_create();
// var Firstname_input = input_create("input","type","text","id","Firstname")

// var break2 = break_create();

// var Middlename = label_create("label","for","Middlename","Middlename")
// var break3 = break_create();
// var Middlename_input = input_create("input","type","text","id","Middlename")

// var break4 = break_create();

// var Lastname = label_create("label","for","Lastname","Lastname")
// var break5 = break_create();
// var Lastname_input = input_create("input","type","text","id","Lastname")

// var break6 = break_create();

// var email = label_create("label","for","email","email")
// var break7 = break_create();
// var email_input = input_create("input","type","email","id","email")

// var break8 = break_create();

// var Password = label_create("label","for","Password","Password")
// var break9 = break_create();
// var Password_input = input_create("input","type","text","id","Password")

// var break10 = break_create();

// var Button = button_create("button","type","button","onclick","foo()","Submit");

// function foo(){
//   var First = document.getElementById("Firstname").value;
//   console.log(`Firstname:${First}`)
//   var Middle = document.getElementById("Middlename").value;
//   console.log(`Middlename:${Middle}`)
//   var Last = document.getElementById("Lastname").value;
//   console.log(`Lastname:${Last}`)
//   var email = document.getElementById("email").value;
//   console.log(`email:${email}`)
//   var PWd = document.getElementById("Password").value;
//   console.log(`Password:${PWd}`)
// }
// document.body.append(Firstname,break1,Firstname_input,break2,Middlename,break3,Middlename_input,break4,Lastname,break5,Lastname_input,break6,email,break7,email_input,break8,Password,break9,Password_input,break10,Button)
