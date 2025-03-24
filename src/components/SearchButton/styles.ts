import tw from 'tailwind-styled-components';

export const SearchButton = tw.button`
  group 
  items-center
  space-x-2
  ${(props) =>
    props.$floating ? 'fixed top-4 right-4 z-50 sm:hidden' : 'hidden sm:flex'}
`;

export const SearchButtonText = tw.span`
  text-base
  group-hover:text-gray-300
`;

export const SearchButtonIcon = tw.div`
  text-blue-600
  group-hover:text-blue-500
`;
