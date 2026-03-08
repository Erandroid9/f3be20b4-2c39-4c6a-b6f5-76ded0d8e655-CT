const FRAMEWORKDOWNLOAD=()=>{

    CHECKER(localStorage.getItem("Env") === "Dev",()=>{

        sessionStorage.setItem("DevMode",true);
 
    },()=>{

        GETDATA(FRAMEWORKDATABASELINK,"Erandix",(Data)=>{
    
            FINDER(Data,"VERSION",localStorage.getItem("Version"),(User)=>{
    
                CONDITION(User.VERSION === localStorage.getItem("Version") && User.ACCESS === "Approved" ,()=>{
    
                    CONDITION(localStorage.getItem("FrameWorkUpdated"),()=>{
    
                        DATASTORE(" ","FrameWorkUpdated",new Date());
    
                    },()=>{
    
                        JSONADDER(User.LOCATION,[localStorage.getItem("TIMEZONE")],(Location)=>{
    
                            JSONADDER(User.ENVIROMENT,[localStorage.getItem("Env")],(Env)=>{
    
                                const NEWLOAD=User.DOWNLOADS+1;
            
                                const DATA=[User.NAME,User.VERSION,User.APIS,User.COLORS,User.COMPONENTS,User.CONSTANTS,User.ERANDCONFIG,User.FUNCTIONS,User.PAGES,User.PLUGINS,User.PROJECTANDROID,User.PROJECTWEB,User.PROJECTDESKTOP,User.RUN,User.SERVER,User.STYLES,User.TEMPLATES,User.ANDROIDPAGES,User.WEBPAGES,User.DESKTOPPAGES,NEWLOAD,Location,Env,User.ACCESS,User.ADMIN];
                                
                                UPDATEDATA(FRAMEWORKDATABASELINK,"Erandix",User.ID,DATA,()=>{
    
                                    DATASTORE(" ","FrameWorkUpdated",new Date());
    
                                });
    
                            });
    
                        });
    
                    });
    
                },()=>{
    
                    sessionStorage.setItem("FrameWork", "Depricated");
    
                });
    
            });
    
        });

    });

};


const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    BOTTOMNAV("","Hello",(ES)=>{

        CCNTACTUSVIEW(ES);;;

    });
    
};

const DESKTOPVIEW=()=>{

    CCNTACTUSVIEW("");


};