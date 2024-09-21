export async function load(){
    const url = "http://localhost:5170/api/product";
    try{
        const result = await fetch(url);
        return await result.json();
    }
    catch (e){
        console.log(e);
    }
}