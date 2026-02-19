ROUTEJS(localStorage.getItem("ElementJavascript"));
ROUTEJS(localStorage.getItem("ComponentsJavascript"));
ROUTEJS(localStorage.getItem("ClassesJavascript"));
ROUTEJS(localStorage.getItem("IdJavascript"));
ROUTEJS(localStorage.getItem("SharedJavascript"));
ROUTEJS(localStorage.getItem("PlugInJavascript"));

ROUTECSS(localStorage.getItem("ElementsStyles"));
ROUTECSS(localStorage.getItem("ComponentsStyles"));
ROUTECSS(localStorage.getItem("ClassesStyle"));
ROUTECSS(localStorage.getItem("IdStyles"));
ROUTECSS(localStorage.getItem("SharedStyles"));

ROUTEJS(localStorage.getItem("Shared"));
ROUTEJS(localStorage.getItem("SharedOne"));
ROUTEJS(localStorage.getItem("SharedTwo"));
ROUTEJS(localStorage.getItem("SharedThree"));
ROUTECSS(localStorage.getItem("SharedFour"));

ROUTEJS(localStorage.getItem("TemplatePages"));
ROUTEJS(localStorage.getItem("TemplatePlugins"));
ROUTEJS(localStorage.getItem("TemplateJs"));
ROUTECSS(localStorage.getItem("TemplateCss"));

ROUTEJS(localStorage.getItem("Constants"));

ROUTEJS(localStorage.getItem("ASSETS"));

if (localStorage.getItem("Env") === "Web" ) {

    ROUTEJS(localStorage.getItem("Web"));
    ROUTEJS(localStorage.getItem("WebOne"));
    ROUTEJS(localStorage.getItem("WebTwo"));
    ROUTEJS(localStorage.getItem("WebThree"));
    ROUTECSS(localStorage.getItem("WebFour"));

    ROUTEJS(localStorage.getItem("WebJavascript"));
    
} else {

    if (localStorage.getItem("Env") === "Android" ) {

        ROUTEJS(localStorage.getItem("Android"));
        ROUTEJS(localStorage.getItem("AndroidOne"));
        ROUTEJS(localStorage.getItem("AndroidTwo"));
        ROUTEJS(localStorage.getItem("AndroidThree"));
        ROUTECSS(localStorage.getItem("AndroidFour"));

        ROUTEJS(localStorage.getItem("AndroidJavascript"));
        
    } else {

        ROUTEJS(localStorage.getItem("Desktop"));
        ROUTEJS(localStorage.getItem("DesktopOne"));
        ROUTEJS(localStorage.getItem("DesktopTwo"));
        ROUTEJS(localStorage.getItem("DesktopThree"));
        ROUTECSS(localStorage.getItem("DesktopFour"));

        ROUTEJS(localStorage.getItem("DesktopJavascript"));
        
    };
    
};
