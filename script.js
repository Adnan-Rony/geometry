//triangle function
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

function CalculaterectangleArea()
{
        const Wfield=document.getElementById('rectangle-w');
        const WValue = Wfield.value;
        const W=parseFloat(WValue);
        console.log(W);

        const ifield=document.getElementById('rectangle-i');
        const iValue = ifield.value;
        const i=parseFloat(iValue);
        console.log(i);

        const Area= W*i;
        // console.log(Area);
        document.getElementById('rectangle-area').innerText=Area;

}







//functional

function calculateParallelogramArea()
{
const base =getInputValue('Parallelogram-base');
// console.log(base);

const height =getInputValue('Parallelogram-height');
// console.log(height);
const area =base * height;
// console.log(area);

setElementInnerText('Parallelogram-area',area)


}

function getInputValue(fieldId)
{
    const inputField =document.getElementById(fieldId);
    const inputValueText =inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


//set p,span,div etc 

    function setElementInnerText(elementId,area)
    {

        const element= document.getElementById(elementId);
        element.innerText=area;
    }


    //ellips
    function calculateEllipseArea(){
        const firstRadius = getInputValue('Ellipse-first-radious');
        const secondRadius =getInputValue('Ellipse-second-radious');

        const area =3.1416 *firstRadius * secondRadius;
         setElementInnerText('Ellipse-area',area)
    }