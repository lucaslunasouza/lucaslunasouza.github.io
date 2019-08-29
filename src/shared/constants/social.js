import {
  faEnvelope,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import links from './links'
import strings from './strings'

export default [
  {
    icon: faLinkedinIn,
    url: links.linkedIn,
    tooltip: strings.linkedIn
  },
  {
    icon: faGithub,
    url: links.github,
    tooltip: strings.github
  },
  {
    icon: faEnvelope,
    url: links.email,
    tooltip: strings.email
  },
  {
    icon: faFileAlt,
    url: links.resume,
    tooltip: strings.resume
  }
]