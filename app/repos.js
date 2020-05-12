class Repos {

 //constructor(){
  repos = [];
  name = '';
 //}
    
    
    getRepos() {
      return fetch(`https://api.github.com/users/KLisabeth/repos?per_page=20`)
        .then(data => data.json())
        .then((data)=> {

            this.repos = data // data is an array
          
            return data;
          }) 
        .catch(error => console.error(error));
    }

      // display(){
      // //console.log(this.repos);

      // const container = document.createElement("div");
      // // this.repos.map(repo => {
      // const a = document.createElement('a');
      // a.href = `${this.repos}`;
      // a.innerHTML = `Repos`
      // const h1 = document.createElement('h1')
      // h1.innerHTML = `My Repos: ${this.name}`        
      // // })
      // container.appendChild(a);
      // container.appendChild(h1);
      // return container;
      
      // }
      
   ///or another solution that should work but doesn't and gives error on map
     display() {

      const container = document.createElement('div');
      container.innerHTML = `<h1 style="font-size:35px; color:#d6ae6d;">My Repositories</h1>`
      //console.log('repos in display function', this.repos);
      this.repos.forEach(repo =>{
        const div = document.createElement('div');
        div.innerHTML =`<a style="font-size:20px; color:#aad295;" href="${repo.html_url}"> Repository: ${repo.name}</a>`
        container.appendChild(div);
        container.appendChild(document.createElement('br'))
      })
      // this.repos.forEach(repo => {
      // const h1 = document.createElement('h1');
      // h1.style.fontSize = '23px'
      // h1.style.color = '#ffd285'
      // h1.innerHTML = `Repository: ${repo.name}`
      // const a = document.createElement('a');
      // a.href = `${repo.html_url}`;
      // a.innerHTML = `Repository Link`
      // a.style.fontSize = '22px'
                
      //     container.appendChild(h1);
      //     container.appendChild(a);
      // })

      return container;
    }
  }

export {Repos};