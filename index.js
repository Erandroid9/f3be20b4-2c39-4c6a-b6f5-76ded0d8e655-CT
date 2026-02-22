export const CONNECTIONS=()=>{

    ASSETSCONNECTION();

    PRODUCTIONMODE();

};

const ASSETSCONNECTION=()=>{
    fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Library/ASSETS.js")
    .then(res =>res.text())
    .then(data=>{
        localStorage.setItem("ASSETS",data);
    })
    .catch(error=>{console.log(error)})
};

const PRODUCTIONMODE=()=>{

    const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {

        const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);

        return ACTION(user ? user : false);
        
    };

    const DIRECTLINK="https://docs.google.com/spreadsheets/d/1tv2gw619sc3yTAAjHqJ3HeeAMif36cldfoC7k_h1qO8/edit?usp=sharing";

    const DATABASE="https://script.google.com/macros/s/AKfycbxgaFqwexOOBXA5tn1n2Mp0k9-KlwZ8ZP4QUvWM_CigDocfx-nVR0xz2RyuwDBYgwMp/exec";

    fetch(DATABASE,{

        method:"POST",

        mode:"cors",

        body:JSON.stringify({

            "sheetName":"Erandix",

            "spreadsheetUrl":DIRECTLINK

        })

    })

    .then(res =>res.json())

    .then(data=>{

        FINDER(data,"VERSION",localStorage.getItem("Version"),(User)=>{

            if (User.VERSION === localStorage.getItem("Version")&&User.ACCESS === "Approved") {

                localStorage.setItem("APIS",User.APIS);
                localStorage.setItem("COLORS",User.COLORS);
                localStorage.setItem("COMPONENTS",User.COMPONENTS);
                localStorage.setItem("CONSTANTS",User.CONSTANTS);
                localStorage.setItem("ERANDCONFIG",User.ERANDCONFIG);
                localStorage.setItem("FUNCTIONS",User.FUNCTIONS);
                localStorage.setItem("PAGES",User.PAGES);
                localStorage.setItem("PLUGINS",User.PLUGINS);
                localStorage.setItem("PROJECTANDROID",User.PROJECTANDROID);
                localStorage.setItem("PROJECTWEB",User.PROJECTWEB);
                localStorage.setItem("PROJECTDESKTOP",User.PROJECTDESKTOP);
                localStorage.setItem("RUN",User.RUN);
                localStorage.setItem("SERVER",User.SERVER);
                localStorage.setItem("STYLES",User.STYLES);
                localStorage.setItem("TEMPLATES",User.TEMPLATES);
                localStorage.setItem("ANDROIDPAGES",User.ANDROIDPAGES);
                localStorage.setItem("WEBPAGES",User.WEBPAGES);
                localStorage.setItem("DESKTOPPAGES",User.DESKTOPPAGES);

                PROJECTFETCH(DIRECTLINK,DATABASE);
               
            } else {

                const style = document.createElement("style");

                document.head.appendChild(style);

                style.innerHTML = `

                    .OfflineMessage{
                        margin-top:2%;
                        margin-bottom:5%;
                        font-size:20px; 
                    }

                    .Buttons{
                        width:80%;
                        height:50px;
                        margin:2%;
                        outline:none;
                        color:white;
                        border:none;
                        border-radius:20px;
                    }

                    #RetryButton{
                        background:forestgreen
                    }

                    #ContactAdminButton{
                        background:brown;
                    }
                
                `;

                const Body=document.querySelector("body");

                Body.innerHTML=`

                    <h1 id="OffLineHeading">ERROR</h1>

                    <h1 class="OfflineMessage">Failed to Get Response From Server</h1>

                    <button class="Buttons" id="RetryButton">Retry</button>

                    <button class="Buttons" id="ContactAdminButton">Contact Admin</button>
                
                `;

                const RetryButton=document.querySelector("#RetryButton");

                RetryButton.addEventListener("click",()=>{

                    location.reload();
                });
                
            };

        });

    })

    .catch(error =>{

        console.log(error);
            
    });

};

const PROJECTFETCH = (DIRECTLINK, DATABASE) => {
  const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {
    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);
    return ACTION(user ? user : false);
  };

  fetch(DATABASE, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      sheetName: "Manager",
      spreadsheetUrl: DIRECTLINK,
    }),
  })
    .then((res) => res.json())
    .then((data) => {

        FINDER(data, "ID", localStorage.getItem("Config"), (User) => {

            if (User.ID === localStorage.getItem("Config") && User.ACESS === "Approved") {

                if (localStorage.getItem("Env") === "Desktop" ) {

                    fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Build/"+User.DESKTOP)
                    .then(res =>res.text())
                    .then(data=>{
                        localStorage.setItem("PROJECT",data);
                    })
                    .catch(error=>{console.log(error)})
                    
                } else {

                    if (localStorage.getItem("Env") === "Android") {

                        fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Build/"+User.ANDROID)
                        .then(res =>res.text())
                        .then(data=>{
                            localStorage.setItem("PROJECT",data);
                        })
                        .catch(error=>{console.log(error)})
                        
                    } else {

                        fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Build/"+User.WEB)
                        .then(res =>res.text())
                        .then(data=>{
                            console.log(data)
                            localStorage.setItem("PROJECT",data);
                        })
                        .catch(error=>{console.log(error)})
                        
                    };
                    
                };
                
            } else {

                const style = document.createElement("style");

                document.head.appendChild(style);

                style.innerHTML = `

                    .OfflineMessage{
                        margin-top:2%;
                        margin-bottom:5%;
                        font-size:20px; 
                    }

                    .Buttons{
                        width:80%;
                        height:50px;
                        margin:2%;
                        outline:none;
                        color:white;
                        border:none;
                        border-radius:20px;
                    }

                    #RetryButton{
                        background:forestgreen
                    }

                    #ContactAdminButton{
                        background:brown;
                    }
                    
                `;

                const Body=document.querySelector("body");

                Body.innerHTML=`

                    <h1 id="OffLineHeading">ERROR</h1>

                    <h1 class="OfflineMessage">Project Not Found?</h1>

                    <button class="Buttons" id="RetryButton">Retry</button>

                    <button class="Buttons" id="ContactAdminButton">Contact Admin</button>
                    
                `;

                const RetryButton=document.querySelector("#RetryButton");

                RetryButton.addEventListener("click",()=>{

                    location.reload();

                });
                
            };

        });
    })
    .catch((error) => {
      console.log(error);
    });
};