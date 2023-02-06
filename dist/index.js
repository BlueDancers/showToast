function showToast(params) {
    let defualtParams = {
        title: '',
        icon: 'none',
        mask: true,
        duration: 3000,
    };
    params = Object.assign(Object.assign({}, defualtParams), params);
    let baseSuccessIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMAVqtVqtDMxMAMyLAXvCEeEwW5JwnVtrMlGxBdKZ/wj4M75Uwybybvs4EAAAIiSURBVHja7dzrThsxFEXhTa5QeiVNb2luQP3+j9gRCi2ZsWEGouhsa60HsPTJ/medIyIiIiIiIiIiIiIiIiIiIiKint1tl8vtWO4t1umh2V7WXWzSYysZd5Ge9Em2HTnSSK4dO9KtTHtwVPC2Oo50L8e6jvRVhmUcUxmWcaQ/8ivnuJZfOcfyt+zCESscsco5pgvZhSNWOGKVdfyQXThiVbNjhqNvOIY4PsouHLHCEauaHe9w9A3HEIfhHwiOWOGIFY5Y5Rzzn7ILR6zO5Li/UitHx359m9LNTk+ydKwOB1/u9ZilY5L+Ndahczjen/4+2hJLh+apLTmH4/LkDm3SscTVsUitxp6OLiSNLR3SpiuxdGieuhJHh+5SRmLokLY5iaFDGpUlp3d81v9MJD0cFpKc40PbYSDp6Qgv6e0ILhngCC0Z5AgsGegIKxnsCCrJOn7puUJKIjgKkjc7bl52hJNEcRQkho6CxNBRkBg6CpLXOq7UvyCSeI6SZLjj21BHAElMR0Fi6ChIDB0FiaGjIDF0FCSGjoKkl+N7KEdB0scRbgI9KzF0FCSGjoLE0FGQGDoKEkNHQVJwXAd2FCR5xxeFLidxdGQllo5GUomjkVTiaCSVOKRJJY5GUonjOcnIynEkMd8SN6nE0UgqcTSSShyNpBJHI6nEcSyZyLlJJQ5pd3Ds5N5qPU2ztfUCWyIiIiIiIiIiIiIiIiIiIiJ6e38BYCHHqe/6KukAAAAASUVORK5CYII=';
    let baseLoadingIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAVqAgmzwu371+MY5oHPbq2XlOJxAG0M21p3YVxcJy8OzlcG1KCwTTyDiqhl9A/KyThVxKvYfuAAAEIklEQVR42u3d6XaiQBAF4AuiqCi472s00cQsM3Pf/93GnEnONAjGn946fG/QB4uuripalEqlUqlUKpW0zVrevlqrzIcQx2+bo9/wmo9QxYxtvfsMRcyxmbZqUMMCh8DTChsWC6MqdPCq5aoCEfxBPO1BAn+2bClEC29x6LZx73ibJLr3FzJv9vu+d33ebuThjg0qtWrvz64R1EP+yO9DwVN/v/M7vCZ5gIy2Fx1ZrC6VUrZfJywStyCleeqwQDCAlCfvg/nGbxDTjNbM8y4U818qjZB5fMgZPIyYYwJBsw0vLSCo7/PSAYp6C14IIWkWM2sNSdUxL0DSfMqsBJoaRiIe8LbMqENTbcSMF2hqH62sBEsDedc/E2bo5cJffjHtXe588u3EtLHYmbH4mQRQ5TNNrCLh+GBKLFUlcs0XNnZ4oLZlygqqPKYkGnXhPA0jGzwwZcpddx2umo/pGt13J+iaapzuaUHWjCn33me8YkFXBFk9upL772LfmHR1Iau/oeOgMCNRYGYkCwZGdCyh64EukVmiPIOQjil0NeiIZSbVLlXWJmpDZ5GVcG/SpTTRmfVhJOFKn3o7wrv7U8fGSRE42Sg7ZsK9A2ETOprQ9WqjVgdU5Aduvo31JyL+Caxs7qkgaUBXxUaP4cw9Xm0hzKdDtwoM7KxsiXsreWPfSMURT0a6V0CoPkv7rc7/NhAW0CF83EWXjjl0tegQrjfCM7kjyo6inT0b6S6gRscf6GpbacEN6Oje9paWnYU0+5YWnvnA3kq5pVq+pe9MhY4ddM2tVPKGVnpC2FgpSR71v8nMKUk+QVeDDt3x7UyOsoeuppWN5NHM+3drpSdfp0N4UhhdKw2IZytDUakk5QhhUytB0qLjFbpqZgZXOlbq3YGRD5oyw5zCqfwwtLInRiYujTir0kq4L62kKSs61sJF+UpspU43pSMUbvj0bNyskg33EXS16JpB1rBj5KIFdI1cEYN2YuVLzEj/Ast/arQS7ye6Yt1e9eOIrrHu2J1HGvlg2SdtJI/9xMplNyumbHWnbOpMGclWUKsxSRNF7Z2Ry1GBwMK14Z8GY6b9gqi3d6adIGpFK8/Et3th7YdqArlgxkJ1jz8wY6uad4UkbeTCa2ZNRQOFF8aip9+EWbFoReLACwvNeledlwLJauoLLyWSv68X5hg9CHaCfOYJG3p9xtU786wjuS7225j5XjyxaY9BwAKd32KPZRezyORVqmJUrbPYOHgVCv1VwmtCf7fva4RM3+ePwnrQbXn751r7rjcab8QiYn+p9XgyshCgFiU2FgK0ux0bCwGGraWNhZz1prGNhQCV1dLGQs6qUWhjIcDQ8zsmFvLpeTZZm1jIp2qjvjWxkE+PTa/hHzf6C/kynFeab70/LeXL4kqlUqlUKpVKZ38B8SFupNSVbngAAAAASUVORK5CYII=';
    let icon = {
        success: baseSuccessIcon,
        loading: baseLoadingIcon,
    };
    let _setInt = null; // 定时器实例
    if (document.getElementById('vkcyan_show_toast')) {
        close();
    }
    const dom = _createDiv();
    if (params.icon && (params.icon == 'success' || params.icon == 'loading')) {
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
        img.style.cssText = 'width:60px;height:60px;margin-left:16px;marginright:16px;';
        if (params.title != '') {
            img.style.marginBottom = '10px';
        }
        if (type == 'loading') {
            img.animate([
                {
                    transform: 'rotate(0deg) scale(1)',
                },
                {
                    transform: 'rotate(180deg) scale(1.05)',
                },
                {
                    transform: 'rotate(360deg) scale(1)',
                },
            ], {
                delay: 0,
                duration: 1000,
                iterations: Infinity,
                fill: 'forwards',
            });
        }
        return img;
    }
    return {
        close,
    };
}
export { showToast };
