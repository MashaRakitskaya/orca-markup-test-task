import SVG from 'react-inlinesvg'
import criticalSeverity from 'images/criticalseverity.svg'
import highSeverity from 'images/highseverity.svg'
import mediumSeverity from 'images/mediumseverity.svg'

export const getSeverityIcon = severity => {
  if (severity === 'Critical') {
    return <SVG src={criticalSeverity} alt="critical severity" />
  } else if (severity === 'High') {
    return <SVG src={highSeverity} alt="high severity" />
  } else if (severity === 'Medium') {
    return <SVG src={mediumSeverity} alt="medium severity" />
  }
}
