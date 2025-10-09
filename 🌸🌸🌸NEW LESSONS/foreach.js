let num = [4,7,8,2,6,3,5,]
num.forEach((k, i) => {
    console.log("item:" + k + "index:" + i)
})

//

function NegNum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      console.log(numbers[i]);
    }
  }
}
const arr = [3, -5, 7, -2, 0, -8];
NegNum(arr);
