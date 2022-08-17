const mainbreed = 'hound'



get(`/breed/${mainbreed}/list`)
.then((response) => {
  console.log('\n');
  console.log('LIST ALL SUB-BREEDS: ');
  console.dir(response.data.message);
  console.log('Returns an array of all the sub-breeds from a breed');
});


subbreed = 'afghan'

get(`/breed/${mainbreed +'/' + subbreed}/images`)
.then((response) => {
  console.log('\n');
  console.log('LIST ALL SUB-BREED IMAGES: ');
  console.dir(response.data.message);
  console.log('Returns an array of all the images from the sub-breed');
});


get(`/breed/${mainbreed +'/' + subbreed}/images/random`)
.then((response) => {
  console.log('\n');
  console.log('SINGLE RANDOM IMAGE FROM A SUB BREED COLLECTION: ');
  console.dir(response.data.message);
});