//export function getAllModelos (){
    //return fetch("https://api.mercadolibre.com/sites/MLA/search?q=gibson")
    //.then(res=>res.json())
    //.catch (error=>console.log(error))
//}

import instance from "../Config/axios" 
import firebase from "../Config/firebase"
export async function getAllModelos(buscar){
    // return instance.get("sites/MLA/search?q=ipod")
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q="+buscar)
    // .then(res=>res.json())
    const querySnapshot = await firebase.db.collection("productos")
    .get()
    return querySnapshot.docs
}
export async function getByIdProductos(id){
    // return fetch("https://api.mercadolibre.com/items/"+id)
    // .then(res=>res.json())
    const querySnapshot = await firebase.db.doc("productos/"+id).get()
    return querySnapshot
}
export async function update(id,body){
    const querySnapshot = await firebase.db.doc("productos/"+id).set(body)
    return querySnapshot
}
export async function deleteProducto(id){
    const querySnapshot = await firebase.db.doc("productos/"+id).delete()
    return querySnapshot
}