const HEADER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"header",(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"50px");
        DISPLAYFLEX(ELEMENT);
        TOP(ELEMENT,"");
        LEFT(ELEMENT,"");
        BACKGROUND(ELEMENT,TRANSPARENT);
        BORDERBOTTOM(ELEMENT,localStorage.getItem("APPCOLOR")+"50");

        callBack(ELEMENT);

    });

};
const FOOTER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"footer",(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"50px");
        DISPLAYFLEX(ELEMENT);
        BOTTOM(ELEMENT,"");
        LEFT(ELEMENT,"");
        BACKGROUND(ELEMENT,TRANSPARENT);
        BORDERTOP(ELEMENT,localStorage.getItem("APPCOLOR")+"50");
        
        callBack(ELEMENT);

    });

};
const TEXT=(HOLDER,TYPE,WORD,callBack)=>{

    ELEMENTED(HOLDER,TYPE||"p",(ELEMENT)=>{

        DISPLAY(ELEMENT,WORD||"Your Text");

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        FONTSIZE(ELEMENT,""); 

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        callBack(ELEMENT);

    });

};
const DIV=(HOLDER,WIDE,TALL,APPEARANCE,callBack)=>{

    ELEMENTED(HOLDER,"div",(ELEMENT)=>{

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,WIDE);
        HEIGHT(ELEMENT,TALL);
        DISPLAYBLOCK(ELEMENT);
        OVERFLOWY(ELEMENT);
        BACKGROUND(ELEMENT,APPEARANCE);
        RADIUS(ELEMENT,"0");

        callBack(ELEMENT);

    });

};
const IMAGE=(HOLDER,WIDE,TALL,SOURCE,APPEARANCE,callBack)=>{

    ELEMENTED(HOLDER,"img",(ELEMENT)=>{

        ELEMENT.src=SOURCE;

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,WIDE||"");
        HEIGHT(ELEMENT,TALL||"");
        BACKGROUND(ELEMENT,APPEARANCE||TRANSPARENT);
        RADIUS(ELEMENT,"0");

        COVEROBJECTFIT(ELEMENT);

        callBack(ELEMENT);

    });

};
const VIDEO=(HOLDER,SRC,callBack)=>{

    ELEMENTED(HOLDER,"video",(ELEMENT)=>{

        SOURCED(ELEMENT,SRC);
        CONTROLS(ELEMENT);

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        callBack(ELEMENT);

        ELEMENT.addEventListener("play", () => {

            document.querySelectorAll("video").forEach(video => {

                CHECKER(video !== ELEMENT,()=>{

                    video.pause();

                });
            
            });

        });

    });

};
const AUDIO=(HOLDER, SRC, callBack) => {

    ELEMENTED(HOLDER, "audio", (ELEMENT) => {

        ELEMENT.dataset.src = SRC;
        ELEMENT.preload = "none";
        ELEMENT.controls = true;

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT, "");
        HEIGHT(ELEMENT, "50px");
        MARGIN(ELEMENT, "");
        DISPLAYBLOCK(ELEMENT);
        BACKGROUND(ELEMENT, WHITE);

        const loadAudio = () => {

            CHECKER(!ELEMENT.src,()=>{

                ELEMENT.src = ELEMENT.dataset.src;

            });

        };

        CONDITION("IntersectionObserver" in window,()=>{

            const observer = new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    CHECKER(entry.isIntersecting,()=>{

                        loadAudio();

                        observer.disconnect();

                    });

                });

            });

            observer.observe(ELEMENT);

        },()=>{

            loadAudio();

        });

        ELEMENT.addEventListener("play", () => {

            loadAudio();

            document.querySelectorAll("audio").forEach(audio => {

                CHECKER(audio !== ELEMENT, () => {

                    audio.pause();

                });

            });

        });

        callBack(ELEMENT);
        
    });

};
const IFRAME=(HOLDER,SRC,callBack)=>{

    ELEMENTED(HOLDER,"iframe",(ELEMENT)=>{

        SOURCED(ELEMENT,SRC);

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        BORDER(ELEMENT,TRANSPARENT);
        OUTLINE(ELEMENT);
        OVERFLOWHIDDEN(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        callBack(ELEMENT);

    });

};
const INPUT=(HOLDER,TYPES,MESSAGE,STORAGE,CallBack)=>{

    ELEMENTED(HOLDER,"input",(ELEMENT)=>{

        FUNCTIONED(ELEMENT,"input",()=>{

            CONDITION(ELEMENT.value,()=>{

                DATASTORE("",STORAGE,ELEMENT.value);

            },()=>{

                DELETEDATASTORE("",STORAGE,ELEMENT.value);

            });

        });

        TYPE(ELEMENT,TYPES||"text");

        PLACEHOLDER(ELEMENT,MESSAGE);

        CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

            BORDER(ELEMENT,WHITE);

        },()=>{

            BORDER(ELEMENT,BLACK);

        });

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"95%");
        HEIGHT(ELEMENT,"32px");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        OUTLINE(ELEMENT);
        OVERFLOWHIDDEN(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        CallBack(ELEMENT);

    });

};
const TEXTAREA=(HOLDER,MESSAGE,STORAGE,callBack)=>{

    ELEMENTED(HOLDER,"textarea",(ELEMENT)=>{

        FUNCTIONED(ELEMENT,"input",()=>{

            CONDITION(ELEMENT.value,()=>{

                DATASTORE("",STORAGE,ELEMENT.value);

            },()=>{

                DELETEDATASTORE("",STORAGE,ELEMENT.value);

            });

        });

        PLACEHOLDER(ELEMENT,MESSAGE);

        CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

            BORDER(ELEMENT,WHITE);

        },()=>{

            BORDER(ELEMENT,BLACK);

        });

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"95%");
        HEIGHT(ELEMENT,"150px");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        OUTLINE(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        callBack(ELEMENT);

    });

};
const BUTTON=(HOLDER,WORDS,APPEARANCE,callBack)=>{

    ELEMENTED(HOLDER,"button",(ELEMENT)=>{

        DISPLAY(ELEMENT,WORDS||"Click Me");

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,"95%");
        HEIGHT(ELEMENT,"50px");
        DISPLAYBLOCK(ELEMENT);
        BORDER(ELEMENT,TRANSPARENT);
        BACKGROUND(ELEMENT,APPEARANCE);

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        callBack(ELEMENT);

    });

};
const BREAK=(HOLDER)=>{

    ELEMENTED(HOLDER,"br",(ELEMENT)=>{

    });

};
const LINE=(HOLDER,APPEARANCE)=>{

    ELEMENTED(HOLDER,"hr",(ELEMENT)=>{

        BACKGROUND(ELEMENT,APPEARANCE);

    });

};