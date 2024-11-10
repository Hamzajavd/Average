// function add(num1, num2) {
//     let addition = num1 + num2;
//     return addition;
//   }

//   console.log(add(5, 9));


function average (num){
    let totalSum = 0;

for(i=0; i < num.length; i++){
    totalSum += num[i];
}

let AverageFormula = totalSum/num.length;
return AverageFormula;

}

let array = [1,2,3,4,5,6,7,8]
console.log("The Average is :" , average(array));
