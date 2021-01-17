function showModalBox() {
    let modalBox = createModalBox();

    document.body.appendChild(modalBox);
}

function createModalBox() {
    let modalBox = document.createElement('div');
    modalBox.classList.add('modalbox');

    let text = document.createElement('p');
    text.classList.add('modalbox__text');
    text.innerText = ""

    let inputName = document.createElement('input');
    inputName.classList.add('modalbox__input-name');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Your Name";

    let inputEmail = document.createElement('input');
    inputEmail.classList.add('modalbox__input-email');
    inputEmail.type = "text";
    inputEmail.name = "name";
    inputEmail.id = "name";
    inputEmail.placeholder = "Your E-Mail";

    let btnSend = document.createElement('button');
    btnSend.classList.add('modalbox__btn-send');
    btnSend.innerText = 'Go';

    btnSend.addEventListener('click', () => {
        if(inputEmail.value.indexOf("@") == -1) {
            alert("Вы ввели неправильный E-mail")
        } else {
            alert("Your E-mail is - " + inputEmail.value + ", Your Name is - " + inputName.value  );
        }
        document.body.removeChild(modalBox);
    })

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('modalbox__btn-cancel');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', () => {
        document.body.removeChild(modalBox);
    })
    
    modalBox.appendChild(text)
    modalBox.appendChild(inputName);
    modalBox.appendChild(inputEmail);
    modalBox.appendChild(btnSend);
    modalBox.appendChild(btnCancel);

    return modalBox;
}