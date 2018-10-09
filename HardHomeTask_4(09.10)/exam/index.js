function findIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value) return i;
    }
    return -1;
}

function isInteger(num) {
    return (num ^ 0) === num;
}

function getAllDelemiters(num){
    let d = 2;
    let resultArr = [1];

    if (num <= 2)
        return resultArr;
    

    while (d * d < num){
        if (num % d == 0){
            resultArr.push(d);
            resultArr.push(parseInt((num / d).toFixed()));
        }    
        ++d;
    }
    if (d * d == num) {
        resultArr.push(d);
    }
    return resultArr;
}

function getFriendlyNumbers(start, end){
    if (!(typeof(start) === 'number') || !(typeof(end) === 'number') || start > end
        || start < 0 || end < 0 || !(isInteger(start)) || !(isInteger(end)) )
        return false;
     
    let result = [];
    let allFrinedlyNumbers = [];

    let firstSum = 0;
    let secondSum = 0;

    for (let i = start; i <= end; ++i){
        firstSum = 0;
        let delimetrsOfFirstNum = getAllDelemiters(i);
        delimetrsOfFirstNum.forEach(element => firstSum += element);        
        for (let j = start; j <= end; ++j){
            if (i == j)
                continue;
            secondSum = 0;
            if (j == firstSum){
                let delimetrsOfSecondNum = getAllDelemiters(j);
                delimetrsOfSecondNum.forEach(element => secondSum += element);        
                if (secondSum == i && findIndex(allFrinedlyNumbers, i) == -1){
                    result.push([i,j]);
                    allFrinedlyNumbers.push(i);
                    allFrinedlyNumbers.push(j);
                } 
            }

        }

    }
    return result;
}
module.exports = {
    firstName: 'Никита',
    secondName: 'Якимович',
    task: getFriendlyNumbers
}