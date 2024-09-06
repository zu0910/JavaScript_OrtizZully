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
        document.getElementById("negrita").innerHTML = `
        ${datas[0].results[0].login.username}    
                                
        `
        document.getElementById("text").innerHTML = `
        <p>Hi, My name is </p>                     
        `
    }
    function aparecer_email(){
        document.getElementById("negrita").innerHTML = `
        ${datas[0].results[0].email}  
        `
        document.getElementById("text").innerHTML = `
        <p> My email address is </p>                     
        `
    }
    const birthday = new Date(datas[0].results[0].dob.date);
        const date = birthday.toLocaleDateString('en-US',{
            year: "numeric",
            month: "numeric",
            day: "numeric"
        })
    function aparecer_birth(){
        document.getElementById("negrita").innerHTML = `
        ${dateBirth}
        `
        document.getElementById("text").innerHTML = `
        <p> My birthday is </p>                     
        `
        const birthday = new Date (datas.results[0].dob.date);
        const dateBirth = birthday.toLocaleDateString('en-US',{
            year : 'numeric',
            month : "numeric",
            day : "numeric"
        })
    }
    function aparecer_location(){
        document.getElementById("negrita").innerHTML = `
        ${datas[0].results[0].location.street.number} ${datas[0].results[0].location.street.name}
        `
        document.getElementById("text").innerHTML = `
        <p>Hi, My address is </p>                     
        `
    }
    function aparecer_phone(){
        document.getElementById("negrita").innerHTML = `
        ${datas[0].results[0].phone}  
        `
        document.getElementById("text").innerHTML = `
        <p>Hi, My phone number is </p>                     
        `
    }
    function aparecer_pass(){
        document.getElementById("negrita").innerHTML = `
        ${datas[0].results[0].login.password}  
        `
        document.getElementById("text").innerHTML = `
        <p>Hi, My password is </p>                     
        `
    }
    function reset1(){
        document.getElementById("negrita").innerHTML = ""
        document.getElementById("text").innerHTML =""
    }
