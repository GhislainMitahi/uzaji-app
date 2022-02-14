import './AllProducts.css';
import Header from '../Header/Header'
import Ordi from '../Ordi/Ordi';
import Footer from '../footer/Footer'
import Carton from './productsPhoto/carton.jpg'



const AllProducts = () => {
    return (
        <div className="mainPros">
            <Header/>
            <div className="imge">
            <img src={ Carton } alt=""/>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi magni voluptate.</p> */}
            </div>
            <div className="allProducts">
                       <p>
                           <span>habuellement dame</span>
                           <span>habuellement homme</span>
                           <span>téléphone</span>
                           <span>ordinteur & accesoire</span>
                           <span>maison & accesoire</span>
                           <span>vehucule et pieces de rechanges</span>
                           <span>Aliment</span>
                           <span>chassure</span>
                           <span>vettement bébés</span>
                       </p>
            </div>
            <Ordi/>
<Footer/>
        </div>
    )
}

export default AllProducts;