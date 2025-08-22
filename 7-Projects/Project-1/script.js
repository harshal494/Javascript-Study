const Butt = document.querySelectorAll('.buttons');
const Body = document.querySelectorAll("body");


Butt.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            Body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            Body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            Body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            Body.style.backgroundColor = e.target.id;
        }
    });
});