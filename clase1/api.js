//fetch es un metodo para llamar una api
const fetchApi= async(url)=>{
    try{
        const res=await fetch (url)
        const data= await res.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }
    
}
const gretings= ()=>{
    console.log('hello')
}
module.exports=fetchApi;