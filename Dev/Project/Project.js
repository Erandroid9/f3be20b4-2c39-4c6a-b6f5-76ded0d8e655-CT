const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    AUTOSTART("","Movie Lander","Policies/MovieLander/MovieLander.txt","",()=>{

        FOOTERVIEW((ELEMENT)=>{

            LOADERVIEW(ELEMENT,(LOAD)=>{

                TOP(LOAD,"50%");

            });

        },(ELEMENT)=>{

            ICONVIEW(ELEMENT,WHITEGRIDICON,BLACKGRIDICON,(ELEMENTS)=>{

                FORWARDNAV(ELEMENTS,MOBILECATERGORYPAGE,MOBILEVIEW);

            });

            ICONVIEW(ELEMENT,WHITEUSERICON,BLACKUSERICON,(ELEMENTS)=>{

                FORWARDNAV(ELEMENTS,MOBILEUSERACCOUNTPAGE,MOBILEVIEW);

            });

        });

    });

};

const MOBILEUSERACCOUNTPAGE=()=>{

    LEFTHEADERVIEWBACKPAGEVIEW(MOBILEVIEW,"Profile",(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const MOBILECATERGORYPAGE=()=>{

    LEFTHEADERVIEWBACKPAGEVIEW(MOBILEVIEW,"Catergory",(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const DESKTOPVIEW=()=>{

    AUTOSTART("","Movie Lander","Policies/MovieLander/MovieLander.txt",MOVIELANDERMAINLINK,()=>{

    });

};