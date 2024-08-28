console.log("No mas producir");

function mensaje(){
    setTimeout(function(){
        console.log("Holis!!");
    },5000)
}

function alerta(){
    alert("El programa ha fallado con éxito :)");
}


function obtenerTexto(){
    fetch('texto.txt') //se hace la solicitud al servidor de un archivo "texto.txt"
    .then(res => res.text()) // se lee la respuesta como texto plano, lo cual devolverá el archivo como una cadena llamado "data"
    .then(data=>{ // se dará manejo a data mediante su impresión en consola
        document.getElementById('output').innerHTML=data;
    })
    .catch(err =>{
        console.log("Hubo un error")
        document.getElementById('output').innerHTML='err';
    })
}

function CargarJson(){
    const tabla = document.querySelector('#ListaDeUsuarios tbody')
    fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.cargo}</td>
                `
                tabla.appendChild(row)
            });
            });
        }
CargarJson()

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open('GET',url)

// xmlhttp.onreadystatechange == function(){
//     if(this.readyState==4 && this.status==200){
//         var myArr = JSON.parse(this.resposn)
//     }
// }