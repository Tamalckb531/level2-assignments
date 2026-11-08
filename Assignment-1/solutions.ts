const multiplyValue = (value:number, multiplier?:number) => {
    if (multiplier !==0 && !multiplier) return value * 2;
    return value * multiplier;
}

console.log(multiplyValue(10));
console.log(multiplyValue(10,5));
console.log(multiplyValue(7,0));
console.log(multiplyValue(0,8));