const buttonOnOff = document.getElementById ( 'button' );
const lampada = document.getElementById ( 'lampada' );

function changeLight () {

    let lampadaLigada = false

    buttonOnOff.addEventListener(('click'), () => {

        lampadaLigada = (!lampadaLigada)

        if(lampadaLigada){
            
            lampada.src="./img/ligada.jpg"

        } else (

            lampada.src="./img/desligada.jpg"

        )

    })

}

changeLight()