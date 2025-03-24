import { SearchIcon } from '@/components/Icons';

import * as S from './styles';

type SearchButtonProps = {
  children?: React.ReactNode;
  floating?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SearchButton = ({
  children,
  floating,
  ...props
}: SearchButtonProps) => {
  return (
    <S.SearchButton $floating={floating} {...props}>
      <S.SearchButtonIcon>
        <SearchIcon size={28} weight="bold" />
      </S.SearchButtonIcon>
      {children && <S.SearchButtonText>{children}</S.SearchButtonText>}
    </S.SearchButton>
  );
};
