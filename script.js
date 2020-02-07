function insert(num){
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML+num
}
function equal(){
    var exp = document.getElementById('result').innerHTML
    if(exp){
        document.getElementById('result').innerHTML = eval(exp)
    }
}
function clean(){
    document.getElementById('result').innerHTML = ""
}
