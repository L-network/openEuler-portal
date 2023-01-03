export default {
  MEETINGS_TIME: 'Time: ',
  MEETINGS_REPLAY: 'Replay',
  SEARCH_PLACE_HOLDER: 'Input content',
  COOKIE_LEGAL_TEXT:
    'This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.',
  COOKIE_LEGAL_LINK_TEXT: ' Read our privacy policy.',
  NAV_ROUTER: {
    DOWNLOAD: 'Download',
    ISO: 'Software Packages',
    MIRRORLIST: 'Mirrors',
    LEARNING: 'Learning',
    DOCS: 'Documentation',
    MOOC: 'MOOC',
    INTERNSHIP: 'Internship',
    CONNECT: 'Connect',
    NEWS: 'News',
    BLOG: 'Blog',
    LIVE: 'Live',
    SALON: 'Meetups',
    SUMMIT: 'Summit',
    COMMUNITY: 'Community',
    CONTRIBUTION: 'Contribution',
    CONVENTION: 'Convention',
    MAILINGLIST: 'Mailing Lists',
    CERTIFICATION: 'Certification',
    TALENT: 'Talent',
    STATISTICS: 'Statistics',
    SIG: 'SIG',
    SIGLIST: 'SIG Lists',
    APPLICATION: 'Application',
    ROLES: 'Roles',
    MEETINGGUIDE: 'Meeting-Guide',
    DISCOVERY: 'Discovery',
    ATUNE: 'A-Tune',
    BISHENGJDK: 'BiSheng JDK',
    ISULA: 'iSula',
    SECGEAR: 'secGear',
    STRATOVIRT: 'StratoVirt',
    COMPASSCI: 'Compass-CI',
    COMPLIANCE: 'Compliance',
    PKGSHIP: 'Pkgship',
    SUPPORT: 'Support',
    VULNERABILITY: 'Vulnerability Management',
    SAFETY: 'Security Advisories',
    CVE: 'CVE',
    COMPATIBILITY_EVALUATION: 'Compatibility Technology Evaluation',
    APPROVE: 'Approve',
    COMPATIBILITY: 'Compatibility List',
    MIGRATION: 'Migration',
  },
  NAV_ROUTER_CONFIG: [
    {
      PATH: '',
      NAME: 'Download',
      ID: 'download',
      CHILDREN: [
        {
          NAME: 'Software Packages',
          ID: 'iso',
          PATH: '/download/',
        },
        {
          NAME: 'Mirrors',
          ID: 'mirror-list',
          PATH: '/mirror/list/',
        },
      ],
      CLASS: ['download', 'mirror'],
    },
    {
      NAME: 'Learning',
      ID: 'learning',
      CHILDREN: [
        {
          NAME: 'Documentation',
          ID: 'docs',
          PATH: '/en/',
          IS_OPEN_WINDOW: 1,
        },
        {
          NAME: 'MoocStudio',
          ID: 'MoocStudio',
          PATH: 'https://moocstudio.openeuler.org/en/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        // {
        //   NAME: 'MOOC',
        //   ID: 'mooc',
        //   PATH: '/learn/mooc/',
        // },
      ],
      CLASS: ['learning', 'learn'],
    },
    {
      PATH: '',
      NAME: 'Connect',
      ID: 'connect',
      CHILDREN: [
        {
          NAME: 'News',
          ID: 'news',
          PATH: '/interaction/news-list/',
        },
        {
          NAME: 'Blog',
          ID: 'blog',
          PATH: '/interaction/blog-list/',
        },
        // {
        //   NAME: 'Live',
        //   ID: 'live',
        //   PATH: '/interaction/live-list/',
        // },
        // {
        //   NAME: 'Meetups',
        //   ID: 'salon',
        //   PATH: '/interaction/salon-list/',
        // },
        // {
        //   NAME: 'Summit',
        //   ID: 'summit',
        //   PATH: 'https://www.openeuler.org/zh/interaction/summit-list/devday2022/',
        //   IS_OPEN_MINISITE_WINDOW: 1,
        // },
      ],
      CLASS: ['news', 'blog'],
    },
    {
      PATH: '',
      NAME: 'Community',
      ID: 'community',
      CHILDREN: [
        {
          NAME: 'Contribution',
          ID: 'contribution',
          PATH: '/community/contribution/',
        },
        {
          NAME: 'Convention',
          ID: 'convention',
          PATH: '/community/conduct/',
        },
        {
          NAME: 'Mailing Lists',
          ID: 'mailing-list',
          PATH: '/community/mailing-list/',
        },
        {
          NAME: 'Certification',
          ID: 'certification',
          PATH: '/community/certification-services/',
          // IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Statistics',
          ID: 'statistics',
          PATH: 'https://datastat.openeuler.org/en/overview',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: [
        'contribution',
        'conduct',
        'mailing-list',
        'certification-services',
      ],
    },
    {
      PATH: '',
      NAME: 'SIG',
      ID: 'sig',
      CHILDREN: [
        {
          NAME: 'SIG Lists',
          ID: 'sig-list',
          PATH: '/sig/sig-list/',
        },
        {
          NAME: 'Application',
          ID: 'application',
          PATH: '/sig/sig-guidance/',
        },
        {
          NAME: 'Roles',
          ID: 'roles',
          PATH: '/sig/role-description/',
        },
        {
          NAME: 'QuickIssue',
          ID: 'QuickIssue',
          PATH: 'https://quickissue.openeuler.org/en/issues/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['sig-list', 'sig-guidance', 'role-description'],
    },
    {
      PATH: '',
      NAME: 'Discovery',
      ID: 'discovery',
      CHILDREN: [
        {
          NAME: 'A-Tune',
          ID: 'atune',
          PATH: '/other/projects/atune/',
        },
        {
          NAME: 'BiSheng JDK',
          ID: 'bishengjdk',
          PATH: '/other/projects/bishengjdk/',
        },
        {
          NAME: 'iSula',
          ID: 'isula',
          PATH: '/other/projects/isula/',
        },
        {
          NAME: 'secGear',
          ID: 'secgear',
          PATH: '/other/projects/secgear/',
        },
        {
          NAME: 'StratoVirt',
          ID: 'stratovirt',
          PATH: '/other/projects/stratovirt/',
        },
        {
          NAME: 'Compass-CI',
          ID: 'compass-ci',
          PATH: 'https://compass-ci.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Compliance',
          ID: 'compliance',
          PATH: 'https://compliance.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Pkgship',
          ID: 'pkgship',
          PATH: 'https://pkgmanage.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'radiaTest',
          ID: 'radiaTest',
          PATH: 'https://radiatest.openeuler.org',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'NestOS',
          ID: 'NestOS',
          PATH: 'https://nestos.openeuler.org/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['atune', 'bishengjdk', 'isula', 'secgear', 'stratovirt'],
    },
    {
      PATH: '',
      NAME: 'Support',
      ID: 'support',
      CHILDREN: [
        {
          NAME: 'Vulnerability Management',
          ID: 'vulnerability-reporting',
          PATH: '/security/vulnerability-reporting/',
        },
        {
          NAME: 'Security Advisories',
          ID: 'safety-bulletin',
          PATH: '/security/safety-bulletin/',
        },
        {
          NAME: 'CVE',
          ID: 'cve',
          PATH: '/security/cve/',
        },
        {
          NAME: 'Compatibility List',
          ID: 'compatibility',
          PATH: '/compatibility/',
        },
      ],
      CLASS: [
        'vulnerability-reporting',
        'safety-bulletin',
        'cve',
        'compatibility',
      ],
    },
    {
      PATH: '',
      NAME: 'CODE',
      ID: 'code',
      CHILDREN: [
        {
          NAME: 'Code Sources',
          PATH: 'https://gitee.com/openeuler',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Package Sources',
          PATH: 'https://gitee.com/src-openeuler',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'GitHub Mirror',
          PATH: 'https://github.com/openeuler-mirror',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['code'],
    },
  ],
  LANG: 'English',
  LANG_LIST: ['中文', 'English', 'Русский'],
  USER_CENTER: 'User Center',
  LOGOUT: 'Logout',
  PLEASE: 'Please',
  LOGIN: 'login',
  GITTE: 'Source code',
  CODE: 'CODE',
  FOOTER: {
    ATOM_TEXT:
      'openEuler is an open source project incubated and operated by the OpenAtom Foundation.',
    ATOM_PC: '/atom-pc.png',
    ATOM_MO: '/atom-mo.png',
    MAIL: 'contact@openeuler.io',
    COPY_RIGHT: 'Copyright © 2023 openEuler. All rights reserved.',
    RIGHT_LIST: [
      {
        NAME: 'Trademark',
        URL: '/other/brand/',
      },
      {
        NAME: 'Privacy Policy',
        URL: '/other/privacy/',
      },
      {
        NAME: 'Legal Notice',
        URL: '/other/legal/',
      },
      {
        NAME: 'Service Status',
        URL: 'https://status.openeuler.org/',
      },
    ],
    QR_CODE: 'WeChat Subscription',
    QR_ASSISTANT: 'WeChat Assistant',
  },
  BUILDING: {
    BUILDING: 'Building',
    BUILDINGMES: 'Coming soon…',
  },
  SEARCH: {
    BROWSEHISTORY: 'History',
    CLEAN: 'Clean up',
    TOPSEARCH: 'Top search',
    CHANGE: 'Change',
    PLEACHOLDER: 'Please enter the content',
  },
  PREV: 'pre',
  NEXT: 'next',
};
