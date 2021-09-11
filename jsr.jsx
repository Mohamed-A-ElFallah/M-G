var form = document.getElementById('form');
var monthlypower = document.getElementById('monthlyconsm');
var input = document.getElementById('powerconsm')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    ddpowe();
});

function addpower() {
    let powerconsm = input.value;
    if(powerconsm){
        let liElem = document.createElement('li');
        liElem.innerText = todoValue;
        liElem.addEventListener('click', (e) => {
            liElem.classList.add('completed');
        });

        liElem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            liElem.remove();
        });

        monthlypower.appendChild(liElem);
    }
    input.value = '';
}