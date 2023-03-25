/*const fs=require ('fs'); //leer, escribir, borrar... con los archivos
const path=require ('path');// nos permite saber el directorio

const readfile=async ()=>{ //creamos una funcion llamada readfile, esasincronica async
    try{// intentar resolver
        const filepath= path.resolve(`${__dirname}/archivo.txt`)
        const data=await fs.promises.readFile(filepath,"utf-8")
        console.log(data);
    }catch(error){ //atrapar el error y me lo muestra
        console.log(error);
    }

}
readfile()*/

//otra manera de comentar ctrl+k+c

const fetchApi= require ("./api.js")
fetchApi("https://rickandmortyapi.com/api/character")