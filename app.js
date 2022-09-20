let  char = 'x' ; 
let tittle = document.querySelector(".title"); 
let btn = document.querySelector("button") ; 
 let arr = [] ;  
  /*start  third function  */
 function final(n1 , n2 , n3){
    tittle.innerHTML = `${arr[n1]} Winner`;
    document.getElementById("e" + n1).style.background ='#4056a1' ;
    document.getElementById("e" + n2).style.background ='#4056a1' ;
    document.getElementById("e" + n3).style.background ='#4056a1' ;
    // using set intervals to add . to title 
    setInterval(()=>{
tittle.innerHTML += '.' ;
    },1000) ;
    // without using settimeout the setinterval will continuo add . to tittle.innerHtml to infinite 
    setTimeout(() => {
        location.reload(); 
    },3000);
 }
 /* End third function  */
 /* Start Second function  */
function winner(){
for( let i = 1 ; i < 10 ; i++){
   arr[i] = document.getElementById('e' + i).innerHTML ;
}
if( arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != ''){
   final(1,2,3) ; 
 
}
else if( arr[4] == arr[5] && arr[5] == arr[6] && arr[4] != ''){
    final(4,5,6) ; 
  
} 
else if( arr[7] == arr[8] && arr[8] == arr[9] && arr[8] != ''){
    final(7,8,9) ; 
} 
/* ====================================================== */
else if( arr[3] == arr[6] && arr[6] == arr[9] && arr[3] != ''){
    final(3,6,9) ; 
   
} 
else if( arr[2] == arr[5] && arr[5] == arr[8] && arr[8] != ''){
    final(2,5,8) ; 
 
} 
else if( arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != ''){
    final(1,4,7) ; 
     
} 
/* ======================================================= */
else if( arr[1] == arr[5] && arr[5] == arr[9] && arr[5] != ''){
    final(1,5,9) ; 
} 
else if( arr[3] == arr[5] && arr[5] == arr[7] && arr[7] != ''){
    final(3,5,7) ; 
    
} 
}
/* End second function */
/* Start First function  */
function first(id){
    let ele = document.getElementById(id) ; 
   if( char ==='x' && ele.innerHTML =='') {
   ele.innerHTML = 'X' ;
        char = 'o' ; 
        tittle.innerHTML  = 'O' ;
        btn.addEventListener('click' , ()=>{
            ele.innerHTML = '' ; 
            
        }) 

   }
   else if ( char === 'o' && ele.innerHTML ==''){
    ele.innerHTML = 'O' ; 
    char = 'x' ;
    tittle.innerHTML = 'X' ;
    btn.addEventListener('click' , ()=>{
        ele.innerHTML = '' ; 
    })  
   }
   winner() ;
}
/* End first Function  */
