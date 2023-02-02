//Please note that all graphic and audio assets included in this project- barring the Daedalus logo- are all either vanilla / edited assets from Fire Emblem 6, 7, and 8. I do not claim them to be my own.


//Determining search bar content
var SearchingForID = document.querySelector("[data-search]");
var typedID = "";
SearchingForID = addEventListener("input", (e) => {
    typedID = e.target.value;
})

//Identify all documents
var DefaultHTML = document.body;
var AllHTML = "";
AllHTML = DefaultHTML.innerHTML;

var DocsToCheck = document.getElementsByClassName("main_area");
var Displayed_Document = DocsToCheck[0];
var Check_Documents = Displayed_Document.getElementsByClassName("document");
var Check_Sets = Displayed_Document.getElementsByClassName("tab_results");

var SterlingHTML = Check_Documents[1].outerHTML;
var VictorHTML = Check_Documents[2].outerHTML;
var AngelHTML = Check_Documents[3].outerHTML;
var FireBeastHTML = Check_Documents[4].outerHTML;
var FrostBeastHTML = Check_Documents[5].outerHTML;
var ShadowBeastHTML = Check_Documents[6].outerHTML;
var EdrickHTML = Check_Documents[7].outerHTML;
var FernandHTML = Check_Documents[8].outerHTML;
var AldritchHTML = Check_Documents[9].outerHTML;
var GreatTreeHTML = Check_Documents[10].outerHTML;
var BarrenIslandHTML = Check_Documents[11].outerHTML;
var CarvedSeaHTML = Check_Documents[12].outerHTML;
var EclipseHTML = Check_Documents[13].outerHTML;
var SolarisHTML = Check_Documents[14].outerHTML;
var DaeusHTML = Check_Documents[15].outerHTML;
var OnosHTML = Check_Documents[16].outerHTML;
var ThorneHTML = Check_Documents[17].outerHTML;
var KineticBeastHTML = Check_Documents[18].outerHTML;
var ChemicalBeastHTML = Check_Documents[19].outerHTML;
var ShockBeastHTML = Check_Documents[20].outerHTML;
var ShadeofDaedalusHTML = Check_Documents[21].outerHTML;
var ObstructiveBeastHTML = Check_Documents[22].outerHTML;

var Set1HTML = Check_Sets[0].outerHTML;
var Set2HTML = Check_Sets[1].outerHTML;
var Set3HTML = Check_Sets[2].outerHTML;
var Set4HTML = Check_Sets[3].outerHTML;
var Set5HTML = Check_Sets[4].outerHTML;


//Clear displayed documents
ClearAll();
function ClearAll() {
    Displayed_Document.innerHTML = Check_Documents[0].outerHTML;
}

//Validate Daedalus-Issue Device
var currentlyvalid = true;
var formerlyvalid = true;

function RunTimer() {
    if (screen.width >= "825" && window.innerWidth >= "825") {
        currentlyvalid = true;
    } else {
        currentlyvalid = false;
    }
    if (currentlyvalid != formerlyvalid) {
        ValidateDevice();
    }
    setTimeout(RunTimer, 1);
}

function ValidateDevice() {
    if (currentlyvalid) {
        DefaultHTML.innerHTML = AllHTML;
        formerlyvalid = true;
    }
    else {
        DefaultHTML.innerHTML = "<header></header><main><div class=\"document\"><p>This is not an official Daedalus-issued device.</p> <p>If you wish to view documents within this database, please use an official Daedalus-issued device.</p> <p style=\"color: lightgray; margin-top: 7%\">(Sorry! This site doesn't work on mobile yet!)</p></div></main><footer></footer>"
        formerlyvalid = false;
    }
}






//Locate buttons
var TempButtons = document.getElementsByClassName("side_button");
var Buttons = document.getElementsByTagName("div");
Buttons = TempButtons;
Reset_Buttons();
RunTimer();


//Open selected document
function Search() {
    //Set 1
    if (typedID.toLowerCase() == "#s-g-362867" || typedID.toLowerCase() == "s-g-362867") {
        Displayed_Document.innerHTML = SterlingHTML;
        Reset_Buttons();
        ClearAll();
        Buttons[0].style.marginRight = "-7%";
        Buttons[0].style.color = "#ffffff";
        Buttons[0].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#e-s-732873" || typedID.toLowerCase() == "e-s-732873") {
        Displayed_Document.innerHTML = VictorHTML;
        Reset_Buttons();
        Buttons[0].style.marginRight = "-7%";
        Buttons[0].style.color = "#ffffff";
        Buttons[0].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#s-g-264357" || typedID.toLowerCase() == "s-g-264357") {
        Displayed_Document.innerHTML = AngelHTML;
        Reset_Buttons();
        Buttons[0].style.marginRight = "-7%";
        Buttons[0].style.color = "#ffffff";
        Buttons[0].style.background = "#ff0303";
    }
    //Set 2
    else if (typedID.toLowerCase() == "#e-c-4633766" || typedID.toLowerCase() == "e-c-4633766") {
        Displayed_Document.innerHTML = FireBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#e-c-4722437" || typedID.toLowerCase() == "e-c-4722437") {
        Displayed_Document.innerHTML = FrostBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#e-c-998376" || typedID.toLowerCase() == "e-c-998376") {
        Displayed_Document.innerHTML = KineticBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }

    else if (typedID.toLowerCase() == "#e-c-8642676" || typedID.toLowerCase() == "e-c-8642676") {
        Displayed_Document.innerHTML = ObstructiveBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }

    else if (typedID.toLowerCase() == "#e-c-4588866" || typedID.toLowerCase() == "e-c-4588866") {
        Displayed_Document.innerHTML = ChemicalBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }

    else if (typedID.toLowerCase() == "#e-c-7423697" || typedID.toLowerCase() == "e-c-7423697") {
        Displayed_Document.innerHTML = ShadowBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }

    else if (typedID.toLowerCase() == "#x-e-c-86786473" || typedID.toLowerCase() == "x-e-c-86786473") {
        Displayed_Document.innerHTML = ShockBeastHTML;
        Reset_Buttons();
        Buttons[1].style.marginRight = "-7%";
        Buttons[1].style.color = "#ffffff";
        Buttons[1].style.background = "#ff0303";
    }
    //Set 3
    else if (typedID.toLowerCase() == "#doc-337425" || typedID.toLowerCase() == "doc-337425") {
        Displayed_Document.innerHTML = EdrickHTML;
        Reset_Buttons();
        Buttons[2].style.marginRight = "-7%";
        Buttons[2].style.color = "#ffffff";
        Buttons[2].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#doc-3376263" || typedID.toLowerCase() == "doc-3376263") {
        Displayed_Document.innerHTML = FernandHTML;
        Reset_Buttons();
        Buttons[2].style.marginRight = "-7%";
        Buttons[2].style.color = "#ffffff";
        Buttons[2].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#e-r-3253" || typedID.toLowerCase() == "e-r-3253") {
        Displayed_Document.innerHTML = AldritchHTML;
        Reset_Buttons();
        Buttons[2].style.marginRight = "-7%";
        Buttons[2].style.color = "#ffffff";
        Buttons[2].style.background = "#ff0303";
    }
    //Set 4
    else if (typedID.toLowerCase() == "#x-l-8733" || typedID.toLowerCase() == "x-l-8733") {
        Displayed_Document.innerHTML = GreatTreeHTML;
        Reset_Buttons();
        Buttons[3].style.marginRight = "-7%";
        Buttons[3].style.color = "#ffffff";
        Buttons[3].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#x-l-4753" || typedID.toLowerCase() == "x-l-4753") {
        Displayed_Document.innerHTML = BarrenIslandHTML;
        Reset_Buttons();
        Buttons[3].style.marginRight = "-7%";
        Buttons[3].style.color = "#ffffff";
        Buttons[3].style.background = "#ff0303";
    }
    else if (typedID.toLowerCase() == "#x-l-7327" || typedID.toLowerCase() == "x-l-7327") {
        Displayed_Document.innerHTML = CarvedSeaHTML;
        Reset_Buttons();
        Buttons[3].style.marginRight = "-7%";
        Buttons[3].style.color = "#ffffff";
        Buttons[3].style.background = "#ff0303";
    }
    //Set 5 (Hidden Set)
    else if (typedID.toLowerCase() == "#doc-545537" || typedID.toLowerCase() == "doc-545537") {
        Displayed_Document.innerHTML = ShadeofDaedalusHTML;
        Reset_Buttons();
        Buttons[4].style.marginRight = "-7%";
        Buttons[4].style.color = "gold";
        Buttons[4].style.background = "purple";
        Buttons[4].style.borderColor = "mediumpurple";
        document.body.style.background = "#3f0695";
    }
    else if (typedID.toLowerCase() == "#e-d-1" || typedID.toLowerCase() == "e-d-1") {
        Displayed_Document.innerHTML = EclipseHTML;
        Reset_Buttons();
        Buttons[4].style.marginRight = "-7%";
        Buttons[4].style.color = "gold";
        Buttons[4].style.background = "purple";
        Buttons[4].style.borderColor = "mediumpurple";
        document.body.style.background = "#3f0695";
    }
    else if (typedID.toLowerCase() == "#e-d-2" || typedID.toLowerCase() == "e-d-2") {
        Displayed_Document.innerHTML = SolarisHTML;
        Reset_Buttons();
        Buttons[4].style.marginRight = "-7%";
        Buttons[4].style.color = "gold";
        Buttons[4].style.background = "purple";
        Buttons[4].style.borderColor = "mediumpurple";
        document.body.style.background = "#3f0695";
    }
    else if (typedID.toLowerCase() == "#e-d-3" || typedID.toLowerCase() == "e-d-3") {
        Displayed_Document.innerHTML = DaeusHTML;
        Reset_Buttons();
        Buttons[4].style.marginRight = "-7%";
        Buttons[4].style.color = "gold";
        Buttons[4].style.background = "purple";
        Buttons[4].style.borderColor = "mediumpurple";
        document.body.style.background = "#3f0695";
    }
    else if (typedID.toLowerCase() == "#e-d-0" || typedID.toLowerCase() == "e-d-0") {
        Displayed_Document.innerHTML = OnosHTML;
        Reset_Buttons();
        Buttons[4].style.marginRight = "-7%";
        Buttons[4].style.color = "gold";
        Buttons[4].style.background = "purple";
        Buttons[4].style.borderColor = "mediumpurple";
        document.body.style.background = "black";
    }
    else if (typedID.toLowerCase() == "#s-x-000000" || typedID.toLowerCase() == "s-x-000000") {
        Displayed_Document.innerHTML = ThorneHTML;
        Reset_Buttons();
        Buttons[4].style.marginRight = "-7%";
        Buttons[4].style.color = "gold";
        Buttons[4].style.background = "purple";
        Buttons[4].style.borderColor = "mediumpurple";
        document.body.style.background = "black";
    }

    else {
        Displayed_Document[0].innerHTML = "<div class=\"document\">" + "No matching documents found" + "</div>";
    }
    scroll(0, 0);
}

//Reset buttons and a couple other things
function Reset_Buttons(){
    for (let i = 0; i < Buttons.length; i++) {
        Buttons[i].style.marginRight = "7%";
        Buttons[i].style.color = "#ff0303";
        Buttons[i].style.background = "#63dbd7";
    }
    Buttons[4].style.color = "#ff0303";
    Buttons[4].style.background = "#262626";
    Buttons[4].style.borderColor = "#187e7a";
    document.body.style.background = "lightcyan";
}


//Allows tabs to be clicked
function Former_Employees() {
    Reset_Buttons();
    ClearAll();
    Displayed_Document.innerHTML = "";
    Displayed_Document.innerHTML = Set1HTML;
    Buttons[0].style.marginRight = "-7%";
    Buttons[0].style.color = "#ffffff";
    Buttons[0].style.background = "#ff0303";
}

function Test_Subjects() {
    Reset_Buttons();
    ClearAll();
    Displayed_Document.innerHTML = "";
    Displayed_Document.innerHTML = Set2HTML;
    Buttons[1].style.marginRight = "-7%";
    Buttons[1].style.color = "#ffffff";
    Buttons[1].style.background = "#ff0303";
}

function Persons_of_Interest() {
    Reset_Buttons();
    ClearAll();
    Displayed_Document.innerHTML = "";
    Displayed_Document.innerHTML = Set3HTML;
    Buttons[2].style.marginRight = "-7%";
    Buttons[2].style.color = "#ffffff";
    Buttons[2].style.background = "#ff0303";
}

function Locations_of_Interest() {
    Reset_Buttons();
    ClearAll();
    Displayed_Document.innerHTML = "";
    Displayed_Document.innerHTML = Set4HTML;
    Buttons[3].style.marginRight = "-7%";
    Buttons[3].style.color = "#ffffff";
    Buttons[3].style.background = "#ff0303";
}

function CLASSIFIED() {
    Reset_Buttons();
    ClearAll();
    Displayed_Document.innerHTML = "";
    Displayed_Document.innerHTML = Set5HTML;
    Buttons[4].style.marginRight = "-7%";
    //Buttons[4].style.color = "#ffffff";
    //Buttons[4].style.background = "#ff0303";
}

//Allows documents to be clicked
function Sterling() {
    typedID = "#S-G-362867"
    Search();
}

function Victor() {
    typedID = "#E-S-732873"
    Search();
}

function Angel() {
    typedID = "#S-G-264357"
    Search();
}

function Fire_Beast() {
    typedID = "#E-C-4633766"
    Search();
}

function Frost_Beast() {
    typedID = "#E-C-4722437"
    Search();
}

function Kinetic_Beast() {
    typedID = "#E-C-998376"
    Search();
}

function Obstructive_Beast() {
    typedID = "#E-C-8642676"
    Search();
}

function Chemical_Beast() {
    typedID = "#E-C-4588866"
    Search();
}

function Shadow_Beast() {
    typedID = "#E-C-7423697"
    Search();
}

function Shock_Beast() {
    typedID = "#X-E-C-86786473"
    Search();
}

function Edrick() {
    typedID = "#DOC-337425"
    Search();
}

function Fernand() {
    typedID = "#DOC-3376263"
    Search();
}

function Aldritch() {
    typedID = "#E-R-3253"
    Search();
}

function Tree() {
    typedID = "#X-L-8733"
    Search();
}

function Island() {
    typedID = "#X-L-4753"
    Search();
}

function Sea() {
    typedID = "#X-L-7327"
    Search();
}







//Wireframing:
//For the past several years, I have been working on a world known as “Starrise”.
//Though originally it was a collaborative work made by myself and my best friend, my co - writer has since grown tired of it and given me complete creative control of the project.
//The single biggest driving force of this fantasy world is the scientific organization known as Daedalus Labs, led by the story’s big bad, Dr.Ethan Thorne.
//Something I often do is write in -universe "lab reports" and other assorted documents, with the intention of them having been written by Daedalus employees and stored in their database.
//For this assignment, I've chosen to make this very database, albeit with only a fraction of the documents that would exist in the in-universe one.
//(I'm only one guy; I can only write so much.)