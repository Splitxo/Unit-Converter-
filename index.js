/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversionValue = document.getElementById("conversion-value")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("converted-length")
const volumeOutput = document.getElementById("converted-volume")
const massOutput = document.getElementById("converted-mass")


function convert(unit1,unit2,elementID, conversionFactor) {
    let convertExport1 = Number(conversionValue.value) * conversionFactor
     let convertExport2 = Number(conversionValue.value) / conversionFactor
     elementID.innerHTML = `
    <p id="converted-length" class="converted-output-txt">${conversionValue.value} ${unit1} = ${convertExport1.toFixed(3)} ${unit2} | ${conversionValue.value} ${unit2} = ${convertExport2.toFixed(3)} ${unit1}</p>`
}


convertBtn.addEventListener("click", () => {
    convert("meters", "feet", lengthOutput, 3.281)
    convert("liters", "gallons", volumeOutput, 0.264)
    convert("kilograms", "pounds", massOutput, 2.204)
})

