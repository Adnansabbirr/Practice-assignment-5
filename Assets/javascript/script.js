function priceParameter(product, price){
    const elementInput=document.getElementById(product+'-price');
    
    elementInput.innerText=price;

    
    
}
function priceTotal(){
    
}




document.getElementById('8gb-price').addEventListener('click',function(){
   priceParameter('memory', 0);
})
document.getElementById('16gb-price').addEventListener('click',function(){
   priceParameter('memory', 180);
})
document.getElementById('256gb-price').addEventListener('click',function(){
   priceParameter('storage', 0);
})
document.getElementById('512gb-price').addEventListener('click',function(){
   priceParameter('storage', 100);
})
document.getElementById('1tb-price').addEventListener('click',function(){
   priceParameter('storage', 180);
})
document.getElementById('free-delivery').addEventListener('click',function(){
   priceParameter('delivery', 0);
})
document.getElementById('paid-delivery').addEventListener('click',function(){
   priceParameter('delivery', 20);
})
