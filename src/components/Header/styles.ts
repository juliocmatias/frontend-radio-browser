import tw from 'tailwind-styled-components';

export const Container = tw.header`
	bg-secondary 
	z-40 
	flex 
	h-16 
	w-full 
	items-center 
	shadow-lg 
	backdrop-blur-md 
	transition-all 
	duration-300 
	ease-in-out
`;

export const Content = tw.div`
  flex
  h-full
  w-full
  items-center
  justify-center
  px-4
`;
