const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    AUTOSTART("","Movie Lander","Policies/MovieLander/MovieLander.txt",MOVIELANDERMAINLINK,()=>{

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

        PROFILEPAGEVIEW(ELEMENT,"Policies/MovieLander/MovieLander.txt","",(ELEMENTS)=>{

            IMAGETEXTVIEW(ELEMENTS," ",WHITESETTINGSICON,WHITESETTINGSICON,"Settings",()=>{

            });

            IMAGETEXTVIEW(ELEMENTS," ",WHITESETTINGSICON,WHITESETTINGSICON,"Settings",()=>{

            });

            IMAGETEXTVIEW(ELEMENTS," ",WHITESETTINGSICON,WHITESETTINGSICON,"Settings",()=>{

            });

            IMAGETEXTVIEW(ELEMENTS," ",WHITESETTINGSICON,WHITESETTINGSICON,"Settings",()=>{

            });

            IMAGETEXTVIEW(ELEMENTS," ",WHITESETTINGSICON,WHITESETTINGSICON,"Settings",()=>{

            });

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);

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