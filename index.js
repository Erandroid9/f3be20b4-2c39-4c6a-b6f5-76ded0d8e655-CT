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