import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import MinBanner from '../components/MinBanner'
import TopSeller from '../components/TopSellers'
import Features from '../components/Features'
import Footer from '../components/Footer'
import SingleProduct from '../components/SingleProduct'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Collection></Collection>
      <MinBanner></MinBanner>
      <TopSeller></TopSeller>
      <Features></Features>
      {/* <SingleProduct></SingleProduct> */}
    </div>
  )
}

export default Home
