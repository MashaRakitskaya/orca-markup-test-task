import React from 'react'
import radar from 'images/radar.svg'
import chain from 'images/chain.svg'
import SVG from 'react-inlinesvg'
import { ScanSourceAnchorSvgContainer, ScanSourceAnchorWrapper } from './ScanSourceAnchor.styles'

const ScanSourceAnchor = ({ url, secondary = false }) => {
  return (
    <ScanSourceAnchorWrapper secondary={secondary}>
      <SVG src={radar} alt="radar" />
      <ScanSourceAnchorSvgContainer secondary={secondary}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
        <SVG src={chain} alt="chain" />
      </ScanSourceAnchorSvgContainer>
    </ScanSourceAnchorWrapper>
  )
}

export default ScanSourceAnchor
