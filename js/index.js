window.addEventListener("load", () =>{
    if (!localStorage.getItem("testeCokies")) { 
        var sectionCookies = document.getElementById('section-cookies');  
        var sectionClose = document.getElementById('cookies-close');
        
        sectionCookies.style.display = 'flex';  
        sectionClose.addEventListener("click", function(e) {  
            e.preventDefault();
            localStorage.setItem("testeCokies", true);
          
            sectionCookies.style.display = 'none';
        });
    }
});

document.querySelectorAll(".u-btn-cta").forEach(element => {
    element.addEventListener("click", () =>{
        document.getElementById("faca-seu-futuro").scrollIntoView();
    });
});



