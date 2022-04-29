let screen = document.getElementById('scr');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
        function percentage() {
            var percent = document.getElementById("percent").value;
            var num = document.getElementById("num").value;
            document.getElementById("value1")
                screen.value = (num / 100) * percent;
        }
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C')
        {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '⟵')
        {
           screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if(buttonText == '=')
        {
            screen.value = eval(screenValue);
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
