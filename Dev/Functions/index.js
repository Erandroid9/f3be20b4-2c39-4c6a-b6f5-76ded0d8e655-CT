const AUTORUN=()=>{

    if (localStorage.getItem("Env") === "DEv" ) {

        import("./index.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error)

        
    } else {

        import("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/index.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error)
        
    };

};

const CONDITION=(TERM,CALLBACK,CALLBACKTWO)=>{

    if (TERM) {

        CALLBACK();
        
    } else {

        CALLBACKTWO();
        
    };

};

const DISPLAY=(ELEMENT,DATA)=>{

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=DATA;

    },()=>{

        BODY.innerHTML=DATA;

    });
    
};