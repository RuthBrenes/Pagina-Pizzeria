// MENÚ RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    //Click abrir
    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active"); //Cuando se le de click al botón de open, al menú responsive se le va a agregar la clase Active
    });

    //Click cerrar
    btnMenuClose.addEventListener("click", function () {
        menuResponsive.classList.remove("active"); //Cuando se le de click al botón de close, al menú responsive se le va a remover la clase Active
    });

    //Cerrar menú con elemento de enlace
    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    })

    // SLIDER DE PRODUCTOS
    var contenedor = document.querySelector('.slider'),  //querySelector: Permite acceder a cualquier elemento
        btnIzquierdo = document.getElementById("btn-izquierda"),
        btnDerecho = document.getElementById("btn-derecha");

    // EVENTO PARA EL BOTÓN DERECHO
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth; //offSetWidth: tamaño total que se puede hacer scroll el contenedor. += es para saber desde cuál punto de partida debe hacer scroll
    });

    // EVENTO PARA EL BOTÓN IZQUIERDO
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth; //Se pone -= para ir hacia la izquierda
    });

    // VALIDACIÓN DE FORMULARIO
    var formulario = document.getElementById("formulario");

        function validar(e) {
            var inputNombre = document.getElementById("nombre"),
                inputEmail = document.getElementById("email"),
                inputComments = document.getElementById("comentarios"),
                alertSuccess = document.getElementById("alertSuccess"),
                alertError = document.getElementById("alertError");

            if (inputNombre.value == 0 || inputEmail.value == 0 || inputComments.value == 0) { 
                e.preventDefault(); //Que no ejecute el evento
                alertError.classList.remove("hide"); //Permite remover y añadir clases
                alertError.classList.add("show");

                setTimeout(function() {
                    alertError.classList.remove("show"); 
                    alertError.classList.add("hide");
                }, 2000)
            } else{
                e.preventDefault();
                alertSuccess.classList.remove("hide"); 
                alertSuccess.classList.add("show");

                setTimeout(function() {
                    alertSuccess.classList.remove("show"); 
                    alertSuccess.classList.add("hide");
                }, 2000)

                //Vaciar los campos
                inputNombre.value = "";
                inputEmail.value = "";
                inputComments.value = "";
            }
        }

    //EVENTOS DEL FORMULARIO
    formulario.addEventListener("submit", validar); //Cuando el formulario haga submit, va a ir a la función validar

    //BOTÓN DE SCROLL TOP
    var btnTop = document.getElementById("btn-top"),
        logo = document.getElementById("logo");

    //DECTAR EL SCROLL EN LA PÁGINA WEB
    window.addEventListener("scroll", function(){ //Detecta el scroll en la ventana
        var scroll = document.documentElement.scrollTop //Llama al elemento HTML - Tamaño del scroll
            fullSize = document.documentElement.offsetHeight, //Alto completo del documento HTML
            sizeVP = this.document.documentElement.clientHeight; //Tamaño del viewport
            //Si sumo el clienteHigth + scrollTop da como resultado el offsetHeigth

        if (scroll > 100) {
            btnTop.classList.add("show");
        }else{
            btnTop.classList.remove("show");
        }

        //MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PÁGINA
        if (fullSize == (scroll + sizeVP)) {
            btnTop.classList.add("scrollFinal");
        }else{
            btnTop.classList.remove("scrollFinal");
        }
    });

    //DETECTAR EVENTO CLICK EN EL BOTÓN
    btnTop.addEventListener("click", function () {
        window.scrollTo(0,0); //El scrollTo tiene dos valores: en X y en Y
    });

    //DETECTAR EVENTO CLICK EN EL LOGO
    logo.addEventListener("click", function () {
        window.scrollTo(0,0); //El scrollTo tiene dos valores: en X y en Y
    });
