const GETMUSICAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Music",(Data)=>{

        callBack(Data);
        
    });

};
const GETMOVIESAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Movies",(Data)=>{

        callBack(Data);
        
    });

};
const GETCOUNTRIESAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Countries",(Data)=>{

        callBack(Data);
        
    });

};
const GETUGANDANDISTRICTSAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"UgandanDistricts",(Data)=>{

        callBack(Data);
        
    });

};
const GETPOLICIESAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Policies",(Data)=>{

        callBack(Data);
        
    });

};