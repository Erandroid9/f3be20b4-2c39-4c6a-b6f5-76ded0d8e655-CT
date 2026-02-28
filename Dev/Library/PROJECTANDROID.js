const runUssd=(code,simSlot)=>{if (localStorage.getItem("Env") === "Android"){AndroidUSSD.runUssd(code,parseInt(simSlot));showResult(message);};};
const sendSms=(number,message)=>{if (localStorage.getItem("Env") === "Android"){AndroidUSSD.sendSms(number, message);showResult(message);};};
const showResult=(message)=>{DATASTORE("","AndroidSms",message);};
const readSms=()=>{if (localStorage.getItem("Env") === "Android"){AndroidUSSD.readSms();showResult(message);};};
const AndroidReload=()=>{if (localStorage.getItem("Env") === "Android") {AndroidUSSD.reloadApp();return;};};
const AndroidStatusBar=(COLORS)=>{if (localStorage.getItem("Env") === "Android"){AndroidUSSD.setSystemBarsColor(COLORS);return;};};
const OUTLINK=(LINK)=>{if (localStorage.getItem("Env") === "Android"){Android.openExternal(LINK);return;};};