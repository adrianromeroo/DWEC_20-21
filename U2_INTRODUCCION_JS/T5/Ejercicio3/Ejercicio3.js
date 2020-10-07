var num_noprimos = 0;

for (var i = 1; i <= 500; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
    
    for (var j = 2; j < i; j++) {
        if(i % j === 0){
          num_noprimos++;
            break;
        }
        
    }
}

console.log("Hay: " + num_noprimos + " números que no son primos");