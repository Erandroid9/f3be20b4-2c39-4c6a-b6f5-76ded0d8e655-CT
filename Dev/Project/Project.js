const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    ERANDIXPAYOUTPAGE("");

};

const DESKTOPVIEW=()=>{


};

const ERANDIXPAYOUTPAGE=(ELEMENT)=>{

    BOTTOMNAV(ELEMENT,"Erandix",(ELEMENTS)=>{

        BREAK(ELEMENTS);

        TEXTVIEW(ELEMENTS,"ERANDIX PAY",(ELS)=>{

            COLOR(ELS,FORESTGREEN);

        });

        BREAK(ELEMENTS);

        TEXTVIEW(ELEMENTS,"Currently Supports  Mtn Only.",(ES)=>{

            FONTSIZE(ES,"15px");

        });

        BREAK(ELEMENTS);

        ROUNDINPUTVIEW(ELEMENTS,"tel","Enter Your Phone Number","Name",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Pay",FORESTGREEN,(ELES)=>{
            WIDTH(ELES,"80%");
            COLOR(ELES,"");
            RADIUS(ELES,"50px");
        });

        BREAK(ELEMENTS);

    });

};