const ERANDES=()=>{

    DOWNLOADSAVEINDEX(ASCODATABASELINK,"Catergory",()=>{

    },()=>{

        VIEWCONTROLLER();  

    });

    VIEWCONTROLLER();  

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,ASCOLOGO,ASCOLOGO,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"50px");
            HEIGHT(ELEMENTS,"45px");

        });

        LEFTTEXTVIEW(ELEMENT,"ASCOA",(ELEMENTS)=>{

            COLOR(ELEMENTS,GREEN);

        });

        BUTTON(ELEMENT,"Donate",GREEN,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"70px");
            HEIGHT(ELEMENTS,"40px");
            RADIUS(ELEMENTS,"5px");

            COLOR(ELEMENTS,WHITE);

        });

        RIGHTICONVIEW(ELEMENT,WHITEMENUICON,BLACKMENUICON,(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"ASH SHAKUR CHARITY AND ORPHANAGE AID",(ELEMENTS)=>{

            FONTSIZE(ELEMENTS,"15px");
            COLOR(ELEMENTS,GREEN);

        });

        TEXTVIEW(ELEMENT,'"Helping The Poor Orphans and  the Needy People"',(ELEMENTS)=>{

            FONTSIZE(ELEMENTS,"13px");

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            LOADERVIEW(ELEMENTS,(LOAD)=>{

                GETSAVEDINDEX("Catergory",(Data)=>{

                    DISPLAYHIDDEN(LOAD);

                    BUTTON(ELEMENTS,Data.Name,TEAL,(ELEMENTS)=>{

                        WIDTH(ELEMENTS,"auto");
                        HEIGHT(ELEMENTS,"40px");
                        RADIUS(ELEMENTS,"5px");

                        COLOR(ELEMENTS,WHITE);

                        MARGINLEFT(ELEMENTS,"2%");

                        FLEXSHRINK(ELEMENTS);

                        CLICK(ELEMENTS,()=>{

                            DATASTORE("","BaseName",Data.DataBaseName);

                            ROUTE(" ",SUBJECTSECTION,"MOBILEVIEW");

                        });

                    });

                });

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","400px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/QurbanImageChild.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"RAMADAN IFTAR 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    BACKGROUND(ELEMENTSES,WHITE);

                    POSITIONABSOLUTE(ELEMENTSES);

                    COLOR(ELEMENTSES,BLACK);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"This year, we will once again come together to share the blessings of Ramadan with millions of people in need who await it with hope.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                        COLOR(ELEMENTSES,WHITE);

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                    COLOR(ELEMENTS,WHITE);

                });

            });

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/FoodPackDistribution.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"RAMADAN FOOD PACK 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,WHITE);

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"We are preparing food packages to turn into cheerful Ramadan tables for the families in need during Ramadan.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        COLOR(ELEMENTSES,WHITE);

                        FONTSIZE(ELEMENTSES,"17px");

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                    COLOR(ELEMENTS,WHITE);

                });

            });

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                (ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/Zakat.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"ZAKAT AL-FITIR 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,"#FFFFFF70");

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"Zakat involves giving of 2.5% of our annual wealth to charity. It is one of the five pillars of Islam and compulsory for all eligible Muslims.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                        COLOR(ELEMENTSES,WHITE);

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                    COLOR(ELEMENTS,WHITE);

                });

            });

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/FoodPack.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"SHARE HOPE 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,WHITE);

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"Randam A month to share and repent your wrong doings to Allah.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                        COLOR(ELEMENTSES,WHITE);

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                    COLOR(ELEMENTS,WHITE);

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"FEED THE FASTING THIS RAMADAN",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"Whoever helps break the fast of a fasting person will have the same reward as the one [who fasted] without decreasing anything from the reward of the fasting person.",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

            });

        });
        
        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Water Well Construction",TEAL,(ELEMENTS)=>{

                WIDTH(ELEMENTS,"200px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                COLOR(ELEMENTS,WHITE);

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/Asco/waterwell.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                    POSITIONABSOLUTE(ELEMENTSES);
                    LEFT(ELEMENTSES,"");
    
                });

            });

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,GREEN);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                    COLOR(ELSSS,WHITE);

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"BLESSINGS OF PROVIDING WATER",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"The Prophet Muhammad (peace be upon him) said, \"The best charity is providing water.\" (Ibn Majah) Your contribution will not only bring physical relief but also spiritual rewards",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Qurban",TEAL,(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                COLOR(ELEMENTS,WHITE);

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/Asco/qurban.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                    POSITIONABSOLUTE(ELEMENTSES);
                    LEFT(ELEMENTSES,"");
    
                });

            });

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,GREEN);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                    COLOR(ELSSS,WHITE);

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"QURABAN SACRIFICE 2026/1447H PRE-ORDER NOW!",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"It is neither their meat nor their bread that reaches Allah, but it is piety from you that reaches Him",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Mosque Construction",TEAL,(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                COLOR(ELEMENTS,WHITE);

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/Asco/mosque.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                    POSITIONABSOLUTE(ELEMENTSES);
                    LEFT(ELEMENTSES,"");
    
                });

            });

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,GREEN);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                    COLOR(ELSSS,WHITE);

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"WHOEVER BUILDS A MOSQUE,ALLAH BUILDS FOR HIM/HER A HOUSE IN PARADISE",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"Join us in building a beacon of faith. Help us construct a comfortable and serene space for our brothers and sisters in villages to perform their daily prayers. Your support is crucial in providing a safe haven for this community.",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            RADIUS(ELEMENTS,"10px");

            TABLEVIEW(ELEMENTS,"50%","30px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Social Media",(ELEMENTSES)=>{

                    MARGIN(ELEMENTSES,"5%");

                });

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENTS,"95%","100px",TRANSPARENT,"2%",(ELEMENTS)=>{

                OVERFLOWX(ELEMENTS);

                ICONVIEW(ELEMENTS,COLOREDFACEBOOKICON,COLOREDFACEBOOKICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        WEBSITE("https://www.facebook.com/share/188Uyj5rGJ/");

                    });

                });

                ICONVIEW(ELEMENTS,COLOREDINSTAGRAM,COLOREDINSTAGRAM,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        INSTAGRAM("ash_shakur_charity_");

                    });

                });

                ICONVIEW(ELEMENTS,COLOREDTIKTOKICON,COLOREDTIKTOKICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        TIKTOK("ashshakurcharity1");

                    });

                });

                ICONVIEW(ELEMENTS,WHITEXICON,BLACKXICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        X("AshShakur41402");

                    });

                });

            });

            BREAK(ELEMENT);

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App Mode",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"2%");

                    FONTSIZE(ELEMENTSES,"15px");

                    CHANGEMODE(ELEMENTSES);

                });

            });

            TABLEVIEW(ELEMENTS,"20%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Contact Us",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Policies",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"2%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"20%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Contact Us",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Policies",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"2%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"20%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Contact Us",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                });

            });

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);
            
            BREAK(ELEMENTS);

        });

    });

    BUTTON(""," ",FORESTGREEN,(ELEMENTS)=>{

        POSITIONFIXED(ELEMENTS);
        RIGHT(ELEMENTS,"2%");
        BOTTOM(ELEMENTS,"5px");
        
        WIDTH(ELEMENTS,"70px");
        HEIGHT(ELEMENTS,"70px");
        RADIUS(ELEMENTS,"100%");

        COLOR(ELEMENTS,WHITE);

        ICONVIEW(ELEMENTS,WHITEWHATSAPPICON,WHITEWHATSAPPICON,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30px");

            HEIGHT(ELEMENTS,"30px");

        });

        CLICK(ELEMENTS,()=>{

            WHATSAPP("+256789467876");

        });

    });   
 
};

const SUBJECTSECTION=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });;

        LEFTICONVIEW(ELEMENT,ASCOLOGO,ASCOLOGO,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"50px");
            HEIGHT(ELEMENTS,"45px");

        });

        LEFTTEXTVIEW(ELEMENT,"ASCOA",(ELEMENTS)=>{

            COLOR(ELEMENTS,GREEN);

        });

        BUTTON(ELEMENT,"Donate",GREEN,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"70px");
            HEIGHT(ELEMENTS,"40px");
            RADIUS(ELEMENTS,"5px");

            COLOR(ELEMENTS,WHITE);

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            LOADERVIEW(ELEMENTS,(LOAD)=>{

                GETSAVEDINDEX("Catergory",(Data)=>{

                    DISPLAYHIDDEN(LOAD);

                    CHECKER(Data.DataBaseName === sessionStorage.getItem("BaseName"),()=>{

                        BREAK(ELEMENTS);

                        DIVVIEW(ELEMENTS,"95%","300px",TRANSPARENT,(ELIS)=>{

                            OVERFLOWHIDDEN(ELIS);

                            IMAGE(ELIS,"","",Data.Image||ASCOLOGO,TRANSPARENT,()=>{

                            });

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,Data.Header,(ELEMENTSI)=>{

                            COLOR(ELEMENTSI,GREEN);

                            FONTSIZE(ELEMENTSI,"23px");

                        });

                        BREAK(ELEMENTS);

                        LEFTTEXTVIEW(ELEMENTS,Data.Story,(ELEMENTSS)=>{

                            TYPE(ELEMENTSS,"p");

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,Data.HeaderOne,(ELEMENTSI)=>{

                            COLOR(ELEMENTSI,GREEN);

                            FONTSIZE(ELEMENTSI,"23px");

                        });

                        BREAK(ELEMENTS);

                        DIVVIEW(ELEMENTS,"95%","300px",TRANSPARENT,(ELIS)=>{

                            OVERFLOWHIDDEN(ELIS);

                            IMAGE(ELIS,"","",Data.ImageOne||ASCOLOGO,TRANSPARENT,()=>{

                            });

                        });

                        BREAK(ELEMENTS);

                        LEFTTEXTVIEW(ELEMENTS,Data.StoryOne,(ELEMENTSS)=>{

                            TYPE(ELEMENTSS,"p");

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,Data.HeaderTwo,(ELEMENTSI)=>{

                            COLOR(ELEMENTSI,GREEN);

                            FONTSIZE(ELEMENTSI,"23px");

                        });

                        BREAK(ELEMENTS);

                        DIVVIEW(ELEMENTS,"95%","300px",TRANSPARENT,(ELIS)=>{

                            OVERFLOWHIDDEN(ELIS);

                            IMAGE(ELIS,"","",Data.ImageThree||ASCOLOGO,TRANSPARENT,()=>{

                            });

                        });

                        BREAK(ELEMENTS);

                        LEFTTEXTVIEW(ELEMENTS,Data.StoryThree,(ELEMENTSS)=>{

                            TYPE(ELEMENTSS,"p");

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,Data.HeaderFour,(ELEMENTSI)=>{

                            COLOR(ELEMENTSI,GREEN);

                            FONTSIZE(ELEMENTSI,"23px");

                        });

                        BREAK(ELEMENTS);

                        DIVVIEW(ELEMENTS,"95%","300px",TRANSPARENT,(ELIS)=>{

                            OVERFLOWHIDDEN(ELIS);

                            IMAGE(ELIS,"","",Data.ImageFour||ASCOLOGO,TRANSPARENT,()=>{

                            });

                        });

                        BREAK(ELEMENTS);

                        LEFTTEXTVIEW(ELEMENTS,Data.StoryFour,(ELEMENTSS)=>{

                            TYPE(ELEMENTSS,"p");

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,Data.HeaderFive,(ELEMENTSI)=>{

                            COLOR(ELEMENTSI,GREEN);

                            FONTSIZE(ELEMENTSI,"23px");

                        });

                        BREAK(ELEMENTS);

                        DIVVIEW(ELEMENTS,"95%","300px",TRANSPARENT,(ELIS)=>{

                            OVERFLOWHIDDEN(ELIS);

                            IMAGE(ELIS,"","",Data.ImageFive||ASCOLOGO,TRANSPARENT,()=>{

                            });

                        });

                        BREAK(ELEMENTS);

                        LEFTTEXTVIEW(ELEMENTS,Data.StoryFive,(ELEMENTSS)=>{

                            TYPE(ELEMENTSS,"p");

                        });

                        BREAK(ELEMENTS);

                    });

                });

            });

        });

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            RADIUS(ELEMENTS,"10px");

            TABLEVIEW(ELEMENTS,"50%","30px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Social Media",(ELEMENTSES)=>{

                    MARGIN(ELEMENTSES,"5%");

                });

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENTS,"95%","100px",TRANSPARENT,"2%",(ELEMENTS)=>{

                OVERFLOWX(ELEMENTS);

                ICONVIEW(ELEMENTS,COLOREDFACEBOOKICON,COLOREDFACEBOOKICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        WEBSITE("https://www.facebook.com/share/188Uyj5rGJ/");

                    });

                });

                ICONVIEW(ELEMENTS,COLOREDINSTAGRAM,COLOREDINSTAGRAM,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        INSTAGRAM("ash_shakur_charity_");

                    });

                });

                ICONVIEW(ELEMENTS,COLOREDTIKTOKICON,COLOREDTIKTOKICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        TIKTOK("ashshakurcharity1");

                    });

                });

                ICONVIEW(ELEMENTS,WHITEXICON,BLACKXICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                    CLICK(ELEMENTS,()=>{

                        X("AshShakur41402");

                    });

                });

            });

        });

    });

    BUTTON(""," ",FORESTGREEN,(ELEMENTS)=>{

        POSITIONFIXED(ELEMENTS);
        RIGHT(ELEMENTS,"2%");
        BOTTOM(ELEMENTS,"5px");
        
        WIDTH(ELEMENTS,"70px");
        HEIGHT(ELEMENTS,"70px");
        RADIUS(ELEMENTS,"100%");

        ICONVIEW(ELEMENTS,WHITEWHATSAPPICON,WHITEWHATSAPPICON,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30px");

            HEIGHT(ELEMENTS,"30px");

        });

        CLICK(ELEMENTS,()=>{

            WHATSAPP("+256789467876");

        });

    });  
   
};

const DESKTOPVIEW=()=>{

};