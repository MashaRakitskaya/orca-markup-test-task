import React from 'react'
import radar from 'images/radar.svg'
import chain from 'images/chain.svg'
import SVG from 'react-inlinesvg'
import { ScanSourceAnchorWrapper } from './ScanSourceAnchor.styles'

const ScanSourceAnchor = ({ url }) => {
  return (
    <ScanSourceAnchorWrapper>
      <SVG src={radar} alt="radar" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <SVG src={chain} alt="chain" />
    </ScanSourceAnchorWrapper>
  )
}

export default ScanSourceAnchor
