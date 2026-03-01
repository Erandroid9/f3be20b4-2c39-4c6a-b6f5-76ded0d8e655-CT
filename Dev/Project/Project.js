const ERANDES=()=>{

    VIEWCONTROLLER();

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Doctor Mjomba Ali",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITEYOUTUBEICON,(ELEMENTSS)=>{

            CLICK(ELEMENTSS,()=>{

                ROUTE(" ",VIDEOPAGES,MOBILEVIEW);

            });

        });

        RIGHTICONVIEW(ELEMENT,WHITEWHATSAPPICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                WHATSAPP("+254748352113");

            });

        });

    },(ELEMENT)=>{

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Family",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Business",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Business Problems");

                    DATASTORE("","SectorID","Business");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Health",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Health Problems");

                    DATASTORE("","SectorID","Health");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Jobs",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Jobs Problems");

                    DATASTORE("","SectorID","Jobs");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"FAMILY PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Tired Of Unending Family Problems,One After the Other Be It in Finances,Relationship and More.Doctor Mjomba Ali can Give You a Rest so as So Recieve the Benefits of Your Marriage.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"BUSINESS PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Always Failing In Business,let Doctor Mjomba Ali get you the solution so as you never get stack in making money.lets make it rain even in dry season as your neighbours husttle.Work Smart not Hard with Doctor Mjomba Ali",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"MARRIAGE PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Are You Known in the neighbour hood for Fights with Your Loved Ones,Parthner and Kids.<br>Come Let Us Make Your Marriage a living example of peace and success without chaores in the community.Contact Us Via Our Resources.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"HEALTH PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Are You Well Known In the Hospitals,Month In and Month Out Your Never Leaving The Hospital ,Either YourSelf Or A Loved One<br>Let Doctor Mjomba Ali Solve That issue For You ,You Will Never Visit a Hospital Again.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });
        
        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"All Problems Below",(ELEMENTS)=>{

            COLOR(ELEMENTS,ORANGE);

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Marriage",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Marriage Problems");

                    DATASTORE("","SectorID","Marriage");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Lost Items",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Lost Items Problems");

                    DATASTORE("","SectorID","ItemLoss");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Jobs",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Jobs Problems");

                    DATASTORE("","SectorID","Jobs");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Family",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Witch Craft",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Witch Craft Problems");

                    DATASTORE("","SectorID","WitchCraft");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Business",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Business Problems");

                    DATASTORE("","SectorID","Business");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Demon Attacks",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Demon Attacks Problems");

                    DATASTORE("","SectorID","DemonAttacks");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Relationship",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Relationship Problems");

                    DATASTORE("","SectorID","Relationship");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Health",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Health Problems");

                    DATASTORE("","SectorID","Health");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });
        
        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Email",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    ROUTE(" ",EMAILPAGES,"MOBILEVIEW");

                })

            });

            TEXTVIEW(ELEMENTS,"App",(ELEMENTSS)=>{

                COLOR(ELEMENTSS,FORESTGREEN);

                CLICK(ELEMENTSS,()=>{

                    SERVERCOMPONENTS("Apps/Android/DoctorMjombaAli.apk",(Data)=>{
                        
                        WEBSITE(Data);

                    })

                });

            });

            TEXTVIEW(ELEMENTS,"Policies",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    ROUTE(" ",POLICIESPAGES,MOBILEVIEW);

                });

            });

        });

        BREAK(ELEMENT);

    });
    
};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Doctor Mjomba Ali",()=>{

        });

        ICONVIEW(ELEMENT,WHITESUNICON,BLACKMOONICON,(ELEMENTSS)=>{

            CHANGEMODE(ELEMENTSS);

        });

        RIGHTICONVIEW(ELEMENT,WHITEYOUTUBEICON,BLACKYOUTUBEICON,(ELEMENTSS)=>{

            CLICK(ELEMENTSS,()=>{

                ROUTE(" ",VIDEOPAGES,MOBILEVIEW);

            });

        });

        RIGHTICONVIEW(ELEMENT,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                WHATSAPP("+254748352113");

            });

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/Lucky.jpg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);
        
                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"TRADITIONAL AFRICAN <br><br>African Rennounced Herbal Doctor,Lets Get Your Problems Solved WithOut Hustle.<br><br>With Years Of experience in African chemistry,<br><br>Come Become Financially Rich With Doctor Mjomba Ali.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,"#00000090");
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

        });

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"OUR SERVICES",(ELEMENTSIS)=>{

        });

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            LOADERVIEW(ELEMENTS,(LOAD)=>{

                REDUXEDDATA(MJOMBAALIDATABASELINK,"Catergory",(Data)=>{

                    DISPLAYHIDDEN(LOAD);

                    TABLEVIEW(ELEMENTS,"45%","200px",TRANSPARENT,"2%",(ELES)=>{

                        IMAGE(ELES,"","",Data.Image,TRANSPARENT,(ELEMENTS)=>{

                            POSITIONABSOLUTE(ELEMENTS);
                            LEFT(ELEMENTS);

                        });

                        TEXTVIEW(ELES,Data.Name,(ELEMENTSIS)=>{

                            ELEMENTEDBACKGROUND(ELEMENTSIS);
                            PADDING(ELEMENTSIS,"2%");
                            WIDTH(ELEMENTSIS,"90%");
                            TOP(ELEMENTSIS,"30%");

                        });

                        CLICK(ELES,()=>{

                            DATASTORE("","Sector",Data.Name);

                            DATASTORE("","Names",Data.Link);

                            ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                        });

                    });

                });

            });
            
        });
 
        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/fproblems.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"FAMILY PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Tired Of Unending Family Problems,One After the Other Be It in Finances,Relationship and More.Doctor Mjomba Ali can Give You a Rest so as So Recieve the Benefits of Your Marriage.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,"#00000090");
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                ELEMENTEDBACKGROUND(ELEMENTSS);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,BLACKPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/Third.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"BUSINESS PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Always Failing In Business,let Doctor Mjomba Ali get you the solution so as you never get stack in making money.lets make it rain even in dry season as your neighbours husttle.Work Smart not Hard with Doctor Mjomba Ali",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,"#00000090");
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                ELEMENTEDBACKGROUND(ELEMENTSS);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,BLACKPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/mmarraige.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"MARRIAGE PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Are You Known in the neighbour hood for Fights with Your Loved Ones,Parthner and Kids.<br>Come Let Us Make Your Marriage a living example of peace and success without chaores in the community.Contact Us Via Our Resources.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,"#00000090");
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                ELEMENTEDBACKGROUND(ELEMENTSS);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,BLACKPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/health.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"HEALTH PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Are You Well Known In the Hospitals,Month In and Month Out Your Never Leaving The Hospital ,Either YourSelf Or A Loved One<br>Let Doctor Mjomba Ali Solve That issue For You ,You Will Never Visit a Hospital Again.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,"#00000090");
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                ELEMENTEDBACKGROUND(ELEMENTSS);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,BLACKPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });
        
        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"All Problems Below",(ELEMENTS)=>{

            COLOR(ELEMENTS,ORANGE);

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/First.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);
                    WIDTH(ELEMENTS,"50%");

                });
                
            });

            SERVERCOMPONENTS("Images/DoctorMjombaAli/Second.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    RIGHT(ELEMENTS);
                    WIDTH(ELEMENTS,"50%");

                });
                
            });
            
            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"PERSONAL ISSUES<br><br>Doctor Mjomba Ali Works On People With All Issues,Starting From Those with Ghost Attacks Up to those with generational curses. <br><br>Whats Wrong With You Being Broke All The Time,Come Taste Money In Your Life.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,"#00000090");
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Marriage",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Marriage Problems");

                    DATASTORE("","SectorID","Marriage");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Lost Items",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Lost Items Problems");

                    DATASTORE("","SectorID","ItemLoss");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Jobs",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Jobs Problems");

                    DATASTORE("","SectorID","Jobs");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Family",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Witch Craft",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Witch Craft Problems");

                    DATASTORE("","SectorID","WitchCraft");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Business",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Business Problems");

                    DATASTORE("","SectorID","Business");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Demon Attacks",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Demon Attacks Problems");

                    DATASTORE("","SectorID","DemonAttacks");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Relationship",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Relationship Problems");

                    DATASTORE("","SectorID","Relationship");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Health",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Health Problems");

                    DATASTORE("","SectorID","Health");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });
        
        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Email",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    ROUTE(" ",EMAILPAGES,"MOBILEVIEW");

                })

            });

            TEXTVIEW(ELEMENTS,"App",(ELEMENTSS)=>{

                COLOR(ELEMENTSS,FORESTGREEN);

                CLICK(ELEMENTSS,()=>{

                    SERVERCOMPONENTS("Apps/Android/DoctorMjombaAli.apk",(Data)=>{
                        
                        WEBSITE(Data);

                    })

                });

            });

            TEXTVIEW(ELEMENTS,"Policies",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    ROUTE(" ",POLICIESPAGES,MOBILEVIEW);

                });

            });

        });

        BREAK(ELEMENT);
        BREAK(ELEMENT);
        BREAK(ELEMENT);
        BREAK(ELEMENT);

    });

    BUTTON("","Chat",GREEN,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        WIDTH(ELEMENT,"100px");
        BOTTOM(ELEMENT,"10px");
        RIGHT(ELEMENT,"2%");
        RADIUS(ELEMENT,"10px");

        COLOR(ELEMENT,WHITE);

        CLICK(ELEMENT,()=>{

            ROUTE(" ",CONTACTUSPAGE,"MOBILEVIEW");

        });

    });

};

const CONTACTUSPAGE=()=>{

    DELETEDATASTORE("","Message");
    DELETEDATASTORE("","Number");

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENTSS)=>{

            CLICK(ELEMENTSS,()=>{

                ROUTE(" ",MOBILEVIEW,MOBILEVIEW);

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Live Chat",()=>{

        });

    },(ELEMENT)=>{

        OVERFLOWHIDDEN(ELEMENT);

        CONDITION(localStorage.getItem("ChatterId"),()=>{

            BREAK(ELEMENT);

            DIVVIEW(ELEMENT,"100%","80%",TRANSPARENT,(ELEMENTIS)=>{

                ARRAYJSONCONVERTOR(localStorage.getItem("SavedChatMessages"),(Data)=>{

                    REDUX(Data,(Element)=>{

                        DIVVIEW(ELEMENTIS,"80%","auto",TRANSPARENT,(ELEMENTIS)=>{

                            MARGINRIGHT(ELEMENTIS,"1%");

                            MARGINTOP(ELEMENTIS,"10px");

                            RIGHTTEXTVIEW(ELEMENTIS,Element.message,()=>{

                            });

                        });

                    });

                });

                DIVVIEW(ELEMENT,"100%","auto",TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);

                    BOTTOM(ELEMENTS,"");

                    LEFT(ELEMENTS,"");
                    
                    HEIGHT(ELEMENTS,"15%");

                    DISPLAYFLEX(ELEMENTS);

                    ROUNDTEXTAREAVIEW(ELEMENTS,"Chat With Doctor","Message",(ELEMENTSS)=>{

                        WIDTH(ELEMENTSS,"80%");

                        HEIGHT(ELEMENTSS,"70px");

                    });
                    
                    LEFTICONVIEW(ELEMENTS,WHITESENDICON,BLACKSENDICON,(ELEMENTSS)=>{

                        CLICK(ELEMENTSS,()=>{

                            TOASTCONDITION(sessionStorage.getItem("Message"),"Please Type a Message",()=>{

                                TOASTVIEW("Please Wait");

                                MJOMBAALIDIRECTMESSAGE();

                            });
                            
                        });

                    });

                });

            });

        },()=>{

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,"Doctor Mjomba Ali Live Chat",()=>{

            });

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,"Access Live Chat Number",(ELS)=>{

                FONTSIZE(ELS,"16px");

            });

            BREAK(ELEMENT);

            ROUNDINPUTVIEW(ELEMENT,"tel","Enter Your Phone With Country Code","Number",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Chat",GREEN,(ELEMENTS)=>{
               
                WIDTH(ELEMENTS,"100px");
                BOTTOM(ELEMENTS,"10px");
                RIGHT(ELEMENTS,"2%");
                RADIUS(ELEMENTS,"10px");

                CLICK(ELEMENTS,()=>{

                    TOASTCONDITION(sessionStorage.getItem("Number"),"Enter Your Phone Number",()=>{

                        DATASTORE(" ","ChatterId",sessionStorage.getItem("Number"));

                        CONTACTUSPAGE();

                    });

                });

            });

        });

    });

};

const HEADERPAGES=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,sessionStorage.getItem("Sector"),()=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(LOAD)=>{

            GETDATA(DOCTORMJOMBAALICONNECTIONLINK,sessionStorage.getItem("Names"),(Data)=>{

                DISPLAYHIDDEN(LOAD);

                CLEAR(ELEMENT);

                REDUX(Data,(element)=>{

                    BREAK(ELEMENT);

                    DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

                        IMAGE(ELEMENTS,"","",element.Image,TRANSPARENT,(ELEMENTS)=>{

                            POSITIONABSOLUTE(ELEMENTS);
                            LEFT(ELEMENTS);

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,element.Name,(ELEMENTSIS)=>{

                            BACKGROUND(ELEMENTSIS,WHITE);
                            PADDING(ELEMENTSIS,"2%");
                            WIDTH(ELEMENTSIS,"90%");

                        });

                        BREAK(ELEMENTS);

                        TEXTVIEW(ELEMENTS,element.Story,(ELEMENTSIS)=>{

                            PADDING(ELEMENTSIS,"2%");
                            WIDTH(ELEMENTSIS,"90%");

                        });

                        FOOTER(ELEMENTS,(ELEMENTSS)=>{

                            ELEMENTEDBACKGROUND(ELEMENTSS);

                            ICONVIEW(ELEMENTSS,WHITEPHONEICON,BLACKPHONEICON,(ELEMENTSS)=>{

                                CLICK(ELEMENTSS,()=>{

                                    CALL("+254794094414");

                                });

                            });

                            ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                                CLICK(ELEMENTSS,()=>{

                                    WHATSAPP("+254748352113");

                                });

                            });

                        });

                    });

                    BREAK(ELEMENT);

                });

            });

        });

    });

};

const EMAILPAGES=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Email Us Page",()=>{

        });

    },(ELEMENT)=>{

        TEXTVIEW(ELEMENT,"Under Development",()=>{

        });

    });

};

const POLICIESPAGES=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Terms and Conditions",()=>{

        });

    },(ELEMENT)=>{

        TEXTVIEW(ELEMENT,"Under Development",()=>{

        });

    });

};

const VIDEOPAGES=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,BLACKBACKICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"About Us",()=>{

        });

    },(ELEMENT)=>{

        SERVERCOMPONENTS("Videos/MjombaAli.mp4",(PATH)=>{

            VIDEO(ELEMENT,PATH,()=>{

            });

        });

    });

};