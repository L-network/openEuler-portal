import { onMounted, onUnmounted, ref } from 'vue';

const useWindowResize = () => {
  let width = NaN;

  if (typeof global === 'undefined') {
    width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  }

  const screenWidth = ref(width);
  const onResize = () => {
    screenWidth.value =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  };

  onMounted(() => {
    screenWidth.value =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  return screenWidth;
};

export default useWindowResize;