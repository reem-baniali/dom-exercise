//call select options by querySelector
let fontFamily = document.querySelector("#font_family");

//call select options by querySelector
let fontSize = document.querySelector("#font_size");

//call checkbox by querySelector
let italic = document.querySelector("#font_italic");
let bold = document.querySelector("#font_bold");
let underline = document.querySelector("#font_underline");

//call text by querySelector
let text = document.querySelector("#text");

// add event listener to variables
fontFamily.addEventListener('change',changeFontFamily)
fontSize.addEventListener('change',changeFontSize)
italic.addEventListener('change',italicStyle)
bold.addEventListener('change',boldStyle)
underline.addEventListener('change',addUnderline)


//change font family function
function changeFontFamily(font) {
  text.style.fontFamily = font.target.value;
}

//change font size function
function changeFontSize(font) {
console.log(font.target.value);
    text.style.fontSize = font.target.value;
  }

//make text italic function
function italicStyle (font){
    if (italic.checked) {
        text.style.fontStyle = "italic";
    } else{
        text.style.fontStyle = "normal";
    }
}

//add bold style function 
function boldStyle (font){
    if (bold.checked) {
        text.style.fontWeight = "bold";
    } else{
        text.style.fontWeight= "normal";
    }
}

//add underline function 
function addUnderline (font){
    if (underline.checked) {
        text.style.textDecoration = "underline";
    } else{
        text.style.textDecoration= "none";
    }
}