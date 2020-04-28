import React from 'react';

import * as S from './styled';

const TitlePage = props => {
  const { text } = props;

  return <S.TitleElement>{text} <h1>Lort</h1></S.TitleElement>;
};

export default TitlePage;
