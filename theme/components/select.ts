import inputTheme from './input';

const selectTheme = {
  baseStyle: inputTheme.baseStyle,
  variants: {
    outline: {
      field: {
        ...inputTheme.variants.outline.field,
        _focusVisible: {
          ...inputTheme.variants.outline.field._focusVisible,
          fontSize: 16
        }
      }
    }
  }
}

export default selectTheme;