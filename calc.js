var input = document.querySelector('input');
document.getElementById('one').addEventListener('click',function(){
    input.value += document.getElementById('one').textContent;
})
document.getElementById('two').addEventListener('click',function(){
    input.value += document.getElementById('two').textContent;
})
document.getElementById('three').addEventListener('click',function(){
    input.value += document.getElementById('three').textContent;
})
document.getElementById('four').addEventListener('click',function(){
    input.value += document.getElementById('four').textContent;
})
document.getElementById('five').addEventListener('click',function(){
    input.value += document.getElementById('five').textContent;
})
document.getElementById('six').addEventListener('click',function(){
    input.value += document.getElementById('six').textContent;
})
document.getElementById('seven').addEventListener('click',function(){
    input.value += document.getElementById('seven').textContent;
})
document.getElementById('eight').addEventListener('click',function(){
    input.value += document.getElementById('eight').textContent;
})
document.getElementById('nine').addEventListener('click',function(){
    input.value += document.getElementById('nine').textContent;
})
document.getElementById('zero').addEventListener('click',function(){
    input.value += document.getElementById('zero').textContent;
})
document.getElementById('dot').addEventListener('click',function(){
    input.value += document.getElementById('dot').textContent;
})
document.getElementById('add').addEventListener('click',function(){
    input.value += document.getElementById('add').textContent;
})
document.getElementById('sub').addEventListener('click',function(){
    input.value += document.getElementById('sub').textContent;
})
document.getElementById('mul').addEventListener('click',function(){
    input.value += document.getElementById('mul').textContent;
})
document.getElementById('div').addEventListener('click',function(){
    input.value += document.getElementById('div').textContent;
})
document.getElementById('mod').addEventListener('click',function(){
    input.value += document.getElementById('mod').textContent;
})
document.getElementById('equal').addEventListener('click',function(){
    let ans = input.value;
    input.value = eval(ans)
})
document.getElementById('C').addEventListener('click',function(){
    input.value = " ";
})
document.getElementById('del').addEventListener('click',function(){
    let val = input.value;
    let del = val.slice(0, val.length - 1);
    input.value = del;
})

