let  datas=[]
fetch("https://randomuser.me/api/")
    .then( res => res.json())
    .then( data => {
        datas.push(data);
        console.log(data.results[0].picture.medium);
        
        document.getElementById("img").innerHTML+=`
        <img src=${data.results[0].picture.medium}>
        `

        document.getElementById("text").addEventListener("click",show)
        function show(){
            document.getElementById("data")
        }
    } )
    function aparecer_user(){
        document.getElementById("text").innerHTML = `
        ${datas[0].results[0].login.username}                            
        `
    }
    function reset(){
        document.getElementById("text").innerHTML = ""
    }