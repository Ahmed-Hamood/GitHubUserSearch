class Gethub {
  constructor(){
    this.client_id = 'd479ec29d572deb03dca';
    this.client_secret = 'abf31087c31241b73692b597f5fa1316c6d9e52f';
    this.repos_count_no = 4;
    this.repos_sortit = 'create: asc';
  }

  async getUsers(user_name){
     const profileResponse = await fetch(`https://api.github.com/users/${user_name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
     const repoResponse = await fetch(`https://api.github.com/users/${user_name}/repos?per_page=${this.repos_count_no}&sort=${this.repos_sortit}&
     client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json();
     const repos =  await repoResponse.json();
     return{
       profile , repos
     }
   }
}