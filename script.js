const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let ans = [];
    let temp = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (sum + arr[i] > n) {
            ans.push(temp);
            temp = [];
            sum = 0;
        }
        
        temp.push(arr[i]);
        sum += arr[i];
    }

   
    if (temp.length) ans.push(temp);

    return ans;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
