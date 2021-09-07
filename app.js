const github = new Gethub;
const ui = new UI();

document.getElementById('user_input').addEventListener('keyup' , (e)=>{

  const input_text =  e.target.value;
  
  if(input_text !== ''){
    github.getUsers(input_text)
    .then( data => {
      if(data.profile.message === 'Not Found'){
          ui.showAlert();
          ui.hideprofile();
      }else{
        
     ui.addprofile(data.profile);
     ui.addRepos(data.repos);
      }
    });
  } else{
      ui.hideprofile();
  }
});