var ul=document.getElementById("List")
var input=document.getElementById("input")
function add()
{
    var list=document.createElement("li")
    if(input.value!=""){
    list.innerHTML=input.value +"<br><button onclick='dele(event)'type='button' class='btn btn-danger'id='op'>DEL</button>"
    ul.append(list)
    }
}
function dele(event)
{
    event.target.parentElement.remove()
}