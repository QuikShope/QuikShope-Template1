// Selecting the required elements

sideMenu = document.getElementById('sideMenu')
hamburger = document.getElementById('hamburger')
wrapper = document.getElementById('wrapper')


// function to control the side bar opertaions
function show(){
    if (sideMenu.classList.contains('hide')){
        sideMenu.classList.remove('hide')
        sideMenu.classList.add("show");
        hamburger.innerHTML = `<i class="fas fa-times fa-lg me-2"></i>`
        wrapper.classList.add("opacity-50");
        wrapper.classList.remove("opacity-100");
    }
    else{
        sideMenu.classList.add('hide')
        sideMenu.classList.remove("show");  
        hamburger.innerHTML = `<i class="fas fa-bars fa-lg me-2"></i>`      
        wrapper.classList.add("opacity-100");
        wrapper.classList.remove("opacity-50");
    }
}

