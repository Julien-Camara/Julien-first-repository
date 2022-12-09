alert('je vous salue tous !')

const formalaire=document.getElementById('maForm')

formalaire.addEventListener('submit',(e)=>{
    const data=e.target.value
    var requete={
        url:`http://localhost:3000`,
        method:"post",
        data:data
    }
    if(confirm('Voulez-vous vraiment envoyer les données de ce formulaire ?')){
        $.ajax(requete).done()
    }
})