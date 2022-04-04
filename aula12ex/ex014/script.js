function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são <strong> ${hora}hs ${minuto}min e ${segundos}seg </strong>.`

    if (hora >= 0 && hora <12) {
        //BOM DIA!
        img.src = 'nascerdosol.jpg'
        document.body.style.background = '#e2cd9f'
    }else if( hora >=12 && hora <18){
        //BOA TARDE!
        img.src = 'pordosol.jpg'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        //BOA NOITE
    }

}

