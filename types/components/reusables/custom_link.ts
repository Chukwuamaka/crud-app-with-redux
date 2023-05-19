import { LinkProps as ChakraLinkProps, ResponsiveValue } from "@chakra-ui/react";

export type ButtonLinkVariant = 'solid' | 'outline';

export interface CustomLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  type?: 'text' | 'button';
  variant?: ButtonLinkVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconSpacing?: ResponsiveValue<number | string>;
}

export type Variants = {
  [variant in ButtonLinkVariant]: object;
};