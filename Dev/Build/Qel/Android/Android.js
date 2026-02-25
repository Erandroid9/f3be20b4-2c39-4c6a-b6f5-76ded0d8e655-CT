const ERANDES=()=>{

    DATASTORE(" ","User",true);

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

                                                CLICK(ELEMENTISS,()=>{

                                                    DELETEDATASTORE("","ProductBought");

                                                    JSONIFICATION(Datata,(ItemData)=>{

                                                        DATASTORE("","Items",ItemData);

                                                    });

                                                });

                                                FORWARDNAV(ELEMENTISS,MOBILEPRODUCTDETAILPAGE,"MOBILEVIEW");

                                            });

                                        });
    
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

const MOBILEPRODUCTDETAILPAGE=()=>{

    PREBACKNAV(MOBILEVIEW);

    DEJSONDATA("","Items",(Data)=>{

        CHECKER(!sessionStorage.getItem("ProductBought")||sessionStorage.getItem("ProductBought")<= 0,()=>{

            DATASTORE("","ProductBought","1");

        });

        HEADERVIEW((ELEMENT)=>{
    
            LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{
    
                BACKNAV(ELIS,MOBILEVIEW);
    
            });
    
            RIGHTTEXTVIEW(ELEMENT,Data.ProductName,()=>{
    
            });
       
        },(ELEMENT)=>{

            BREAK(ELEMENT);

            IMAGE(ELEMENT,"300px","300px",Data.ProductImage,TRANSPARENT,()=>{

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

                LEFTTEXTVIEW(ELEMENTS,"Price Per Item  ",()=>{

                });

                RIGHTTEXTVIEW(ELEMENTS,"UGX : "+Data.ProductPrice,()=>{

                });

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

                BUTTON(ELEMENTS,"Add",FORESTGREEN,(ELSE)=>{

                    WIDTH(ELSE,"20%");

                    HEIGHT(ELSE,"40px");

                    CLICK(ELSE,()=>{

                        DATASTORE("","ProductBought",Number(sessionStorage.getItem("ProductBought"))+1);

                        MOBILEPRODUCTDETAILPAGE();

                    });

                });

                BUTTON(ELEMENTS,"Remove",TEAL,(ELSE)=>{

                    WIDTH(ELSE,"20%");

                    HEIGHT(ELSE,"40px");

                    CLICK(ELSE,()=>{

                        DATASTORE("","ProductBought",Number(sessionStorage.getItem("ProductBought"))-1);
    
                        MOBILEPRODUCTDETAILPAGE();

                    });

                });

                BUTTON(ELEMENTS,sessionStorage.getItem("ProductBought"),ORANGE,(ELSE)=>{

                    WIDTH(ELSE,"20%");

                    HEIGHT(ELSE,"40px");

                });

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Total Amount: UGX "+Number(sessionStorage.getItem("ProductBought"))*Data.ProductPrice,TRANSPARENT,(ELSE)=>{

                WIDTH(ELSE,"90%");

                HEIGHT(ELSE,"50px");

                DATASTORE("","Amount",Number(sessionStorage.getItem("ProductBought"))*Data.ProductPrice);

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Pay",GREEN,(ELSE)=>{

                WIDTH(ELSE,"95%");

                HEIGHT(ELSE,"40px");

                CLICK(ELSE,()=>{

                    LOGINPAGECHECKER(()=>{

                        BOTTOMNAV("","Qel Pay",(ELSESS)=>{

                            LOADERVIEW(ELSESS,(LOADSER)=>{

                                TOP(LOADSER,"50%");

                                QELPAY(Number(sessionStorage.getItem("Amount")),Data.ProductName,"",(DataLink)=>{

                                    DISPLAYHIDDEN(LOADSER);

                                    WEBSITE(DataLink);

                                });
                                
                            });

                        });

                    },()=>{

                        ROUTE(" ",LOGINPAGEROUTE,"MOBILEPRODUCTDETAILPAGE");

                        LOGINPAGEROUTE(MOBILEPRODUCTDETAILPAGE,"Qel",QELDATABASELINK);

                    });

                });

            });

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,"Description",()=>{

            });

            BREAK(ELEMENT);
            
            LEFTTEXTVIEW(ELEMENT,Data.ProductDetails,()=>{

            });

            BREAK(ELEMENT);

            CHECKER(Data.ProductImage,()=>{

                IMAGE(ELEMENT,"300px","300px",Data.ProductImage,TRANSPARENT,()=>{
    
                });

            });

            BREAK(ELEMENT);

            CHECKER(Data.ProductImageOne,()=>{

                IMAGE(ELEMENT,"300px","300px",Data.ProductImageOne,TRANSPARENT,()=>{
    
                });

            });

            BREAK(ELEMENT);

            CHECKER(Data.ProductImageTwo,()=>{

                IMAGE(ELEMENT,"300px","300px",Data.ProductImageTwo,TRANSPARENT,()=>{
    
                });
                
            });

            BREAK(ELEMENT);

            CHECKER(Data.ProductImageThree,()=>{

                IMAGE(ELEMENT,"300px","300px",Data.ProductImageThree,TRANSPARENT,()=>{
    
                });
                
            });

            BREAK(ELEMENT);

            BREAK(ELEMENT);

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

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELSE)=>{

            CONDITION(localStorage.getItem("User"),()=>{

                IMAGE(ELSE,"300px","300px",ERANDIXLOGO,TRANSPARENT,(ELSSE)=>{

                    BORDER(ELSSE,WHITE+"80%");

                });

                BREAK(ELSE);

                INLINEVIEW(ELSE,"95%","50px",TRANSPARENT,"2%",(ELSESS)=>{

                    LEFTTEXTVIEW(ELSESS,"UserName",()=>{

                    });

                    RIGHTTEXTVIEW(ELSESS,"UserName",()=>{

                    });

                });

                BREAK(ELSE);

                INLINEVIEW(ELSE,"95%","50px",TRANSPARENT,"2%",(ELSESS)=>{

                    LEFTTEXTVIEW(ELSESS,"Location",()=>{

                    });

                    RIGHTTEXTVIEW(ELSESS,"Kampala",()=>{

                    });

                });

                BREAK(ELSE);

                INLINEVIEW(ELSE,"95%","50px",TRANSPARENT,"2%",(ELSESS)=>{

                    BUTTON(ELSESS,"Change Location",FORESTGREEN,(ELSIE)=>{

                        WIDTH(ELSIE,"40%");

                        HEIGHT(ELSIE,"40px");

                    });

                    BUTTON(ELSESS,"Contact Number",BLUE,(ELSIE)=>{

                        WIDTH(ELSIE,"40%");

                        HEIGHT(ELSIE,"40px");

                    });

                });

            },()=>{


                LOGINVIEW(ELSE,"Qel",QELDATABASELINK);

            });

        });

        BREAK(ELEMENT);

        LINE(ELEMENT,FORESTGREEN);

        TEXTVIEW(ELEMENT,"Options",()=>{

        });

        LINE(ELEMENT,FORESTGREEN);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Settings",FORESTGREEN,(ELSE)=>{

                FORWARDNAV(ELSE,MOBILESETTINGSPAGE,"MOBILEUSERACCOUNTPAGE");

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Policies",FORESTGREEN,(ELSE)=>{

                FORWARDNAV(ELSE,MOBILEPOLICIESPAGE,"MOBILEUSERACCOUNTPAGE");

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Contact Us",TEAL,(ELSE)=>{

                FORWARDNAV(ELSE,MOBILECONTACTUSPAGE,"MOBILEUSERACCOUNTPAGE");

            });

            BREAK(ELEMENTS);

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

            GETSAVEDINDEX("Catergory",(Data)=>{

                DISPLAYHIDDEN(LOAD);

                CHECKER(Data.Approved,()=>{

                    INLINEVIEW(ELEMENT,"45%","200px",TRANSPARENT,"2%",(ELEMENTS)=>{

                        IMAGE(ELEMENTS,"","",Data.ProductImage,TRANSPARENT,()=>{

                        });

                        FOOTER(ELEMENTS,(ELISA)=>{

                            BACKGROUND(ELISA,BLACK+"70")

                            TEXTVIEW(ELISA,Data.ProductName,(ELES)=>{

                                FONTSIZE(ELES,"15px");

                            });

                        });

                        CLICK(ELEMENTS,()=>{

                            DATASTORE("","ProductId",Data.ID);
                            DATASTORE("","ProductName",Data.ProductName);

                        });

                        FORWARDNAV(ELEMENTS,MOBILEGRIDITEMPAGE,MOBILEGRIDPAGE);
    
                    });

                });

            });

        });

    });

};

const MOBILEGRIDITEMPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELIS)=>{

            BACKNAV(ELIS,MOBILEGRIDPAGE);

        });

        RIGHTTEXTVIEW(ELEMENT,sessionStorage.getItem("ProductName"),()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            TOP(LOAD,"50%");

            GETSAVEDINDEX("Products",(Data)=>{

                DISPLAYHIDDEN(LOAD);

                CHECKER(Data.ProductCatergory === sessionStorage.getItem("ProductId") && Data.Approved,()=>{

                    INLINEVIEW(ELEMENT,"45%","200px",TRANSPARENT,"2%",(ELEMENTS)=>{

                        IMAGE(ELEMENTS,"","",Data.ProductImage,TRANSPARENT,()=>{

                        });

                        FOOTER(ELEMENTS,(ELISA)=>{

                            BACKGROUND(ELISA,BLACK+"70")

                            TEXTVIEW(ELISA,Data.ProductName,(ELES)=>{

                                FONTSIZE(ELES,"15px");

                            });

                        });

                        CLICK(ELEMENTS,()=>{

                            DELETEDATASTORE("","ProductBought");

                            JSONIFICATION(Data,(ItemData)=>{

                                DATASTORE("","Items",ItemData);

                            });

                        });

                        FORWARDNAV(ELEMENTS,MOBILEPRODUCTDETAILPAGE,"MOBILEGRIDITEMPAGE");

                    });

                });

            });

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

                    DELETEDATASTORE(" ","User");

                    RELOAD();

                });

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Delete Account",RED,(ELSE)=>{

            CLICK(ELSE,()=>{

                TOASTCONDITION(localStorage.getItem("User"),"Log In To Delete Account",()=>{

                    BOTTOMNAV("","Delete Account",(ELEMENTS)=>{

                        BREAK(ELEMENTS);

                        DIVVIEW(ELEMENTS,"95%","80%",TRANSPARENT,(ELS)=>{

                            LOADERVIEW(ELS,(LOAD)=>{

                                TOP(LOAD,"50%");

                                SERVERASSETS("Policies/Qel/Qel.txt",(Data)=>{

                                    DISPLAYHIDDEN(LOAD);

                                    DISPLAY(ELS,Data);

                                });

                            });

                        });

                        BREAK(ELEMENTS);

                        INPUT(ELEMENTS,"","Enter Reason For Account Deletion","Deleted",()=>{

                        });

                        BREAK(ELEMENTS);

                        BUTTON(ELEMENTS,"Delete My Account",RED,(ELS)=>{

                            CLICK(ELS,()=>{

                                TOASTCONDITION(sessionStorage.getItem("Deleted"),"Enter Reason For Account Deletion",()=>{

                                    DELETEDATASTORE(" ","User");

                                    DELETEACCOUNTSERVER();

                                });

                            });

                        });

                        BREAK(ELEMENTS);

                        BREAK(ELEMENTS);

                    });

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

            CLICK(ELSE,()=>{

                WEBSITE("https://qelmedistore.site");

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"WhatsApp",TEAL,(ELSE)=>{

            CLICK(ELSE,()=>{

               WHATSAPP("+256781500455");

            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"FaceBook",TEAL,(ELSE)=>{

            CLICK(ELSE,()=>{

               FACEBOOK("qelmedistore");

            });

        });

        BREAK(ELEMENT);

    });

};

const DESKTOPVIEW=()=>{

    CLEARNAV();

};