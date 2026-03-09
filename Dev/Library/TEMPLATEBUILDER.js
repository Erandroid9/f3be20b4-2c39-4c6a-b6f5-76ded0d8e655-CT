const CONTACTUSVIEW = (ELEMENT,LINK)=>{

    SWITCHER("800px",()=>{

        DIVVIEW(ELEMENT,"80%","auto",TRANSPARENT,(ELEMENTS)=>{

            BREAK(ELEMENTS);
            
            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Fill The Form Below",()=>{

            });

            BREAK(ELEMENTS);

            ROUNDINPUTVIEW(ELEMENTS,"text","Enter Your Name","Name",()=>{

            });

            BREAK(ELEMENTS);

            ROUNDINPUTVIEW(ELEMENTS,"email","Enter Your Email","Email",()=>{

            });

            BREAK(ELEMENTS);

            ROUNDINPUTVIEW(ELEMENTS,"","Subject Of Message","Subject",()=>{

            });

            BREAK(ELEMENTS);

            ROUNDTEXTAREAVIEW(ELEMENTS,"Enter Your Message","Message",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Submit",FORESTGREEN,(ELSEE)=>{

                CLICK(ELSEE,()=>{

                    TOASTCONDITION(sessionStorage.getItem("Name"),"Enter Your Name",()=>{

                        TOASTCONDITION(sessionStorage.getItem("Email"),"Enter Your Email",()=>{

                            TOASTCONDITION(sessionStorage.getItem("Subject"),"Enter Your Subject",()=>{

                                TOASTCONDITION(sessionStorage.getItem("Message"),"Compose The Message",()=>{

                                    TOASTVIEW("Please Wait");

                                    CONTACTUSSERVER(LINK);

                                });    
        
                            });    

                        });

                    });

                });

            });

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);

            LINE(ELEMENTS);

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"OR",()=>{

            });

            BREAK(ELEMENTS);

            LINE(ELEMENTS);

            BREAK(ELEMENTS);

            INLINEVIEW(ELEMENTS,"","100px",TRANSPARENT,"",(ELSE)=>{

                CALLBACK(ELSE);

            });

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,COPYRIGHT+"ERANDIX 2026",()=>{

            });

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);

        });

    },()=>{

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

                                CONTACTUSSERVER(LINK);

                            });    
    
                        });    

                    });

                });

            });

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        LINE(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"OR",()=>{

        });

        BREAK(ELEMENT);

        LINE(ELEMENT);

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"","100px",TRANSPARENT,"",(ELSE)=>{

            ICONVIEW(ELSE,COLOREDINSTAGRAM,COLOREDINSTAGRAM,(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"100xp");
                HEIGHT(ELEMENTSS,"100xp");

            });

            ICONVIEW(ELSE,WHITEGMAILICON,WHITEGMAILICON,(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"100xp");
                HEIGHT(ELEMENTSS,"100xp");

            });

            ICONVIEW(ELSE,WHITEWHATSAPPICON,BLACKWHATSAPPICON,(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"100xp");
                HEIGHT(ELEMENTSS,"100xp");

            });

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,COPYRIGHT+"ERANDIX 2026",()=>{

        });

        BREAK(ELEMENT);

        BREAK(ELEMENT);

    });
    
};

const CONTACTUSSERVER=(LINK)=>{

};