document.addEventListener('DOMContentLoaded', () => 
{
    const cookButton = document.querySelector('#cook');
    const status = document.querySelector('#status');

    function turnonoven()
    {
        status.innerHTML = 'oven turned on!'
    }

    cookButton.addEventListener('click', turnonoven);
});