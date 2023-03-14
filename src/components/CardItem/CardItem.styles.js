import styled from 'styled-components'
import {
  secondaryBgColor,
  mainBorder,
  headerFontColor,
  mainFontColor,
  fillImgColor,
  mainFontStyles,
} from 'styles/variables.styles'

export const CardItemStyled = styled.article`
  background: ${secondaryBgColor};
  padding: 20px 32px;
  border: ${mainBorder};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 300px;
  justify-content: center;
  gap: 32px;
`

export const NamesValuesContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const NamesValuesContainerWithMarginTop = styled(NamesValuesContainer)`
  margin-top: 4px;
`

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const NamesWithMarginTop = styled(Names)`
  margin-top: 4px;
`
export const Name = styled.p`
  ${mainFontStyles};
  color: ${headerFontColor};
  margin: 0px;
  white-space: nowrap;
`

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Value = styled.p`
  ${mainFontStyles};
  color: ${mainFontColor};
  margin: 0px;
`

export const CopyButtonsScanSourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SeveritySvgTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  SVG {
    width: 16px;
    height: 16px;
    rect {
      stroke: ${fillImgColor.gray};
    }
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 24px;
`
