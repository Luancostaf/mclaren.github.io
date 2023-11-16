const userEmail="mclarens"
const userPassword="mclaren720s"
const userUsername="Mclaren"

function login () {
const emailInput=document.getElementById("mclarens").value

const usernameInput=document.getElementById("Mclaren").value

const passwordInput=document.getElementById("mclaren720s").value
console.log(emailInput)
    if(emailInput === "") {
        alert("Preencher email")
        return
    }
   if(passwordInput === "") {
        alert("Preencher password")
        return
    }

    if(userEmail !== emailInput) {
        alert("Error email errado")
        return
    }
    if(userPassword !== passwordInput){
        alert("Error senha errado")
        return
    }
    if(usernameInput === ""){
        alert("Preencher username")
        return
    }
    if(userUsername !== usernameInput){
        alert("Error usuario errado")
        return
    }
    window.location.href = "./products.html"
}
    

