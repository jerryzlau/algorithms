function debounce(fn, wait) {
  let timeout;

  return function(){
    function later(){
      fn.call(this, arguments);
    }

    if(timeout){
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
}

function logger(){
  console.log('hello');
}

function emulateDebouncedEvents(){
  const interval = setInterval(() => {
    debounce(logger, 500);
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
  }, 2000);
}

emulateDebouncedEvents();

// let a = () => console.log('foo');
// let debouncedFn = debounce(a, 0);
// debouncedFn();
// setTimeout(() => {
//   debouncedFn();
// }, 0);
// setTimeout(() => {
//   debouncedFn();
// }, 0);
// setTimeout(() => {
//   debouncedFn();
// }, 100);