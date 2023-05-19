import { NextPage } from 'next'
import { useState } from 'react'
import Banner from '../components/home/Banner'
import HotelList from '../components/home/HotelList'
import Page from '../components/reusables/Page'
import useSearch from '../hooks/useSearch'

const Home: NextPage = () => {
  const { searchQuery, updateSearchQuery } = useSearch();

  return (
    <Page title='Hotel Ranking'>
      <Banner updateSearchQuery={updateSearchQuery} />
      <HotelList searchQuery={searchQuery} />
    </Page>
  )
}

export default Home;
