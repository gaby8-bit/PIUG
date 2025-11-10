const button=document.getElementById('afiseaza_info');
const textarea=document.getElementById('info_textarea');
button.addEventListener('click',function(){
    if(textarea.classList.contains('hidden')){
        textarea.classList.remove('hidden');
       
    } else {
        textarea.classList.add('hidden');
       
    }
}
);