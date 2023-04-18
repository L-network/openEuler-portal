<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useRouter, useData } from 'vitepress';
import useWindowResize from '@/components/hooks/useWindowResize';
import { debounce } from 'lodash';

const props = defineProps({
  navItems: {
    type: Object,
    default() {
      return {};
    },
  },
  isSwitch: {
    type: Boolean,
    default() {
      return false;
    },
  },
  navInfo: {
    type: Object,
    default() {
      return {};
    },
  },
});

interface NavItem {
  NAME: string;
  PATH: string;
  ID: string;
  IS_OPEN_WINDOW?: number;
  IS_OPEN_MINISITE_WINDOW?: string;
  CHILDREN?: NavItem;
}

const router = useRouter();
const { lang, theme } = useData();
const screenWidth = ref(useWindowResize());
const isMobile = computed(() => (screenWidth.value <= 1100 ? true : false));

// nav 鼠标滑过事件
const isShow = ref(true);
const navActive = ref('');
const toggleSubDebounced = debounce(
  function (item: any | null) {
    if (isMobile.value) return;
    if (item === null) {
      navActive.value = '';
    } else {
      navActive.value = item.ID;
      isShow.value = true;
    }
  },
  150,
  {
    trailing: true,
  }
);

const handleMobileNavClick = (index: string, item: any) => {
  if (!isMobile.value) return;
  navActive.value = item.ID;
};

const goPath = (item: NavItem) => {
  if (item.PATH.startsWith('https')) {
    window.open(item.PATH);
    return;
  } else {
    router.go('/' + lang.value + item.PATH);
    navActive.value = '';
  }
  isShow.value = false;
};

watch(
  () => props.isSwitch,
  (val: boolean) => {
    isShow.value = val;
    navActive.value = 'user';
  }
);
</script>

<template>
  <nav class="o-nav">
    <ul class="o-nav-list">
      <li
        v-for="(item, index) in navItems"
        :key="item.ID"
        :class="{
          active: navActive === item.ID,
        }"
        @mouseenter="toggleSubDebounced(item)"
        @mouseleave="toggleSubDebounced(null)"
      >
        <span @click="handleMobileNavClick(index, item)" class="nav-link">{{
          item.NAME
        }}</span>

        <div v-if="isShow" class="nav-dropdown">
          <div class="nav-dropdown-wrapper">
            <div class="nav-dropdown-top">
              <div
                v-for="(subitem, index) in item.CHILDREN"
                :key="index"
                class="nav-dropdown-content"
                :class="[subitem.TYPE === 1 && 'type1']"
              >
                <p class="title">{{ subitem.NAME }}</p>
                <div class="nav-dropdown-box">
                  <div
                    v-for="(list, listIndex) in subitem.CHILDREN"
                    :key="listIndex"
                    class="item-box"
                  >
                    <span class="link" @click="goPath(list)">{{
                      list.NAME
                    }}</span>
                    <p v-if="list.LABEL" class="desc">{{ list.LABEL }}</p>
                    <div v-if="list.CHILDREN" class="version-info">
                      <span
                        v-for="(vInfo, vIdx) in list.CHILDREN"
                        :key="vIdx"
                        class="link"
                        @click="goPath(vInfo)"
                        >{{ vInfo.NAME }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="item.ID !== 'download'" class="nav-dropdown-bottom">
              <div
                v-for="(item, index) in navInfo"
                :key="index"
                class="nav-bottom-item"
              >
                <p class="title">{{ item.NAME }}</p>
                <span
                  v-for="(list, listIndex) in item.CHILDREN"
                  :key="listIndex"
                  class="link"
                  @click="goPath(list)"
                  >{{ list.NAME }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
  <!-- 下拉菜单 -->
</template>

<style lang="scss" scoped>
.nav-dropdown {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: var(--o-color-bg2);
  z-index: 90;
  box-shadow: var(--o-shadow-l1);

  max-width: calc(100% + 16px);
  width: calc(100% + 16px);
  padding: 24px calc((100% - 1416px) / 2);
  transform-origin: top;
  transition: all 0.3s cubic-bezier(0.5, 0, 0.84, 0.25);

  transform: scaleY(0);
  @media screen and (max-width: 1100px) {
    border-top: 1px solid var(--o-color-border2);
    top: 0;
    left: 0px;
    padding: 0;
    width: calc(100% - 164px);
    max-width: calc(100% - 164px);
    transform: translateX(164px);
    height: calc(100%);
    z-index: 190;
    box-shadow: none;
    display: none;
  }

  .nav-dropdown-wrapper {
    @media (max-width: 1439px) {
      background: var(--o-color-bg2);
      overflow-y: auto;
      padding: 16px;
      height: 100%;
    }
    .nav-dropdown-top {
      display: flex;
      gap: 120px;
      @media (max-width: 1439px) {
        gap: 48px;
      }
      @media (max-width: 1100px) {
        display: block;
      }
    }
    .nav-dropdown-bottom {
      border-top: 1px solid var(--o-color-border2);
      margin-top: 24px;
      display: flex;
      gap: 120px;
      padding: 16px 0 0;
      @media (max-width: 1439px) {
        gap: 48px;
        margin-top: 16px;
      }
      @media (max-width: 1100px) {
        display: block;
        margin-top: 16px;
      }
      .nav-bottom-item {
        display: flex;
        gap: 24px;
        @media (max-width: 1439px) {
        }
        @media (max-width: 1100px) {
          display: block;
        }
        .title {
          font-size: 14px;
          font-weight: 400;
          color: var(--o-color-text4);
          line-height: 24px;
          @media (max-width: 1100px) {
            font-size: 12px;
            margin-bottom: 12px;
          }
        }
        .link {
          font-size: 16px;
          font-weight: 500;
          color: var(--o-color-brand1);
          line-height: 24px;
          display: inline-block;
          cursor: pointer;
          &:hover {
            color: var(--o-color-brand2);
          }
          @media (max-width: 1100px) {
            display: block;
            margin-bottom: 16px;
          }
        }
      }
    }

    .nav-dropdown-content {
      display: block;
      flex: 1;
      flex: 0 1 190px;
      @media (max-width: 1100px) {
        &:not(:last-child) {
          margin-bottom: 12px;
          border-bottom: 1px solid var(--o-color-border2);
          padding-bottom: 12px;
        }
      }
      .nav-dropdown-box {
        display: grid;
        gap: 16px 0;
        @media (max-width: 1100px) {
          display: block;
        }
        .item-box {
          max-width: 190px;
          @media (max-width: 1100px) {
            max-width: 100%;
          }
        }
      }
      .version-info {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        .link {
          font-size: 12px;
          line-height: 18px;
        }
      }
      .title {
        font-size: 14px;
        font-weight: 400;
        color: var(--o-color-text4);
        line-height: 22px;
        margin-bottom: 16px;
        @media (max-width: 1100px) {
          margin-bottom: 0;
          font-size: 12px;
        }
      }
      .link {
        font-size: 16px;
        font-weight: 500;
        color: var(--o-color-brand1);
        line-height: 24px;
        margin-bottom: 4px;
        cursor: pointer;
        display: inline-block;
        &:hover {
          color: var(--o-color-brand2);
        }
      }
      .desc {
        font-size: 12px;
        font-weight: 400;
        color: var(--o-color-text1);
        line-height: 18px;
        text-align: justify;
      }
      &.type1 {
        flex-basis: 420px;
        .nav-dropdown-box {
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 40px;
        }
      }
    }
  }
}
.o-nav {
  height: 100%;
  position: relative;
  @media screen and (max-width: 1100px) {
    width: 164px;
    background: var(--o-color-bg1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .lang-switch {
    padding: 0 16px;
  }
  .o-nav-list {
    height: 100%;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 1100px) {
      height: auto;
    }
    > li {
      position: relative;
      display: inline-flex;
      align-items: center;
      height: 100%;

      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-h8);
      color: var(--o-color-text1);
      cursor: pointer;
      @media screen and (max-width: 1100px) {
        font-size: var(--o-font-size-tip);
        line-height: var(--o-line-height-h3);

        position: relative;
        display: block;
        height: auto;
        &.active {
          color: var(--o-color-brand1);
          @media (max-width: 1100px) {
            background: var(--o-color-bg2);
          }
          &::after {
            background: var(--o-color-brand1);
          }
        }
      }
      @media screen and (min-width: 1100px) {
        &:hover {
          color: var(--o-color-brand1);
          z-index: 99;
          .nav-dropdown {
            transform: scaleY(1);
            transition-timing-function: cubic-bezier(0.16, 0.75, 0.5, 1);
          }
          &::after {
            background: var(--o-color-brand1);
          }
        }
      }
      &.active {
        color: var(--o-color-brand1);
        z-index: 99;
        .nav-dropdown {
          display: block;
        }
        &::after {
          background: var(--o-color-brand1);
        }
      }
      &::after {
        content: '';
        position: absolute;
        left: var(--o-spacing-h4);
        bottom: 0;
        width: calc(100% - var(--o-spacing-h4) * 2);
        height: 2px;
        border-radius: 1px;
        transition: all 0.1s linear;
        @media (max-width: 1100px) {
          width: 24px;
          left: 16px;
        }
      }
      .nav-link {
        display: block;
        padding: 0 var(--o-spacing-h4);
        @media screen and (max-width: 1100px) {
          padding: 0 var(--o-spacing-h6);
        }
      }
    }
  }
}
</style>
x``