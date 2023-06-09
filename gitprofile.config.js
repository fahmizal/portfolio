// gitprofile.config.js

const config = {
  github: {
    username: 'fahmizal', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'fahmizal',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'fahmizal',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'http://fahmizal.staff.ugm.ac.id',
    phone: '',
    email: 'fahmizal@ugm.ac.id',
  },
  resume: {
    fileUrl:
      'https://github.com/fahmizal/portfolio/blob/main/Fahmizal_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Control System',
    'Robotics',
  ],
  experiences: [
    {
      company: 'Department of Electrical Engineering and Informatics, Vocational College, Universitas Gadjah Mada, Indonesia',
      position: 'Assistant Professor',
      from: 'September 2014',
      to: 'Present',
      companyLink: 'https://tedi.sv.ugm.ac.id/',
    },
    {
      company: 'Ardentec Corporation, Taiwan',
      position: 'Testing IC Wafer Engineer',
      from: 'Maret 2014',
      to: 'August 2014',
      companyLink: 'https://www.ardentec.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'National Taiwan University of Science and Technology',
      degree: 'M.Sc.',
      from: 'January',
      to: '2014',
    },
    {
      institution: 'Institut Teknologi Sepuluh Nopember',
      degree: 'S.T.',
      from: 'July',
      to: '2011',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'UAV Bicopter',
      description:
        'Design and Attitude Control UAV Bicopter',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://youtu.be/rOh-Y5iN35g',
    },
    {
      title: 'Bipedal Robot',
      description:
        'Linear Inverted Pendulum (LIPM) Model for Walking Pattern Bipedal Robot',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://youtu.be/fl3XjUm1izY',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'fahmizal', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/fahmizal/portfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
};

export default config;
