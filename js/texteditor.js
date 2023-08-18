// 1.
document.getElementById('bold-button').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.fontWeight='bold';

})

// 2
document.getElementById('italic-button').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.fontStyle='italic';

})

// 3. 

document.getElementById('underline-button').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.textDecoration='underline';

})

// 4. 

document.getElementById('aling-left').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.textAlign='left'

})

// 5. 
document.getElementById('align-center').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.textAlign='center'

})

// 6.
document.getElementById('align-right').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.textAlign='right'

})

// 7.
document.getElementById('align-justify').addEventListener('click', function(){
    
    const textArea = document.getElementById('textarea');
    textArea.style.textAlign='justify'

})

// Font Size Change in Text Area!
// Font Size Change in Text Area!
// Font Size Change in Text Area!
// Font Size Change in Text Area!


const fontSizeInput = document.getElementById("font-size");
const textArea = document.getElementById("textarea");


// Add an event listener to the font size input
fontSizeInput.addEventListener('input', () => {
    const fontSize = fontSizeInput.value + 'px';
    textArea.style.fontSize = fontSize;
});


// Font Case
// Font Case
// Font Case
// Font Case

const fontCaseButtonId = document.getElementById("font-case");

const convertBtn = document.getElementById("font-case");

convertBtn.addEventListener("click", toggleConvert);

let currentConvertMode = 0; // 0: Uppercase, 1: Lowercase, 2: Capitalize

function toggleConvert() {
  currentConvertMode = (currentConvertMode + 1) % 3;

  if (currentConvertMode === 0) {
    textArea.value = textArea.value.toUpperCase();
    // convertBtn.textContent = "Uppercase"; /This is for Button Text
  } else if (currentConvertMode === 1) {
    textArea.value = textArea.value.toLowerCase();
    // convertBtn.textContent = "Lowercase"; /This is for Button Text
  } else if (currentConvertMode === 2) {
    const words = textArea.value.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    textArea.value = words.join(" ");
    // convertBtn.textContent = "Capitalize"; /This is for Button Text
  }
}

// Color Picker 

// const textArea = document.getElementById("textArea"); Duplicate issue
const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("input", changeTextColor);

function changeTextColor() {
  const selectedColor = colorPicker.value;
  textArea.style.color = selectedColor;
}
