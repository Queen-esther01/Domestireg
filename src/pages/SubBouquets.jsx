import React, { useEffect, useState } from 'react'
import MedicalAddons from '../components/medical/MedicalAddons'
import SubBouquetList from '../components/reusable/SubBouquetList'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getSubBouquets } from '../store/actions/bouquetActions'
import Hero from '../components/reusable/Hero'



const medicalbreadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Medical Bouquet'
}

const backgroundbreadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Background Bouquet'
}

function SubBouquets() {

    const [id, setid] = useState()

    const location = useLocation()
    const dispatch = useDispatch()

    const data = location.state.data

    useEffect(() => {
        setid(data._id)
    }, [data])

    const response = useSelector(state => state.bouquet)
    const { subBouquets } = response
    //console.log(subBouquets)

    useEffect(() => {
        if(id)
            dispatch(getSubBouquets(id))
    }, [dispatch, id])

    const subBouquetListData = subBouquets.data && subBouquets.data.filter(subBouquet => subBouquet.name !== 'Medical Add-ons')

    const medicalAddons = subBouquets.data && subBouquets.data.filter(subBouquet => subBouquet.name === 'Medical Add-ons')

    return (
        <>
            <Header/>
            <Hero breadcrumb={data.name === 'Medical Check' ? medicalbreadcrumbs : backgroundbreadcrumbs } extraStyle='medical-hero text-white' />
            <SubBouquetList subBouquetName={data.name} subBouquetList={subBouquetListData}/>
            { data.name === 'Medical Check' && <MedicalAddons medicalAddons={medicalAddons}/> }
            <Footer/>
        </>
    )
}

export default SubBouquets
