const ICONMODE=(ELEMENT,LIGHTMODE,DARKMODE)=>{

    const ELES=document.querySelector(ELEMENT);

    CONDITION(localStorage.getItem("AppMode") === "#000000",()=>{

        ELES.src=LIGHTMODE;

    },()=>{

        ELES.src=DARKMODE;

    });

};
const LOGINCHECKER=(CALLBACK,CALLBACKONE,CALLBACKTWO)=>{

    CONDITION(localStorage.getItem("User"),()=>{

        CALLBACK();

    },()=>{

        CONDITION(localStorage.getItem("UserCode"),()=>{

            CALLBACKONE();

        },()=>{

            CALLBACKTWO();
                
        });
   
    });

};
const BACKPAGECLICK=(ELE,NAME)=>{

    CLICKED(ELE,()=>{

        ROUTE("",NAME,`${NAME}`);

    });

};
const NEXTPAGECLICK=(ELE,NAMETWO,NAME)=>{

    CLICKED(ELE,()=>{

        ROUTE(" ",NAMETWO,`${NAME}`);

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
const VIEWCONTROLLER=()=>{

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