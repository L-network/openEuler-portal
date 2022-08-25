import data from '../../data/download/download';
export default {
  RELEASE_DESC: '发行说明',
  SERVER_IMAGE: '服务器镜像',
  CLOUD_IMAGE: '云镜像',
  EDGE_IMAGE: '边缘镜像',
  EMBEDDEN_IMAGE: '嵌入式镜像',
  INSTALL_GUIDENCE: '安装指南',
  SEEK_HELP: '提问求助',
  GET_ISO: '获取 ISO',
  SELECT: '筛选',
  ALL_DATA: '全部',
  LIFE_CYCLE: '生命周期',
  DOWNLOAD_BTN_NAME: '立即下载',
  OUTSIDE_TITLE: 'ISO',
  MANUFACTURER: '厂商',
  PUBLISH_DATE: '发行时间',
  WHITE_PAPER: '白皮书',
  WEBSITE_SELECT: '站点选择',
  COPY_SUCCESSFULLY: '复制成功！',
  PAGINATION: ['已显示', '条记录/共', '条', '加载更多'],
  BTNSURE: '确定',
  BTNRESET: '重置',
  DOWNLOAD_LIST: data.zh.DOWNLOAD_LIST,
  MIRROR_SELECT: {
    TITLE: '优选镜像',
    RANK: 'Rank：',
    NAME: 'Mirror Name：',
    URL: 'URL：',
    COUNTRY: 'Area：',
    CONTINENT: 'Continent：',
    DISTANCE: 'Distance(KM)：',
    CONTENT: [
      'You are connecting from IP address: ',
      ', which belongs to ',
      '. We believe you are somewhere in ',
      ' and have selected the applicable mirrors.',
    ],
  },
  MIRROR_ALL: {
    TITLE: '镜像仓列表',
    NAME: 'Mirror Name：',
    LOCATION: 'Location：',
    SPONSOR: 'Sponsor：',
    HTTPS: 'Http(s)：',
    RSNC: 'RSYNC：',
    FTP: 'FTP：',
    Mbs: 'NetworkBandwidth(Mb/s)：',
    TIME: 'Last Sync time：',
    CONTENT: [
      'openEuler welcomes new mirror sites. If you are considering to set up a public mirror site for openEuler, please follow the mirror guidelines to make sure that your mirror is consistent with the other mirror sites. Any questions, feel free to',
      'contact us',
    ],
  },
};
