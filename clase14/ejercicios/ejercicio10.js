// germinar(plantines)
// Crear una funciΓ³n germinar que tome 
// como argumento un string de plantines con flores
//  y plantines (π±). El array debe comenzar con una flor.
//   La funciΓ³n debe devolver un string con los plantines convertidos en flores. 
//   El plantΓ­n se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:



const germinar = (plantines) => {



  
   let result =  '';

    for (let i= 1; i < plantines.length; i++) {

        if (plantines[i]  === 'p'  &&  plantines[i-1] === 'c') {

          return  result = plantines[i-1];

           
        }  else if  (plantines[i]  === 'p'  && plantines[i-1] === 'g') {

          return  result = plantines[i-1];
       
       
        }else if  (plantines[i]  === 'p'  && plantines[i-1] === 'l') {

          return  result = plantines[i-1];
          
      
        }

       
        
    }
    return result;
}

console.log(germinar('cpgplpcpgplp')) // 'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ' ccggllccggll
//console.log(germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±')) // 'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ'
//console.log(germinar('π»πΈπ±π·π»π±π±π·π·π±π±π±')) // 'π»πΈπΈπ·π»π»π»π·π·π·π·π·'