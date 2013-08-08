// ==UserScript==
// @name        remove lazy
// @namespace   remove lazy
// @include     *.tmall.com/*
// @include     *.taobao.com/*
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
function remove_lazy( ) {
    var $img = $('img');
//    var count =0;
//    $(document).click(function () {alert('q');});
    $img.each(function () {
        var $this = $(this);
        var img1 = $this.attr('src'),img2=$this.attr('data-ks-lazyload');
        
        if(img2 && img2 != img1) {
//            console.log($this);
            $this.attr('src',img2);
//            count++;
    
        }
        
    });

//    console.log(count);


}
//function remove_floor() {
//        var count =0;
//    $('.ks-datalazyload').each(function (){
//        var $this = $(this);
//        var htmls = $this.text();$this.hide();
//        var div = document.createElement('div');
//        div.innerHTML=htmls;
//        $this.before(div);
////        console.log( div);
//         count++;
//    });
//
//     console.log(count);
//    
//}

function scroll_all (h) {
    var height = $(document).height();

        
       
    $(document).scrollTop(height);
    
    setTimeout(function () { $(document).scrollTop('0');},100);
   
}



$(window).load(function () {
    scroll_all('0');
    remove_lazy();
//    remove_floor();
  
});


