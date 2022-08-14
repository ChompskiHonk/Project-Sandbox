//target the bars
const bars = document.getElementById('bars');
//target the navigation bar
const nav = document.getElementById('header-nav');
//target the closign tag that will be present in the mobile nav-bar
const close = document.getElementById('close');

//if the bars are clicked on, make the mobile sidebar pop out
if(bars){
    bars.addEventListener('click', ()=>{
        nav.classList.add('active');
    });
}


//if the close tag (x) is clicked, close the mobile nav bar
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    });
}

//get all the html of projects the belong in certain categories (****TODO*****)
let allProjects = document.querySelectorAll('.project-container .proj.all');
let finProjects = document.querySelectorAll('.project-container .proj.finished');
let incomProjects = document.querySelectorAll('.project-container .proj.incomplete');
let immProjects = document.querySelectorAll('.project-container .proj.immitation');
let abProjects = document.querySelectorAll('.project-container .proj.abandoned');

//target the class list of the project options
var projOps = document.getElementsByClassName('option');
//set up event listeners for when on of the project options are selected
for(let i = 0; i < projOps.length; i++){
        projOps[i].addEventListener('click', ()=>{
        let preActive = document.querySelector('.option.active');
        preActive.classList.remove('active');
        projOps[i].classList.add('active');

        //identify the slected class' id
        let keyWord = projOps[i].id;

        

        //select the project-section div
        let container = document.getElementsByClassName('project-container');
        let h3Title = document.querySelector('.project-section h3');
        /*create conditionals that change the content of the page 
        so that only certain projects are shown when different project categories are
        selected byt he user*/
        container[0].innerHTML = "";
        if(keyWord == "all"){
            h3Title.innerHTML = "Features all the projects that I have worked on as of August 2022.";
            for(let i = 0; i < allProjects.length; i++){
                container[0].innerHTML += allProjects[i].outerHTML;
            }
        }
        if(keyWord == "finished"){
            h3Title.innerHTML = "Features all of the completed projects as of this day.";
            for(let i = 0; i < finProjects.length; i++){
                container[0].innerHTML += finProjects[i].outerHTML;
            }
        }
        if(keyWord == "incomplete"){
            h3Title.innerHTML = "Features all the incomplete projects that are still in progress.";
            if(incomProjects.length == 0)container[0].innerHTML = "All current projects have been completed.";
            for(let i = 0; i < incomProjects.length; i++){
                container[0].innerHTML += incomProjects[i].outerHTML;
            }
        }
        if(keyWord == "immitation"){
            h3Title.innerHTML = "Features all the projects that were made to be imitations or \"clones\" of existing websites.";
            for(let i = 0; i < immProjects.length; i++){
                container[0].innerHTML += immProjects[i].outerHTML;
            }
        }
        if(keyWord == "abandoned"){
            h3Title.innerHTML = "Features older projects that are out of commision and will most likely remain untouched untill other projects are completed.";
            if(abProjects.length == 0) container[0].innerHTML = "Trust me, this will have stuff in it later...";
            for(let i = 0; i < abProjects.length; i++){
                container[0].innerHTML += abProjects[i].outerHTML;
            }
        }
        
    });
}

