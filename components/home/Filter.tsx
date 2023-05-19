import { Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, CheckboxGroup, VStack, Checkbox, useDisclosure, Icon } from '@chakra-ui/react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { FC, useState } from 'react';
import { FilterProps } from '../../types/components/home/filter';
import { useAppSelector } from '../../redux/hooks';

const Filter: FC<FilterProps> = ({ initialQueries, applyFilter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hotelBrands = useAppSelector(state => state.hotel_brands);
  const [filterQueries, setFilterQueries] = useState<string[]>([]);
  
  const updateFilterQueries: FilterProps['applyFilter'] = (queries) => {
    setFilterQueries(queries);
  }

  const handleApplyFilter = () => {
    onClose();
    applyFilter(filterQueries);
  }

  return (
    <Popover isLazy placement='bottom-end' isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
      <PopoverTrigger>
        <Button variant='outline' px={10} iconSpacing={3} rightIcon={<Icon as={FunnelIcon} />}>
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        
        <PopoverBody py={5}>
          <CheckboxGroup colorScheme="brand.lime" defaultValue={initialQueries} onChange={(value: string[]) => updateFilterQueries(value)}>
            <VStack spacing={5} align="start" w="full">
              {hotelBrands.map(brand => (
                <Checkbox key={brand.id} value={brand.id} spacing='8px !important' color='brand.lime.700'>
                  {brand.name}
                </Checkbox>
              ))}
            </VStack>
          </CheckboxGroup>
        </PopoverBody>

        <PopoverFooter color='brand.lime.500' bg='brand.lime.50' textAlign='center' fontWeight='medium' p={0}>
          <Button type='button' variant='unstyled' w='full' onClick={handleApplyFilter}>
            Apply filter
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default Filter;