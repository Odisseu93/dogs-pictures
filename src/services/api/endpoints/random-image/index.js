get('/breeds/image/random')
.then((response) => {
  console.log('\n');
  console.log('Random image: ' + response.data.message)
});


get('/breeds/image/random/3')
.then((response) => {
  console.log('\n');  
  console.log('DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION');  
  console.dir( response.data.message)
  console.log('Max number returned is 50.');  
});