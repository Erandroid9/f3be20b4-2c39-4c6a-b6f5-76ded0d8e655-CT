const ERANDES=()=>{

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",()=>{

    },()=>{

        RELOAD();

    });
    
    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",()=>{

    },()=>{

    });

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    CLEARNAV();

    CONDITION(localStorage.getItem("Terms"),()=>{

        FOOTERVIEW((ELEMENT)=>{

            LOADERVIEW(ELEMENT,(LOAD)=>{

                TOP(LOAD,"50%");

                GETSAVEDINDEX("Catergory",(Data)=>{

                    CHECKER(Data.Approved,()=>{

                        DISPLAYHIDDEN(LOAD);
    
                        INLINEVIEW(ELEMENT,"95%","250px",TRANSPARENT,"2%",(ELEMENTS)=>{

                            OVERFLOWHIDDEN(ELEMENTS);
    
                            BORDER(ELEMENTS,localStorage.getItem("APPCOLOR")+"50");
    
                            HEADER(ELEMENTS,(ESE)=>{
    
                                LEFTTEXTVIEW(ESE,Data.ProductName,(ELSESE)=>{
    
                                    FONTSIZE(ELSESE,"16px");
    
                                });
    
                            });
    
                            INLINEVIEW(ELEMENTS,"100%","200px",TRANSPARENT,"0",(ELEMENTIS)=>{
    
                                POSITIONABSOLUTE(ELEMENTIS);

                                OVERFLOWHIDDEN(ELEMENTIS);

                                OVERFLOWX(ELEMENTIS);

                                BOTTOM(ELEMENTIS,"");
    
                                LOADERVIEW(ELEMENTIS,(LOADS)=>{
    
                                    GETSAVEDINDEX("Products",(Datata)=>{

                                        CHECKER( Data.ID === Datata.ProductCatergory && Datata.Approved,()=>{

                                            DISPLAYHIDDEN(LOADS);

                                            INLINEVIEW(ELEMENTIS,"40%","190px",TRANSPARENT,"2%",(ELEMENTISS)=>{

                                                FLEXSHRINK(ELEMENTISS);

                                                IMAGE(ELEMENTISS,"","",Datata.ProductImage,TRANSPARENT,()=>{

                                                });

                                                FOOTER(ELEMENTISS,(ELISA)=>{

                                                    BACKGROUND(ELISA,BLACK+"80");

                                                    TEXTVIEW(ELISA,Datata.ProductName,(EISE)=>{

                                                        FONTSIZE(EISE,"16px");

                                                    });

                                                });

                                            });

                                        });
    
                                        console.log(Datata);
    
                                    });
    
                                });
                        
                            });
                            
                        });

                    });

                });

            });

        },(ELEMENT)=>{

            ICONVIEW(ELEMENT,WHITEGRIDICON,BLACKGRIDICON,(ELS)=>{

                FORWARDNAV(ELS,MOBILEGRIDPAGE,"MOBILEVIEW");

            });

            ICONVIEW(ELEMENT,WHITESHOPPINGCART,BLACKSHOPPINGCART,(ELS)=>{

                FORWARDNAV(ELS,MOBILESHOPPINGPAGE,"MOBILEVIEW");

            });

            ICONVIEW(ELEMENT,WHITEUSERICON,BLACKUSERICON,(ELS)=>{

                FORWARDNAV(ELS,MOBILEUSERACCOUNTPAGE,"MOBILEVIEW");

            });

        });

    },()=>{

        CONDITION(localStorage.getItem("ModeSelected"),()=>{

            DIVVIEW("","","","",(ELEMENT)=>{

                LOADERVIEW(ELEMENT,(ELE)=>{

                    TOP(ELE,"50%");

                    SERVERASSETS("Policies/Qel/Qel.txt",(Data)=>{

                        DISPLAYHIDDEN(ELE);

                        DISPLAY(ELEMENT,Data);

                        BUTTON(ELEMENT,"I Agree",FORESTGREEN,(ELSE)=>{
                            
                            COLOR(ELSE,"");

                            CLICK(ELSE,()=>{

                                DATASTORE(" ","Terms",true);

                                MOBILEVIEW();

                            });

                        });

                        BREAK(ELEMENT);

                        BREAK(ELEMENT);

                    });

                });

            });

        },()=>{

            DIVVIEW("","","","",(ELEMENT)=>{

                BREAK(ELEMENT);BREAK(ELEMENT);

                TEXTVIEW(ELEMENT,"APP MODE",()=>{});

                BREAK(ELEMENT);

                TEXTVIEW(ELEMENT,"Please Select The Mode You Want the App ",(ELS)=>{

                    FONTSIZE(ELS,"16px");

                });

                BREAK(ELEMENT);

                TEXTVIEW(ELEMENT,"CLick To Shop",(ELS)=>{

                    FONTSIZE(ELS,"18px");

                });

                BREAK(ELEMENT);BREAK(ELEMENT);

                BUTTON(ELEMENT,"Light Mode",FORESTGREEN,(ELS)=>{

                    CLICK(ELS,()=>{

                        DATASTORE(" ","ModeSelected","Light");

                        DATASTORE(" ","BODYCOLOR","#FFFFFF");

                        AndroidStatusBar("#FFFFFF");

                        RELOAD();

                    });
                    
                });

                BREAK(ELEMENT);

                BUTTON(ELEMENT,"Dark Mode",FORESTGREEN,(ELS)=>{

                    CLICK(ELS,()=>{

                        DATASTORE(" ","ModeSelected","Dark");

                        DATASTORE(" ","BODYCOLOR","#000000");

                        AndroidStatusBar("#000000");

                        RELOAD();

                    });
                    
                });

            });''

        });
    });

};

const MOBILEUSERACCOUNTPAGE=()=>{

    PREBACKNAV("MOBILEVIEW");

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Profile",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",ORANGE,()=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Settings",FORESTGREEN,(ELSE)=>{

            FORWARDNAV(ELSE,MOBILESETTINGSPAGE,"MOBILEUSERACCOUNTPAGE");

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Policies",FORESTGREEN,(ELSE)=>{

            FORWARDNAV(ELSE,MOBILEPOLICIESPAGE,"MOBILEUSERACCOUNTPAGE");

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Contact Us",TEAL,(ELSE)=>{

            FORWARDNAV(ELSE,MOBILECONTACTUSPAGE,"MOBILEUSERACCOUNTPAGE");

        });

        BREAK(ELEMENT);

    });

};

const MOBILESHOPPINGPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"My Cart",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const MOBILEGRIDPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Catergory",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

        });

    });

};

const MOBILESETTINGSPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEUSERACCOUNTPAGE);

        });

        RIGHTTEXTVIEW(ELEMENT,"Preferences",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"App Mode",FORESTGREEN,(ELSE)=>{

            CHANGEMODE(ELSE);

        });

        BREAK(ELEMENT);
        
        BUTTON(ELEMENT,"Update App",FORESTGREEN,(ELSE)=>{

            CLICK(ELSE,()=>{

                TOASTVIEW("App Will Restart If Any Available");

                AUTORUN();

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Log Out My Account",BROWN,(ELSE)=>{

            CLICK(ELSE,()=>{

                TOASTCONDITION(localStorage.getItem("User"),"Device Has No Account",()=>{

                });

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Delete Account",RED,(ELSE)=>{

            CLICK(ELSE,()=>{

                TOASTCONDITION(localStorage.getItem("User"),"Log In To Delete Account",()=>{

                });

            });

        });
        
        BREAK(ELEMENT);

    });

};

const MOBILEPOLICIESPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEUSERACCOUNTPAGE);

        });

        RIGHTTEXTVIEW(ELEMENT,"Terms and Conditions",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

            SERVERASSETS("Policies/Qel/Qel.txt",(Data)=>{

                DISPLAYHIDDEN(LOAD);

                DISPLAY(ELEMENT,Data);

            });

        });

    });

};

const MOBILECONTACTUSPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEUSERACCOUNTPAGE);

        });

        RIGHTTEXTVIEW(ELEMENT,"Reach Us",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Website",TEAL,(ELSE)=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Call",TEAL,(ELSE)=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"WhatsApp",TEAL,(ELSE)=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"FaceBook",TEAL,(ELSE)=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Email",TEAL,(ELSE)=>{

        });

    });

};

const DESKTOPVIEW=()=>{

    CLEARNAV();

};