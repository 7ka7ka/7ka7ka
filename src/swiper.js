	// swiper3.4.2自定义分页器
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: false,//可选选项，自动滑动
        onlyExternal : true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        observer:true,
        loop:true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        paginationType : 'custom',
        paginationCustomRender: function (swiper, current, total) {
            var paginationHtml  = "";
                for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i === current - 1) {
                        if(i === 0){
                            paginationHtml =
                            '<span class="swiper-pagination-customs swiper-pagination-customs-active">分页器1</span>'+
                            '<span class="swiper-pagination-customs">分页器2</span>'+
                            '<span class="swiper-pagination-customs">分页器3</span>'+
                            '<span class="swiper-pagination-customs">分页器4</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-end">分页器5</span>';
                        } else if(i === 1){
                            paginationHtml =
                            '<span class="swiper-pagination-customs">分页器1</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-active">分页器2</span>'+
                            '<span class="swiper-pagination-customs">分页器3</span>'+
                            '<span class="swiper-pagination-customs">分页器4</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-end">分页器5</span>';
                        } else if(i === 2){
                            paginationHtml =
                            '<span class="swiper-pagination-customs">分页器1</span>'+
                            '<span class="swiper-pagination-customs">分页器2</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-active">分页器3</span>'+
                            '<span class="swiper-pagination-customs">分页器4</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-end">分页器5</span>';
                        } else if(i === 3){
                            paginationHtml =
                            '<span class="swiper-pagination-customs">分页器1</span>'+
                            '<span class="swiper-pagination-customs">分页器2</span>'+
                            '<span class="swiper-pagination-customs">分页器3</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-active">分页器4</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-end">分页器5</span>';
                        } else if(i === 4){
                            paginationHtml =
                            '<span class="swiper-pagination-customs">分页器1</span>'+
                            '<span class="swiper-pagination-customs">分页器2</span>'+
                            '<span class="swiper-pagination-customs">分页器3</span>'+
                            '<span class="swiper-pagination-customs">分页器4</span>'+
                            '<span class="swiper-pagination-customs swiper-pagination-customs-end swiper-pagination-customs-active">分页器5</span>';
                        }
                    
                } 
                }
                return paginationHtml ;
        },
        onSlideChangeEnd:function(swiper){
            swiper.update()//更新
        }
    })
    $(".swiper-pagination").on("click","span",function(){
        var index = $(this).index();
        mySwiper.slideTo(index+1);
    })