import { ASSETSCONNECTION } from "./Dev/Assets/Connection/Connection.js";
import { PROJECTFETCH } from "./ProjectFetch.js";

export const CONNECTIONS=()=>{

    ASSETSCONNECTION();

    PRODUCTIONMODE();

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

        FINDER(data,"Version",localStorage.getItem("Version"),(User)=>{

            if (User.Version === localStorage.getItem("Version")&&User.Approved) {

                localStorage.setItem("ElementsStyles",User.ElementsStyles);
                localStorage.setItem("ComponentsStyles",User.ComponentsStyles);
                localStorage.setItem("ClassesStyle",User.ClassesStyle);
                localStorage.setItem("IdStyles",User.IdStyles);
                localStorage.setItem("SharedStyles",User.SharedStyles);
                localStorage.setItem("Links",User.Links);
                localStorage.setItem("Constants",User.Constants);
                localStorage.setItem("ERANDCONFIG",User.AutoRun);
                localStorage.setItem("ElementJavascript",User.ElementJavascript);
                localStorage.setItem("ComponentsJavascript",User.ComponentsJavascript);
                localStorage.setItem("ClassesJavascript",User.ClassesJavascript);
                localStorage.setItem("IdJavascript",User.IdJavascript);
                localStorage.setItem("SharedJavascript",User.SharedJavascript);
                localStorage.setItem("PlugInJavascript",User.PlugInJavascript);
                localStorage.setItem("TemplatePages",User.TemplatePages);
                localStorage.setItem("TemplatePlugins",User.TemplatePlugins);
                localStorage.setItem("TemplateCss",User.TemplateCss);
                localStorage.setItem("TemplateJs",User.TemplateJs);
          

                if (localStorage.getItem("Env") === "Web" ) {

                    localStorage.setItem("WebJavascript",User.WebJavascript);
                    
                } else {

                    if (localStorage.getItem("Env") === "Android" ) {

                        localStorage.setItem("AndroidJavascript",User.AndroidJavascript);
                        
                    } else {

                        localStorage.setItem("DesktopJavascript",User.DesktopJavascript);
                        
                    };
                    
                };

                PROJECTFETCH(DIRECTLINK,DATABASE);
                
            } else {

                const Body=document.querySelector("body");

                Body.innerHTML=`

                    <h1 id="OffLineHeading">ERROR</h1>

                    <h1>Failed to Get Response From Server</h1>

                    <button id="">Retry</button>

                    <button id="">Contact Admin</button>
                
                `;
                
            };

        });

    })

    .catch(error =>{

        console.log(error);
            
    });

};