import {Profile} from "./profile.js";
import { Repos } from "./repos.js";
import { Issues } from "./issues.js";

const init = () =>{

  const result = document.getElementById('results')
  
  const profile = new Profile()
  profile
  .getProfile()
  .then(()=>{
    const container = profile.display();
    result.appendChild(container);
  })

  const issues = new Issues()
  issues
  .getIssues()
  .then(()=>{
    const container = issues.display();
    result.appendChild(container);
  })

  const repos = new Repos()
  repos
  .getRepos()
  .then(()=>{
    const container = repos.display();
    result.appendChild(container);
  })
  
  
};
init();

//    const srcBnt = document.getElementById('button');
//    srcBnt.addEventListener('mouseover', (event) =>{
//    event.preventDefault()
//     const profUser = document.getElementById('search').value;
  
  
//     const profile = new Profile()
//     profile
//     .getProfile(profUser)
//     .then(()=>{
//       const container = profile.display();
//       result.appendChild(container);
//     })
  
// })
 
   
//    const getRep = document.getElementById('repos');
//    getRep.addEventListener("change", (event)=> {
//    event.preventDefault();

//      const reps = new Profile(event, target)
//      reps
//     .getRepos(getRep)
//     .then(()=>{
//     const container = reps.display();
//     result.appendChild(container);
// })
//  })
//  const getIssues = document.getElementById('issues');
//    getIssues.addEventListener("change", (event)=> {
//    event.preventDefault();

//      const iss = new Profile(event, target)
//      iss
//     .getIssues(getIssues)
//     .then(()=>{
//     const container = iss.display();
//     result.appendChild(container);
// })
//  })
