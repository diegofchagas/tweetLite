import * as S from "./styles";


export const Avatar = ({src, hasBorder = false}) => {
  return (
    <S.ImgAvatar src={src} hasBorder={hasBorder} />
  )
}
