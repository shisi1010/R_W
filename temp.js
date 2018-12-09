
function one(callback) {
    setTimeout(function () {
        console.log('first');
        callback();
    }, 200);
}

function two(callback) {
    setTimeout(function () {
        console.log('second');
        callback();
    }, 0);
}

function asyncOneByOne(arr) {
    var s;
    for (var i = arr.length-1; i>0; i--){
      if(i!=1){
          s = arr[i-1](arr[i])
      }
    }
}
asyncOneByOne([one, two])