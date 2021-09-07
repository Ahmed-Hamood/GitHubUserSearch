class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }
  
  addprofile(data){
    console.log(data);
    this.profile.innerHTML = `
 
    <div class="container">
      <div class="section">

        <div id="left-info">
          <img src="${data.avatar_url}" alt="none">
          <a class="view-profile-btn" target="_blank"  href="${data.html_url}">View Profile</a>
        </div>
      
        <div id="right-info">
          <div>
              <a href="#" class="view-info blue">Public Repos : ${data.public_repos} </a>
              <a class="view-info gray">Public Gists: ${data.public_gists} </a>
              <a class="view-info green">Followers: ${data.followers} </a>
              <a class="view-info skyblue">Following: ${data.following} </a>
          
          <div class="detail-section">
            <ul>
              <li>Company : ${ (data.company !== null) ? data.company : 'Not Available' }  </li>
              <li>WebSite : ${ (data.blog!=='') ? data.blog : 'Not Available' }  </li>
              <li>Location : ${ (data.location !== null) ? data.location : 'Not Available' }   </li>
              <li>Member Since : ${data.created_at} </li>
            </ul>
          </div>
        </div>
        
        <div class="clear"></div>
      </div>
    </div>
    
    <div class="container">
    <h1> Latest Repos </h1>
    </div>
 

    <div class="container" id="repos">
   
    </div>

    `; 
     
 
    this.profile.style.display = 'block';
   

  }

  addRepos(data){
  let output = '';
  console.log(data);
  data.forEach(el => {
    output += `
                <div class="repos-section">
                    <a href="${el.html_url}" class="repos-link"> ${el.name} </a> 
                    <a href="#" class="view-repos blue" > stars:${el.stargazers_count}</a>
                    <a href="#" class="view-repos gray" > Watchers:${el.watchers_count}</a>
                    <a href="#" class="view-repos green" > Forks:${el.forks_count}</a>
                </div>
 
     `;
  }); 

     
 

  document.getElementById('repos').innerHTML = output;

  }



  hideprofile(){
    this.profile.innerHTML= '';
  }

  showAlert(){
   let alert_container = document.querySelector('.alert_container');
   alert_container.innerHTML = '';


   let alert = document.createElement('div');
   alert.id = 'alert';
   alert.textContent = " User doesn't exist ";


   alert_container.appendChild(alert);

    setTimeout(() => {
      alert_container.innerHTML='';
   }, 3000);


  }

}