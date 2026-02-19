export const PROJECTFETCH=(DIRECTLINK,DATABASE)=>{

    const FINDER = (DATA, ELEMENT, ELEMENT1, ACTION) => {

        const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);

        return ACTION(user ? user : false);
        
    };

    fetch(DATABASE,{

        method:"POST",

        mode:"cors",

        body:JSON.stringify({

            "sheetName":"Manager",

            "spreadsheetUrl":DIRECTLINK

        })

    })

    .then(res =>res.json())

    .then(data =>{

        FINDER(data,"ID",localStorage.getItem("Config"),(User)=>{

            if (User.ID === localStorage.getItem("Config") && User.Approved) {

                localStorage.setItem("Shared",User.Shared);
                localStorage.setItem("SharedOne",User.SharedOne);
                localStorage.setItem("SharedTwo",User.SharedTwo);
                localStorage.setItem("SharedThree",User.SharedThree);
                localStorage.setItem("SharedFour",User.SharedFour);

                if (localStorage.getItem("Env") === "Web" ) {

                    localStorage.setItem("Web",User.Web);
                    localStorage.setItem("WebOne",User.WebOne);
                    localStorage.setItem("WebTwo",User.WebTwo);
                    localStorage.setItem("WebThree",User.WebThree);
                    localStorage.setItem("WebFour",User.WebFour);

                    if (localStorage.getItem("Packaged")) {

                        localStorage.setItem("Packaged",new Date());
                        
                    } else {

                        localStorage.setItem("Packaged",new Date());

                        location.reload();
                        
                    };

                } else {

                    if (localStorage.getItem("Env") === "Android") {

                        localStorage.setItem("Android",User.Android);
                        localStorage.setItem("AndroidOne",User.AndroidOne);
                        localStorage.setItem("AndroidTwo",User.AndroidTwo);
                        localStorage.setItem("AndroidThree",User.AndroidThree);
                        localStorage.setItem("AndroidFour",User.AndroidFour);

                        if (localStorage.getItem("Packaged")) {

                            localStorage.setItem("Packaged",new Date());
                            
                        } else {

                            localStorage.setItem("Packaged",new Date());

                            location.reload();
                            
                        };
                        
                    } else {

                        localStorage.setItem("Desktop",User.Desktop);
                        localStorage.setItem("DesktopOne",User.DesktopOne);
                        localStorage.setItem("DesktopTwo",User.DesktopTwo);
                        localStorage.setItem("DesktopThree",User.DesktopThree);
                        localStorage.setItem("DesktopFour",User.DesktopFour);

                        if (localStorage.getItem("Packaged")) {

                            localStorage.setItem("Packaged",new Date());
                            
                        } else {

                            localStorage.setItem("Packaged",new Date());

                            location.reload();
                            
                        };
                        
                    };
                    
                };
           
            } else {

                console.log("Fail");
                
            };

        });

    })

    .catch(error =>{

        console.log(error);
            
    });

};