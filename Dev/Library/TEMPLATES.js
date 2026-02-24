const HEADERVIEW=(callBack,callBackOne)=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"");

        callBackOne(ELEMENT);

    });

};
const LEFTTEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        MARGINLEFT(ELEMENTS,"2%");

        callBack(ELEMENTS);

    });

};
const RIGHTTEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        MARGINRIGHT(ELEMENTS,"2%");

        callBack(ELEMENTS);

    });

};
const FOOTERVIEW=(callBack,callBackOne)=>{

    CLEAR("");

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"");
        BOTTOM(ELEMENT,"50px");

        callBack(ELEMENT);

    });

    FOOTER("",(ELEMENT)=>{

        callBackOne(ELEMENT);

    });

};
const ICONVIEW=(HOLDER,WHITESOURCE,DARKSOURCE,callBack)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        IMAGE(HOLDER,"20px","20px",WHITESOURCE,"",(ELEMENTS)=>{

            callBack(ELEMENTS);

        });

    },()=>{

        IMAGE(HOLDER,"20px","20px",DARKSOURCE,"",(ELEMENTS)=>{

            callBack(ELEMENTS);

        });

    });

};
const LEFTICONVIEW=(HOLDER,WHITESOURCE,DARKSOURCE,callBack)=>{

    ICONVIEW(HOLDER,WHITESOURCE,DARKSOURCE,(ELSI)=>{

        MARGINLEFT(ELSI,"3%");

        callBack(ELSI);

    });

};
const RIGHTICONVIEW=(HOLDER,WHITESOURCE,DARKSOURCE,callBack)=>{

    ICONVIEW(HOLDER,WHITESOURCE,DARKSOURCE,(ELSI)=>{

        MARGINRIGHT(ELSI,"3%");

        callBack(ELSI);

    });

};
const DIVVIEW=(HOLDER,WIDE,TALL,COLORS,callBack)=>{

    DIV(HOLDER,WIDE||"",TALL||"",COLORS||TRANSPARENT,(ELEMENT)=>{

        callBack(ELEMENT);

    });

};
const LOGINVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserEmail");

    DELETEDATASTORE("","UserPassword");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"password","Enter Your Password","UserPassword",()=>{

            });

            INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTSAS)=>{

                RIGHTTEXTVIEW(ELEMENTSAS,"Forgot Password?",(ELEMENTSS)=>{
    
                    CLICK(ELEMENTSS,()=>{
    
                        FORGOTPASSWORDVIEW(ELEMENT,WORD,LINK);
    
                    });
    
                });

            })

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                        CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                            TOASTVIEW("Please Wait...");

                            LOGINSERVER(LINK);

                        },()=>{

                            TOASTVIEW("Enter Your Password");

                        });

                    },()=>{

                        TOASTVIEW("Enter Your Email");

                    });

                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Create Account",TEAL,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    CREATEACCOUNTVIEW(ELEMENTS,WORD,LINK);

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT(ELEMENTS,"h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Email","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"password","Enter Your Password","UserPassword",()=>{

        });

        INLINEVIEW(ELEMENTS,"95%","50px",TRANSPARENT,"2%",(ELEMENTSAS)=>{

            RIGHTTEXTVIEW(ELEMENTSAS,"Forgot Password?",(ELEMENTSS)=>{
    
                CLICK(ELEMENTSS,()=>{
    
                    FORGOTPASSWORDVIEW(ELEMENTS,WORD,LINK);
    
                });
    
            });

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                    CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                        TOASTVIEW("Please Wait...");

                        LOGINSERVER(LINK);

                    },()=>{

                        TOASTVIEW("Enter Your Password");

                    });

                },()=>{

                    TOASTVIEW("Enter Your Email");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Create Account",TEAL,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{

                CREATEACCOUNTVIEW(ELEMENTS,WORD,LINK);

            });

        });

    });

};
const DOWNLOADSAVEINDEX=(URL,NAME,CALLBACK,CALLBACKONE)=>{

    GETDATA(URL,NAME,(Data)=>{

        const StoreData={
            "Name":NAME,
            "data":[Data]
        }

        STOREINDEX(NAME,NAME,StoreData,(Res)=>{

            CONDITION(Res === false,()=>{

                UPDATEINDEX(NAME,NAME, StoreData,(Data)=>{

                    CALLBACK();

                });

            },()=>{

                CALLBACKONE();

            });

        });

    });

};
const OFFLINECHECKER=(callback)=>{

    CONDITION(navigator.onLine,()=>{

        callback();
    
    },()=>{

        TOASTVIEW("Your Offline!");
        
    });

};
const TOASTVIEW=(MESSAGE)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000",()=>{

        DIV("","95%","50px",WHITE,(ELEMENT)=>{

            POSITIONABSOLUTE(ELEMENT);
            BOTTOM(ELEMENT,"20px");
            LEFT(ELEMENT,"2%");
            DISPLAYFLEX(ELEMENT);
            RADIUS(ELEMENT,"10px");

            TEXT(ELEMENT,"",MESSAGE,(ELEMENTS)=>{

                COLOR(ELEMENTS,BLACK);

            });

            HIDER(2000,()=>{

                DISPLAYHIDDEN(ELEMENT);

            });

        });

    },()=>{

        DIV("","95%","50px",BLACK,(ELEMENT)=>{

            POSITIONABSOLUTE(ELEMENT);
            BOTTOM(ELEMENT,"20px");
            LEFT(ELEMENT,"2%");
            DISPLAYFLEX(ELEMENT);
            RADIUS(ELEMENT,"10px");

            TEXT(ELEMENT,"",MESSAGE,(ELEMENTS)=>{

                COLOR(ELEMENTS,WHITE);

            });

            HIDER(2000,()=>{

                DISPLAYHIDDEN(ELEMENT);

            });

        });

    });

};
const TABLEVIEW=(HOLDER,WIDE,TALL,COLORS,AMOUNT,callBack)=>{

    DIV(HOLDER,WIDE||"",TALL||"",COLORS||TRANSPARENT,(ELEMENT)=>{

        DISPLAYTABLE(ELEMENT);
        MARGIN(ELEMENT,AMOUNT);

        callBack(ELEMENT);

    });

};
const HEADERFOOTERVIEW=(callBack,callBackOne,callBackTwo)=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"50px");

        callBackOne(ELEMENT);

    });

    FOOTER("",(ELEMENT)=>{

        callBackTwo(ELEMENT);

    });

};
const ROUNDINPUTVIEW=(HOLDER,TYPE,MESSAGE,STORAGE,callBack)=>{

    INPUT(HOLDER,TYPE,MESSAGE,STORAGE,(ELEMENT)=>{

        RADIUS(ELEMENT,"10px");

        callBack(ELEMENT);

    });

};
const LEFTDIVVIEW=(HOLDER,WIDE,callBack)=>{

    DIV(HOLDER,WIDE||"","",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        LEFT(ELEMENT,"");
        BORDERRIGHT(ELEMENT,WHITE);

        callBack(ELEMENT);

    });

};
const RIGHTDIVVIEW=(HOLDER,WIDE,callBack)=>{

    DIV(HOLDER,WIDE||"","",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        RIGHT(ELEMENT,"");
        BORDERLEFT(ELEMENT,WHITE);

        callBack(ELEMENT);

    });

};
const CENTREDIVVIEW=(HOLDER,WIDE,LEFTWIDE,RIGHTWIDE,callBack)=>{

    DIV(HOLDER,WIDE||"","",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        RIGHT(ELEMENT,RIGHTWIDE||"");
        LEFT(ELEMENT,LEFTWIDE||"");

        callBack(ELEMENT);

    });

};
const BASE64CONVERTOR=async (dataUrl, callBack) => {
  const MAX_LENGTH = 50000;

  if (!dataUrl.startsWith("data:image")) {
    throw new Error("Only images are supported without ffmpeg.wasm");
  }

  const img = new Image();
  img.src = dataUrl;

  await new Promise((res) => (img.onload = res));

  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  let width = img.width;
  let height = img.height;

  let quality = 0.9;
  let output = dataUrl;

  while (output.length > MAX_LENGTH && quality > 0.1) {
    width *= 0.9;
    height *= 0.9;

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    output = canvas.toDataURL("image/jpeg", quality);
    quality -= 0.05;
  }

  if (output.length > MAX_LENGTH) {
    throw new Error("Cannot compress image below 50,000 chars without heavy loss");
  }

  callBack(output);
};
const INLINEVIEW=(HOLDER,WIDE,TALL,COLORS,AMOUNT,callBack)=>{

    DIV(HOLDER,WIDE||"",TALL||"",COLORS||TRANSPARENT,(ELEMENT)=>{

        DISPLAYFLEX(ELEMENT);
        MARGIN(ELEMENT,AMOUNT);

        callBack(ELEMENT);

    });

};
const QELPAY=(AMOUNT,DETAILS,NUMBER)=>{

    ERANDIXPAY("nVFedcBBCajwuw6qeIotnxbiGmkZtSl3","59QxDngTrjpQhF0FH0p8Dem54L8=","https://qelmedistore.site",AMOUNT,DETAILS,NUMBER);

};
const GETSAVEDINDEX=(NAME,CALLBACK)=>{

    GETINDEXDATA(NAME,NAME,(Data)=>{

        REDUX(Data,(element)=>{

            CALLBACK(element);
            
        });

    });

};
const LOGINCHECKER=(CALLBACK)=>{

    CONDITION(localStorage.getItem("User"),()=>{

        CALLBACK();

    },()=>{

        TOASTVIEW("Login To Access Feature!");

    });

};
const TEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        callBack(ELEMENTS);

    });

};
const VISITORS=()=>{

    CONDITION(localStorage.getItem("Env") === "Dev" ,()=>{

        //PERFORM DEVELOPMENT MODE

    },()=>{

        const HEADERS=["DeviceName","DeviceTime","VisitedTimes","Platform","Language","Screen","FullData","Approved","Location","OperatingSystem"];
    
        CREATETABLE(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),()=>{
    
            GETDATA(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),(Data)=>{
        
                FINDER(Data,"ID",localStorage.getItem("VisitorID"),(User)=>{
        
                    CONDITION(User === false,()=>{
        
                        DEVICE((Datata)=>{
        
                            const INFO=[Datata.userAgent,`[${new Date()}]`,1,Datata.platform,Datata.language,Datata.screen,Datata,"Approved",localStorage.getItem("TIMEZONE"),localStorage.getItem("OperatingSystem")];
                            
                            INSERTDATA(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),HEADERS,INFO,(DataBack)=>{
        
                                DATASTORE(" ","VisitorID",DataBack.uniqueId);
        
                            });
        
                        });
        
                    },()=>{
        
                        DEVICE((Datata)=>{
        
                            JSONADDER(User.DeviceTime,[new Date()],(Info)=>{
        
                                const INFO=[Datata.userAgent,Info,User.VisitedTimes+1,Datata.platform,Datata.language,Datata.screen,Datata,"Approved",localStorage.getItem("TIMEZONE"),localStorage.getItem("OperatingSystem")];
                                
                                UPDATEDATA(ERANDIXSITEMANAGERLINK,localStorage.getItem("Config"),localStorage.getItem("VisitorID"),INFO,(DataBack)=>{
            
                                    DATASTORE(" ","VisitorID",localStorage.getItem("VisitorID"));
            
                                });
        
                            });
        
                        });
        
                    });
        
                });
        
            });
    
        });

    });
    
};
const ACCOUNTEMAILCHECKER=(ELEMENTS,WORD,LINK,CALLBACK)=>{

    CONDITION(localStorage.getItem("UserCodes"),()=>{

        EMAILVERIFICATIONVIEW(ELEMENTS,WORD,LINK);

    },()=>{

        CONDITION(localStorage.getItem("User"),()=>{

            CALLBACK();

        },()=>{

            LOGINVIEW(ELEMENTS,WORD,LINK);

        });

    });

};
const CREATEACCOUNTVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserName");

    DELETEDATASTORE("","UserEmail");

    DELETEDATASTORE("","UserPassword");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Name","UserName",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"password","Enter Your Password","UserPassword",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Sign Up",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserName"),()=>{

                        CONDITION(sessionStorage.getItem("UserEmail"),()=>{
    
                            CONDITION(sessionStorage.getItem("UserPassword"),()=>{
    
                                TOASTVIEW("Please Wait...");

                                RANDOMCODEGENERATOR((Codes)=>{

                                    DATASTORE(" ","UserCodes",Codes);

                                    CREATEACCOUNTSERVER(LINK);

                                });
    
                            },()=>{
    
                                TOASTVIEW("Enter Your Password");
    
                            });
    
                        },()=>{
    
                            TOASTVIEW("Enter Your Email");
    
                        });

                    },()=>{

                        TOASTVIEW("Enter Your User Name");

                    });

                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Log In",TEAL,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    LOGINVIEW(ELEMENTS,WORD,LINK);

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT("","h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Name","UserName",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Email","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"password","Enter Your Password","UserPassword",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Sign Up",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserName"),()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{
    
                        CONDITION(sessionStorage.getItem("UserPassword"),()=>{
    
                            TOASTVIEW("Please Wait...");

                            RANDOMCODEGENERATOR((Codes)=>{

                                DATASTORE(" ","UserCodes",Codes);

                                CREATEACCOUNTSERVER(LINK);

                            });

                        },()=>{
    
                            TOASTVIEW("Enter Your Password");
    
                        });
    
                    },()=>{
    
                        TOASTVIEW("Enter Your Email");
    
                    });

                },()=>{

                    TOASTVIEW("Enter Your User Name");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Log In",TEAL,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{

                LOGINVIEW(ELEMENTS,WORD,LINK);

            });

        });

    });

};
const EMAILVERIFICATIONVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserCode");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"tel","Enter Email Code","UserCode",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Verify",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserCode"),()=>{

                        CONDITION(sessionStorage.getItem("UserCode") === localStorage.getItem("UserCodes") ,()=>{
        
                            TOASTVIEW("Please Wait...");

                            EMAILVERIFICATIONSERVER(LINK);
                            
                        },()=>{
        
                            TOASTVIEW("Invalid Code");
        
                        });
                        
                    },()=>{

                        TOASTVIEW("No Code Entered");

                    });
 
                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Cancel",BROWN,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    DELETEDATASTORE(" ","UserID");

                    DELETEDATASTORE(" ","UserCodes");

                    RELOAD();

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT("","h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        TEXT("","h1","Enter Code Sent Your Email","",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"20px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"tel","Enter Email Code","UserCode",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Verify",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserCode"),()=>{

                    CONDITION(sessionStorage.getItem("UserCode") === localStorage.getItem("UserCodes") ,()=>{
    
                        TOASTVIEW("Please Wait...");

                        EMAILVERIFICATIONSERVER(LINK);
                          
                    },()=>{
    
                        TOASTVIEW("Invalid Code");
    
                    });
                      
                },()=>{

                    TOASTVIEW("No Code Entered");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Cancel",BROWN,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{
         
                DELETEDATASTORE(" ","UserID");

                DELETEDATASTORE(" ","UserCodes");

                RELOAD();

            });

        });

    });

};
const FORGOTPASSWORDVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserCode");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter User Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Recover",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                        TOASTVIEW("Please Wait...");

                        FORGOTPASSWORDSERVER(LINK);
                        
                    },()=>{

                        TOASTVIEW("Enter Your Email");

                    });
 
                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Cancel",BROWN,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    RELOAD();

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT("","h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        TEXT("","h1","Enter Code Sent Your Email","",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"20px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Email Code","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Recover",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                    TOASTVIEW("Please Wait...");

                    FORGOTPASSWORDSERVER(LINK);
                      
                },()=>{

                    TOASTVIEW("Enter Your Email");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Cancel",BROWN,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{
         
                RELOAD();

            });

        });

    });

};
const VIEWCONTROLLER=()=>{

    DELETEDATASTORE("","PreviousPage");

    APPMODE();FRAMEWORKUPDATER();AUTORUN();

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();});

};
const REDUXEDDATA=(LINK,NAME,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        DATASTORE("","DataFetched",Data.length||0);

        REDUX(Data,(element)=>{

            CALLBACK(element);

        });

    });

};
const TOASTCONDITION=(CONDITIONER,MESSAGE,CALLBACK)=>{

    CONDITION(CONDITIONER,()=>{

        CALLBACK();

    },()=>{

        TOASTVIEW(MESSAGE);

    });

};
const COMPONENTVALUE=(ELEMENT,AMOUNT)=>{

    ELEMENT.value=AMOUNT;

};
const HEADERVIEWER=(ELEMENT,callBack,callBackOne)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV(ELEMENT,"100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"");

        callBackOne(ELEMENT);

    });

};
const FILEPICKED=(ELEMENTERS,NAME)=>{

    FILEPICKER(ELEMENTERS,(Data)=>{

        SOURCED(ELEMENTERS,Data.data);

        BASE64CONVERTOR(Data.data, (Datata)=>{

            DATASTORE("",NAME,Datata);

        });

    });

};
const LOADERVIEW=(ELEMENT, CALLBACK) => {

    ICONVIEW(ELEMENT,WHITERETRYICON,BLACKRETRYICON,(ELS) => {
    
        WIDTH(ELS, "30px");
            
        HEIGHT(ELS, "30px");
    
        let rotation = 0;
    
        let spinning = true;
    
        const spin = () => {
    
        if (!spinning) return;
    
            rotation += 100;
    
            ELS.style.transform = `rotate(${rotation}deg)`;
    
            requestAnimationFrame(spin);
    
        };
    
        spin();
    
        ELS.stopSpin = () => spinning = false;
    
        ELS.startSpin = () => {
    
            if (!spinning) {
        
                spinning = true;
        
                spin();
        
            };
    
        };
    
        CALLBACK(ELS);
    
    });
    
};
const BODYCOLOR=(BGCOLOR,TEXTCOLOR)=>{

    BACKGROUND(BODY,BGCOLOR);

    COLOR(BODY,TEXTCOLOR);

    DATASTORE(" ","APPCOLOR",TEXTCOLOR);

    DATASTORE(" ","BODYCOLOR",BGCOLOR);
    
};
const ROUNDTEXTAREAVIEW=(HOLDER,MESSAGE,STORAGE,callBack)=>{

    TEXTAREA(HOLDER,MESSAGE,STORAGE,(ELEMENT)=>{

        RADIUS(ELEMENT,"10px");
        
        callBack(ELEMENT);

    });

};
const APPMODE=()=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        BODYCOLOR(BLACK,WHITE);

    },()=>{

        BODYCOLOR(WHITE,BLACK);

    });

};
const CHANGEMODE=(ELEMENT)=>{

    CLICK(ELEMENT,()=>{
                   
        CONDITION(localStorage.getItem("BODYCOLOR") === "#000000",()=>{
    
            DATASTORE(" ","BODYCOLOR","#FFFFFF");
    
            ERANDES();
    
        },()=>{
    
            DATASTORE(" ","BODYCOLOR","#000000");
    
            ERANDES();
    
        });

    });

};
const ELEMENTEDBACKGROUND=(ELEMENT)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        BACKGROUND(ELEMENT,localStorage.getItem("BODYCOLOR"));

    },()=>{

        BACKGROUND(ELEMENT,localStorage.getItem("BODYCOLOR"));

    });

};
const BACKNAV=(ELEMENT,NAME)=>{

    CLICK(ELEMENT,()=>{

        ROUTE("",NAME,`${NAME}`);

    });

};
const PREBACKNAV=(NAME)=>{

    HIDER(100,()=>{

        DATASTORE("","PreviousPage",NAME);

    });

};
const FORWARDNAV=(ELEMENT,NAME,BACKNAME)=>{

    CLICK(ELEMENT,()=>{

        ROUTE(" ",NAME,`${BACKNAME}`);

    });

};
const LOCALREPOSERVER=(PATH,CALLBACK)=>{
    if (navigator.onLine) {
        fetch("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-CT/Dev/Library/"+PATH)
        .then(res =>res.text())
        .then(Data =>{
            CALLBACK(Data);
        })
        .catch(error=>console.log(error))
    };
};
const FRAMEWORKUPDATER = () => {

    if (localStorage.getItem("Env") === "Dev" ) {
        
       sessionStorage.setItem("DevMode",true);
        
    }else{

        const SCHEMA = ["NAME","VERSION","APIS","COLORS","COMPONENTS","CONSTANTS","ERANDCONFIG","FUNCTIONS","PAGES","PLUGINS","PROJECTANDROID","PROJECTWEB","PROJECTDESKTOP","RUN","SERVER","STYLES","TEMPLATES","ANDROIDPAGES","WEBPAGES","DESKTOPPAGES","DOWNLOADS","LOCATION","ENVIROMENT","ACCESS","ADMIN"];
    
        const UPDATABLE_FIELDS = ["APIS","COLORS","COMPONENTS","CONSTANTS","ERANDCONFIG","FUNCTIONS","PAGES","PLUGINS","PROJECTANDROID","PROJECTWEB","PROJECTDESKTOP","RUN","SERVER","STYLES","TEMPLATES","ANDROIDPAGES","WEBPAGES","DESKTOPPAGES"];
    
        const PROTECTED_FIELDS = ["NAME", "ACCESS","VERSION"];
    
        GETDATA(FRAMEWORKDATABASELINK, "Erandix", (Data) => {
    
            FINDER(Data,"VERSION", localStorage.getItem("Version"),(User) => {

                if (!User) return;

                if (User.VERSION !== localStorage.getItem("Version") || User.ACCESS !== "Approved") {

                    sessionStorage.setItem("FrameWork", "Depricated");

                    return;

                };

                let UPDATED_USER = { ...User };

                let UPDATED_SECTIONS = [];

                let CHECKS_COMPLETED = 0;

                const finishUpdateCheck = () => {

                    if (CHECKS_COMPLETED !== UPDATABLE_FIELDS.length) return;
    
                    if (UPDATED_SECTIONS.length > 0) {
                        PROTECTED_FIELDS.forEach(field => {
                            UPDATED_USER[field] = User[field];
                        });
    
                        const INFO = SCHEMA.map(key => UPDATED_USER[key]);

                        UPDATEDATA(FRAMEWORKDATABASELINK,"Erandix",User.ID,INFO,()=>{

                            sessionStorage.setItem("LAST_UPDATE", new Date().toISOString());

                        });
    
                    } else {

                        sessionStorage.setItem("UPDATED_SECTIONS", "[]");

                    };
                };
    
                UPDATABLE_FIELDS.forEach((FIELD) => {
    
                    LOCALREPOSERVER(`${FIELD}.js`, (LocalData) => {
    
                        CHECKS_COMPLETED++;
    
                        if (LocalData && LocalData !== User[FIELD]) {
    
                            if (LocalData.length >= 50000) {
    
                                EMAILSERVER("erandix9@gmail.com","Server Over Load",`Server For ${FIELD} Has Over Load, Fix Before Errors`,()=>{});
    
                            } else {
    
                                UPDATED_USER[FIELD] = LocalData;
                                UPDATED_SECTIONS.push(FIELD);
    
                                sessionStorage.setItem(`UPDATED_${FIELD}`, "true");
                                sessionStorage.setItem(`${FIELD}_DATA`, LocalData);
                            };

                        };
    
                        finishUpdateCheck();
    
                    });
    
                });
    
            });
    
        });

    };

};
const BOTTOMNAV=(HOLDER,NAME,CALLBACK)=>{

    DIVVIEW(HOLDER,"","auto","",(ELSE)=>{

        ELEMENTEDBACKGROUND(ELSE);

        POSITIONABSOLUTE(ELSE);
        TOP(ELSE,"0px");

        OVERFLOWHIDDEN(ELSE);

        BOTTOM(ELSE,"");

        HEADERVIEWER(ELSE,(ELEMENT)=>{

            LEFTTEXTVIEW(ELEMENT,NAME,()=>{

            });

            RIGHTICONVIEW(ELEMENT,WHITECLOSEICON,BLACKCLOSEICON,(ELSSE)=>{

                CLICK(ELSSE,()=>{
                    
                    DISPLAYHIDDEN(ELSE);
                    
                });

            });

        },(ELEMENT)=>{

            CALLBACK(ELEMENT);

        });

    });

};
const CLEARNAV=()=>{

    DELETEDATASTORE("","PreviousPage");
    
};