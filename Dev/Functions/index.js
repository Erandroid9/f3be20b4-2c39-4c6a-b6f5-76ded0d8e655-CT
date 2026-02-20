const ADD=(ELEMENT,ELE)=>{

    CONDITION(ELEMENT,()=>{

        ELEMENT.append(ELE);

    },()=>{

        BODY.append(ELE);

    });
};

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

const CHECKER=(TERM,CALLBACK)=>{

    if (TERM) {

        CALLBACK();
        
    };

};

const CLICKED=(ELEMENT,CALLBACK)=>{

    const ELE=document.querySelector(ELEMENT);

    ELE.addEventListener("click",()=>{CALLBACK();});

};

const ELEMENTED=(ELEMENT,COMPONENT,NAME,CALLBACK)=>{

    const ELE=document.createElement(COMPONENT);

    ELE.classList.add(NAME);

    ADD(ELEMENT,ELE);

    CALLBACK(ELE);

};

const DISPLAY=(ELEMENT,DATA)=>{

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=DATA;

    },()=>{

        BODY.innerHTML=DATA;

    });
    
};

const FUNCTIONED=(ELEMENT,FUN,callBack)=>{

    ELEMENT.addEventListener(FUN, callBack);

};

const ROUTE = (NEWPAGE, FUNCTION, FUNCTIONBACK) => {

    sessionStorage.setItem("PreviousPage", FUNCTIONBACK);

    CONDITION(NEWPAGE,()=>{

        history.pushState({ data: FUNCTION() }, "", "");

    },()=>{

        history.replaceState({ data: FUNCTION() }, "", "");

    });

    FUNCTIONED(window,"popstate",()=>{

        const previousPageFunction = sessionStorage.getItem("PreviousPage");

        CHECKER(previousPageFunction,()=>{

            const func = new Function("return " + previousPageFunction)();

            func();

        });

    });
  
};

const VIEWCONTROLLER=()=>{

    const screenWidth = window.screen.width;

    CONDITION(screenWidth >=800,()=>{

        DESKTOPVIEW();

    },()=>{

        MOBILEVIEW();

    });

};