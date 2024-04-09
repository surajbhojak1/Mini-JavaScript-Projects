const body = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

 
function bgcolorchange(){
    
buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener("click",function(e){
        // console.log(e);
        // console.log(e.target)
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        };

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        };

        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        };

        if(e.target.id === 'brown'){
            body.style.backgroundColor = e.target.id;
        };

        if(e.target.id === 'random'){
            body.style.backgroundColor = getRandomColor();
        };
    });
});

};

bgcolorchange();