function showToast(
  params = {
    title: '', // 提示的内容
    icon: 'none', // loading success
    duration: 1500, // 提示的延迟时间
  }
) {
  return new Promise((resolve, reject) => {
    const dom = document.createElement('div')
    console.log(dom);
    
    // 
    resolve(null)
  });
}

export { showToast }
