const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const boost = document.getElementById("boost");

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-activate");
    boost.style.visibility="hidden";
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-activate");
        boost.style.visibility="visible"
    });

    function mostrarSeña(){
        var tipo= document.getElementById("seña");
        if (tipo.type == "password"){
            tipo.type ="text";
        }else{
            tipo.type =" password";
        }
    }