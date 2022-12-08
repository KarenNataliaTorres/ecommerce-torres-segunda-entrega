import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {db} from '../utils/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import { firestoreFetch } from '../utils/firestoreUtils';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
        /* async function fetchData(){
            const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);});

        }
        fetchData(); */
        

        /* customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err)) */
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />

        </>
    );
}

export default ItemListContainer;