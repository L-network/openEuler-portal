import { ExtractDefaultPropTypes, PropType } from 'vue';

interface SeoItem {
  level: number;
  keyWords: string;
}

export const seoProps = {
  seoData: {
    type: Array as PropType<Array<SeoItem>>,
    default: [],
  },
};

export type TimelineProps = ExtractDefaultPropTypes<typeof seoProps>;
