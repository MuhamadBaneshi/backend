console.log('Before');
getUser(1, (user) => {
  console.log('user', user);
});
console.log('After');

function getUser(id, callback){
  setTimeout(() => {
  console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'muhamad' });
}, 2000);
}

function getRepositories(username){
  setTimeout(() => {
    console.log('Calling Github API...');
  }, 2000);
  
 return ['repo1', 'repo2', 'repo3'] 
}
