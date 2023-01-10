import React from 'react'
import Header from '../Global/Header'
import HeaderNav from '../Global/HeaderNav'
import ProductSidebar from './productSidebar'
import ProductContent from './ProductContent'
import Footer from '../Global/footer'
import { useParams } from 'react-router-dom'
function Products({ item }) {
    const { id } = useParams()
    return (
        <div className=''>
            <HeaderNav />
            <div className="header ">
                <Header BgColor={'#f7f7f7'} />
            </div>

            <div className="container mt-12 flex  flex-col-reverse lg:flex-row">
                <ProductSidebar />
                <ProductContent productId={id} />
            </div>
            <div className="footer mt-10">
                <Footer />
            </div>

        </div>
    )
}

export default Products