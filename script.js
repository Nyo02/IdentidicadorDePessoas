function iniciar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var nsm = window.document.getElementById('nsm')
    var anoNasc = Number(nsm.value)
    var res = window.document.querySelector('p#res')

    if(anoNasc==0 || anoNasc>anoAtual){
        window.alert('[Erro]Data Inválida!')
    }   else {
        var idade = anoAtual-anoNasc
        var sexo=window.document.getElementsByName('radsex')
        var genero=''
        var img = document.createElement('img')
        if(sexo[0].checked){
            //masculino
            genero='masculino'
            if(idade>=0 && idade<10){
                //criança 
                img.setAttribute('src','foto-bebe-m.png')  
            }else if (idade>=10 && idade<25){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')  
            }else if(idade >=25 && idade<65){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')  
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')  
            }
                        
        }else if(sexo[1].checked){
            ///feminino
            genero='feminino'
            if(idade>=0 && idade<10){
                //criança 
                img.setAttribute('src','foto-bebe-f.png')  
            }else if (idade>=10 && idade<25){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')  
            }else if(idade >=25 && idade<65){
                //adulta
                img.setAttribute('src','foto-adulto-f.png')  
            }else{
                //idosa
                img.setAttribute('src','foto-idoso-f.png')  
            }            

        }
    }
    res.innerHTML=`Pessoa de ${idade} anos do gênero ${genero}`
    res.style.textAlign='center'
    res.appendChild(img)
}
