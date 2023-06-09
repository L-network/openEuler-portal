import data from '../../data/download/download';
export default {
  COPY_SUCCESS: 'copied successfully.',
  RELEASE_DESC: 'Описание релиза',
  INSTALL_GUIDENCE: 'Руководство по установке',
  SEEK_HELP: 'Справка',
  GET_ISO: 'Получить ISO',
  LIFE_CYCLE: 'Жизненный цикл',
  DOWNLOAD_BTN_NAME: 'Загрузить',
  OUTSIDE_TITLE: 'Download',
  VERSION: 'Version',
  SCENARIO: 'Scenario',
  RELEASE_DATE: 'Release Date',
  DOWNLOAD_LINK: 'Download',
  ARCHITECTURE: 'Architecture',
  SELECT: 'фильтр',
  // 新增 start
  COMMUNITY: 'Community Editions',
  BUSINESS: 'Commercial Editions',
  DETAIL1:
    'openEuler 23.03 is the latest version that was released in March, 2023. Download and try for yourself here.',
  DETAIL2: '',
  CLICK_VIEW: 'Browse Earlier Versions.',
  ARCHIVE_LINK: '/en/download/archive/',
  DETAIL3:
    'The recommended mirror sites are based on your IP address. You can find a specific mirror site or create a public mirror site for the openEuler community',
  CLICK_LIST: ' here.',
  MIRROR_LIST_LINK: '/en/mirror/list/',
  HISTORY: 'Archive',
  ARCHITECTURE2: 'Architecture',
  SCENARIO2: 'Scenario',
  ARCHITECTUREList: ['x86_64', 'AArch64', 'ARM32'],
  SCENARIOList: ['Server', 'Edge Cloud', 'Cloud Computing', 'Embedded'],
  VERSION_TYPE: 'Version',
  VERSION_LIST: [
    {
      KEY: 'ALL',
      VALUE: 'All',
    },
    {
      KEY: 'LTS',
      VALUE: 'LTS',
    },
    {
      KEY: 'NEW',
      VALUE: 'New',
    },
  ],
  PLANNEDEOL: 'Planned EOL',
  DOWNLOADGO: 'Download',
  CLICK_DOWNLOAD: 'Download',
  PUBLISH_FACTURER: 'Vendor:',
  APPROVE_ARCH: 'Architecture：',
  PLACEHOLDER: 'Version',
  TABLE_HEAD: ['Type', 'Size', 'Mirror Site', 'Integrity Check', 'Download'],
  APPROVE_MIRROR: 'Recommended',
  MORE_MIRROR: 'Other',
  ALL_MIRROR: 'View All',
  EMPTY_TIP: 'NotFound',
  // 新增 end

  ALL_DATA: 'весь',
  MANUFACTURER: 'Поставщик',
  WHITE_PAPER: 'информационный документ',
  PUBLISH_DATE: 'Дата выпуска релиза  ',
  WEBSITE_SELECT: 'Select Mirror',
  COPY_SUCCESSFULLY: 'copied successfully.',
  BTNSURE: 'Подтвердить',
  BTNRESET: 'сбросить',
  COMMUNITY_LIST: data.ru.COMMUNITY_LIST,
  SCENARIO_LIST: data.ru.SCENARIO_LIST,
  BUSINESS_LIST: data.ru.BUSINESS_LIST,
  PAGINATION: ['已显示', '条记录/共', '条', '加载更多'],
  MIRROR_SELECT: {
    TITLE: 'Получить ISO',
    RANK: 'Rank',
    NAME: 'Mirror Name',
    URL: 'URL',
    COUNTRY: 'Area',
    CONTINENT: 'Continent',
    DISTANCE: 'Distance(KM)',
    CONTENT: [
      'You are connecting from IP address: ',
      ', which belongs to ',
      '. We believe you are somewhere in ',
      ' and have selected the applicable mirrors.',
    ],
  },
  MIRROR_ALL: {
    TITLE: 'Mirrors Lists',
    NAME: 'Mirror Name',
    LOCATION: 'Location',
    SPONSOR: 'Sponsor',
    HTTPS: 'Http(s)',
    RSNC: 'RSYNC',
    FTP: 'FTP',
    Mbs: 'NetworkBandwidth(Mb/s)',
    TIME: 'Last Sync time',
    CONTENT: [
      'openEuler welcomes new mirror sites. If you are considering to set up a public mirror site for openEuler, please follow the mirror guidelines to make sure that your mirror is consistent with the other mirror sites. Any questions, feel free to',
      'contact us',
    ],
  },
};
