// CRUD ( create. read. update and delete)
// Diccionario 
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
// Cada funcion contiene un menu diferente que es el que va a interartuar el usuario con la consola 
function menuPrin() {
    console.log("");
    console.log(
        "-------------   BIENVENIDO AL MENU PRINCIPAL   ------------------\n" +
        "1). Crear\n" +
        "2). Ver Información.\n" +
        "3). Actualizar Información. \n" +
        "4). Eliminar Información. \n" +
        "5). Finalizar programa.\n" +
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

function InfoPer() {
    console.log("");
    console.log(
    "---------------- Informacion personal----------------\n"+
    " Cual informacion deseas modificar:\n"+
    " 1). Nombre \n."+
    " 2). Edad \n."+
    " 3). Dirección \n."+
    " 4). Contacto \n"+
    " 5). Volver al menu principal\n"+
    "--------------------------------------------------------"
    );
}
function del(){
    console.log("");
    console.log(
        "---------------Información a eliminar -------------\n"+
        " 1). Historial Educativo. \n"+
        " 2). Experiencia Laboral. \n"+
        " 3). Volver al menu principal \n"+
        "------------------------------------------------------"
    );
}
// mientras el booleano sea verdadero se hara
var booleano1=true;
while (booleano1==true){
    console.clear();// limpiar consola
    menuPrin()// Se muestra la funcion del menu principal
    // crear una variable donde se guardara la opcion que el usuario digite en la consola.
    var opcMenuPrin = prompt ("Ingrese unas de las opciones del menu principal: \n");
    console.clear();
    // Si la opcion elegida es uno se hara
    if (opcMenuPrin==1){
        // Realizar un boleano que se llamara crear
        let crear = true;
        while(crear==true){
            opcUno()// Muestra la funcion del menu de la opcion uno
            // crear una variable donde se guardara la opcion que el usuario digite en la consola.
            var newopcUno = prompt("Ingrese una de las opciones del submenu crear\n");
            console.clear()// Si la opcion elegida es uno se hara
            if(newopcUno==1){
                console.clear()
                let Nivel=prompt("Ingrese el nivel educativo en el que te encuentres\n");// Se define varias variables donde cada uno el usuario tendra que ingresar informacion diferente
                let Institucion=prompt("Ingrese el nombre de la institución que estas\n");
                let Titulo=prompt("Ingrese el titulo que estas ejerciendo");
                let Ano_inicio=prompt("Ingrese el año que iniciaste\n");
                let Ano_fin=prompt("Ingrese el año que finalizaste\n");
                info["historial_educativo"].push({"nivel": Nivel,"institucion":Institucion,"titulo":Titulo,"anio_inicio":Ano_inicio,"anio_fin":Ano_fin});//Cuando toda la informacion esta ingresada se realiza un push donde es para crear la nueva informacion 
                console.clear();
            }
            // Si la opcion es dos 
            else if(newopcUno==2){
                console.clear()
                //  Se define varias variables donde cada uno el usuario tendra que ingresar informacion diferente
                let Puesto=prompt("Ingrese el puesto en el que estas\n");
                let Empresa=prompt("Ingresa el nombre de la empresa\n");
                let Periodo=prompt("Ingrese el perioso(año)");
                let Responsabilidades=prompt("Ingrese las reponsabilidades que ejerces.\n");
                info["experiencia_laboral"].push({"puesto":Puesto, "empresa":Empresa, "periodo":Periodo,"responsabilidades":Responsabilidades});//Cuando toda la informacion esta ingresada se realiza un push donde es para crear la nueva informacion 
                console.clear();
            }
            // Si la opcion elegida se hara
            else if (newopcUno==3){
                crear=false // boleano pasa a ser falso y automaticamente se finalizara
            }
        menuPrin()// Se muestra la funcion del menu principal
        }
    }
    //Si la opcion del menu principal es dos se hara
    else if(opcMenuPrin==2){
        console.clear()
        var ver =true;
        while (ver==true){
            opcDos()// Se muestra la funcion del menu de la opcion dos

            var newopcDos=prompt("Ingrese unas de las opciones del submenu ver.\n");// Se define una variable y donde el usuario ingresara el usuario.
            console.clear();
            // Si la opcion elegida es uno se hara
            if (newopcDos==1){
                console.clear()
                // se imprimira la consola la informacion personal
                console.log("--------Informacion Personal--------");

                // se mostrara la consola el nombre donde entrara al diccionario info en la parte informacion personal en la posicion de nombre y asi con los demas
                console.log("Nombre:",info["informacion_personal"]["nombre"]);
                console.log("Edad: ",info["informacion_personal"]["edad"],"años");
                console.log("Direccion \n Calle:",info["informacion_personal"]["direccion"]["calle"]," \n Numero: ",info["informacion_personal"]["direccion"]["numero"],"\nCiudad:",info["informacion_personal"]["direccion"]["ciudad"]);
                console.log("Contato \n Correo:",info["informacion_personal"]["contacto"]["correo"],"\nTelefono:",info["informacion_personal"]["contacto"]["telefono"]);
                console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
                
            }
            // Si la opcion es dos se hara 
            else if(newopcDos==2){
                console.clear()
                console.log("-------Historial Educativo-----------");
                // es un bucle que va a leer el historial educativo
                for ( var i of info["historial_educativo"]){
                    console.log("Nivel",i["nivel"]);
                    console.log("Institucion",i["institucion"]);
                    console.log("Año de inicio",i["anio_inicio"]);
                    console.log("Año de fin",i["anio_fin"]);
                    console.log("-------------------------------------");
                    
                }
                
            }
            else if(newopcDos==3){
                console.clear()
                console.log("--------- Experiencia Laboral ---------- ");
                // es un bucle que va a leer la experiencia laboral
                for ( var i of info["experiencia_laboral"]){
                    console.log("Puesto",i["puesto"]);
                    console.log("Empresa",i["empresa"]);
                    console.log("Periodo",i["periodo"]);
                    console.log("Responsabilidades",i["responsabilidades"]);
                    console.log("------------------------------------------------");
                    
                }
            }
            // Si la opcion elegisa es cuatro se finalizara el programa 
            else if(newopcDos==4){
                ver=false
            }
        menuPrin()
        }
    }
    // Si la opcion digitda es tres se hara
    else if(opcMenuPrin==3){
        console.clear()
        let confirmacion = "si";
        while(confirmacion=="si"){
            InfoPer()// mostra funcion de la informacion personal

            var opcInfoPer = prompt("Ingrese la opcion que desees modificar\n")
            // Depende de la opcion que el usuario ingrese se hara 
            if (opcInfoPer==1){
                console.clear()
                // Se definira variables donde el nuevo valor se posiciorara en el valor antieguo y se actualizara
                let newNombre = prompt("Ingrese el nuevo nombre");
                info["informacion_personal"]["nombre"]=newNombre

                confirmacion=prompt("Si quieres modificar otra informacion escribe: si, de lo contrario preciona enter\n")
                
            }
            else if (opcInfoPer==2){
                console.clear()
                let newEdad = prompt("Ingrese la nueva edad");
                info["informacion_personal"]["edad"]=newEdad

                confirmacion=prompt("Si quieres modificar otra informacion escribe: si, de lo contrario preciona enter\n")
                
            }
            else if (opcInfoPer==3){
                console.clear()
                let newCalle=prompt("Ingresa la nueva calle");
                let newNumero=prompt("Ingresa el nuevo numero");
                let newCiudad=prompt("Ingresa la nueva ciudad");
                info["informacion_personal"]["direccion"]={"calle":newCalle,"numero":newNumero,"ciudad":newCiudad}
                
                confirmacion=prompt("Si quieres modificar otra informacion escribe: si, de lo contrario preciona enter\n")
                
            }
            else if (opcInfoPer==4){
                console.clear()
                let newCorreo = prompt("Ingrese el nuevo correo");
                let newTelefono = prompt("Ingrese el nuevo telefono");
                info["informacion_personal"]["contacto"]={"correo":newCorreo,"telefono":newTelefono}

                confirmacion=prompt("Si quieres modificar otra informacion escribe: si, de lo contrario preciona enter\n")
                
            }
            else if (opcInfoPer==5){
                confirmacion=""
            }
        }
    }
    // Si la opcion elegida es 4 se hara 
    else if(opcMenuPrin==4){
        console.clear()
        let borrar=true;
        while(borrar==true){
            del()

            let opcDel = prompt("Ingrese la opcion que desees eliminar")

            if (opcDel==1){
                console.clear()
                console.log("------------ HISTORIAL EDUCATIVO ----------------");
                let cont=1// Se crea un contador donde enumerara la cantidad de informacion que esta en info
                for ( var i of info["historial_educativo"]){
                    console.log(cont);
                    cont=cont+1// cont va ser igual mas 1 donde sumara uno a uno cada parte
                    console.log("Nivel",i["nivel"]);
                    console.log("Institucion",i["institucion"]);
                    console.log("Año de inicio",i["anio_inicio"]);
                    console.log("Año de fin",i["anio_fin"]);
                
                }
                let digito = prompt("Digite el numero de la informacion a borrar. \n");
                // ingresara  a info en la historial educativo donde borrara el numero ingresado por el usuario, el -1 es para que reste el numero por que el contador va un numero adelante, y el otro uno es para que solo borre un elemento
                info["historial_educativo"].splice(digito-1,1)
            }
            else if  (opcDel==2){
                console.clear()
                console.log("--------- EXPERIECIA LABORAL ---------- ");
                let conta=1
                for ( var i of info["experiencia_laboral"]){
                    console.log(conta);
                    conta=conta+1
                    console.log("Puesto",i["puesto"]);
                    console.log("Empresa",i["empresa"]);
                    console.log("Periodo",i["periodo"]);
                    console.log("Responsabilidades",i["responsabilidades"]);
                }
                let digita = prompt("Digite el numero de la informacion a borrar. \n");
                info["experiencia_laboral"].splice(digita-1,1)
            }
            //Si la opcionn elegida es uno se finalizara 
            else if (opcDel==3){
                borrar=false
            }
        menuPrin()
        }
    }
    else if (opcMenuPrin==5){// Finalizacion del programa
        booleano1=false
    }
}
// Elaborado por Zully Fernanda Ortiz Avendaño Cc. 1092528097 
