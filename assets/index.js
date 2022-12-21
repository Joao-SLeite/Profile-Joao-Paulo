const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")
const btnSendEmail = document.getElementById("btn-send")

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active")
    navMenu.classList.remove("active")
}))

btnSendEmail.addEventListener("click", (evt) =>{
    evt.preventDefault()
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_pv4e57e", "template_sre4ym8", params).then(function (){
        alert("Obrigado Pelo contato!!! E-mail enviado com Sucesso!!!")
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
    })
})