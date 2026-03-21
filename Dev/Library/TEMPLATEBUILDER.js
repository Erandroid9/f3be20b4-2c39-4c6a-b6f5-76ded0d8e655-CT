const PROFILEPAGEVIEW=(HOLDER,PATH,LINK,CALLBACK)=>{

    CLEAR(HOLDER);

    DEJSONDATA(" ","UserData",(Data)=>{

        console.log(Data);

        SWITCHER(()=>{
    
        },()=>{
    
            DIVVIEW(HOLDER,"95%","50%",TRANSPARENT,(ELEMENTS)=>{

                BORDER(ELEMENTS,localStorage.getItem("APPCOLOR")+"50");
    
                MARGIN(ELEMENTS,"2.5%");
    
                RADIUS(ELEMENTS,"10px");
    
                LEFTDIVVIEW(ELEMENTS,"30%",(ELE)=>{

                    IMAGE(ELE,"90%","90%",Data.UserProfile||ERANDIXLOGO,TRANSPARENT,(ELEMS)=>{

                        MARGIN(ELEMS,"5%");

                        FITCOVEROBJECTFIT(ELEMS);

                        CLICK(ELEMS,()=>{

                            BOTTOMNAV("","Profile Photo",(ELEMENS)=>{

                                IMAGE(ELEMENS,"100%","100%",Data.UserProfile||ERANDIXLOGO,RED,(ELEMSI)=>{

                                    FITCOVEROBJECTFIT(ELEMSI);

                                });

                            });

                        });

                    });

                });

                RIGHTDIVVIEW(ELEMENTS,"70%",(ELE)=>{

                    HEADERVIEWER(ELE,(ELO)=>{

                        TEXTVIEW(ELO,"Personal Information",(ELRIS)=>{

                            FONTSIZE(ELRIS,"17px");

                        });

                    },(ELO)=>{

                        IMAGETEXTVIEW(ELO,"",WHITEUSERICON,BLACKUSERICON,Data.UserName,(ELE)=>{

                        });

                        IMAGETEXTVIEW(ELO,"",WHITEGMAILICON,WHITEGMAILICON,Data.UserEmail,(ELE)=>{

                        });

                        IMAGETEXTVIEW(ELO,"",WHITEPHONEICON,BLACKPHONEICON,Data.UserNumber||" ",(ELE)=>{

                        });

                        IMAGETEXTVIEW(ELO,"",WHITELOCATIONICON,BLACKLOCATIONICON,Data.Location||sessionStorage.getItem("TIMEZONE_AREA"),(ELE)=>{

                        });

                        IMAGETEXTVIEW(ELO,"",WHITEDEVICEICON,WHITEDEVICEICON,"Active",(ELE)=>{

                        });

                    });

                    FOOTER(ELE,(ELISA)=>{

                        TEXTVIEW(ELISA,"Update",(ELMA)=>{

                            COLOR(ELMA,FORESTGREEN);

                            CLICK(ELMA,()=>{

                                BOTTOMNAV("","Update Account",(ELEMIA)=>{

                                    BREAK(ELEMIA);

                                    TEXTVIEW(ELEMIA,"Click Image To Update Profile Photo",()=>{

                                    });

                                    BREAK(ELEMIA);

                                    IMAGE(ELEMIA,"80%","250px",ERANDIXLOGO,TRANSPARENT,(EIMA)=>{

                                        FILEPICKED(EIMA,"ProfilePhoto");

                                    });

                                    BREAK(ELEMIA);

                                    BREAK(ELEMIA);

                                    TEXTVIEW(ELEMIA,"Update Any Of the Following Parts",()=>{

                                    });

                                    BREAK(ELEMIA);

                                    ROUNDINPUTVIEW(ELEMIA,"","Enter Your New User Name","NewName",()=>{

                                    });

                                    BREAK(ELEMIA);

                                    ROUNDINPUTVIEW(ELEMIA,"tel","Enter Your New Phone Number","NewNumber",()=>{

                                    });

                                    BREAK(ELEMIA);

                                    TEXTVIEW(ELEMIA,"Change Your Country Click Below",()=>{

                                    });

                                    BREAK(ELEMIA);

                                    BUTTON(ELEMIA,"Choose Your New Country",TEAL,(ELEMSAS)=>{

                                        CLICK(ELEMSAS,()=>{

                                            BOTTOMNAV("","Location",(ELOSA)=>{

                                                LOADERVIEW(ELOSA,()=>{
                                                    
                                                    TOP(ELOSA,"50%");

                                                });

                                            });

                                        });

                                    });

                                    BREAK(ELEMIA);

                                    TEXTVIEW(ELEMIA,"Update Your Information Click Below",()=>{

                                    });

                                    BREAK(ELEMIA);

                                    BUTTON(ELEMIA,"Update My Information",FORESTGREEN,(ELEMSAS)=>{

                                    });

                                    BREAK(ELEMIA);

                                    BREAK(ELEMIA);

                                });

                            });

                        });

                        TEXTVIEW(ELISA,"Exit",(ELMA)=>{

                            COLOR(ELMA,BROWN);

                            CLICK(ELMA,()=>{

                               DELETEDATASTORE(" ","User");
                               
                               DELETEDATASTORE(" ","UserData");

                               RELOAD();

                            });

                        });

                        TEXTVIEW(ELISA,"Delete",(ELMA)=>{

                            COLOR(ELMA,RED);

                            CLICK(ELMA,()=>{

                                BOTTOMNAV("","Delete Account",(ELEMIA)=>{

                                    LOADERVIEW(ELEMIA,(LOAD)=>{

                                        TOP(LOAD,"50%");

                                        SERVERASSETS(PATH,(NewData)=>{

                                            DISPLAYHIDDEN(LOAD);

                                            DISPLAY(ELEMIA,NewData);

                                            BREAK(ELEMIA);

                                            TEXTVIEW(ELEMIA,"Enter Account Deletion Reason",()=>{});

                                            BREAK(ELEMIA);

                                            ROUNDINPUTVIEW(ELEMIA,"","Account Deletion Reasong","DeleteReason",()=>{});

                                            BREAK(ELEMIA);

                                            TEXTVIEW(ELEMIA,"Clicking 'Delete Account ',You Have Read And Understood The Deletion Policy Above And Consent To Any Actions That Follow To Your Account? ",()=>{});

                                            BREAK(ELEMIA);

                                            BUTTON(ELEMIA,"Delete Account",RED,(ELEMSIA)=>{

                                                CLICK(ELEMSIA,()=>{

                                                    TOASTCONDITION(sessionStorage.getItem("DeleteReason"),"Enter Delete Account Reason",()=>{

                                                        DELETEACCOUNTSERVER(LINK);

                                                    });

                                                });

                                            });

                                            BREAK(ELEMIA);

                                            BREAK(ELEMIA);

                                        });

                                    });

                                });

                            });

                        });

                    });
     
                });
    
            });

            BREAK(HOLDER);

            TEXTVIEW(HOLDER,"Preferences",(ELRIS)=>{

                FONTSIZE(ELRIS,"20px");

            });

            BREAK(HOLDER);
    
            DIVVIEW(HOLDER,"98%","auto",TRANSPARENT,(ELEMENTS)=>{
    
                MARGIN(ELEMENTS,"1%");
    
                RADIUS(ELEMENTS,"5px");

                CALLBACK(ELEMENTS);
    
            });
    
        });

    });

};