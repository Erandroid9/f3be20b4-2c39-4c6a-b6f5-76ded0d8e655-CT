//Needs Update
const SERVERCOMPONENTS=(PATH,CALLBACK)=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        CALLBACK("../Library/Assets/DataBase/Raw/"+PATH);

    },()=>{

        CALLBACK("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-E/Library/Assets/DataBase/Raw/"+PATH);

    });

};
//Needs Update
const POWEREDBY=(ELEMENT,COLOR)=>{

    const NAMES=document.createElement("p");

    DISPLAY(NAMES,COMPANYNAME);

    STYLED(NAMES,"text-align","center");
    STYLED(NAMES,"color",COLOR||"#FFFFFF");

    CLICK(NAMES,()=>{

        WEBSITE(COMPANYLINK);

    });

    ADD(ELEMENT,NAMES);

};
//Needs Update
const SCROLL=(ELEMENT, callback) => {

    ELEMENT.addEventListener("scroll", () => {

        callback();

    });
    
};
//Needs Update
const HOVER=(ELEMENT, onEnter, onLeave) => {

    ELEMENT.addEventListener("mouseenter", () => onEnter(ELEMENT));

    ELEMENT.addEventListener("mouseleave", () => onLeave(ELEMENT));
    
};
//Needs Update
const CAPITALIZED=(text, callback)=>{

    const capitalized = text.toUpperCase();

    CHECKER(typeof text !== 'string',()=>{

        TOAST("Input must be a string");

    });

    CONDITION(typeof callback === 'function',()=>{

        callback(capitalized);

    },()=>{

        TOAST("Callback is not a function");

    });

};
//Needs Update
const TEXTCHANGER=(ELEMENT,Data)=>{

    ELEMENT.value=Data;

};
//Needs Update
const COPY=async (data) => {

  try {

    await navigator.clipboard.writeText(data);

    TOASTVIEW("Copied to clipboard");

  } catch (err) {

    TOASTVIEW("Failed to copy:", err);

  }
  
};
//Needs Update
const FILEPICKER=(HOLDER, callback) => {

  CLICK(HOLDER, () => {

    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";

    input.onchange = () => {

      const file = input.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {

        const rawPath = input.value || file.name;

        const path = rawPath.replace(/\\/g, "/");

        callback({
          name: file.name,
          type: file.type,
          size: file.size,
          path: path,
          data: reader.result
        });

      };

      reader.readAsDataURL(file);
    };

    input.click();
  });

};
//NeedsUpdate
const SOURCED=(ELEMENT,SOURCE)=>{

    ELEMENT.src=SOURCE||"#";

};
//Needs Update
const CONTROLS=(ELEMENT)=>{

    ELEMENT.controls=true;

};
//Needs Update
const SOURCEREF=(ELEMENT,SOURCE)=>{

    ELEMENT.href=SOURCE||"#";

};
//Needs Update
const TYPE=(ELEMENT,TYPES)=>{

    ELEMENT.type=TYPES;

};
//Needs Update
const PLACEHOLDER=(ELEMENT,MESSAGE)=>{

    ELEMENT.placeholder=MESSAGE||"Your Text";

};
//Needs Updating
const ELEMENTED=(HOLDER,ELEMENT,callBack)=>{

    const ELEMENTS=document.createElement(ELEMENT);

    ADD(HOLDER,ELEMENTS);

    callBack(ELEMENTS);

};