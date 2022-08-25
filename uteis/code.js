var rn = require('random-number');
const getCode = ()=>{

var options = {
    min:  0
  , max:  1000
  , integer: true
  }
 
return rn(options);
}

exports.getCode = getCode