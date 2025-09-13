export default function loaderImage(image) {
  try {
    // 正确的相对路径计算：从当前文件(Tabber.vue)到assets/img目录
    // 当前文件位置: src/components/Tabber.vue
    // 目标图片位置: src/assets/img/
    // 因此相对路径应为: ../assets/img/${image}
    const relativePath = `../assets/img/${image}`;
    const imageUrl = new URL(relativePath, import.meta.url);
    return imageUrl.href;
  } catch (error) {
    console.error('图片加载失败:', error);
    console.error('尝试加载的图片名:', image);
    return '';
  }
}