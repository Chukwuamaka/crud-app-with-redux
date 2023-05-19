import { FC, useState } from 'react';
import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import HotelCard from './HotelCard';
import { HotelListProps } from '../../types/components/home/hotel_list';
import Filter from './Filter';
import { FilterProps } from '../../types/components/home/filter';
import { useAppSelector } from "../../redux/hooks";

const HotelList: FC<HotelListProps> = ({ searchQuery }) => {
  const hotels = useAppSelector(state => state.hotels);
  const [filterQueries, setFilterQueries] = useState<string[]>([]);
  
  const applyFilter: FilterProps['applyFilter'] = (queries) => {
    setFilterQueries(queries);
  }

  return (
    <Box as='section' bg='brand.nearWhite' py={12} px={[5, 8, 20]} minH='70vh'>
      <Text as='h2' color='brand.lime.700' mb={12} textAlign='center' fontSize={[25, 31]} fontWeight='bold' className='responsive_1440px'>
        Favourite Hotels
      </Text>
      {hotels.length === 0 ? 
        <Text color='brand.gray.400' fontWeight='medium' textAlign='center'>
          You have not added any hotels to your directory yet. Add a hotel to see it here
        </Text>
      :
        <>
          <Box textAlign='right' mb={10}>
            <Filter initialQueries={filterQueries} applyFilter={applyFilter} />
          </Box>
          <SimpleGrid gap={5} columns={{base: 1, md: 2, lg: 3}} placeItems='center' className='responsive_1440px'>
            {hotels.filter(hotel => (
              filterQueries.length > 0 ? filterQueries.includes(hotel.brand) : hotel
            ))
            .filter(hotel => hotel.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map(hotel => (
              <GridItem key={hotel.id}>
                <HotelCard data={hotel} />
              </GridItem>
            ))}
          </SimpleGrid>
        </>
      }
    </Box>
  )
}

export default HotelList;