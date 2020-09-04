(function(){

    window.addEventListener('keydown',playHandler);

    function playHandler(e){
        // audio play

        const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
        if(audio){
            audio.currentTime = 0;
            audio.play();
        }


        // DOM 

        const DOM = document.querySelector(`div[data-key="${e.keyCode}"]`);

        DOM.classList.add('playing');
    }

    //remove DOM

    document.querySelectorAll('.key').forEach(function(key){
        key.addEventListener('transitionend',transitionHandler);
    })

    function transitionHandler(e){
        if(e.propertyName === 'transform'){
            e.target.classList.remove('playing');
        }
    }

})()