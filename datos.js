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
            mecanismo += `
                <p class="desc">${phases.phase}</p>
            `;
             candidatos+= `
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


const masdatos = async() =>{
    try{
        const res = await fetch('https://api.covidtracking.com/v1/states/info.json')
        console.log(res);

        if(res.status === 200){
            const devuelto = await res.json();
            console.log(devuelto);
            
            let estados ='';
            let tipoResultado = '';

            devuelto.forEach( phases=> {
                estados += `
                    <p class="desc2">${phases.state}</p>
                `;
                 tipoResultado+= `
                    <p class="desc2">${phases.totalTestResultsField
                    }</p>
                `;
                
            });
            
            
            document.getElementById('estados').innerHTML = estados;
            document.getElementById('notas').innerHTML = tipoResultado;



        }else{
            console.log('error')
        }


    }catch(error){
        console.log(error);
    }
}
masdatos();