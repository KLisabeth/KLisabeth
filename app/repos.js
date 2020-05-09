class Repos {

 //constructor(){
  repos = [];
  name = '';
 //}
    
    
    getRepos() {
        return fetch(`https://api.github.com/users/KLisabeth/repos?per_page=10`)
        .then(data => data.json())
        .then((data)=> {
            this.repos.forEach(i =>{
            this.name = i.data.name
            this.repos = i.data[1].repos.html_url
            })
            return data;
          }) 
        .catch(error => console.error(error));
      }

      display(){
      //console.log(this.repos);

      const container = document.createElement("div");
      // this.repos.map(repo => {
      const a = document.createElement('a');
      a.href = `${this.repos}`;
      a.innerHTML = `Repos`
      const h1 = document.createElement('h1')
      h1.innerHTML = `My Repos: ${this.name}`        
      // })
      container.appendChild(a);
      container.appendChild(h1);
      return container;
      
      }
      
   /* or another solution that should work but doesn't and gives error on map
     display(){
     const container = document.createElement('div');
     console.log(this.repositories);
     this.repos.map(repo => {
     const h1 = document.createElement('div');
     div.innerHTML = `<h1>${repos.name}</h1>
            <p>${repos.} </p>`;
      container.appendChild(div);
    })

    return container;
   }
  }
  */ 

}

export {Repos};