const ERANDES=()=>{

    VIEWCONTROLLER();

    FRAMEWORKUPDATER();

};

const MOBILEVIEW=()=>{

};

const DESKTOPVIEW=()=>{


};

const FRAMEWORKUPDATER=()=>{

    GETDATA(FRAMEWORKDATABASELINK,"Erandix",(Data)=>{

        FINDER(Data,"VERSION",localStorage.getItem("Version"),(User)=>{

            if (User.VERSION === localStorage.getItem("Version") && User.ACCESS === "Approved" ) {

                //APIS
                LOCALREPOSERVER("APIS.js",(Datata)=>{

                    if (Datata !== User.APIS) {

                        if (Datata.length >= 50000) {

                            EMAILSERVER("erandix9@gmail.com","Server Over Load","Server For APIS Has Over Load,Fix Before Errors",()=>{

                            });
                            
                        } else {

                            const INFO=[User.NAME,User.VERSION,Datata,User.COLORS,User.COMPONENTS,User.CONSTANTS,User.ERANDCONFIG,User.FUNCTIONS,User.PAGES,User.PLUGINS,User.PROJECTANDROID,User.PROJECTWEB,User.PROJECTDESKTOP,User.RUN,User.SERVER,User.STYLES,User.TEMPLATES,User.ANDROIDPAGES,User.WEBPAGES,User.DESKTOPPAGES]

                            UPDATEDATA(FRAMEWORKDATABASELINK,"Erandix",User.ID,INFO,(Datte)=>{

                            });
     
                        };
                        
                    };

                });

                //COLORS
                LOCALREPOSERVER("COLORS.js",(Datata)=>{

                    if (Datata !== User.COLORS) {

                        if (Datata.length >= 50000) {

                            EMAILSERVER("erandix9@gmail.com","Server Over Load","Server For COLORS Has Over Load,Fix Before Errors",()=>{

                            });
                            
                        } else {

                            const INFO=[User.NAME,User.VERSION,User.APIS,Datata,User.COMPONENTS,User.CONSTANTS,User.ERANDCONFIG,User.FUNCTIONS,User.PAGES,User.PLUGINS,User.PROJECTANDROID,User.PROJECTWEB,User.PROJECTDESKTOP,User.RUN,User.SERVER,User.STYLES,User.TEMPLATES,User.ANDROIDPAGES,User.WEBPAGES,User.DESKTOPPAGES]

                            UPDATEDATA(FRAMEWORKDATABASELINK,"Erandix",User.ID,INFO,(Datte)=>{

                            });
     
                        };
                        
                    };

                });

            }else{

                sessionStorage.setItem("FrameWork","Depricated");

            };

        });

    });

};