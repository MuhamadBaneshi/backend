console.log('Before');
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, displayCommits);
  });
});
console.log('After');

function displayCommits(commits){
  console.log(commits);
}

function getUser(id, callback){
  setTimeout(() => {
  console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'muhamad' });
}, 2000);
}

function getRepositories(username, callback){
  setTimeout(() => {
    console.log('Calling Github API...');
    callback(['repo1', 'repo2', 'repo3']); 
  }, 2000);
}
