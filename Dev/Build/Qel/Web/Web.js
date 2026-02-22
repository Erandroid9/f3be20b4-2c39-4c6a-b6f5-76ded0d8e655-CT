const ERANDES=()=>{

    VIEWCONTROLLER();

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",()=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",()=>{

        },()=>{

            VIEWCONTROLLER();  

        });

    },()=>{

        VIEWCONTROLLER();  

    });

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Qel",()=>{

        });

        ICONVIEW(ELEMENT,WHITESUNICON,BLACKMOONICON,(ELEMENTSS)=>{

            CHANGEMODE(ELEMENTSS);

        });

        RIGHTICONVIEW(ELEMENT,WHITEUSERPROFILEICON,BLACKUSERICON,()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"100%","auto",TRANSPARENT,(ELEMENTSA)=>{

            LOADERVIEW(ELEMENTSA,(LOAD)=>{
    
                GETSAVEDINDEX("Products",(Data)=>{
    
                    DISPLAYHIDDEN(LOAD);
    
                    CHECKER(Data.Approved,()=>{
    
                        DIVVIEW(ELEMENTSA,"95%","300px",TRANSPARENT,(ELEMENTS)=>{
    
                            OVERFLOWHIDDEN(ELEMENTS);
    
                            RADIUS(ELEMENTS,"0");
    
                            IMAGE(ELEMENTS,"","",Data.ProductImage,TRANSPARENT,(ELIS)=>{
                    
                            });
    
                            FOOTER(ELEMENTS,(ELEMENTSI)=>{
    
                                ELEMENTEDBACKGROUND(ELEMENTSI);
    
                                LEFTTEXTVIEW(ELEMENTSI,Data.ProductName,()=>{
    
                                });
    
                                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{
    
                                });
    
                            });
    
                        });

                        BREAK(ELEMENTSA);
    
                    });
    
                });
    
            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Policies",()=>{

            });

            TEXTVIEW(ELEMENTS,"App",()=>{

            });

            TEXTVIEW(ELEMENTS,"Contact Us",()=>{

            });

        });

    });

};

const DESKTOPVIEW=()=>{

};