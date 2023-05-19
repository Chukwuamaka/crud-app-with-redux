import { FC } from 'react';
import { Box, FormControl, FormLabel, Icon, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { BannerProps } from '../../types/components/home/banner';

const Banner: FC<BannerProps> = ({ updateSearchQuery }) => {
  return (
    <Box as='section' px={5} py={20} bgImage='/spiral.svg' bgPos='center' bgRepeat='no-repeat'>
      <VStack spacing={9} m='auto' maxW='530px' align={['start', 'center']} className='responsive_1440px'>
        <Text color='brand.lime.500' fontWeight='black' fontSize={['4xl', '5xl']} textAlign={['left', 'center']} lineHeight='120.5%'>
          Your Favourite Hotels, On-The-Go
        </Text>

        <Text fontSize={[16, 20]} maxW='470px' color='brand.lime.700' textAlign={['left', 'center']} lineHeight='144%'>
          Keep a record of your favourite hotels, right at your fingertips
        </Text>

        <VStack spacing={2} w='full' align={['start', 'center']}>
          <Text color='brand.gray.300'>Search through your records to see hotels you like</Text>
          <FormControl maxW='340px'>
            <FormLabel htmlFor='search-term' fontSize={13} fontWeight='medium' mb={2} className='sr-only'>Search across dashboard</FormLabel>
            <InputGroup>
              <Input id='search-term' type='text' name='search-term' placeholder='Search for hotels'
                bg='white' onChange={(e) => updateSearchQuery(e.target.value)}
              />
              <InputRightElement bg='#EDF7F0' borderRadius={4} maxH='95%' mt='1px' mr='1px'>
                <Icon as={MagnifyingGlassIcon} />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
      </VStack>
    </Box>
  )
}

export default Banner;