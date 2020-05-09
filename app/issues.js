export class Issues{
 issues = {};

 getIssues() {
    return fetch(`https://api.github.com/search/issues?q=author:KLisabeth`)
    .then(data => data.json())
    .then((data)=> {
      this.issues = data.total_count;
      return data;
      })
    .catch(error => console.error(error));
  }
  display(){
    const container = document.createElement("div");
    container.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.innerHTML = `My Total Issues on GitHub: ${this.issues}`

    container.appendChild(h1);
    return container
  }
}