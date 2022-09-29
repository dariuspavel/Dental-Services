import { useState } from "react"
import { useToken } from "./TokenContext";


async function loadProduct(productId: string, token: string) {
    const path = `http://localhost:5000/product/${productId}`;
    
    const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

    return response;
}

export const ProductView = () => {

    const [product, setProduct] = useState<any>({});
    const token = useToken();

    const handleLoadProduct = async () =>  {
        const result = await loadProduct("1", token);
        if (!result.ok) {
            setProduct({name: "-"});
            return;
        }

        const product = await result.json();
        setProduct(product);
    }

   

    return <>
    
         <div>{product.name}</div><br />
         <img src={product.picture} alt="" /> <br/>
         <button onClick={handleLoadProduct}>Load Product</button><br />
    </>
}