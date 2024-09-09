document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData() {
        const res = await fetch('https://66df33cdde4426916ee3e0e3.mockapi.io/tareas');
        data = await res.json();
        return data;
    }

    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div');
            if (cap.status === "ready"){
                capDiv.classList.add('capsulanegativa');
                capDiv.innerHTML=`
                <div class="capsulanegativa">
                    <div class="infotextnegativo">
                        <p>${cap.task}</p>
                    </div>
                    <div class="botonesnegativo">
                        <div class="terminadonegativo">
                            <img src="storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                        </div>
                        <div class="eliminadonegativo">
                            <img src="storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                        </div>
                    </div>
                </div>
                `
            }
            if (cap.status === "On hold"){
                capDiv.classList.add('capsula');
                capDiv.innerHTML=`
                <div class="capsula">
                    <div class="infotext">
                        <p>${cap.task}</p>
                    </div>
                    <div class="botones">
                        <div class="terminado">
                            <img src="storage/img/pngwing.com (2).png" data-id="${cap.id}" class="completado">
                        </div>
                        <div class="eliminado">
                            <img src="storage/img/pngwing.com (4).png" data-id="${cap.id}" class="eliminado">
                        </div>
                    </div>
                </div>
                `
            }
        datosContenedor.appendChild(capDiv)
        });
        document.querySelectorAll('.completado').forEach(button => {
            button.addEventListener('click',botoncompletado);
        });
        document.querySelectorAll('.eliminado').forEach(button => {
            button.addEventListener('click', botoneliminado);
        })
    }

    async function addNewTask() {
        const task = taskInput.value;
        if(task.trim()=== ''){
            return;
        }
        // 
        await fetch('https://66df33cdde4426916ee3e0e3.mockapi.io/tareas',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({task,status:'On hold'})
        });
        taskInput.value='';
        const data = await fetchData();
        displayCapsula(data);
    }
    addTaskButton.addEventListener('click',addNewTask);
    // 
    async function botoncompletado(event) {
        const id = event.target.getAttribute('data-id');
        await fetch(`https://66df33cdde4426916ee3e0e3.mockapi.io/tareas/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status:'ready'})
        });
        const data = await fetchData();
        displayCapsula(data)
    };
    //eliminar
    async function botoneliminado(event) {
        const id = event.target.getAttribute('data-id');
        await fetch(`https://66df33cdde4426916ee3e0e3.mockapi.io/tareas/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({status:'ready'})
        });
        const data = await fetchData();
        displayCapsula(data)
    };

    fetchData().then(data => {
        console.log(data);
        displayCapsula(data);
    })
})