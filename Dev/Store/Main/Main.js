const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    DISPLAY("",`

        <header>

            <h1 class="LeftText">Erandix</h1>

            <img class="Icon" id="ModeIcon" />

            <img  class="RightIcon" id="MenuIcon"/>

        </header>

        <div class="DataHolder"></div>

    `);

    ICONMODE("#ModeIcon",WHITESUNICON,BLACKSUNICON);

    ICONMODE("#MenuIcon",WHITEMENUICON,BLACKMENUICON);

    MODECHANGE("#ModeIcon");

};

const DESKTOPVIEW=()=>{

};