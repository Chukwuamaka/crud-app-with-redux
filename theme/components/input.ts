const inputTheme = {
  baseStyle: {
    field: {
      _placeholder: {
        color: 'brand.gray.300'
      },
    }
  },
  variants: {
    outline: {
      field: {
        bg: 'white',
        fontSize: 13,
        borderRadius: 4,
        borderColor: 'brand.gray.200',
        _hover: {
          borderColor: 'brand.gray.400',
        },
        _focusVisible: {
          borderColor: 'brand.lime.500',
          boxShadow: '0 0 0 1px #46AC66'
        },
      },
    }
  }
}

export default inputTheme;