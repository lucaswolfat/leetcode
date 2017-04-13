/**
 * Created by ljwwolfat on 4/13/17.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var isNegative = x < 0? true: false,
        isZero = x === 0? true: false,
        divider = 10,
        result = 0,
        temp=x,
        reminder;

    if(isNegative){
        return false;
    }
    if(isZero){
        return true;
    }

    while (x !== 0) {
        reminder = x % 10;
        result = result * 10 + reminder;

        x = Math.floor(x / 10);
    }

    if (result >= 2147483648) {
        return false;
    }
    if (temp===result){
        return true;
    }else{
        return false;
    }
};
