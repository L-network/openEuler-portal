import { toRefs, defineComponent, h } from 'vue';
import { seoProps } from './seo-types';
import './seo.scss';

export default defineComponent({
  name: 'SeoBox',
  props: seoProps,
  setup(props) {
    const { seoData } = toRefs(props);
    return () => {
      return seoData.value.map((item) => {
        return h(`h${item.level}`, { class: 'for-seo' }, item.keyWords);
      });
    };
  },
});
