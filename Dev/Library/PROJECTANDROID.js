const runUssd=(code)=>{
    AndroidUSSD.runUssd(code);
    showResult(message);
};
const sendSms=(number,message)=>{
    AndroidUSSD.sendSms(number, message);
    showResult(message);
};
const showResult=(message)=>{
    DATASTORE("","AndroidSms",message);
};
const readSms=()=>{
    AndroidUSSD.readSms();
    showResult(message);
};
const AndroidReload=()=>{
    AndroidUSSD.reloadApp();
};
const AndroidStatusBar=(COLORS)=>{

    if (localStorage.getItem("Env") === "Android") {

        AndroidUSSD.setSystemBarsColor(COLORS);
        
        return;
    };
    
};