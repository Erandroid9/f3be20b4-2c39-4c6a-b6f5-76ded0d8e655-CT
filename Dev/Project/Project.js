const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    CLEARNAV();

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix",()=>{

        });

        ICONVIEW(ELEMENT,WHITESUNICON,BLACKMOONICON,(ELEMENTSS)=>{

            CHANGEMODE(ELEMENTSS);

        });

        RIGHTTEXTVIEW(ELEMENT,"About Us",(ELEMENTSS)=>{

            FORWARDNAV(ELEMENTSS,MOBILEABOUTUSPAGE,MOBILEVIEW);

        });

    },(ELEMENT)=>{

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Imagine",(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    BOTTOMNAV("","Imagine",(ELSE)=>{

                        LOADERVIEW(ELEMENT,(LOAD)=>{

                            SERVERASSETS("Policies/Main/Imagine.txt",(Data)=>{

                                DISPLAYHIDDEN(LOAD);

                                DISPLAY(ELSE,Data);

                            });

                        });

                    });

                });

            });

            TEXTVIEW(ELEMENTS,"Build",(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    BOTTOMNAV("","Build",(ELSE)=>{

                        LOADERVIEW(ELEMENT,(LOAD)=>{

                            SERVERASSETS("Policies/Main/Build.txt",(Data)=>{

                                DISPLAYHIDDEN(LOAD);

                                DISPLAY(ELSE,Data);

                            });

                        });

                    });

                });

            });

            TEXTVIEW(ELEMENTS,"Inspire",(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    BOTTOMNAV("","Inspire",(ELSE)=>{

                        LOADERVIEW(ELEMENT,(LOAD)=>{

                            SERVERASSETS("Policies/Main/Inspire.txt",(Data)=>{

                                DISPLAYHIDDEN(LOAD);

                                DISPLAY(ELSE,Data);

                            });

                        });

                    });

                });

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

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","App Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        SERVERASSETS("Policies/Main/AppDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

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

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","Desktop Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        SERVERASSETS("Policies/Main/DesktopDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

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

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","WebSite Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        SERVERASSETS("Policies/Main/WebDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

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

            CLICK(ELEMENTS,()=>{

                BOTTOMNAV("","System Development",(ELSE)=>{

                    LOADERVIEW(ELEMENT,(LOAD)=>{

                        SERVERASSETS("Policies/Main/SystemDevt.txt",(Data)=>{

                            DISPLAYHIDDEN(LOAD);

                            DISPLAY(ELSE,Data);

                        });

                    });

                });

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Policies",(ELEMENTSS)=>{

                FORWARDNAV(ELEMENTSS,MOBILEPOLICY,MOBILEVIEW);

            });

            TEXTVIEW(ELEMENTS,"Apps",(ELEMENTSS)=>{

                FORWARDNAV(ELEMENTSS,MOBILEAPPS,MOBILEVIEW);

            });

            TEXTVIEW(ELEMENTS,"Contact Us",(ELEMENTSS)=>{

                FORWARDNAV(ELEMENTSS,MOBILECONTACTUS,MOBILEVIEW);

            });

        });

    });

};

const MOBILEABOUTUSPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"About Us",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            SERVERASSETS("Policies/Main/AboutUs.txt",(Data)=>{

                DISPLAYHIDDEN(LOAD);

                DISPLAY(ELEMENT,Data);

            });

        });

    });

};

const MOBILECONTACTUS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENTSS)=>{

            BACKNAV(ELEMENTSS,MOBILEVIEW);

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

        ROUNDINPUTVIEW(ELEMENT,"email","Enter Your Email","Email",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"","Subject Of Message","Subject",()=>{

        });

        BREAK(ELEMENT);

        ROUNDTEXTAREAVIEW(ELEMENT,"Enter Your Message","Message",()=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Submit",FORESTGREEN,(ELSEE)=>{

            CLICK(ELSEE,()=>{

                TOASTCONDITION(sessionStorage.getItem("Name"),"Enter Your Name",()=>{

                    TOASTCONDITION(sessionStorage.getItem("Email"),"Enter Your Email",()=>{

                        TOASTCONDITION(sessionStorage.getItem("Subject"),"Enter Your Subject",()=>{

                            TOASTCONDITION(sessionStorage.getItem("Message"),"Compose The Message",()=>{

                                TOASTVIEW("Please Wait");

                            });    
    
                        });    

                    });

                });

            });

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        BREAK(ELEMENT);

    });

};

const MOBILEAPPS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Apps",()=>{

        });

    },(ELEMENT)=>{

    });

};

const MOBILEPOLICY=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELSE)=>{

            BACKNAV(ELSE,MOBILEVIEW);

        });

        RIGHTTEXTVIEW(ELEMENT,"Terms and Conditions",()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            SERVERASSETS("Policies/Main/Main.txt",(Data)=>{

                DISPLAYHIDDEN(LOAD);

                DISPLAY(ELEMENT,Data);

            });

        });

    });

};

const DESKTOPVIEW=()=>{

    CLEARNAV();

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix",()=>{

        });

        ICONVIEW(ELEMENT,WHITESUNICON,BLACKSUNICON,(ELS)=>{

            CHANGEMODE(ELS);

        });

        RIGHTICONVIEW(ELEMENT,WHITEPHONEICON,BLACKPHONEICON,(ELS)=>{

        });

    },()=>{

    });

  

};