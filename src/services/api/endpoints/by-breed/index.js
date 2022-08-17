const breed = 'corgi'



get(`/breed/${breed}/images`)
.then((response) => {
  console.log('\n');
  console.log('BY Breed: ');
  console.dir(response.data.message);
  console.log('Returns an array of all the images from a breed, e.g. hound');
});



get(`/breed/${breed}/images/random`)
.then((response) => {
  console.log('\n');
  console.log('RANDOM IMAGE FROM A BREED COLLECTION: ');
  console.dir(response.data.message);
  console.log('Returns a random dog image from a breed, e.g. hound');
});