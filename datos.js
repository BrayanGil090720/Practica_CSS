const cargarDatos = async() => {
    try{
        const respuesta = await fetch('https://disease.sh/v3/covid-19/vaccine');
    console.log(respuesta);

    if(respuesta.status === 200){
        const datos = await respuesta.json();
        console.log(datos);
        
        let candidatos = '';
        let mecanismo = "";

        datos.phases.forEach( phases=> {
            candidatos += `
                <p class="desc">${phases.phase}</p>
            `;
            mecanismo += `
                <p class="desc">${phases.candidates}</p>
            `;
            
        });
        
        
        document.getElementById('candidatos').innerHTML = candidatos;
        document.getElementById('mecanismo').innerHTML = mecanismo;

  
        
    }else{
        console.log("error")
    }
}catch(error){
    console.log(error);
}
}

cargarDatos();
