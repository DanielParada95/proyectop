function seleccionar(link){
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className= "";
    opciones[1].className= "";
    opciones[2].className= "";
    opciones[3].className= "";
    link.className = "seleccionado"

    var x = document.getElementById("nav");
    x.className=""
}



function responsivemenu(){
    var x = document.getElementById("nav")
    if(x.className===""){
        x.className = "responsive"
    }else{
        x.className = ""
    }
}

window.onscroll = funtion(); {efectoskill()}

function efectoskill(){
    var skill = document.getElementById("skill")
    var distancia_skill = window.innerHeight - skill.getBoundingClientRect().top
    if (distancia_skill >= 300){
        document.getElementById(html).classList.add("barra-progreso1")
        document.getElementById(js).classList.add("barra-progreso2")
        document.getElementById(ts).classList.add("barra-progreso3")
        document.getElementById(bd).classList.add("barra-progreso4")
        document.getElementById(node).classList.add("barra-progreso5")
        document.getElementById(php).classList.add("barra-progreso6")
        document.getElementById(react).classList.add("barra-progreso7")
        document.getElementById(angular).classList.add("barra-progreso8")
        document.getElementById(ruby).classList.add("barra-progreso9")

    }
}