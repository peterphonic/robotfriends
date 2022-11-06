const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'success');
});

promise.then(result=> {
    console.log(result);
});


const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('success');
    }, 4000)
});

promise.then(console.log);

Promise.resolve(
    setTimeout(() =>{
        console.log('success');
    }, 4000)
);

Promise.reject(
    setTimeout(() =>{
        console.log('oops!!');
    }, 4000)
);

const urls = [ 
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
  ]
  
  //my answer
  Promise.all(urls.map(url =>{
    //console.log('coucou : '+url);
    fetch(url).then(resp=> resp.json())
  })).then(result => {
    console.log(result[0])
  })

//Anwser from the course
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));
