const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        TEXTVIEW(ELEMENT,"Data",(ES)=>{

            CLICK(ES,()=>{

                REFRESH();

            });

        });

    },(ELEMENT)=>{


        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Check Balance 1",FORESTGREEN,(ELs)=>{

            CLICK(ELs,()=>{

                runUssd("*131#","1");

                TEXTVIEW(ELEMENT,sessionStorage.getItem("AndroidSms"),()=>{

                });

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Check Balance 2",FORESTGREEN,(ELs)=>{

            CLICK(ELs,()=>{

                runUssd("*131#","2");

                TEXTVIEW(ELEMENT,sessionStorage.getItem("AndroidSms"),()=>{

                });

            });

        });

    });

};

const DESKTOPVIEW=()=>{


};