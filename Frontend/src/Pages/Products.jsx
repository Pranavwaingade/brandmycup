import React from 'react';
import Navbar from '../Components/Navbar';
import Searchbar from '../Components/Searchbar';
import FilterSidebar from '../Components/FilterSidebar';
import ProductGrid from '../Components/ProductGrid';
import Pagination from '../Components/Pagination';
import Footer from '../Components/Footer';
import '../Style/Products.css';

const Products = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="products-hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <p className="breadcrumb">
                            Home <span>/</span> Products
                        </p>

                        <h1>Premium Custom Paper Cups</h1>

                        <p className="hero-text">
                            Discover premium-quality paper cups for tea,
                            coffee, juice, and more. Customize them with your
                            own logo and branding to make your business stand
                            out.
                        </p>

                        <a href="/customize" className="hero-btn">
                            Customize Your Cup
                        </a>
                    </div>
                </div>
            </section>

            {/* Search */}
            <section className="search-section">
                <Searchbar />
            </section>

            {/* Products */}
            <section className="products-container">

                <aside className="sidebar">
                    <FilterSidebar />
                </aside>

                <main className="products-grid">
                    <ProductGrid />
                </main>

            </section>

            {/* Pagination */}
            <div className="pagination-section">
                <Pagination />
            </div>

            <Footer />
        </>
    );
};

export default Products;