import SVG from 'react-inlinesvg'
import criticalSeverity from 'images/criticalseverity.svg'
import highSeverity from 'images/highseverity.svg'
import mediumSeverity from 'images/mediumseverity.svg'
import { severityTypes } from './constants'

export const getSeverityIcon = severity => {
  const { critical, high, medium } = severityTypes
  if (severity === critical) {
    return <SVG src={criticalSeverity} alt="critical severity" />
  } else if (severity === high) {
    return <SVG src={highSeverity} alt="high severity" />
  } else if (severity === medium) {
    return <SVG src={mediumSeverity} alt="medium severity" />
  }
}
