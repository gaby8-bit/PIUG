function searchbar(){
  let input=document.getElementById('searchbar').value;
  input=input.toLowerCase();
  let items=document.getElementsByClassName('item');
  for(let i=0;i<items.length;i++){
    let text=items[i].textContent.toLowerCase();
    if(text.includes(input))
    {
        items[i].style.display="";
    }
    else{
        items[i].style.display="none";
    }

}
}