const ADD=(HOLDER,DATA)=>{

    CONDITION(HOLDER,()=>{

        HOLDER.append(DATA);

    },()=>{

        BODY.append(DATA);

    });

};
const AUTORUN=()=>{
    
    CONDITION(localStorage.getItem("Env") ==="Dev",()=>{

        import("./Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    },()=>{

        import("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-E/Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    });

};
const CONDITION=(TERMS,callback,callbackOne)=>{

    if (TERMS) {

        callback();

    } else {

        callbackOne();
        
    };
    
};
const DISPLAY=(ELEMENT,DATA)=>{

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=DATA;
        
    },()=>{

        BODY.innerHTML=DATA;

    });

};
const CHECKER=(TERM,callback)=>{

    if (TERM) {

        callback();

    };

};
const STYLED=(ELEMENT,PROPERTY,VALUE)=>{

   ELEMENT.style[PROPERTY] = VALUE

};
const ROUTE=(NEWPAGE, FUNCTION, FUNCTIONBACK) => {

    sessionStorage.setItem("PreviousPage", FUNCTIONBACK);

    CONDITION(NEWPAGE,()=>{

        history.pushState({ data: FUNCTION() }, "", "");

    },()=>{

        history.replaceState({ data: FUNCTION() }, "", "");

    });

    FUNCTIONED(window,"popstate",()=>{

        const previousPageFunction = sessionStorage.getItem("PreviousPage");

        CHECKER(previousPageFunction,()=>{

            const func = new Function("return " + previousPageFunction)();

            func();

        });

    });
  
};
const CREATEDATABASE=(NAME,callback)=>{

    const DATA={
        "sheetName":NAME
    };

    CLOUDPOST(CREATEDATABASELINK,DATA,(Data)=>{

        callback(Data);

    });

};
const CREATETABLE=(URL,NAME,callback)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":URL
    };

    CLOUDPOST(CREATETABLELINK,DATA,(Data)=>{

        callback(Data);

    });

};
const INSERTDATA=(URL,NAME,HEADERS,INFO,callback)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":URL,
        "Headers":HEADERS,
        "Data":INFO
    };

    CLOUDPOST(INSERTDATALINK,DATA,(Data)=>{

        callback(Data);

    });

};
const UPDATEDATA=(URL,NAME,ID,INFO,callback)=>{

    const DATA={
        "action":"update",
        "sheetName":NAME,
        "spreadsheetUrl":URL,
        "id":ID,
        "data":INFO
    };

    CLOUDPOST(UPDATEDATALINK,DATA,(Data)=>{

        callback(Data);

    });

};
const GETDATA=(URL,NAME,callback)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":URL
    };

    CLOUDPOST(GETDATALINK,DATA,(Data)=>{

        callback(Data);

    });

};
const FINDER=(DATA, ELEMENT, ELEMENT1, ACTION) => {

    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);

    return ACTION(user ? user : false);
    
};
const CLICK=(ELEMENT,callback)=>{

    const ELE=document.querySelector(ELEMENT);

    FUNCTIONED(ELE,"click",callback);

};
const CLEAR=(ELEMENT)=>{

    DISPLAY(ELEMENT,``);

};
const DATASTORE=(Type,Name,data)=>{

    CONDITION(Type,()=>{

        localStorage.setItem(Name,data);
        
    },()=>{

        sessionStorage.setItem(Name,data);

    });

};
const RELOAD=()=>{

    location.reload();

};
const FUNCTIONED=(ELEMENT,FUN,callBack)=>{

    ELEMENT.addEventListener(FUN, callBack);

};
const SCREENWIDTH=(callBack)=>{

    const screenWidth = window.screen.width;

    callBack(screenWidth);

};
const CLOUDPOST=(LINK,DATA,callBack)=>{

    if (navigator.onLine) {

        fetch(LINK,{
            method:"POST",
            mode:"cors",
            body:JSON.stringify(DATA)
        })

        .then(res =>res.json())

        .then(data=>{

            callBack(data);

        })

        .catch(error =>{

            console.log(error);
            
        });
    };
   
};
const SCREENHEIGHT=(callBack)=>{

    const screenheight = window.screen.height;

    callBack(screenheight);

};
const HIDER=(TIME,callback)=>{

    setTimeout(() => {

        callback();
        
    }, TIME||500);

};
const REPEATER=(TIME,callback)=>{

    setInterval(() => {

        callback();
        
    }, TIME||500);

};
const LOCATOR=(PATH)=>{

    window.location.href = PATH;

};
const STOREINDEX=(dbName, storeName, data, callback) => {

    let invoked = false;

    const cb = (success) => {

        CHECKER(!invoked && typeof callback === "function",()=>{

            invoked = true;

            callback(success);

        });

    };

    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (e) => {

        const db = e.target.result;

        CHECKER(!db.objectStoreNames.contains(storeName),()=>{

            db.createObjectStore(storeName, { keyPath: "Name" });

        });

    };

    request.onsuccess = (e) => {

        const db = e.target.result;

        CONDITION(!db.objectStoreNames.contains(storeName),()=>{

            db.close();

            const newVersion = db.version + 1;

            const upgradeRequest = indexedDB.open(dbName, newVersion);

            upgradeRequest.onupgradeneeded = (e) => {
                
                const upgradeDb = e.target.result;

                upgradeDb.createObjectStore(storeName, { keyPath: "Name" });

            };

            upgradeRequest.onsuccess = (e) => {

                const upgradeDb = e.target.result;

                const tx = upgradeDb.transaction(storeName, "readwrite");

                const store = tx.objectStore(storeName);

                const addReq = store.add(data);

                addReq.onsuccess = () => {

                    tx.oncomplete = () => cb(true);

                };

                addReq.onerror = (e) => cb(false);

                tx.onerror = (e) => cb(false);

            };

            upgradeRequest.onerror = (e) => cb(false);

        },()=>{

            const tx = db.transaction(storeName, "readwrite");

            const store = tx.objectStore(storeName);

            const addReq = store.add(data);

            addReq.onsuccess = () => {

                tx.oncomplete = () => cb(true);

            };

            addReq.onerror = (e) => cb(false);

            tx.onerror = (e) => cb(false);

        });

    };

    request.onerror = (e) => cb(false);
    
};
const UPDATEINDEX=(dbName, storeName, data, callback) => {

    const request = indexedDB.open(dbName);

    request.onsuccess = function (event) {

        const db = event.target.result;

        CHECKER(!db.objectStoreNames.contains(storeName),()=>{

            console.error(`Object store "${storeName}" not found.`);

            db.close();

        });

        const transaction = db.transaction(storeName, "readwrite");

        const store = transaction.objectStore(storeName);

        const putRequest = store.put(data);

        putRequest.onsuccess = function () {
            
            callback(true);

        };

        putRequest.onerror = function (event) {

            console.error("Error updating data", event.target.error);

        };

        transaction.oncomplete = function () {

        };

        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    request.onerror = function (event) {

        console.error("Error opening database", event.target.error);

    };
    
};
const WEBKIT=()=>{

    const style = document.createElement('style');

    style.textContent = `

        ::-webkit-scrollbar{
            display:none;
            width: 0px;
            background: transparent;
        }

        audio::-webkit-media-controls-enclosure {
            border: none ;
            border-radius: 0 ;
            box-shadow: none ;
            outline: none;
        }

    `;

    document.head.appendChild(style);

};
const DEJSONDATA=(TYPE,MYDATA,callback)=>{

    CONDITION(TYPE,()=>{

        const DATA = localStorage.getItem(MYDATA);

        const MYDATATA = JSON.parse(DATA);

        callback(MYDATATA);

    },()=>{

        const DATA = sessionStorage.getItem(MYDATA);

        const MYDATATA = JSON.parse(DATA);

        callback(MYDATATA);

    });

};
const ZOOM=() => {

    document.addEventListener(

        "touchstart",

        function (event) {

            if (event.touches.length > 1) {

                event.preventDefault();

            }
            
        },{ passive: false }

    );

    document.addEventListener("wheel", function (event) {

        if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {

            event.preventDefault();

        }

    });
    
};
const INSPECTION=() => {

    CHECKER(localStorage.getItem("Env") !== "Dev",()=>{

        document.addEventListener("contextmenu", function (e) {

            e.preventDefault();

        });

        document.addEventListener("keydown", function (e) {

            if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J"))) {
               
                e.preventDefault();
            }

        });

        document.addEventListener("keydown", function (e) {

            if (e.ctrlKey && e.key === "u") {

                e.preventDefault();

            }

        });

        const detectDevTools = () => {

            const threshold = 160;

            const devToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;
            
            CHECKER(devToolsOpen,()=>{
                
                window.resizeTo(window.outerWidth - 1, window.outerHeight - 1);

                window.resizeTo(window.outerWidth + 1, window.outerHeight + 1);

            });

        };

        REPEATER(100,()=>{detectDevTools});

    });
 
};
const GETINDEXDATA=(dbName, storeName, callback) => {

    const initialRequest = indexedDB.open(dbName);

    initialRequest.onsuccess = function (event) {

        const db = event.target.result;

        CHECKER(!db.objectStoreNames.contains(storeName),()=>{

            console.error(`Object store "${storeName}" not found.`);

            db.close();

        });

        const transaction = db.transaction(storeName, "readonly");

        const store = transaction.objectStore(storeName);

        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function (event) {

            const data = event.target.result;

            data.forEach((element) => {

                element.data.reverse().forEach((elements) => {

                    callback(elements);

                });

            });

        };

        getAllRequest.onerror = function (event) {

            console.error("Error retrieving data", event.target.error);

        };

        transaction.oncomplete = function () {

        };

        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    initialRequest.onupgradeneeded = function (event) {

        console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");
    
    };

    initialRequest.onerror = function (event) {

        console.error("Error opening database", event.target.error);

    };
    
};
const REDUX=(Data,callBack)=>{

    Data.forEach(element => {

        callBack(element);
        
    });

};
const SPACEDWORDS=(input,callBack)=>{

    const newWord = input.split(" ").join("%20");

    callBack(newWord);

};
const PATHREVERSE=(filePath,callBack)=>{

    if (typeof filePath !== "string") {
        throw new Error("Input must be a string");
    }

    const newPath = filePath.replace(/\\/g, "/");

    callBack(newPath);

};
const DOWNLOADFILE=async (url, filename) => {
  if (navigator.onLine) {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors",   
        credentials: "omit",   
        cache: "no-cache"
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.status}`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename || "download";
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download error:", error);
    }
  } else {
    console.warn("No internet connection");
  }
};
const DESPACEDWORDS=(input, callBack) => {
    const originalWord = input.split("%20").join(" ");
    callBack(originalWord);
};
const CALL=(NUMBER)=>{

    window.location.href = "tel:"+NUMBER;

};
const DATENOW=(callback) => {
    callback(Date.now());
};
const DATETODAY=(callback)=>{

    const now = new Date();

    console.log(`Date: ${now.toLocaleDateString()}`);
    console.log(`Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`);
    console.log(`Time: ${now.toLocaleTimeString()}`);

    const futureDate = new Date(now);
    futureDate.setDate(now.getDate());

    const result = {
        date: futureDate.toLocaleDateString(),
        day: futureDate.toLocaleDateString('en-US', { weekday: 'long' }),
        time: futureDate.toLocaleTimeString()
    };

    callback(result);
    
};
const DEVICE=(callback) => {
    
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: { width: screen.width, height: screen.height, availWidth: screen.availWidth, availHeight: screen.availHeight, colorDepth: screen.colorDepth, pixelDepth: screen.pixelDepth },
        online: navigator.onLine,
        memory: navigator.deviceMemory || "Unknown",
        cores: navigator.hardwareConcurrency || "Unknown",
    };

    if (typeof callback === "function") {
        callback(deviceInfo);
    };

};
const DOMAINNAMECHANGE=()=>{

    const currentUrl = window.location.href;
    
    const storedUrl = localStorage.getItem('storedUrl');

    if (!storedUrl) {

        localStorage.setItem('storedUrl', currentUrl);
        
    } else if (storedUrl !== currentUrl) {

        localStorage.removeItem("Packaged");

        RELOAD();

        localStorage.setItem('storedUrl', currentUrl);

    };

};
const FACEBOOK=(NAME) => {

    var facebookLink = "https://www.facebook.com/" + encodeURIComponent(NAME);

    window.open(facebookLink);
    
};
const GROUP=(data, callback) => {

  let parsedData;

  try {

    parsedData = typeof data === "string" ? JSON.parse(data) : data;

  } catch {

    parsedData = [];

  }

  if (!Array.isArray(parsedData)) {

    callback([]);

    return;

  }

  const idMap = new Map();

  parsedData.forEach(item => {

    const id = item.ID;

    if (idMap.has(id)) {

      idMap.get(id).quantity += 1;

    } else {

      const newItem = { ...item, quantity: 1 };

      idMap.set(id, newItem);

    }

  });

  const finalArray = Array.from(idMap.values());

  callback(finalArray);
  
};
const INSTAGRAM=(NAME) => {
   
    var instagramLink = "https://www.instagram.com/" + encodeURIComponent(NAME);

    CHECKER(navigator.onLine,()=>{

        window.open(instagramLink);

    });
    
};
const JSONADDER=(data, contents, callback) => {
    
    let MYDATA;

    try {

        MYDATA = JSON.parse(data) || [];

    } catch (e) {

        MYDATA = [];

    }

    const existingIds = MYDATA.map(item => item.id);

    let nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

    contents.forEach((content) => {
    
        const contentId = content.id;

        const isDuplicate = contentId !== undefined && existingIds.includes(contentId);

        if (!isDuplicate) {

            if (contentId === undefined) {

                content.id = nextId++;

            } else {
                
                existingIds.push(contentId);
            }

            MYDATA.push(content);
        }

    });

    const updatedJSON = JSON.stringify(MYDATA);

    callback(updatedJSON);

};
const JSONIFICATION=(DATA, callback) => {

    let DAA = JSON.stringify(DATA);

    callback(DAA);
    
};
const JSONREMOVER=(data, ids, callback) => {
    
    let MYDATA;

    try {

        MYDATA = JSON.parse(data) || [];

    } catch (e) {

        MYDATA = [];

    }

    const idSet = new Set(ids.map(id => String(id)));

    MYDATA.forEach(item => {

        console.log("Item:", item, "| item.id =", item.id);

    });

    const filteredData = MYDATA.filter(item => {

        const itemId = item?.id ?? null;

        return !idSet.has(String(itemId));

    });

    const updatedJSON = JSON.stringify(filteredData);

    callback(updatedJSON);

};
const PARTISION=(input, callback) => {
  
  if (typeof input !== 'number' || !Number.isFinite(input)) {

    console.error("Input must be a valid number.");

    callback('');

    return;
    
  };

  const formatted = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (typeof callback === 'function') {

    callback(formatted);

  };

};
const MONTHSTIME=(inputDate, callback) => {

    const now = new Date();

    const date = new Date(inputDate);

    const oneMonthAgo = new Date(now);

    oneMonthAgo.setMonth(now.getMonth() - 1);

    const isValid = date >= oneMonthAgo && date <= now;

    if (typeof callback === "function") {

        callback(isValid);

    } else {

        console.error("Provided callback is not a function.");

    };

};
const OPERATINGSYSTEM=() => {

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    let os = "Unknown OS";
    let deviceType = "Unknown Device";
    let deviceName = "Unknown Device";

    if (/windows phone/i.test(userAgent)) {
        os = "Windows Phone";
        deviceType = "Mobile";
    } 
    else if (/win/i.test(userAgent)) {
        os = "Windows";
        deviceType = "Desktop";
    } 
    else if (/android/i.test(userAgent)) {
        os = "Android";
        deviceType = /mobile/i.test(userAgent) ? "Mobile" : "Tablet";

        if (/samsung/i.test(userAgent)) deviceName = "Samsung Device";
        else if (/huawei/i.test(userAgent)) deviceName = "Huawei Device";
        else if (/xiaomi/i.test(userAgent)) deviceName = "Xiaomi Device";
        else deviceName = "Android Device";
    } 
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "iOS";

        if (/iPhone/.test(userAgent)) {
            deviceType = "Mobile";
            deviceName = "iPhone";
        } 
        else if (/iPad/.test(userAgent)) {
            deviceType = "Tablet";
            deviceName = "iPad";
        } 
        else {
            deviceType = "Mobile";
            deviceName = "iOS Device";
        }
    } 
    else if (/Macintosh/i.test(userAgent)) {
        os = "MacOS";
        deviceType = "Desktop";
        deviceName = "Mac";
    } 
    else if (/Linux/i.test(userAgent)) {
        os = "Linux";
        deviceType = "Desktop";
        deviceName = "Linux Device";
    }

    const deviceData = {
        os,
        deviceType,
        deviceName,
        userAgent,
        detectedAt: new Date().toISOString()
    };

    localStorage.setItem("OperatingSystem", JSON.stringify(deviceData));

    return deviceData;
};
const SMS=(NUMBER) => {

    const phoneNumber = NUMBER;

    window.location.href = "sms:" + phoneNumber;
    
};
const WEBSITE=(LINK)=>{

    location.href=LINK;

};
const ERANDIXPAY=(KEY,SECRET,SITE,AMOUNT,DETAILS,PHONE)=>{

    const DATA={
        consumer_key: KEY,
        consumer_secret: SECRET
    };

    CLOUDPOST(TOKENIZATIONLINK,DATA,(data)=>{

        const DATAONE={
            site: SITE,
            token: data.token
        };

        CLOUDPOST(IPNIZATIONLINK,DATAONE,(dataOne)=>{

            const DATATWO={
                token: data.token,
                id: dataOne.ipn_id,
                amount:AMOUNT,
                description: DETAILS,
                callback_url: SITE,
                notification_id: dataOne.ipn_id,
                billing_address: {
                email_address: '',
                phone_number: PHONE,
                first_name: '',
                last_name: ''
                }
            };

            CLOUDPOST(SUBMIZATIONLINK,DATATWO,(dataTwo)=>{

                WEBSITE(dataTwo.redirect_url);

            });

        });

    });

};
const WHATSAPP=(NUMBER)=>{

    location.href=`https://wa.me/${NUMBER}`;

};
const DELETEDATASTORE=(Type,Name,data)=>{

    CONDITION(Type,()=>{

        localStorage.removeItem(Name,data);
        
    },()=>{

        sessionStorage.removeItem(Name,data);

    });

};
const RANDOMCODEGENERATOR=(callback) => {
  const code = Math.floor(100000 + Math.random() * 900000);
  if (typeof callback === "function") {
    callback(code);
  }
};
const GETEMAILS=(callBack)=>{

    const DATA={
        action: "fetchEmails"
    };

    CLOUDPOST(GETEMAILLINK,DATA,(Data)=>{

        callBack(Data);

    });

};
const TIKTOK=(NAME) => {

  var Tiktok = "https://www.tiktok.com/@" + encodeURIComponent(NAME);

  window.open(Tiktok);
  
};
const X=(NAME) => {

  var xUrl = "https://x.com/" + encodeURIComponent(NAME);
  
  window.open(xUrl);
  
};
const ARRAYJSONCONVERTOR=(DATA, CALLBACK) => {
  try {
    if (!DATA) {
      CALLBACK([]);
      return;
    }
    const parsedData = typeof DATA === "string" ? JSON.parse(DATA) : DATA;

    if (!Array.isArray(parsedData)) {
      CALLBACK([]);
      return;
    }

    const result = parsedData.map((item, index) => ({
      id: index + 1,
      message: item
    }));

    CALLBACK(result);

  } catch (error) {
    CALLBACK([]);
  }
};
const TIMEZONE=() => {
  try {

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const offsetMinutes = new Date().getTimezoneOffset();
    const offsetHours = -offsetMinutes / 60;

    const data = {
      timeZone,
      offsetHours,
      offsetMinutes: -offsetMinutes,
      detectedAt: new Date().toISOString()
    };

    localStorage.setItem("USER_TIMEZONE", JSON.stringify(data));

    localStorage.setItem("TIMEZONE", JSON.stringify(data.timeZone));

    return data;

  } catch (error) {
    console.error("Timezone detection failed:", error);
  }
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