let login = document.getElementById("container-log")
login.style.display = "none"
let loginForm = () => {
    login.style.display = "block"
    login.style.transform=""
}
document.getElementById("btn-c-1").addEventListener("click", loginForm)
document.getElementById("btn-c-1").addEventListener("click", loginForm)

let back = () => {
    login.style.display = "none"
    
}
document.getElementById("logo").addEventListener("click", back)

let username = document.getElementsByTagName("text")
let password = document.getElementsByTagName("password")

