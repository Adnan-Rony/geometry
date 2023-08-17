function calculateTriangleArea(data)
{
    //get trinagle base value
 const baseField=  document.getElementById('triangle-base');
 const baseValue=baseField.value;
 const base = parseFloat(baseValue)
    // console.log(base);

    //get traingle height value

    const heightField =document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);
  
    // console.log(height);

    const area = 0.5* height * base;
    // console.log(area);

    //show traingle area

   const areaSpan= document.getElementById('traingle-id');
   areaSpan.innerText=area;
    
}

