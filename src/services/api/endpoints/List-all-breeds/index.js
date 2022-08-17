  get('/breeds/list/all')
  .then((response) => {
    console.log('\n');
    console.log('List all breeds: ');
    console.dir(response.data.message);
  });