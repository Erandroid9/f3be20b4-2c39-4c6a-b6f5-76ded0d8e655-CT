const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    CLEARNAV();

    CONDITION(localStorage.getItem("Terms"),()=>{

        FOOTERVIEW((ELEMENT)=>{

            LOADERVIEW(ELEMENT,(LOAD)=>{

                TOP(LOAD,"50%");

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