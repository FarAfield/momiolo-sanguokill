import { ref, onUnmounted } from "vue";

// interface IOptions {
//   parentEl?: string; // 自适应时父元素id   默认为app
//   el: string; // 元素id
//   width?: number; // 要适配宽度  默认1920
//   height?: number; // 要适配高度  默认1080
//   resize?: boolean; // 是否启用resize  默认true
//   delay?: number; // 自适应时延迟时间  默认0
// }

// 使用方法：
// const { scale, init } = useAutoFit();
// onMounted(() => {
//   init({
//     el: "root",
//     width: 1600,
//     height: 800,
//   });
// });
// 注意：会修改元素属性overflow:hidden  只能针对一屏展示使用
// 内部若存在不想启用缩放的元素，例如地图，echarts等,可以为其父元素添加样式  style="transform:scale(1 / scale);transformOrigin:'0 0'"

function useAutoFit() {
  const scale = ref(1);
  const timer = ref(null);
  let resizeListener = null;

  function init(options) {
    const {
      parentEl = "app",
      el,
      width = 1920,
      height = 1080,
      resize = true,
      delay = 0,
    } = options;
    const parentDom = document.getElementById(parentEl);
    if (!parentDom) {
      console.error(`useAutoFit error: parentEl is not exist`);
      return;
    }
    const dom = document.getElementById(el);
    if (!dom) {
      console.error(`useAutoFit error: ${el} is not exist`);
      return;
    }
    // 设置父元素溢出隐藏
    parentDom.style.overflow = "hidden";
    // 设置子元素宽高、变换原点以及溢出隐藏
    dom.style.width = `${width}px`;
    dom.style.height = `${height}px`;
    dom.style.transformOrigin = `0 0`;
    dom.style.overflow = "hidden";
    // 启用自适应
    keepFit(parentDom, dom, width, height);
    resizeListener = () => {
      clearTimeout(timer.value);
      if (delay) {
        timer.value = setTimeout(() => {
          keepFit(parentDom, dom, width, height);
        }, delay);
      } else {
        keepFit(parentDom, dom, width, height);
      }
    };
    resize && window.addEventListener("resize", resizeListener);
  }

  function keepFit(parentDom, dom, width, height) {
    const parentWidth = parentDom.offsetWidth;
    const parentHeight = parentDom.offsetHeight;
    scale.value = Number(
      Number(
        parentWidth / parentHeight < width / height
          ? parentWidth / width
          : parentHeight / height
      ).toFixed(2)
    );
    const computedWidth = Math.round(parentWidth / scale.value);
    const computedHeight = Math.round(parentHeight / scale.value);
    console.log("useAutoFit  scale：", scale.value);
    dom.style.width = `${computedWidth}px`;
    dom.style.height = `${computedHeight}px`;
    dom.style.transform = `scale(${scale.value})`;
  }

  onUnmounted(() => {
    window.removeEventListener("resize", resizeListener);
    clearTimeout(timer.value);
    timer.value = null;
    resizeListener = null;
  });

  return {
    scale,
    init,
  };
}

export default useAutoFit;
