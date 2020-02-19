fetch('/data/data.json', {mode: 'cors'})  
  .then(function(res) {  
    return res.text();  
  })  
  .then(function(text) {  
    console.log('Request successful');  
    console.log(JSON.parse(text).navData)
  })  
  .catch(function(error) {  
    log('Request failed', error)  
  });