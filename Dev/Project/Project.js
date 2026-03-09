ERANDES=()=>{

    const LinkData=[{
        "Name":"FaceBook",
        "Link":"Hello"
    },{
        "Name":"TikTok",
        "Link":"Hello"
    }];

    LINKSTORAGE(LinkData);

};

const LINKSTORAGE=(DATA)=>{

    REDUX(DATA,(Element)=>{

        DATASTORE("",Element.Name,Element.Link);

    });

};