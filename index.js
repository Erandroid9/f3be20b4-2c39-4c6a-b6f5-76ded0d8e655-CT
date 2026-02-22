export const CONNECTIONS=()=>{

    ASSETSCONNECTION();

    PRODUCTIONMODE();

    if (!localStorage.getItem("Packaged")) {
        
        const style = document.createElement("style");

        document.head.appendChild(style);

        style.innerHTML = `

            .box{
                position:fixed;
                overflow:hidden;
                width:100%;
                left:0;
                height:100%;
                margin:0;
                padding:0;
                top:0;
                text-align:center;
                color:teal;
                box-shadow:0 0 25px rgba(0,255,179,0.3);
                font-family:Arial, sans-serif;
            }

            .spinner{
                width:50px;
                height:50px;
                margin:0 auto 20px;
                border:5px solid rgba(0,255,179,0.2);
                border-top:5px solid #00ffb3;
                border-radius:50%;
                animation:spin .5s linear infinite;
            }

            @keyframes spin{
                100%{transform:rotate(360deg);}
            }

            .progress{
                height:6px;
                width:80%;
                margin-left:10%;
                background:rgba(0,255,179,0.2);
                border-radius:10px;
                margin-top:20px;
                overflow:hidden;
            }

            .bar{
                height:100%;
                width:0%;
                background:#00ffb3;
                transition:width .4s;
            }

            .small{
                font-size:13px;
                opacity:.7;
                margin-top:10px;
            }

            .Name{
                margin-top:25%;
            }
                
        `;

        const Body=document.querySelector("body");

        Body.innerHTML=`

            <div class="box">

                <h2 class="Name">CONFIGURING</h2>

                <br><br>

                <div class="spinner"></div>

                <br><br>

                <div id="msg">Connecting to secure server...</div>

                <br><br>

                <div class="progress">

                    <div class="bar" id="bar"></div>

                </div>

                <br><br>

                <div class="small">Please Wait,Configuration In Progress</div>

                <br><br>
                <br><br>

                <p class="small">Version One</p>

            </div>

        `;

        const messages=[
        "Establishing encrypted connection...",
        "Fetching live data from server...",
        "Verifying system integrity...",
        "Installing...",
        "System Ready ✔"
        ];

        let i = 0, progress = 0;
        const msg = document.getElementById("msg");
        const bar = document.getElementById("bar");

        function load() {
            msg.textContent = messages[i++];
            progress += 100 / messages.length;
            bar.style.width = progress + "%";

            if (i < messages.length) {
                setTimeout(load, 2000);
            }
        }
        setTimeout(load, 1000);

        setTimeout(() => {

            if (!localStorage.getItem("FrameWorkError")) {

                location.reload();
                
            };

        }, 10000);
    };

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

                localStorage.setItem("FrameWorkError","On");

                const style = document.createElement("style");

                document.head.appendChild(style);

                style.innerHTML = `

                    .OfflineMessage{
                        margin-top:2%;
                        margin-bottom:5%;
                        font-size:20px; 
                    }

                    .Buttons{
                        width:90%;
                        height:50px;
                        margin:10%;
                        outline:none;
                        color:white;
                        border:none;
                        border-radius:10px;
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

                    localStorage.removeItem("FrameWorkError");

                    location.reload();

                });

                const ContactAdminButton=document.querySelector("#ContactAdminButton");

                ContactAdminButton.addEventListener("click",()=>{

                    ContactAdminButton.style.background="teal";

                    ContactAdminButton.innerHTML="Sending Feed Back To Admin";

                    setTimeout(() => {

                        localStorage.removeItem("FrameWorkError");

                        location.reload();
                        
                    }, 2000);

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
                            if (data === localStorage.getItem("PROJECT")&&localStorage.getItem("PROJECT")) {
                                localStorage.setItem("PROJECT",data);                               
                            } else {
                                if (localStorage.getItem("Packaged")) {
                                    localStorage.setItem("Packaged",new Date());
                                    localStorage.setItem("PROJECT",data);
                                    location.reload();
                                } else {
                                    localStorage.setItem("Packaged",new Date());
                                    localStorage.setItem("PROJECT",data);
                                };
                            };
                    })
                    .catch(error=>{console.log(error)})
                    
                } else {

                    if (localStorage.getItem("Env") === "Android") {

                        fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Build/"+User.ANDROID)
                        .then(res =>res.text())
                        .then(data=>{
                            if (data === localStorage.getItem("PROJECT")&&localStorage.getItem("PROJECT")) {
                                localStorage.setItem("PROJECT",data);                               
                            } else {
                                if (localStorage.getItem("Packaged")) {
                                    localStorage.setItem("Packaged",new Date());
                                    localStorage.setItem("PROJECT",data);
                                    location.reload();
                                } else {
                                    localStorage.setItem("Packaged",new Date());
                                    localStorage.setItem("PROJECT",data);
                                };
                            };
                        })
                        .catch(error=>{console.log(error)})
                        
                    } else {

                        fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Build/"+User.WEB)
                        .then(res =>res.text())
                        .then(data=>{                          
                            if (data === localStorage.getItem("PROJECT")&&localStorage.getItem("PROJECT")) {
                                localStorage.setItem("PROJECT",data);                               
                            } else {
                                if (localStorage.getItem("Packaged")) {
                                    localStorage.setItem("Packaged",new Date());
                                    localStorage.setItem("PROJECT",data);
                                    location.reload();
                                } else {
                                    localStorage.setItem("Packaged",new Date());
                                    localStorage.setItem("PROJECT",data);
                                };
                            };
                        })
                        .catch(error=>{console.log(error)})
                        
                    };
                    
                };
                
            } else {

                localStorage.setItem("FrameWorkError","On");

                const style = document.createElement("style");

                document.head.appendChild(style);

                style.innerHTML = `

                    .OfflineMessage{
                        margin-top:2%;
                        margin-bottom:5%;
                        font-size:20px; 
                    }

                    .Buttons{
                        width:90%;
                        height:50px;
                        margin:10%;
                        outline:none;
                        color:white;
                        border:none;
                        border-radius:10px;
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

                    localStorage.removeItem("FrameWorkError");

                    location.reload();

                });

                const ContactAdminButton=document.querySelector("#ContactAdminButton");

                ContactAdminButton.addEventListener("click",()=>{

                    ContactAdminButton.style.background="teal";

                    ContactAdminButton.innerHTML="Sending Feed Back To Admin";

                    setTimeout(() => {

                        localStorage.removeItem("FrameWorkError");

                        location.reload();
                        
                    }, 2000);

                });
                
            };

        });
    })
    .catch((error) => {
      console.log(error);
    });
};