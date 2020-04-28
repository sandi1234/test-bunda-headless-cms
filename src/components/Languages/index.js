import React, {Fragment} from 'react';
import * as S from './styled';


const Languages = () => {
  return (
    <Fragment>
    <S.LanguageWrapper>
      <S.LanguageItem>
        <S.LanguageLink to="/" hrefLang="en">
          en-US
        </S.LanguageLink>
      </S.LanguageItem>
      <S.LanguageItem>
        <S.LanguageLink to="/pt" hrefLang="pt">
          pt-BR
        </S.LanguageLink>
      </S.LanguageItem>
    </S.LanguageWrapper>
    </Fragment>

  );
};

export default Languages;
