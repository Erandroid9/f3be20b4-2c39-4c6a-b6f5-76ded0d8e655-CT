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
}

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
        if (User.ID === localStorage.getItem("Config") && User.Approved) {
          // Shared values
          localStorage.setItem("Shared", User.Shared);
          localStorage.setItem("SharedOne", User.SharedOne);
          localStorage.setItem("SharedTwo", User.SharedTwo);
          localStorage.setItem("SharedThree", User.SharedThree);
          localStorage.setItem("SharedFour", User.SharedFour);

          const env = localStorage.getItem("Env");

          if (env === "Web") {
            const prevValues = {
              Web: localStorage.getItem("Web"),
              WebOne: localStorage.getItem("WebOne"),
              WebTwo: localStorage.getItem("WebTwo"),
              WebThree: localStorage.getItem("WebThree"),
              WebFour: localStorage.getItem("WebFour"),
            };

            const newValues = {
              Web: User.Web,
              WebOne: User.WebOne,
              WebTwo: User.WebTwo,
              WebThree: User.WebThree,
              WebFour: User.WebFour,
            };

            Object.entries(newValues).forEach(([key, value]) =>
              localStorage.setItem(key, value)
            );

            localStorage.setItem("Packaged", new Date());

            const changed = Object.keys(newValues).some(
              (key) => newValues[key] !== prevValues[key]
            );

            if (changed) {
              location.reload();
            }
          } else if (env === "Android") {
            const prevValues = {
              Android: localStorage.getItem("Android"),
              AndroidOne: localStorage.getItem("AndroidOne"),
              AndroidTwo: localStorage.getItem("AndroidTwo"),
              AndroidThree: localStorage.getItem("AndroidThree"),
              AndroidFour: localStorage.getItem("AndroidFour"),
            };

            const newValues = {
              Android: User.Android,
              AndroidOne: User.AndroidOne,
              AndroidTwo: User.AndroidTwo,
              AndroidThree: User.AndroidThree,
              AndroidFour: User.AndroidFour,
            };

            Object.entries(newValues).forEach(([key, value]) =>
              localStorage.setItem(key, value)
            );

            localStorage.setItem("Packaged", new Date());

            const changed = Object.keys(newValues).some(
              (key) => newValues[key] !== prevValues[key]
            );

            if (changed) {
              location.reload();
            }
          } else {
            // Desktop
            const prevValues = {
              Desktop: localStorage.getItem("Desktop"),
              DesktopOne: localStorage.getItem("DesktopOne"),
              DesktopTwo: localStorage.getItem("DesktopTwo"),
              DesktopThree: localStorage.getItem("DesktopThree"),
              DesktopFour: localStorage.getItem("DesktopFour"),
            };

            const newValues = {
              Desktop: User.Desktop,
              DesktopOne: User.DesktopOne,
              DesktopTwo: User.DesktopTwo,
              DesktopThree: User.DesktopThree,
              DesktopFour: User.DesktopFour,
            };

            Object.entries(newValues).forEach(([key, value]) =>
              localStorage.setItem(key, value)
            );

            localStorage.setItem("Packaged", new Date());

            const changed = Object.keys(newValues).some(
              (key) => newValues[key] !== prevValues[key]
            );

            if (changed) {
              location.reload();
            }
          }
        } else {
          console.log("Fail");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};