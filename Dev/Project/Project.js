const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{


    },(ELEMENT)=>{

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Check Balance 1",FORESTGREEN,(ELs)=>{

            CLICK(ELs,()=>{

                runUssd("*131#","1");

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Check Balance 2",FORESTGREEN,(ELs)=>{

            CLICK(ELs,()=>{

                runUssd("*131#","2");

            });

        });

    });

};

const DESKTOPVIEW=()=>{


};