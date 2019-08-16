import {
  faEnvelope,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import links from './links'

export default [
  {
    icon: faLinkedinIn,
    url: links.linkedIn
  },
  {
    icon: faGithub,
    url: links.github
  },
  {
    icon: faEnvelope,
    url: links.email
  },
  {
    icon: faFileAlt,
    url: links.resume
  }
]