<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useData } from 'vitepress';

import ORGANIZATION_DATA from '@/data/about-us/organization';

import OrganizationGuests from './OrganizationGuests.vue';

import emailImg from '@/assets/category/organization/email.png';
import IconGit from '@/assets/category/organization/icon-git.svg';

const { lang } = useData();

const organizationData: any = computed(() => {
  if (lang.value === 'en') {
    return ORGANIZATION_DATA.en;
  } else {
    return ORGANIZATION_DATA.zh;
  }
});

const activeIndex = ref(0);
// 滚动激活导航
const navRef: any = ref([]);
const handleScrollEvent = () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  const activeList: Array<number> = [];
  navRef.value.forEach((item: any, index: number) => {
    if (scrollTop + 100 > item.offsetTop) {
      activeList.push(index);
    }
  });
  activeIndex.value = activeList[activeList.length - 1];
};

onMounted(() => {
  navRef.value = document.querySelectorAll('h2');
  window.addEventListener('scroll', handleScrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollEvent);
});
</script>

<template>
  <ul class="nav-right">
    <li v-for="(item, index) in organizationData.memberList" :key="item.title">
      <a
        :href="'#' + organizationData.idList[index]"
        :class="activeIndex === index ? 'active' : ''"
        >{{ item.title }}</a
      >
    </li>
  </ul>
  <div class="council">
    <h2 :id="organizationData.idList[0]" class="council-counselor">
      {{ organizationData.memberList[0].title }}
    </h2>
    <div class="council-list">
      <OrganizationGuests
        :lecturer-list="organizationData.memberList[0].list"
        shape="circle"
        :web-columns-num="6"
        :mobile-columns-num="2"
      ></OrganizationGuests>
    </div>
    <h2 :id="organizationData.idList[1]" class="council-Committee">
      {{ organizationData.memberList[1].title }}
    </h2>
    <div class="council-list">
      <div
        v-for="item in organizationData.memberList[1].list"
        :key="item.title"
        class="council-item"
      >
        <h4>{{ item.title }}</h4>
        <OrganizationGuests
          :lecturer-list="item.personalList"
          shape="circle"
          :web-columns-num="6"
          :mobile-columns-num="2"
        ></OrganizationGuests>
      </div>
    </div>
    <h2 :id="organizationData.idList[2]" class="council-technology">
      {{ organizationData.memberList[2].title }}
    </h2>
    <ul class="council-list list-technology">
      <li
        v-for="(item, index) in organizationData.memberList[2].list"
        :key="index"
        data-aos="fade-up"
      >
        <img class="avatar" :src="item.img" :alt="item.name" />
        <p class="personal-name">{{ item.name }}</p>
        <p class="personal-post">{{ item.post }}</p>
        <p class="links">
          <a :href="'mailto:' + item.email" class="mail"
            ><img :src="emailImg"
          /></a>
          <a
            v-if="item.gitee"
            :href="'https://gitee.com/' + item.gitee"
            class="gitee"
            target="_blank"
            ><img :src="IconGit"
          /></a>
        </p>
      </li>
    </ul>
    <h2 :id="organizationData.idList[3]" class="council-counselor">
      {{ organizationData.memberList[3].title }}
    </h2>
    <div class="council-list">
      <OrganizationGuests
        :lecturer-list="organizationData.memberList[3].list"
        shape="circle"
        :web-columns-num="6"
        :mobile-columns-num="2"
      ></OrganizationGuests>
    </div>
    <h2 :id="organizationData.idList[4]" class="council-counselor">
      {{ organizationData.memberList[4].title }}
    </h2>
    <div class="council-list">
      <OrganizationGuests
        :lecturer-list="organizationData.memberList[4].list"
        shape="circle"
        :web-columns-num="6"
        :mobile-columns-num="2"
      ></OrganizationGuests>
    </div>

    <p class="notice">{{ organizationData.notice }}</p>
  </div>
</template>

<style lang="scss" scoped>
.nav-right {
  position: fixed;
  top: calc(10% + 80px);
  right: 0;
  width: 200px;
  z-index: 999;
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 100%;
    left: 0;
    bottom: -50%;
    background-color: var(--o-color-bg4);
    z-index: 0;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
  a {
    position: relative;
    cursor: pointer;
    display: block !important;
    color: var(--o-color-text4);
    line-height: var(--o-line-height-text);
    font-size: var(--o-font-size-text);
    border-left: 1px solid var(--o-color-bg4);
    z-index: 1;
    padding: 8px 12px;
  }
  .active {
    color: var(--o-color-brand1);
    border-left: 1px solid var(--o-color-brand1);
  }
}
.council {
  max-width: 1380px;
  padding-right: 200px;
  margin: 40px auto 0;
  @media screen and (max-width: 1720px) {
    padding-right: 0px;
  }
  h2 {
    font-size: var(--o-font-size-h5);
    line-height: var(--o-line-height-h5);
    color: var(--o-color-text1);
    text-align: center;
    font-weight: normal;
    @media screen and (max-width: 768px) {
      font-size: var(--o-font-size-h8);
      line-height: var(--o-line-height-h8);
    }
  }
  .council-Committee,
  .council-technology,
  .council-counselor {
    margin-top: var(--o-spacing-h2);
    @media screen and (max-width: 768px) {
      margin-top: var(--o-spacing-h3);
    }
  }
  .council-list {
    margin-top: var(--o-spacing-h3);
    padding: var(--o-spacing-h2) 50px;
    background-color: var(--o-color-bg2);
    box-shadow: var(--o-shadow-l2);
    @media screen and (max-width: 768px) {
      margin-top: var(--o-spacing-h5);
      padding: var(--o-spacing-h5);
    }
    .council-item {
      & + .council-item {
        margin-top: var(--o-spacing-h2);
      }
      h4 {
        font-size: var(--o-font-size-h7);
        line-height: var(--o-line-height-h7);
        color: var(--o-color-text1);
        font-weight: 500;
        margin-bottom: 16px;
      }
      .lecturer-list {
        margin: 0 auto;
        margin-top: var(--o-spacing-h5);
      }
    }
    li {
      text-align: center;
      img {
        width: 100px;
      }
      .personal-name {
        margin-top: 8px;
        font-size: var(--o-font-size-h8);
        color: var(--o-color-text1);
        text-align: center;
      }
      .personal-post {
        margin-top: 4px;
        font-size: var(--o-font-size-tip);
        color: var(--o-color-text4);
        text-align: center;
      }
      .links {
        margin-top: 8px;
        display: flex;
        justify-content: center;
        .mail {
          margin-right: 18px;
          img {
            width: 24px;
          }
        }
        .gitee {
          display: flex;
          align-items: center;
          height: 24px;
          img {
            width: 18px;
          }
        }
      }
    }
  }
  .list-technology {
    margin: 0 auto;
    margin-top: var(--o-spacing-h2);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 32px;
    @media screen and (max-width: 1830px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media screen and (max-width: 1696px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 1520px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1348px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 1099px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 816px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 780px) {
      margin-top: var(--o-spacing-h5);
      display: grid;
      width: 100%;
      gap: 16px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .notice {
    margin-top: 54px;
    font-size: var(--o-font-size-tip);
    line-height: var(--o-line-height-tip);
    color: var(--o-color-text1);
    @media (max-width: 780px) {
      margin-top: 16px;
    }
  }
}
</style>
