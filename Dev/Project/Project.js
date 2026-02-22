const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",(Data)=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

        });

    },()=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

            ROUTE("",HOMEPAGE,"HOMEPAGE");
            
        });

    });

};

const HOMEPAGE=()=>{

    FOOTERVIEW((ELEMENT)=>{

        LOADERVIEW(ELEMENT,(EKS)=>{
            
            GETSAVEDINDEX("Catergory",(Data)=>{

                DISPLAYHIDDEN(EKS);
            
                CHECKER(Data.Approved,()=>{
                            
                    DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS0)=>{
            
                        MARGIN(ELEMENTS0,"2%");
            
                        OVERFLOW(ELEMENTS0);
            
                        HEADER(ELEMENTS0,(ELES)=>{
            
                            LEFTTEXTVIEW(ELES,Data.ProductName,(ELEMENTSA)=>{
            
                            });
            
                        });
            
                        INLINEVIEW(ELEMENTS0,"","auto",TRANSPARENT,"",(ELEMENTA)=>{
            
                            POSITIONABSOLUTE(ELEMENTA);
                            BOTTOM(ELEMENTA,"");
                            TOP(ELEMENTA,"50px");
                            LEFT(ELEMENTA,"");
                            OVERFLOWHIDDEN(ELEMENTA);
                            OVERFLOWX(ELEMENTA);
            
                            GETSAVEDINDEX("Products",(Datate)=>{
            
                                CHECKER(Data.ID === Datate.ProductCatergory && Datate.Approved,()=>{
            
                                    INLINEVIEW(ELEMENTA,"150px","100%",TRANSPARENT,"2%",(ELEMENTA)=>{
            
                                        FLEXSHRINK(ELEMENTA);
            
                                        IMAGE(ELEMENTA,"","",Datate.ProductImage,TRANSPARENT,(ELEMENTSS)=>{
            
                                            COVEROBJECTFIT(ELEMENTSS);
            
                                        });
            
                                        HEADER(ELEMENTA,(ELES)=>{
            
                                            NOBORDER(ELES);
            
                                            RIGHTTEXTVIEW(ELES,Datate.ProductNumber,(ELEMENTSA)=>{
            
                                                FONTSIZE(ELEMENTSA,"20px");
            
                                                PADDING(ELEMENTSA,"2%");
            
                                                BACKGROUND(ELEMENTSA,BLACK);
            
                                                COLOR(ELEMENTSA,FORESTGREEN);
            
                                            });
            
                                        });
            
                                        FOOTER(ELEMENTA,(ELES)=>{
            
                                            BACKGROUND(ELES,BLACK);
            
                                            LEFTTEXTVIEW(ELES,Datate.ProductName,(ELEMENTSA)=>{
            
                                                FONTSIZE(ELEMENTSA,"15px");
            
                                            });
                            
                                        });
            
                                        CLICK(ELEMENTA,()=>{
            
                                            JSONIFICATION (Datate,(Dares)=>{
            
                                                DATASTORE("","Pages","HOMEPAGE");
            
                                                DATASTORE("","Items",Dares);
            
                                                ROUTE(" ",DETAILSPAGE,"HOMEPAGE");
            
                                            });
            
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

        ICONVIEW(ELEMENT,WHITEGRIDICON,BLACKGRIDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",CARTERGORYPAGE,"HOMEPAGE");

            }); 

        });

        ICONVIEW(ELEMENT,WHITESHOPPINGCART,BLACKSHOPPINGCART,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                LOGINCHECKER(()=>{

                    ROUTE(" ",SHOPPINGACCOUNTPAGE,"HOMEPAGE");

                });

            });

        });

        ICONVIEW(ELEMENT,WHITEUSERPROFILEICON,BLACKUSERICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",USERACCOUNTPAGE,"HOMEPAGE");

            });

        });

    });

};

const DETAILSPAGE=()=>{

    DEJSONDATA("","Items",(Data)=>{

        HEADERVIEW((ELEMENT)=>{

            LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

                CLICK(ELEMENTS,()=>{

                    CONDITION(sessionStorage.getItem("Pages") === "HOMEPAGE",()=>{

                        ROUTE("",HOMEPAGE,"HOMEPAGE");

                    },()=>{

                        ROUTE("",PRODUCTPAGE,"PRODUCTPAGE");

                    });

                });

            });

            RIGHTTEXTVIEW(ELEMENT,Data.ProductName,(ELEMENTS)=>{

            });

        },(ELEMENT)=>{

            DIVVIEW(ELEMENT,"300px","300px",TRANSPARENT,(ELEMENTS0)=>{

                BREAK(ELEMENTS0);
                OVERFLOWHIDDEN(ELEMENTS0);

                IMAGE(ELEMENTS0,"","",Data.ProductImage,TRANSPARENT,(ELEMENTSS)=>{

                    COVEROBJECTFIT(ELEMENTSS);

                });

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENT,"90%","50px",TRANSPARENT,"",(ELEMENTA)=>{

                LEFTTEXTVIEW(ELEMENTA,"Price",()=>{

                });

                RIGHTTEXTVIEW(ELEMENTA,"UGX:"+Data.ProductPrice,()=>{

                });

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENT,"90%","50px",TRANSPARENT,"",(ELEMENTS)=>{

                BUTTON(ELEMENTS,"Cart",TEAL,WHITE,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"40%");
                    HEIGHT(ELEMENTSS,"40px");

                });

                BUTTON(ELEMENTS,"Buy",FORESTGREEN,WHITE,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"40%");
                    HEIGHT(ELEMENTSS,"40px");

                    CLICK(ELEMENTSS,()=>{

                        LOGINCHECKER(()=>{

                            QELPAY(Data.ProductPrice,Data.ProductName,"");

                        });

                    });

                });

            });

            BREAK(ELEMENT);BREAK(ELEMENT);

            LEFTTEXTVIEW(ELEMENT,"Product Details",()=>{

            });

            BREAK(ELEMENT);

            TEXTVIEW(ELEMENT,Data.ProductDetails,()=>{

            });

            BREAK(ELEMENT);

            CHECKER(Data.ProductImage,()=>{

                DIVVIEW(ELEMENT,"300px","300px",TRANSPARENT,(ELEMENTS0)=>{
    
                    BREAK(ELEMENTS0);
                    OVERFLOWHIDDEN(ELEMENTS0);
    
                    IMAGE(ELEMENTS0,"","",Data.ProductImage,TRANSPARENT,(ELEMENTSS)=>{
    
                        COVEROBJECTFIT(ELEMENTSS);
    
                    });
    
                });

            });

            CHECKER(Data.ProductImageOne,()=>{

                DIVVIEW(ELEMENT,"300px","300px",TRANSPARENT,(ELEMENTS0)=>{
    
                    BREAK(ELEMENTS0);
                    OVERFLOWHIDDEN(ELEMENTS0);
    
                    IMAGE(ELEMENTS0,"","",Data.ProductImageOne,TRANSPARENT,(ELEMENTSS)=>{
    
                        COVEROBJECTFIT(ELEMENTSS);
    
                    });
    
                });
                
            });
            
            CHECKER(Data.ProductImageTwo,()=>{

                DIVVIEW(ELEMENT,"300px","300px",TRANSPARENT,(ELEMENTS0)=>{
    
                    BREAK(ELEMENTS0);
                    OVERFLOWHIDDEN(ELEMENTS0);
    
                    IMAGE(ELEMENTS0,"","",Data.ProductImageTwo,TRANSPARENT,(ELEMENTSS)=>{
    
                        COVEROBJECTFIT(ELEMENTSS);
    
                    });
    
                });
                
            });

            CHECKER(Data.ProductImageThree,()=>{

                DIVVIEW(ELEMENT,"300px","300px",TRANSPARENT,(ELEMENTS0)=>{
    
                    BREAK(ELEMENTS0);
                    OVERFLOWHIDDEN(ELEMENTS0);
    
                    IMAGE(ELEMENTS0,"","",Data.ProductImageThree,TRANSPARENT,(ELEMENTSS)=>{
    
                        COVEROBJECTFIT(ELEMENTSS);
    
                    });
    
                });
                
            });

            BREAK(ELEMENT);BREAK(ELEMENT);

        });

    });

};

const USERACCOUNTPAGE=()=>{

    ACCOUNTEMAILCHECKER("","Qel",QELDATABASELINK,()=>{

        VERIFIEDUSER();

    });

};

const VERIFIEDUSER=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        TEXTVIEW(ELEMENT,"Kampala",(ELEMENTS)=>{

        });

        RIGHTTEXTVIEW(ELEMENT,"Profile",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        DIVVIEW(ELEMENT,"95%","300px",ORANGE,(ELEMENTS)=>{

            MARGIN(ELEMENTS,"2%");
            RADIUS(ELEMENTS,"10px");
            OVERFLOW(ELEMENTS);

        });

        BUTTON(ELEMENT,"Settings",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");
            MARGIN(ELEMENTS,"2%");

        });

        BUTTON(ELEMENT,"Policies",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");
            MARGIN(ELEMENTS,"2%");

        });

        BUTTON(ELEMENT,"Updates",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");
            MARGIN(ELEMENTS,"2%");

        });

    });

};

const SHOPPINGACCOUNTPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"My Cart",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

    });

};

const CARTERGORYPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Catergroy",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        LOADERVIEW(ELEMENT,(EKSL)=>{

            GETSAVEDINDEX("Catergory",(Data)=>{

                DISPLAYHIDDEN(EKSL);
    
                CHECKER(Data.Approved,()=>{
    
                    TABLEVIEW(ELEMENT,"45%","200px",TRANSPARENT,"2%",(ELES)=>{
    
                        IMAGE(ELES,"","200px",Data.ProductImage,TRANSPARENT,(ELEMENTSS)=>{
    
                            COVEROBJECTFIT(ELEMENTSS);
    
                        });
    
                        FOOTER(ELES,(ELES)=>{
    
                            BACKGROUND(ELES,BLACK);
    
                            LEFTTEXTVIEW(ELES,Data.ProductName,(ELEMENTSA)=>{
    
                                FONTSIZE(ELEMENTSA,"15px");
    
                            });
                    
                        });
    
                        CLICK(ELES,()=>{
    
                            DATASTORE("","Sector",Data.ID);
    
                            DATASTORE("","SectorName",Data.ProductName);
    
                            ROUTE(" ",PRODUCTPAGE,"CARTERGORYPAGE");
    
                        });
    
                    });
    
                });
    
            });

        });

    });

};

const PRODUCTPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",CARTERGORYPAGE,"CARTERGORYPAGE");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,sessionStorage.getItem("SectorName"),(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        GETSAVEDINDEX("Products",(Data)=>{

            
            CHECKER(Data.ProductCatergory === sessionStorage.getItem("Sector") && Data.Approved,()=>{

                TABLEVIEW(ELEMENT,"45%","200px",TRANSPARENT,"2%",(ELES)=>{

                    IMAGE(ELES,"","200px",Data.ProductImage,TRANSPARENT,(ELEMENTSS)=>{

                        COVEROBJECTFIT(ELEMENTSS);

                    });

                    FOOTER(ELES,(ELESI)=>{

                        BACKGROUND(ELESI,BLACK);

                        LEFTTEXTVIEW(ELESI,Data.ProductName,(ELEMENTSA)=>{

                            FONTSIZE(ELEMENTSA,"15px");

                        });
                
                    });

                    CLICK(ELES,()=>{

                        JSONIFICATION (Data,(Dares)=>{

                            DATASTORE("","Pages","PRODUCTPAGE");

                            DATASTORE("","Items",Dares);

                            ROUTE(" ",DETAILSPAGE,"HOMEPAGE");

                        });

                    });

                });

            });

        });

    });

};