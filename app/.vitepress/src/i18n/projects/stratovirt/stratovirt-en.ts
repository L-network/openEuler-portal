export default {
  SVIRT_BANNER_TEXT: [
    'StratoVirt',
    'Virtualization platform for cloud data centers',
  ],
  SVIRT_BANNER_IMG: '/img/minisite/svirt/mobile-banner.png',
  SVIRT_DESC: [
    'StratoVirt is an enterprise-grade virtualization cloud platform that uses a single architecture to support VM, containers, and serverless data center scenarios. StratoVirt has competitive advantages in key technologies such as lightweight and low noise, software and hardware collaboration, as well as premium security using Rust language.',
    'StratoVirt reserves component-based assembling capabilities and interfaces in the architecture design, that is, premium features can be flexibly assembled and evolve to support standard virtualization. In this way, StratoVirt strikes a perfect balance between feature requirements, application scenarios, and flexibility.',
  ],
  SVIRT_IMG: '/img/minisite/svirt/pc-svirt.png',
  SVIRT_MB_IMG: '/img/minisite/svirt/mobile-svirt.png',
  SVIRT_ANCHOR_DATA: [
    { id: 'feature', name: 'Feature' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'docs', name: 'Documentation' },
  ],
  SVIRT_LINK: [
    {
      IMG: '/img/projects/share/cards-work.png',
      DARK_IMG: '/img/projects/share/cards-work.png',
      TITLE: 'Try Now',
      LINK_LIST: ['https://gitee.com/openeuler/stratovirt'],
      SHOW: false,
    },
    {
      IMG: '/img/projects/share/cards-letter.png',
      DARK_IMG: '/img/projects/share/cards-letter.png',
      TITLE: 'Feedback',
      LINK_LIST: ['https://gitee.com/openeuler/stratovirt/issues'],
      SHOW: false,
    },
    {
      IMG: '/img/projects/share/cards-tv.png',
      DARK_IMG: '/img/projects/share/cards-tv.png',
      TITLE: 'Join Us',
      LINK_LIST: ['https://gitee.com/openeuler/community/tree/master/sig/Virt'],
      SHOW: false,
    },
    {
      IMG: '/img/projects/stratovirt/stratovirt-logo.png',
      DARK_IMG: '/img/projects/stratovirt/stratovirt-logo-dark.png',
      TITLE: 'StratoVirt Logo',
      LINK_LIST: ['/other/projects/stratovirt/'],
      SHOW: false,
    },
  ],
  SVIRT_CHARACTER: {
    TITLE_OUTSIDE: 'Feature',
    TITLE_INSIDE: 'FEATURE',
    CHARACTER_TEXT:
      'StratoVirt is a stable protective layer of openEuler. It reconstructs the openEuler virtualization base and has the following technical features:',
    CHARACTER_LIST: [
      {
        IMG: '/img/projects/stratovirt/illustration-safety.png',
        TITLE: 'Enhanced Security',
        DESC: 'StratoVirt uses the Rust language and supports seccomp to implement security isolation between multiple tenants.',
      },
      {
        IMG: '/img/projects/stratovirt/illustration-low-noise.png',
        TITLE: 'Lightweight and Low Noise',
        DESC: 'The simplified device model offers a startup time of under 50 ms, and a memory noise floor less than 4 MB. Serverless load is supported.',
      },
      {
        IMG: '/img/projects/stratovirt/illustration-flex.png',
        TITLE: 'Fast Scaling',
        DESC: 'StratoVirt supports device scaling within milliseconds, providing flexible resource scaling capabilities for lightweight loads.',
      },
      {
        IMG: '/img/projects/stratovirt/illustration-with.png',
        TITLE: 'Software and Hardware Collaboration',
        DESC: 'StratoVirt supports x86 VT and Kunpeng-V to implement multi-system hardware acceleration.',
      },
      {
        IMG: '/img/projects/stratovirt/illustration-extend.png',
        TITLE: 'High Scalability',
        DESC: 'The device model can be extended to support complex device specifications such as PCI and implement standard VMs.',
      },
      {
        IMG: '/img/projects/stratovirt/illustration-strengthen.png',
        TITLE: 'Enhanced Heterogeneity',
        DESC: 'In addition to the common hardware SR-IOV passthrough solution, the Ascend software definition capability is used to implement more flexible allocation of heterogeneous computing power.',
      },
    ],
  },
  SVIRT_FRAMEWORK: {
    TITLE_OUTSIDE: 'Architecture',
    TITLE_INSIDE: 'ARCHITECTURE',
    FRAMEWORK_IMG: '/img/projects/stratovirt/framework-hight-en.png',
    FRAMEWORK_IMG_DARK: '/img/projects/stratovirt/framework-dark-en.png',
    DESC_LIST: [
      'The StratoVirt core architecture comprises three layers from top to bottom:',
      'OCI compatibility interface: StratoVirt is compatible with the QEMU Machine Protocol (QMP) and inherits OCI capabilities.',
      'BootLoader: StratoVirt abandons the conventional BIOS + GRUB boot mode and implements a lighter and faster boot operation.',
      'MicroVM: This is the virtualization layer that leverages software and hardware collaboration to simplify the device management and support low-latency resource scaling.',
    ],
    DESC_BACKGROUND: '/img/projects/share/card-shading.png',
  },
  SVIRT_DOCUMENT: {
    TITLE_OUTSIDE: 'Documentation',
    TITLE_INSIDE: 'DOCUMENTATION',
    DATA_LIST: [
      {
        THEME: 'Introduction to StratoVirt',
        DESC: '',
        LINK: [
          {
            TEXT: 'Read more',
            LINK: 'https://gitee.com/openeuler/docs/blob/master/docs/zh/docs/StratoVirt/StratoVirt%E4%BB%8B%E7%BB%8D.md',
          },
        ],
        BACKGROUND: {
          IMG: '/img/projects/stratovirt/stratovirt-grain.png',
          TYPE: 1,
        },
      },
      {
        THEME: 'Installing StratoVirt',
        DESC: '',
        LINK: [
          {
            TEXT: 'Read more',
            LINK: 'https:/gitee.com/openeuler/docs/blob/master/docs/zh/docs/StratoVirt/%E5%AE%89%E8%A3%85StratoVirt.md',
          },
        ],
        BACKGROUND: {
          IMG: '/img/projects/stratovirt/stratovirt-grain.png',
          TYPE: 1,
        },
      },
      {
        THEME: 'Preparing the Environment',
        DESC: '',
        LINK: [
          {
            TEXT: 'Read more',
            LINK: 'https://gitee.com/openeuler/docs/blob/master/docs/zh/docs/StratoVirt/%E5%87%86%E5%A4%87%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83.md',
          },
        ],
        BACKGROUND: {
          IMG: '/img/projects/stratovirt/stratovirt-grain.png',
          TYPE: 1,
        },
      },
      {
        THEME: 'Configuring VMs',
        DESC: '',
        LINK: [
          {
            TEXT: 'Read more',
            LINK: 'https://gitee.com/openeuler/docs/blob/master/docs/zh/docs/StratoVirt/%E8%99%9A%E6%8B%9F%E6%9C%BA%E9%85%8D%E7%BD%AE.md',
          },
        ],
        BACKGROUND: {
          IMG: '/img/projects/stratovirt/stratovirt-grain.png',
          TYPE: 1,
        },
      },
      {
        THEME: 'Managing VM Lifecycle',
        DESC: '',
        LINK: [
          {
            TEXT: 'Read more',
            LINK: 'https://gitee.com/openeuler/docs/blob/master/docs/zh/docs/StratoVirt/%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%AE%A1%E7%90%86.md',
          },
        ],
        BACKGROUND: {
          IMG: '/img/projects/stratovirt/stratovirt-grain.png',
          TYPE: 1,
        },
      },
      {
        THEME: 'Connecting to iSula Security Containers',
        DESC: '',
        LINK: [
          {
            TEXT: 'Read more',
            LINK: 'https://gitee.com/openeuler/docs/blob/master/docs/zh/docs/StratoVirt/%E5%AF%B9%E6%8E%A5iSula%E5%AE%89%E5%85%A8%E5%AE%B9%E5%99%A8.md',
          },
        ],
        BACKGROUND: {
          IMG: '/img/projects/stratovirt/stratovirt-grain.png',
          TYPE: 1,
        },
      },
    ],
  },
};
