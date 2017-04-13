/**
 * Created by ljwwolfat on 4/13/17.
 */
//[1,2,3] true
//[1,2,4] false
//sum of 2 numbers in one array tell whether exists in the array
function check(arr){
    n=arr.length;
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if(arr.indexOf((arr[i]+arr[j]))>=0){
                return true;
            }
        }
    }
    return false;

}