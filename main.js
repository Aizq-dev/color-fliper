import './style.css'


const COLOR_PALETTE = {
'#241623' : 'Dark purple',
'#D0CD94' : 'Sage',
'#3C787E' : 'Myrtle Green',
'#C7EF00' : 'Chartreuse',
'#D56F3E' : 'Cocoa Brown'
}

const addOptionsToColorPicker = () =>{

  const colorPicketselect = document.querySelector('#color-picker');

Object.keys(COLOR_PALETTE).forEach((color)=>{
const option = document.createElement('option')
option.value = color;
option.innerText = COLOR_PALETTE[color]
 
colorPicketselect.append(option)
})
}

const addEventListenerToColorPicker = () =>{
  const colorPicketselect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name')


  colorPicketselect.addEventListener('change',(ev)=>{
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor} `
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-'

  })

}
const addEventListenerToColorPickerInput = ()=>{
  const colorRgb = document.querySelector('#color-rgb')
  const colorName = document.querySelector('#color-name')

  colorRgb.addEventListener('input', ()=>{
    const colorSelected = colorRgb.value
    document.body.style.backgroundColor = colorSelected;
    colorName.innerText = colorSelected

  
  })
}


addOptionsToColorPicker()
addEventListenerToColorPicker()
addEventListenerToColorPickerInput()


