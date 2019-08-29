import links from './links'
import {
  faDesktop,
  faMobileAlt,
  faGamepad,
  faRobot
} from '@fortawesome/free-solid-svg-icons'
import {
  faWindows
} from '@fortawesome/free-brands-svg-icons'

const types = {
  mobile: {
    name: 'Mobile Application',
    icon: faMobileAlt
  },
  web: {
    name: 'Web Application',
    icon: faDesktop,
  },
  desktop: {
    name: 'Desktop Application',
    icon: faWindows,
  },
  mobileGame: {
    name: 'Mobile Game',
    icon: faGamepad,
  },
  desktopGame: {
    name: 'Desktop Game',
    icon: faGamepad,
  },
  hardware: {
    name: 'Hardware',
    icon: faRobot
  }
}

const projects = [
  {
    name: 'Overseer',
    type: types.web,
    link: links.projects.overseer,
    technologies: ['TypeScript', 'Vue', 'Node', 'MongoDB'],
    description: 'Business dashboard platform where users can share and collaborate on building dashboards'
  },
  {
    name: 'Gamelo',
    type: types.mobile,
    link: links.projects.gamelo,
    technologies: ['JavaScript', 'React Native', 'Node', 'MongoDB'],
    description: 'A social platform for board game lovers that allows users to meet, compete and become the certified best at their favourite game'
  },
  {
    name: 'Project Solaris',
    type: types.mobileGame,
    link: links.projects.projectSolaris,
    technologies: ['Java', 'Android', 'LibGdx'],
    description: 'Mobile puzzle game where players have to shoot projectiles into orbit while avoiding obstacles'
  },
  {
    name: 'MiddleMan',
    type: types.web,
    link: links.projects.middleman,
    technologies: ['TypeScript', 'Vue', 'GraphQL', 'PostgreSQL'],
    description: 'API wrapper as a service'
  },
  {
    name: 'Request Factory',
    type: types.mobile,
    link: links.projects.requestFactory,
    technologies: ['JavaScript', 'React Native'],
    description: 'Mobile REST client for sending HTTP requests made for developers who want to test API’s on their phones'
  },
  {
    name: 'CubeStack',
    type: types.desktopGame,
    link: links.projects.cubeStack,
    technologies: ['Java', 'Processing'],
    description: 'Voxel based sandbox game set in a procedurally generated island'
  },
  {
    name: 'Atlas of Worlds',
    type: types.web,
    link: links.projects.atlasOfWorlds,
    technologies: ['JavaScript', 'JQuery'],
    description: 'A tool for tracking end-game progress in Path of Exile, an online Action RPG'
  },
  {
    name: 'Spectrum Sorter',
    type: types.desktop,
    link: links.projects.spectrumSorter,
    technologies: ['C++', 'SDL', 'OpenGL'],
    description: 'Sorting algorithm visualization using colours'
  },
  {
    name: 'Cordially',
    type: types.web,
    link: links.projects.cordially,
    technologies: ['JavaScript', 'Angular', 'Node', 'MongoDB'],
    description: 'Calendar web app that allows users to manage their calendar and share it with others'
  },
  {
    name: 'Showgram',
    type: types.web,
    link: links.projects.showgram,
    technologies: ['JavaScript', 'React', 'Node', 'MongoDB'],
    description: 'Social media platform for discussing TV show episodes'
  },
  {
    name: 'Glance',
    type: types.web,
    link: links.projects.glance,
    technologies: ['JavaScript', 'JQuery', 'Go', 'MongoDB'],
    description: 'Interactive map of world news'
  },
  {
    name: 'Accord',
    type: types.mobile,
    link: links.projects.accord,
    technologies: ['JavaScript', 'React Native', 'Java', 'Spring Boot'],
    description: 'Gamified decision making for groups of friends'
  },
  {
    name: 'Pathfinder',
    type: types.desktop,
    link: links.projects.pathfinder,
    technologies: ['Python'],
    description: 'Visualization of a pathfinding algorithm for a rectangular grid'
  },
  {
    name: 'Lancebotics',
    type: types.hardware,
    link: links.projects.lancebotics,
    technologies: ['VEX', 'RobotC'],
    description: 'Built and programmed a robot to compete in the 2015 VEX Robotics World Championship'
  }
]

export default projects