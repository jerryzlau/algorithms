function processData(input) {
    //Enter your code here
  let queue = [];
  input.split('\n').map(el => el.split(' ')).forEach(el => {
     if (el.length === 2){
       queue.push(el[1]);
     }else if (el[0] === '2'){
       queue.shift();
     }else if(el[0] === '3'){
       console.log(queue[0]);
     }
  });
  
}