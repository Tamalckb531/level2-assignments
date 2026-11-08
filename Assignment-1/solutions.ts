const multiplyValue = (value:number, multiplier?:number):number => {
    if (multiplier === undefined) return value * 2;
    return value * multiplier;
}