const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    LOGINCHECKER(()=>{

        MOBILEHOMEPAGE();
    },()=>{

        MOBILEEMAILPAGE();

    },()=>{

        MOBILEHOMEPAGE();

    });

};

const MOBILEHOMEPAGE=()=>{

    DISPLAY("",`

        <div class="LanderDataHolder"></div>

        <footer>

            <img class="Icon" id="Catergory">

            <img class="Icon" id="WatchedMovies">

            <img class="Icon" id="Account">
        
        </footer>
        
    `);

    ICONMODE("#Catergory",WHITEGRIDICON,BLACKGRIDICON);

    ICONMODE("#WatchedMovies",WHITECAMERAICON,BLACKGRIDICON);

    ICONMODE("#Account",WHITEUSERICON,BLACKUSERICON);

};

const MOBILELOGINPAGE=()=>{

    DISPLAY("",`

        <h1 class="AppName">MOVIE LANDER</h1>

        <p>Your Home Cinema</p>

        <br><br>

        <input type="email" class="RoundInput" placeholder="Enter User Email"/>

        <br><br>

        <input type="password" class="RoundInput" placeholder="Enter User Password"/>

        <br><br>

        <h1 class="RightText" id="ForgotPassword" >Forgot Password!</h1>

        <br>

        <button class="LoginButton">Sign In</button>

        <br><br>

        <p>Don't Have Account?<b class="SpecialText" id="CreateAccount"> Create Account</b></p>
        
    `);

    CLICKED("#CreateAccount",()=>{

        ROUTE(" ",MOBILECREATEACCOUNTPAGE,"MOBILELOGINPAGE");

    });
 
    CLICKED("#ForgotPassword",()=>{

        ROUTE(" ",MOBILEFORGOTPASSWORDPAGE,"MOBILELOGINPAGE");

    });

};

const MOBILEFORGOTPASSWORDPAGE=()=>{

    DISPLAY("",`

        <h1 class="AppName">MOVIE LANDER</h1>

        <p>Your Home Cinema</p>

        <br><br>

        <input type="email" class="RoundInput" placeholder="Enter Your Account Email"/>

        <br><br>

        <button class="LoginButton">Recover</button>

        <br><br>

        <p>I Know My Account Details?<b class="SpecialText" id="CreateAccount"> Log In</b></p>
        
    `);

    CLICKED("#CreateAccount",()=>{

        ROUTE(" ",MOBILELOGINPAGE,"MOBILELOGINPAGE");

    });

};

const MOBILECREATEACCOUNTPAGE=()=>{

    DISPLAY("",`

        <h1 class="AppName">MOVIE LANDER</h1>

        <p>Your Home Cinema</p>

        <br><br>

        <input type="text" class="RoundInput" placeholder="Enter User Name"/>

        <br><br>

        <input type="email" class="RoundInput" placeholder="Enter User Email"/>

        <br><br>

        <input type="password" class="RoundInput" placeholder="Enter User Password"/>

        <br><br>

        <button class="LoginButton">Sign Up</button>

        <br><br>

        <p>I Have An Account?<b class="SpecialText" id="LoginTextPage"> Log In</b></p>
        
    `);

    CLICKED("#LoginTextPage",()=>{

        ROUTE("",MOBILELOGINPAGE,"MOBILELOGINPAGE");

    });

};

const MOBILEEMAILPAGE=()=>{

    DISPLAY("",`

        <h1 class="AppName">MOVIE LANDER</h1>

        <p>Your Home Cinema</p>

        <br><br>

        <input type="tel" class="RoundInput" placeholder="Enter Confirmation Code"/>

        <br><br>

        <button class="LoginButton">Recover</button>

        <br><br>

        <p>Error In Details ? <b class="SpecialText" id="CreateAccount">Create Account</b></p>
        
    `);

    CLICKED("#CreateAccount",()=>{

        ROUTE("",MOBILECREATEACCOUNTPAGE,"MOBILECREATEACCOUNTPAGE");

    });

};

const DESKTOPVIEW=()=>{

};