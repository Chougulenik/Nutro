let dataList = [];

function showTextFields() {
  const textFields = document.getElementById('textFields');
  const textFields2 = document.getElementById('textFields2');
  const radio1 = document.getElementById('option1');
  const radio2 = document.getElementById('option2');
if (radio1.checked || radio2.checked) {
    textFields.classList.remove('hidden');
    textFields2.classList.remove('hidden');
    
  } else  {
    textFields.classList.add('hidden');
    textFields2.classList.add('hidden');
  }
}

document.getElementById('submit').addEventListener('click', function() {
  console.log("jhasgdfhjn");

  // fetchAndDisplay();
  const radio1 = document.getElementById('option1');
const radio2 = document.getElementById('option2');

if (radio1.checked) {
console.log('Option 1 is selected');
fetchAndDisplay();
} else if (radio2.checked) {
fetchAndDisplay1()
console.log('Option 2 is selected');
} else {
console.log('No option is selected');
}
});

function fetchAndDisplay() {

  const servingsPerContainer = document.getElementById('servingsPerContainer').value;
  const rounding = document.getElementById('rounding').value;
  const servingSizeQuantity = document.getElementById('servingSizeQuantity').value;
  const servingSizeUnits = document.getElementById('servingSizeUnits').value;
  const servingSizeWeight = document.getElementById('servingSizeWeight').value;
  const servingSizeUnit = document.getElementById('servingSizeUnit').value;
  const calories = document.getElementById('calories').value;
  const totalFat = document.getElementById('totalFat').value;
  const saturatedFat = document.getElementById('saturatedFat').value;
  const transFat = document.getElementById('transFat').value;
  const cholesterol = document.getElementById('cholesterol').value;
  const sodium = document.getElementById('sodium').value;
  const totalCarbohydrates = document.getElementById('totalCarbohydrates').value;
  const dietaryFiber = document.getElementById('dietaryFiber').value;
  const totalSugars = document.getElementById('totalSugars').value;
  const includesAddedSugars = document.getElementById('includesAddedSugars').value;
//   const vitaminDataFormat = document.getElementById('vitaminDataFormat').value;
//   const Calcium  = document.getElementById('calcium ').value;
//   const Iron  = document.getElementById('iron').value;
//   const Vitamin = document.getElementById('vitamin').value;
//   const potassium = document.getElementById('potassium').value;

  const totalFatPercent = (totalFat / 78) * 100; 
  const saturatedFatPercent = (saturatedFat / 20) * 100; 
  const transFatPercent = (transFat / 2) * 100; 
  const cholesterolPercent = (cholesterol / 300) * 100; 
  const sodiumPercent = (sodium / 2300) * 100; 
  const totalCarbohydratesPercent = (totalCarbohydrates / 275) * 100; 
  const dietaryFiberPercent = (dietaryFiber / 28) * 100; 
  const totalSugarsPercent = (totalSugars / 50) * 100;
  const proteinPercent = (protein / 50) * 100; 
//   const calciumPercent = (calcium / 1000) * 100; 
//   const ironPercent = (iron / 18) * 100; 
//   const vitaminPercent = (vitamin / 90) * 100; 
//   const potassiumPercent = (potassium / 4700) * 100;


  dataList = [
  
    ['Total Fat '+totalFat +'g', totalFatPercent.toFixed(0) + '%'],
    ['Saturated Fat '+ saturatedFat+'g', saturatedFatPercent.toFixed(0) + '%'],
    ['Trans Fat '+ transFat+'g', transFatPercent.toFixed(0) + '%'],
    ['Cholesterol '+cholesterol+'mg', cholesterolPercent.toFixed(0) + '%'],
    ['Sodium '+ sodium + 'mg', sodiumPercent.toFixed(0) + '%'],
    ['Total Carbohydrates '+ totalCarbohydrates+'g', totalCarbohydratesPercent.toFixed(0) + '%'],
    ['Dietary Fiber '+ dietaryFiber +'g', dietaryFiberPercent.toFixed(0) + '%'],
    ['Total Sugars '+ totalSugars+ 'g', totalSugarsPercent.toFixed(0) + '%'],
    ['Includes Added Sugars '+ includesAddedSugars+'g',totalSugarsPercent.toFixed(0) + '%'],
    // ['Protein '+protein+'g', proteinPercent.toFixed(0) + '%'],
    // ['Show Protein % Daily Value', showProtein ? 'Yes' : 'No'],
  ];

  // Draw the table on the canvas
  drawTableOnCanvas(dataList);
}


function drawTableOnCanvas(dataList) {

  const servingsPerContainer = document.getElementById('servingsPerContainer').value;
  const rounding = document.getElementById('rounding').value;
  const servingSizeQuantity = document.getElementById('servingSizeQuantity').value;
  const calories = document.getElementById('calories').value;

  const totalFat = document.getElementById('totalFat').value;
  const saturatedFat = document.getElementById('saturatedFat').value;
  const transFat = document.getElementById('transFat').value;
  const cholesterol = document.getElementById('cholesterol').value;
  const sodium = document.getElementById('sodium').value;
  const totalCarbohydrates = document.getElementById('totalCarbohydrates').value;
  const dietaryFiber = document.getElementById('dietaryFiber').value;
  const totalSugars = document.getElementById('totalSugars').value;
  const includesAddedSugars = document.getElementById('includesAddedSugars').value;
  const protein = document.getElementById('protein').value;
//   const vitaminDataFormat = document.getElementById('vitaminDataFormat').value;
//   const Calcium  = document.getElementById('calcium ').value;
//   const Iron  = document.getElementById('iron').value;
//   const Vitamin = document.getElementById('vitamin').value;
//   const potassium = document.getElementById('potassium').value;
  // const showProtein = document.getElementById('showProtein').checked;

  const totalFatPercent = (totalFat / 78) * 100; 
  const saturatedFatPercent = (saturatedFat / 20) * 100; 
  const transFatPercent = (transFat / 2) * 100; 
  const cholesterolPercent = (cholesterol / 300) * 100; 
  const sodiumPercent = (sodium / 2300) * 100; 
  const totalCarbohydratesPercent = (totalCarbohydrates / 275) * 100; 
  const dietaryFiberPercent = (dietaryFiber / 28) * 100; 
  const totalSugarsPercent = (totalSugars / 50) * 100; 
  const proteinPercent = (protein / 50) * 100; 
//   const calciumPercent = (calcium / 1000) * 100; 
//   const ironPercent = (iron / 18) * 100; 
//   const vitaminPercent = (vitamin / 90) * 100; 
//   const potassiumPercent = (potassium / 4700) * 100; 

  const canvas = document.getElementById('combinedCanvas');
  const ctx = canvas.getContext('2d');
  const tableHeight = dataList.length * 20 + 100; 
  canvas.width = 330;
  canvas.height = tableHeight > 400 ? tableHeight : 450;


  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw table background
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw table border
  ctx.strokeStyle = '#000';
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  // Draw table headers
  ctx.font = 'bold 24px Arial'; // Font and size
  ctx.fillStyle = '#060606'; // Color
  ctx.fillText('Nutrition Facts', 20, 35); // Adjust position as needed

  ctx.fillStyle = '#060606'; // Color of the divider
ctx.fillRect(10, 45, canvas.width - 30, 1); // Adjust position and thickness as needed


  ctx.font = ' 12px Arial'; // Font and size
  ctx.fillText(servingsPerContainer +' ' +rounding + ' servings per container', 20, 60); // Adjust y position as needed
//       ctx.font = '10px Arial'; // Font and size
// if (servingsPerContainer && rounding) {
//   ctx.fillText(servingsPerContainer + ' ' + rounding + ' servings per container', 20, 60);
// }

  ctx.font = 'bold 16px Arial'; // Font and size
  ctx.fillText( 'servings size ' + servingSizeQuantity + ' sdf' , 20, 75); // Adjust y position as needed


  ctx.fillStyle = '#000'; // Color of the divider
ctx.fillRect(10, 80, canvas.width - 30, 4); // Adjust position and thickness as needed

  ctx.font = '12px Arial'; // Font and size
  ctx.fillText( 'Amount per servings ', 20, 98); // Adjust y position as needed

  ctx.font = 'bold 24px Arial'; // Font and size
  ctx.fillText( 'Calories ' + calories , 20, 122); // Adjust y position as needed


  ctx.fillStyle = '#000'; // Color of the divider
ctx.fillRect(10, 130, canvas.width - 30, 4); // Adjust position and thickness as needed

  ctx.font = 'bold 12px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText('Amount/serving', 20, 145);
  ctx.fillText('', 180, 120);
  ctx.fillText('%Daily Value', 235, 145); // New column header

  // Draw table data with row borders
  ctx.font = '12px Arial';
let y = 110 + 110; // Adjust the starting y-position to skip the first three rows
const lineHeight = 20;

dataList.forEach((item, index) => {
const adjustedIndex = index - 3; // Adjust index to start from 0 after the third row
const yPosition = y + (adjustedIndex * lineHeight);

// Draw text
ctx.fillText(item[0], 20, yPosition); // Adding padding to the top
ctx.fillText(item[1], 280, yPosition); // Adding padding to the top

// Add stroke before current row
if (index !== dataList.length - 1) { // Check if it's not the last iteration
    ctx.beginPath();
    ctx.moveTo(10, yPosition + 3); // Increase height before the stroke
    ctx.lineTo(canvas.width - 10, yPosition + 3); // Increase height before the stroke
    ctx.stroke();
}
});


// Draw a horizontal stroke line
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(10, y + ((dataList.length - 3) * lineHeight) - 10); // Move to the starting position
ctx.lineTo(canvas.width - 10, y + ((dataList.length - 3) * lineHeight) - 10); // Draw a line to the ending position
ctx.stroke();
  // Draw note
  ctx.font = '10px Arial';
  const noteText = 'Note a significant source of cholesterol, Vitamin D, Calcium, iron ';
  const noteText1 = 'and potassium.';
  ctx.fillText(noteText, 20, canvas.height - 86);
  ctx.fillText(noteText1, 20, canvas.height - 76);

  // Draw divider line
  ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(10, canvas.height - 70);
ctx.lineTo(canvas.width - 10, canvas.height - 70);
ctx.strokeStyle = '#000'; // Set line color
ctx.stroke();

 
  ctx.font = '11px Arial';
  const noteText2 = 'The % Daily Value (DV) tells you how much a nutrient in a';
  const noteText3 = 'serving food contributes to daily diet 2,000 calories a day ';
  const noteText4 = 'used for general nutrition advice. ';
  ctx.fillText(noteText2, 20, canvas.height - 55);
  ctx.fillText(noteText3, 20, canvas.height - 43);
  ctx.fillText(noteText4, 20, canvas.height - 30);



}
//***************************
function fetchAndDisplay1() {


const servingsPerContainer = document.getElementById('servingsPerContainer').value;
const rounding = document.getElementById('rounding').value;
const servingSizeQuantity = document.getElementById('servingSizeQuantity').value;
const calories = document.getElementById('calories').value;

const totalFat = document.getElementById('totalFat').value;
const saturatedFat = document.getElementById('saturatedFat').value;
const transFat = document.getElementById('transFat').value;
const cholesterol = document.getElementById('cholesterol').value;
const sodium = document.getElementById('sodium').value;
const totalCarbohydrates = document.getElementById('totalCarbohydrates').value;
const dietaryFiber = document.getElementById('dietaryFiber').value;
const totalSugars = document.getElementById('totalSugars').value;
const includesAddedSugars = document.getElementById('includesAddedSugars').value;
const protein = document.getElementById('protein').value;
// const Iron  = document.getElementById('iron').value;
// const showProtein = document.getElementById('showProtein').checked;

const totalFatPercent = (totalFat / 78) * 100; 
const saturatedFatPercent = (saturatedFat / 20) * 100; // 20 grams is the recommended daily value for saturated fat
const transFatPercent = (transFat / 2) * 100; // 2 grams is the recommended daily value for trans fat
const cholesterolPercent = (cholesterol / 300) * 100; // 300 milligrams is the recommended daily value for cholesterol
const sodiumPercent = (sodium / 2300) * 100; // 2300 milligrams is the recommended daily value for sodium
const totalCarbohydratesPercent = (totalCarbohydrates / 275) * 100; // 275 grams is the recommended daily value for total carbohydrates
const dietaryFiberPercent = (dietaryFiber / 28) * 100; // 28 grams is the recommended daily value for dietary fiber
const totalSugarsPercent = (totalSugars / 50) * 100; // 50 grams is the recommended daily value for total sugars
const proteinPercent = (protein / 50) * 100; // 50 grams is the recommended daily value for protein
// const ironPercent = (Iron / 18) * 100; // 18 milligrams is the recommended daily value for iron


const canvas = document.getElementById('combinedCanvas');
const ctx = canvas.getContext('2d');


// Set canvas width
const tableHeight = dataList.length * 20 + 100; // Assuming each row has a height of 20const tableHeight = dataList.length * 20 + 100; // Assuming each row has a height of 20
canvas.width = 800; // Set the width as desired
canvas.height = tableHeight > 200 ? tableHeight : 210;;

//Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// // Draw table background
// ctx.fillStyle = '#fff';
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw table border
ctx.strokeStyle = '#000';
ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

// Define column properties
var columnGap = 10; // Gap between columns
var totalColumns = 4;
const usableWidth = canvas.width - (columnGap * (totalColumns - 1)) - (2 * columnGap); // Adjusted for the gap between columns and left side gap
var columnWidth = usableWidth / totalColumns;
var rowHeight = 30;

// Function to draw the data in columns
// function drawColumns(column1Data, column2Data, column3Data, column4Data) {
// Clear canvas


// Set font properties
var fontSize = 16;
ctx.font = fontSize + "px Arial";
ctx.textBaseline = "middle";

// Calculate maximum text width
var maxWidth = columnWidth - 20; // 20px padding for left and right

// Draw heading and paragraph for column 1
var x1 = columnGap;
var y = rowHeight;
ctx.font = 'bold 36px Arial'; // Font and size
  ctx.fillStyle = '#060606'; // Color
ctx.fillText('Nutrition', x1 + 10, y);
y += 35;
ctx.fillText('Facts', x1 + 10, y);
y += 20;
// var x1 = columnGap;
ctx.beginPath(); // Start a new path for drawing
ctx.moveTo(x1 + 10, y + 5); // Move to the starting point of the line
ctx.lineTo(x1 + 180, y + 5); // Draw a horizontal line
ctx.stroke();
y += 20;
ctx.font = '16px Arial'; // Font and size
  ctx.fillStyle = '#060606'; // Color
var paragraph1 = rounding +' ' + servingsPerContainer+ ' servings per container';
var words1 = paragraph1.split(' ');
var line1 = '';
for (var j = 0; j < words1.length; j++) {
  var testLine = line1 + words1[j] + ' ';
  var metrics = ctx.measureText(testLine);
  var testWidth = metrics.width;
  if (testWidth > maxWidth && j > 0) {
    ctx.fillText(line1, x1 + 10, y);
    line1 = words1[j] + ' ';
    y += fontSize + 5; // Line height + padding
  } else {
    line1 = testLine;
  }
}
// Draw vertical stroke after column one
ctx.beginPath();
ctx.moveTo(x1 + columnWidth + columnGap, 10); // Start from the top, after column one
ctx.lineTo(x1 + columnWidth + columnGap, canvas.height - 10); // End at the bottom
ctx.stroke();
ctx.fillText(line1, x1 + 10, y);
// Second paragraph
ctx.font = 'bold 16px Arial'; // Font and size
  ctx.fillStyle = '#060606'; // Color
y += fontSize + 5; // Add some space between paragraphs
var paragraph2 = 'servings size ' + servingSizeQuantity + ' sdf';
var words2 = paragraph2.split(' ');
var line2 = '';
for (var j = 0; j < words2.length; j++) {
var testLine = line2 + words2[j] + ' ';
var metrics = ctx.measureText(testLine);
var testWidth = metrics.width;
if (testWidth > maxWidth && j > 0) {
ctx.fillText(line2, x1 + 10, y);
line2 = words2[j] + ' ';
y += fontSize + 5; // Line height + padding
} else {
line2 = testLine;
}
}
ctx.fillText(line2, x1 + 10, y);
//third  
ctx.font = 'bold 20px Arial'; // Font and size
  ctx.fillStyle = '#060606'; // Color
y += fontSize + 5; // Add some space between paragraphs
var paragraph2 = 'Calories' + '         '+calories ;
var words2 = paragraph2.split(' ');
var line2 = '';
for (var j = 0; j < words2.length; j++) {
var testLine = line2 + words2[j] + ' ';
var metrics = ctx.measureText(testLine);
var testWidth = metrics.width;
if (testWidth > maxWidth && j > 0) {
ctx.fillText(line2, x1 + 10, y);
line2 = words2[j] + ' ';
y += fontSize + 5; // Line height + padding
} else {
line2 = testLine;
}
}
ctx.fillText(line2, x1 + 10, y);
ctx.font = '14px Arial'; // Font and size
ctx.fillText('per serving', 20, 190); // Adjust position as needed

// Define column 2 properties
var x2 = columnWidth + 2 * columnGap;
var y2 = rowHeight;

// Draw table data for column 2
ctx.font = 'bold 10px Arial';
ctx.fillStyle = '#000';


// Draw column header for column 2
ctx.fillText('Amount/serving', x2 + 5, y2 -10 );//change
ctx.fillText('%Daily Value', x2 + 130, y2 - 10);

// var strokeY = y2 + 20; // Adjust the height as needed
// ctx.beginPath();
// ctx.moveTo(x2 - 5, strokeY); // Start point
// ctx.lineTo(x2 + columnWidth + 10, strokeY ); // End point
// ctx.stroke();



ctx.font = 'bold 14px Arial';
ctx.fillStyle = '#000';
// Sample data for column 2 table
var dataListColumn2 = [
['Total Fat'+ totalFat+'g' , totalFatPercent+'%'],
['Saturated Fatty Acid'+ transFat+'g', saturatedFatPercent+'%'],
['Trans Fatty Acid'+ saturatedFat+'g', transFatPercent+'%'],
['cholesterol' + cholesterol+'mg', cholesterolPercent+'%'],
['Sodium' + sodium+'mg', sodiumPercent +'%'],
//['Vitamin D (%):' + vitamin+'mg', vitaminPercent+'%'],
//['Potassium' + potassium+'mg', potassium+'%']
//['Calcium'+ calcium+'', calcium+"%"]

];

// Draw each row of data
var lineHeight = 30;
dataListColumn2.forEach((item, index) => {
var yPosition = y2 + 10 + (index * lineHeight);//chanage 
ctx.fillText(item[0], x2 + 10, yPosition);
ctx.fillText(item[1], x2 + 160, yPosition);

// Draw row border
ctx.beginPath();
ctx.moveTo(x2, yPosition + 3);
ctx.lineTo(x2 + columnWidth, yPosition + 3);
ctx.stroke();
});
// Define column 3 properties
var x3 = 2 * (columnWidth + columnGap);
var y3 = rowHeight;

// Draw table data for column 3
ctx.font = 'bold 10px Arial';
ctx.fillStyle = '#000';

// Draw column header for column 3
ctx.fillText('Amount/serving', x3 + 5, y3 - 10);
ctx.fillText('%Daily Value', x3 + 150, y3 - 10);


ctx.font = 'bold 14px Arial';
ctx.fillStyle = '#000';

// Sample data for column 3 table
var dataListColumn3 = [
['totalCarbohydrates'+ totalCarbohydrates +' g',totalCarbohydratesPercent+ '%'],
['dietaryFiber'+ dietaryFiber +' g',dietaryFiberPercent+ '%'],
['totalSugars'+ totalSugars +' g',totalSugarsPercent + '%'],
['protein'+ protein +' g',proteinPercent+ '%'],
['Iron'+ Iron +' g',ironPercent + '%'],


];

// Draw each row of data for column 3
dataListColumn3.forEach((item, index) => {
var yPosition = y3 + 10 + (index * lineHeight); // Adjusted for padding
ctx.fillText(item[0], x3 + 10, yPosition); // Draw first column data
ctx.fillText(item[1], x3 + 170, yPosition); // Draw second column data

// Draw row border
ctx.beginPath();
ctx.moveTo(x3, yPosition + 3);
ctx.lineTo(x3 + columnWidth, yPosition + 3);
ctx.stroke();
});

// Draw heading and paragraph for column 4
var x4 = 3 * (columnWidth + columnGap);
y = rowHeight;
// ctx.fillText("Column 4 Heading", x4 + 10, y);
ctx.font = 'bold 10px Arial';
ctx.fillStyle = '#000';
y += 20;
var paragraph4 = "The % Daily Value (DV) tells you how much a nutrient in a serving food contributes to daily diet 2,000 calories a day ";
var words4 = paragraph4.split(' ');
var line4 = '';
for (var j = 0; j < words4.length; j++) {
  var testLine = line4 + words4[j] + ' ';
  var metrics = ctx.measureText(testLine);
  var testWidth = metrics.width;
  if (testWidth > maxWidth && j > 0) {
    ctx.fillText(line4, x4 + 10, y);
    line4 = words4[j] + ' ';
    y += fontSize + 5; // Line height + padding
  } else {
    line4 = testLine;
  }
}
ctx.fillText(line4, x4 + 10, y);
// }


}
// *********************(*)

document.getElementById('downloadButton').addEventListener('click', function() {
  const canvas = document.getElementById('combinedCanvas');

  // Create an image from the canvas
  const image = new Image();
  image.src = canvas.toDataURL('image/png');

  // Create a link to download the image
  const link = document.createElement('a');
  link.href = image.src;
  link.download = 'nutrition-facts.png';
  link.click();
});
