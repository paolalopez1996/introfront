// separar(perrosYGatos)
// Crear una funciΓ³n separar que 
// tome como argumento un string con emojis de perros y 
// gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

const separar = (stringEmojis) => {
    // 'πΆπ±πΆπ±πΆπ±πΆπ±' ---> PgPgPgPg
    const perritos = [];
    const gatitos = [];
  
    for(let i = 0; i < stringEmojis.length; i++) {
      if(stringEmojis[i] === 'P'){
        perritos.push(stringEmojis[i]);
      }else{
        gatitos.push(stringEmojis[i]);
      }
    }
  
    const unionArrays = perritos.concat(gatitos); 
    const resultado = unionArrays.toString();
  
    console.log('RESULTADO', resultado);
    return resultado;
  }
  
  separar('PgPggPP');
  


//     const separarPerrosyGatos=()=>
// {
//     let separar = [];
//     let gatos = [
    
//     ];
//     let perros = [
  
//     ];


//     separar[0] = prompt ('Ingrese πΆ o π±');
//     separar[1] = prompt ('Ingrese πΆ o π±');
//     separar[2] = prompt ('Ingrese πΆ o π±');
//     separar[3] = prompt ('Ingrese πΆ o π±');
//     separar[4] = prompt ('Ingrese πΆ o π±');
//     separar[5] = prompt ('Ingrese πΆ o π±');

  
//     for (i=0; i<separar.length; i++) 
//     { 
//         if (separar[i] === 'π±')
//         { gatos[i] = separar[i] }
       
//    else 
//         {perros[i] = separar[i]};
  
// }
// const gatosfiltrados = gatos.filter ((gato)=>
// {return (gato =! null)});
// alert(gatosfiltrados);
// const perrosfiltrados = perros.filter ((perro)=>
// {return (perro =! null)});
// alert(perrosfiltrados);
// }

// separarPerrosyGatos();
    

