// // function makeNegative(num) {
// //     return num < 0 ? num : num * - 1
// // }

// function greet (name, owner) {  
//     return name===owner ? 'Hello boss' : 'Hello guest'
// }

// console.log(greet('carlo','carlo'));
// console.log(greet('carlo','mariano'));

var min = function(list){
    for (let i = 0; i < list.length; i++) {
        
        for (let j = 0; j < list.length; j++) {
            
            if (list[j]<list[i]) {
                list += list[j]
                
            } else list += list[i]

        }
    }
    return list[0];
}

var max = function(list){
    
    return list[0];
}