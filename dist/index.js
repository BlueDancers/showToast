function showToast(params) {
    let defualtParams = {
        title: '',
        icon: 'none',
        mask: true,
        duration: 1500,
    };
    params = Object.assign(Object.assign({}, defualtParams), params);
    let baseSuccessIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMAVqtVqtDMxMAMyLAXvCEeEwW5JwnVtrMlGxBdKZ/wj4M75Uwybybvs4EAAAIiSURBVHja7dzrThsxFEXhTa5QeiVNb2luQP3+j9gRCi2ZsWEGouhsa60HsPTJ/medIyIiIiIiIiIiIiIiIiIiIiKint1tl8vtWO4t1umh2V7WXWzSYysZd5Ge9Em2HTnSSK4dO9KtTHtwVPC2Oo50L8e6jvRVhmUcUxmWcaQ/8ivnuJZfOcfyt+zCESscsco5pgvZhSNWOGKVdfyQXThiVbNjhqNvOIY4PsouHLHCEauaHe9w9A3HEIfhHwiOWOGIFY5Y5Rzzn7ILR6zO5Li/UitHx359m9LNTk+ydKwOB1/u9ZilY5L+Ndahczjen/4+2hJLh+apLTmH4/LkDm3SscTVsUitxp6OLiSNLR3SpiuxdGieuhJHh+5SRmLokLY5iaFDGpUlp3d81v9MJD0cFpKc40PbYSDp6Qgv6e0ILhngCC0Z5AgsGegIKxnsCCrJOn7puUJKIjgKkjc7bl52hJNEcRQkho6CxNBRkBg6CpLXOq7UvyCSeI6SZLjj21BHAElMR0Fi6ChIDB0FiaGjIDF0FCSGjoKkl+N7KEdB0scRbgI9KzF0FCSGjoLE0FGQGDoKEkNHQVJwXAd2FCR5xxeFLidxdGQllo5GUomjkVTiaCSVOKRJJY5GUonjOcnIynEkMd8SN6nE0UgqcTSSShyNpBJHI6nEcSyZyLlJJQ5pd3Ds5N5qPU2ztfUCWyIiIiIiIiIiIiIiIiIiIiJ6e38BYCHHqe/6KukAAAAASUVORK5CYII=';
    let baseErroringIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAXVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9RKvvlAAAAHnRSTlMAiZiQpIWelZqNg6GogJKmbt6qUGSxtRZ5FclcOhfmWk3qAAAC/UlEQVR42uzVjU7CQBDE8YECtS3lQ0EFzL7/YxpNMEhHaVjP6zT7f4NfcjeLKIqiKIqiKIqiKIqiKIqiKJLtrTzacndAtl5Oxf71Cd429tl2g0xttvbRM3w92bklsvRo53zvyiyvZGlfFXA0tQwS7jDz/JOjXbaGI7fDatyfWU7J2r6193y1LBLusAr3t7OrZnDkc9jJc4y22SQzu2p78N9Dv8TvsI3zIGWQUMfSP4HXNegk4MgiaZhDUNJ1rBMMYVci42CSBZLVpJyX2f9JFswhKKEOQQl1CEq4I7nkIb2jQYKa1JIH7oCa5GeHlsTl8Eum6RwLJGyRSjK94VCR3HZoSDI4mKR0O3qNyPAlZQ4HH5hS0kElkg4qkXQwyQp3tfKMYJrhX0k6mKSQdPyJpBiCg0q8jhJZKrsSSQeVSDqYpELPqiE5HJKKzHfWVl2JpINKJB1MMsGNJmQkBlDRlUg6qETSQSWSDirp76gwoLqSuaQDqPpJ5kN3UImkg0puOyYYYEQi6WAfucZFtYqDSiQdVCLpoBJJB5O0ANCSIRh4865E0kElkg4m0XT0kNQQaT4SB1CPxAHUI3H8ImkhVj0SB9COxAG0I3G8t3cHOwjCQBRFR4w7V4LoRv//M3XjShNjCbGcvPsHkwAt7Zs7TCHKo6W87MrnV1kQlS2KsmlUtvHKj5Xyq6scPijHQcoBnXJkqhxiK9cKykWPcvWmXIYq19Pvdew2GRhQIhxKqEaJOSnBMyUKqIQzlbisEmBWIuVKyF9pu1AaYZTWpA9tb5tsFlPa95SGylVaXL9X0nMdTvO0087+rAQRDLSpEiKvwHQiiuBFUe4oEiRFS6WIwhR1myLTU/SGinBSUYD+opftWcqqaHIVcbGikj42PbL9yb0V3boiwGdGEnQ1JGKqdoaexnYM1c5ZGaRybf1wrLEUX6udURk2VPMKdTQuY3Mt4v7iVL/Tz0CuJ/s+RqTtazHjYR6mS/2N2zScD2OFEEIIIYQQQgghhBBCCJvlASONHAliOjFmAAAAAElFTkSuQmCC';
    let icon = {
        success: baseSuccessIcon,
        error: baseErroringIcon,
    };
    let _setInt = null; // 定时器实例
    if (document.getElementById('vkcyan_show_toast')) {
        close();
    }
    const dom = _createDiv();
    if (params.icon && (params.icon == 'success' || params.icon == 'error')) {
        let img = _createImg(params.icon);
        dom.appendChild(img);
    }
    if (params.title != '') {
        dom.appendChild(_createText());
    }
    document.body.appendChild(dom);
    // 存在自动关闭机制
    if (params.duration) {
        _setInt = setTimeout(() => close(), params.duration);
    }
    if (params.mask) {
        document.body.appendChild(_createMask());
    }
    /**
     * 手动关闭
     */
    function close() {
        let toast = document.getElementById('vkcyan_show_toast');
        let mask = document.getElementById('vkcyan_show_toast_mask');
        toast.remove();
        if (mask) {
            mask.remove();
        }
        if (_setInt) {
            clearTimeout(_setInt);
            _setInt = null;
        }
    }
    /**
     * toast主体
     */
    function _createDiv() {
        const dom = document.createElement('div');
        dom.id = 'vkcyan_show_toast';
        dom.style.cssText =
            'position:fixed;z-index:99999;left:50%;top:50%;transform:translate(-50%, -50%);background-color:rgba(17,17,17,0.7);border-radius:8px;display:flex;flex-direction:column;align-items:center;';
        dom.style.padding = params.icon == 'none' ? `10px 20px` : '16px 20px';
        return dom;
    }
    /**
     * toast底部提示文字
     */
    function _createText() {
        const domText = document.createElement('div');
        domText.style.cssText = 'color:white;font-size:15px;max-width:200px;text-align:center';
        domText.innerText = params.title;
        return domText;
    }
    /**
     * toast蒙版
     */
    function _createMask() {
        let mask = document.createElement('div');
        mask.id = 'vkcyan_show_toast_mask';
        mask.style.cssText =
            'position:fixed;z-index:99998;width:100vw;height:100vh;background-color:rgba(0,0,0,0);top:0;left:0;';
        return mask;
    }
    /**
     * toast内icon
     * @param type success 成功 loading 加载中
     */
    function _createImg(type) {
        let img = document.createElement('img');
        img.src = icon[type];
        img.style.cssText = 'width:56px;height:56px;margin-left:16px;margin-right:16px;';
        if (params.title != '') {
            img.style.marginBottom = '10px';
        }
        return img;
    }
    return {
        close,
    };
}
export { showToast };
