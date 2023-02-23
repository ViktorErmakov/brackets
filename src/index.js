module.exports = function check(str, bracketsConfig) {
  
  let stack = [];
  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {};
  for (let index = 0; index < bracketsConfig.length; index++) {
    OPEN_BRACKETS.push(bracketsConfig[index][0]);
    BRACKETS_PAIR[bracketsConfig[index][1]] = bracketsConfig[index][0];
  };
  console.log(OPEN_BRACKETS);
  console.log(BRACKETS_PAIR);

  for (let index = 0; index < str.length; index++) {
    
    const char = str[index];
    let top = stack[stack.length - 1];
    if((stack.length > 0) && (BRACKETS_PAIR[char] === top)){
      stack.pop();
    }else if((OPEN_BRACKETS.includes(char))){
      stack.push(char);
    }else{
      if(stack.length === 0){
        return false;
      }
      
      if(BRACKETS_PAIR[char] === top){
        stack.pop();
      }else{
        return false;
      }
    }
  }

  console.log(stack.length === 0);
  return stack.length === 0;

  // console.log(stack);
  // console.log(bracketsConfig);



}


module.exports('||', 
  [
    ['|', '|']
  ]
  )
