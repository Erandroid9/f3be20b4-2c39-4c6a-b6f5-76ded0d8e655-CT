const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix",()=>{

        });

        ICONVIEW(ELEMENT,WHITESUNICON,BLACKMOONICON,(ELEMENTSS)=>{

            CHANGEMODE(ELEMENTSS);

        });

        RIGHTICONVIEW(ELEMENT,WHITEMENUICON,BLACKMENUICON,()=>{

        });

    },(ELEMENT)=>{

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Imagine",()=>{

            });

            TEXTVIEW(ELEMENTS,"Build",()=>{

            });

            TEXTVIEW(ELEMENTS,"inspire",()=>{

            });

        });

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            RADIUS(ELEMENTS,"0");

            SERVERCOMPONENTS("Images/AppDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELIS)=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"App Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/DesktopDevelopment.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"Desktop Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/WebDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"WebSite Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/SystemDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                ELEMENTEDBACKGROUND(ELEMENTSI);

                LEFTTEXTVIEW(ELEMENTSI,"System Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,BLACKNEXTICON,()=>{

                });

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Policies",()=>{

            });

            TEXTVIEW(ELEMENTS,"App",()=>{

            });

            TEXTVIEW(ELEMENTS,"Contact Us",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    ROUTE(" ",MOBILECONTACTUS,"MOBILEVIEW");

                });

            });

        });

    });

};

const MOBILECONTACTUS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENTSS)=>{

            CLICK(ELEMENTSS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Contact Us",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"Fill The Form Below",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Your Name","Name",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"email","Enter Your Email","Name",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"","Subject Of Message","Name",()=>{

        });

        BREAK(ELEMENT);

        ROUNDTEXTAREAVIEW(ELEMENT,"Enter Your Message","Message",()=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Submit",FORESTGREEN,()=>{

        });

    });

};

const DESKTOPVIEW=()=>{

};