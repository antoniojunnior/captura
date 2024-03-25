const form = document.getElementById("reserve-form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let valid = true;

    const nameField = document.getElementById("name");
    if(!nameField.value){
        valid = false;
    }

    if(valid){
        form.method = "post";
        form.action = "/reservar";
        form.submit();
    }
    
})

const whatsappField = document.getElementById("whatsapp");

whatsappField.addEventListener("keyup", (e) => {
    let input = e.target;
    input.value = phoneMask(input.value);
})

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}