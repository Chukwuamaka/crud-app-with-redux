import Link from "next/link";
import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { CustomLinkProps, Variants } from "../../types/components/reusables/custom_link";
import { FC } from "react";

const variants: Variants = {
  outline: {
    color: 'brand.lime.500',
    border: '1px solid',
    borderColor: 'brand.lime.500',
    _hover: {
      bg: 'brand.lime.50'
    }
  },
  solid: {
    color: 'white',
    bg: 'brand.lime.500',
    _hover: {
      bg: 'brand.lime.600'
    }
  }
}

const CustomLink: FC<CustomLinkProps> = ({ children, href, prefetch, type = 'text', variant = 'solid', leftIcon, rightIcon, iconSpacing, ...props }) => {
  if (type === 'text') {
    return (
      <Link href={href} prefetch={prefetch} passHref>
        <ChakraLink {...props}>{children}</ChakraLink>
      </Link>
    )
  }

  if (type === 'button') {
    return (
      <Link href={href} prefetch={prefetch} passHref>
        <ChakraLink display='inline-flex' justifyContent='center' alignItems='center' fontWeight='medium'
          whiteSpace='nowrap' verticalAlign='middle' px={4} h={10} borderRadius={4} {...variants[variant]} {...props}
        >
          {
            leftIcon && 
            <Text as='span' mr={iconSpacing} display='inline-flex'>
              {leftIcon}
            </Text>
          }
          {children}
          {
            rightIcon && 
            <Text as='span' ml={iconSpacing} display='inline-flex'>
              {rightIcon}
            </Text>
          }
        </ChakraLink>
      </Link>
    )
  }

  return null;
}

export default CustomLink;