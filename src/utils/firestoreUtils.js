import {collection,getDocs,query,where} from "firebase/firestore";
import {db} from '../utils/firebaseConfig'

export const firestoreFetch =async(idCat) =>{
    let q
    if(idCat){
        //filtro
        q=query(collection(db,"products"),where('categoryId',"==",parseInt(idCat)))
    }else{
    q=query(collection(db,"products"))
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc =>({
        id:doc.id,
        ...doc.data()
    }))
}