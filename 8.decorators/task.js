'use strict'

function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    let hash = args.join(',');
    const idx = cache.findIndex((item) => (item['hash'] === hash));
    if (idx !== -1) {
      let value = cache[idx].value;
      console.log('Из кэша: ' + value);
      return ('Из кэша: ' + value);
    } 
      let result = func(...args);
      let obj = {};
      obj['hash'] = hash;
      obj['value'] = result;
      cache.push(obj);
      if (cache.length > 5) {
        cache.shift();
      }
      console.log('Вычисляем: ' + result);
      return ('Вычисляем: ' + result);  
  }
  return wrapper;
}
 
//******* Задача №2 ********//

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;

  function wrapper(...args) {
    if (flag === false) {
      func(...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = fals;
       }, ms);
      
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(()=>{flag = false}, ms);
    }
  }
  return wrapper;
}

//******* Задача №3 *******//

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;

  function wrapper(...args) {
    if (flag === false) {
      func(...args);
      flag = true;
      timeout = setTimeout(() => {
        flag = fals;
       }, ms);
      
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(()=>{flag = false}, ms);
    } 
    wrapper.count += 1
  }
  return wrapper;
}
