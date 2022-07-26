import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Directory() {
    const [products, setproducts] = useState({sections:[]})

    useEffect(()=>{
        async function getProduct(){
            const result = await axios("http://localhost:8080/e-commerce/read")
        
            setproducts({sections:result.data.data})

        }

        getProduct()
    },[])

    return (
        <div className='directory-menu'>
            {
                products.sections.map((section,index) => <MenuItem key={section.id} section={section}/>)
            }
            
        </div>
    )
}


export default Directory;
