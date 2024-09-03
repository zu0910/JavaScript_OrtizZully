//Maps

var CajaMap = document.getElementById("flexmaps");
let EndPointMap = "https://valorant-api.com/v1/maps"

function BtnMaps(){
    document.getElementById("mapas").addEventListener("click", ()=>{
        CallMaps(EndPointMap)
    });
};


function CallMaps(Api){
    fetch(Api)
    .then(Res => Res.json())
    .then(Maps =>{
        let MapList = Maps.data

        CajaMap.innerHTML = ``
        MapList.forEach(ListMap => {
            CajaMap.innerHTML += `
            <div class="card" style="width: 25rem;" >
                <img src="${ListMap.splash}" class="card-img-top" alt="...">
                <h4>${ListMap.displayName}</h4>
            </div>
            `
        });

        function SearchMap(){
            document.getElementById("search2").addEventListener("change", (e)=>{
                let Search = e.target.value;

                let SearchList = Maps.data

                SearchList.forEach(ListSearch =>{
                    let NameMap = ListSearch.displayName
                    if (Search == NameMap){
                        CajaMap.innerHTML = `
                        <div class="card" style="width: 25rem;" >
                            <img src="${ListSearch.splash}" class="card-img-top" alt="...">
                            <h3>${ListSearch.displayName}</h3>
                        </div>
                        `
                        console.log(ListSearch.displayName)
                    
                    } 
                });
                
            });
            
        };
        SearchMap()
    });
};

BtnMaps()
