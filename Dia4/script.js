var info = {
    "informacion_personal": {
        "nombre": "Juan Pérez",
            "edad": 30,
                "direccion": {
            "calle": "Calle Principal",
                "numero": 123,
                    "ciudad": "Ciudad Ejemplo"
        },
        "contacto": {
            "correo": "juan.perez@example.com",
                "telefono": "+123456789"
        }
    },
    "historial_educativo": [
        {
            "nivel": "Secundaria",
            "institucion": "Instituto Secundario",
            "anio_inicio": 2000,
            "anio_fin": 2005
        },
        {
            "nivel": "Universidad",
            "institucion": "Universidad Ejemplar",
            "titulo": "Licenciatura en Ciencias",
            "anio_inicio": 2006,
            "anio_fin": 2010
        }
    ],
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
                "periodo": "2016-actualidad",
                "responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
}
function menuPrin() {
    console.log("");
    console.log(
        "-------------   BIENVENIDO AL MENU PRINCIPAL   ------------------\n" +
        "1). Crear\n" +
        "2). Ver.\n" +
        "3). Actualizar. \n" +
        "4). Eliminar. \n" +
        "5). Salir.\n" +
        "----------------------------------------------------------------\n"
    );
};
function opcUno() {
    console.log("");
    console.log(
        "-------------   BIENVENIDO AL SUBMENU CREAR ------------------\n" +
        " Cual de las siguientes casos deseas crear: \n"+
        "1). Historial educativo.\n" +
        "2). Experiencia personal. \n" +
        "3). Volver al menu principal \n" +
        "----------------------------------------------------------------\n"
    );
};
function opcDos() {
    console.log("");
    console.log(
        "-------------   BIENVENIDO AL SUBMENU VER ------------------\n" +
        " Cual de las siguientes casos deseas ver: \n"+
        "1). Información personal.\n" +
        "2). Historial educativo.\n" +
        "3). Experiencia personal. \n" +
        "4). Volver al menu principal. \n" +
        "----------------------------------------------------------------\n"
    );
};

var booleano1=true;
while (booleano1==true){

    menuPrin()

    var opcMenuPrin = prompt ("Ingrese unas de las opciones del menu principal: \n");

    if (opcMenuPrin==1){
        let crear = true;
        while(crear==true){
            opcUno()

            var newopcUno = prompt("Ingrese una de las opciones del submenu crear\n");
            console.clear()
            if(newopcUno==1){
                var Nivel=prompt("Ingrese el nivel educativo en el que te encuetres\n");
                var Institucion=prompt("Ingrese el nombre de la institución que estas\n");
                var Titulo=prompt("Ingrese el titulo que estas ejerciendo");
                var Ano_inicio=prompt("Ingrese el año que iniciaste\n");
                var Ano_fin=prompt("Ingrese el año que finalizaste\n");
                info["historial_educativo"].push({"nivel": Nivel,"institucion":Institucion,"titulo":Titulo,"anio_inicio":Ano_inicio,"anio_fin":Ano_fin});

            }
            else if(newopcUno==2){
                var Puesto=prompt("Ingrese el puesto en el que estas\n");
                var Empresa=prompt("Ingresa el nombre de la empresa\n");
                var Periodo=prompt("Ingrese el perioso(año)");
                var Responsabilidades=prompt("Ingrese las reponsabilidades que ejerces.\n");
                info["experiencia_laboral"].push({"puesto":Puesto, "empresa":Empresa, "periodo":Periodo,"responsabilidades":Responsabilidades});

            }
            else if (newopcUno==3){
                crear=false 
            }
        menuPrin()
        }
    }
    else if(opcMenuPrin==2){
        var ver =true;
        while (ver==true){
            opcDos()

            var newopcDos=prompt("Ingrese unas de las opciones del submenu ver.\n");

            if (newopcDos==1){
                console.log("---------- Información personal ------------");
                for ( var i of info["informacion_personal"]){
                    console.log("Nombre",i["nombre"]);
                    console.log("Edad",i["edad"]);
                    console.log("Calle",i["calle"]);
                    console.log("Numero",i["numero"]);
                    console.log("Ciudad",i["ciudad"])
                }
                
                
            }
            else if(newopcDos==2){
                console.log("-------Historial Educativo-----------");
                for ( var i of info["historial_educativo"]){
                    console.log("Nivel",i["nivel"]);
                    console.log("Institucion",i["institucion"]);
                    console.log("Año de inicio",i["anio_inicio"]);
                    console.log("Año de fin",i["anio_fin"]);
                }
            }
            else if(newopcDos==3){
                console.log("--------- Experiencia Laboral ---------- ");
                for ( var a of info["experiencia_laboral"]){
                    console.log("Puesto",i["puesto"]);
                    console.log("Empresa",i["empresa"]);
                    console.log("Periodo",i["periodo"]);
                    console.log("Responsabilidades",i["responsabilidades"]);
                }
            }
            else if(newopcDos==4){
                ver=false
            }
        menuPrin()
        }
    }
    else if(opcMenuPrin==3){
        console.log("tes");
    }
    else if(opcMenuPrin==4){
        console.log("ucua");
    }
    else if (opcMenuPrin==5){
        booleano1=false
    }
}
