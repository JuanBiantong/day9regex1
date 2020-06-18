let input = document.getElementById('input-text')
let btnCheck = document.getElementById('btn-check');


btnCheck.addEventListener('click', function(){
    let show = document.getElementById('show-check')
    if(input.value[0].match('[A-Z]') === null){
        document.write('Huruf pertama adalah huruf kecil')
    }
    else{
        document.write('Huruf pertama adalah huruf Besar')
    }
})