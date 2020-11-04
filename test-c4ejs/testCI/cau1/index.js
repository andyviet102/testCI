let n = prompt('Nhập vào n (4 < n < 20)');
let x = prompt('Nhập vào số đối diện cần tìm')
let sum ;
d = n/2;
function check(){
    if(n % 2 == 0){
        if(n>4 && n<20){
           if(x> (n/2)){
            a =x ;
            b = n/2;
            console.log( Number(a - b));
           }
           else if(x <(n/2)){
            let a =+x ;
            let b =+n/2
            console.log(a + b);
                
           }
        }
    }
    else{
      setTimeout(function(){
        alert('Vui lòng nhập số chia hết cho 2 và thỏa mãn điều kiện 4<n<20');
        let n = prompt('Nhập vào n (4 < n < 20)');
      }, 3000);
        
    }
}
console.log( check(n));