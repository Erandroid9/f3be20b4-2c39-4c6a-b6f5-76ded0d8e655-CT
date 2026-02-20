const ICONMODE=(ELEMENT,LIGHTMODE,DARKMODE)=>{

    const ELES=document.querySelector(ELEMENT);

    CONDITION(localStorage.getItem("AppMode") === "#000000",()=>{

        ELES.src=LIGHTMODE;

    },()=>{

        ELES.src=DARKMODE;

    });

};

const LOGINCHECKER=(CALLBACK,CALLBACKONE,CALLBACKTWO)=>{

    CONDITION(localStorage.getItem("User"),()=>{

        CALLBACK();

    },()=>{

        CONDITION(localStorage.getItem("UserCode"),()=>{

            CALLBACKONE();

        },()=>{

            CALLBACKTWO();
                
        });
   
    });

};

const BACKPAGECLICK=(ELE,NAME)=>{

    CLICKED(ELE,()=>{

        ROUTE("",NAME,`${NAME}`);

    });

};

const NEXTPAGECLICK=(ELE,NAMETWO,NAME)=>{

    CLICKED(ELE,()=>{

        ROUTE("",NAMETWO,`${NAME}`);

    });

};