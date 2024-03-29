import React from 'react'
import radar from 'images/radar.svg'
import chain from 'images/chain.svg'
import SVG from 'react-inlinesvg'
import { Anchor, SvgContainer, Wrapper } from './ScanSourceAnchor.styles'
import PropTypes from 'prop-types'

const ScanSourceAnchor = ({ url, secondary }) => {
  return (
    <Wrapper secondary={secondary}>
      <SVG src={radar} alt="radar" />
      <SvgContainer secondary={secondary}>
        <Anchor href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </Anchor>
        <SVG src={chain} alt="chain" />
      </SvgContainer>
    </Wrapper>
  )
}

ScanSourceAnchor.propTypes = {
  url: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
}

ScanSourceAnchor.defaultProps = { secondary: false }

export default ScanSourceAnchor
