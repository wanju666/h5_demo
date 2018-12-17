var index = (function () {
    return {
        // 初始化
        init: function () {
            this.swiper();
            this.music();
        },
        // swiper配置
        swiper: function () {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                mousewheel: true,
                on: {
                    init: function () {
                        swiperAnimateCache(this); //隐藏动画元素 
                        swiperAnimate(this); //初始化完成开始动画
                    },
                    slideChangeTransitionEnd: function () {
                        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                    }
                }
            })
        },
        // music
        music: function () {
            $('.music_btn').click(function () {
                $(this).toggleClass("music_btn_off")
            })
        }
    }
})();
