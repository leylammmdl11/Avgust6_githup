let num = [2, 5, 6, 7, 3, 4, 5, 6, 2, 3, 2, 3, 4, 5, 4, 5, 6, 7]
let unical = new Set(num)

console.log(unical)
unical.clear()
unical.add(45)
unical.add(5)
unical.add(76)
unical.add(86)
unical.has(47)
unical.values()
unical.keys()
unical.entries()
unical.forEach((numbers) => {
    console.log(numbers)
})

