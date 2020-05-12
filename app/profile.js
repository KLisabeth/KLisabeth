export class Profile {


  constructor() {
    this.name ='';
    this.company = '';
    this.html_url = '';
    this.issues = '';
    this.repos = [];  
  }
  
  getProfile(){
    return fetch(`https://api.github.com/users/KLisabeth`)
    .then(data => data.json())
    .then((data)=> {
        this.name = data.name;
        this.company = data.company;
        this.html_url = data.html_url;
        this.repos = data.repos;
        return data;
      })
      
    .catch(error => console.error(error));
  }

 
  


 display() {
    const container = document.createElement("div");
    container.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.style.fontSize = '30px'
    h2.innerHTML = ` ${this.name} <br/>`

    const a = document.createElement('a');
    a.href = `${this.html_url}`;
    a.innerHTML = `My Profile`
    const h1 = document.createElement('h1');
    h1.innerHTML = `A Student of ${this.company}`;
    
    container.appendChild(h2)
    container.appendChild(a)
    container.appendChild(h1)
    
    return container;
  };
  
  
};
  

  


