const animatedForm = () => {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm)
            }else if(input.type  === 'text' && validateEmail(input)){
                nextSlide(parent, nextForm);
            }
            else{
                parent.style.animation = 'shake .5s ease'
            }
        });
    });
}

const validateUser = (user) => {
    if(user.value.length < 6){
        console.log('Not enough characters');
        error('rgb(189, 87, 87)');
    }else{
        error('rgb(87, 189, 130)');
        return true;
    }
}

const validateEmail = (email) => {
    const validation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true
    }else{
        error('rgb(189, 87, 87)');
    }
}

const error = (color) => {
    document.body.style.backgroundColor = color;
}

const nextSlide = (parent, nextForm) => {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active')
}
animatedForm();