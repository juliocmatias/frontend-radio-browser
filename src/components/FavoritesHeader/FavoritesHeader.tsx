import { SearchButton } from '@/components/SearchButton';

import * as S from './styles';

export const FavoritesHeader = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Title>FAVORITES RADIOS</S.Title>
          <SearchButton name="search">Search Stations</SearchButton>
        </S.Content>
        <SearchButton name="search" floating />
      </S.Container>
    </>
  );
};
