import React from 'react'
import Navbar from '../Components/Navbar'
import '../Style/Products.css'
import Searchbar from '../Components/Searchbar'
import FilterSidebar from '../Components/FilterSidebar'
import ProductGrid from '../Components/ProductGrid'
import Pagination from '../Components/Pagination'
import Footer from '../Components/Footer'

const Products = () => {
    return (
        <>
            <div className="page">
                <Navbar />
                <div className="herosection">
                    <div className="herocontent">
                        <h1>Find the Perfect Paper Cup for Your Business</h1>
                        <p>Browse our premium collection of paper cups and customize them with your logo, colors, and branding to create a unique identity for your business.</p>
                    </div>
                </div>
                <Searchbar />
                <br />
                <div className="mid">
                    <FilterSidebar />
                    <ProductGrid />
                </div>
                <Pagination />
                <Footer />
            </div>
        </>
    )
}

export default Products