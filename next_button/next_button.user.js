// ==UserScript==
// @name        next button
// @namespace   51cto��ҳ��ݼ�
// @include     *.51cto.com/art/*
// @include     http://www.cnblogs.com/cate/*
// @exclude     *.51cto.com/shtml/*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//�� @grant none     ������

var mk_domain = window.location.host;
var $post_item;

if(mk_domain == 'www.cnblogs.com') {


    $(document).keydown(function(e) {
        //console.log(e.keyCode);
        if(e.ctrlKey && e.keyCode == 81) {//ctrl + Q 
            //                var alink = $('a.titlelnk')[0];
            //                ����target="_BLANK"������û���� Ϊʲô�� �Ҵΰ�
            //                
            //                var ev = document.createEvent('MouseEvents');
            //                ev.initEvent('click', false, true); 
            //                alink.dispatchEvent(ev);
            var alink = $('a.titlelnk',$post_item).attr('href');

               
            GM_openInTab (alink);
        }

        
        if (e.keyCode == 37) 
            $('div.pager>a:first').click();

        else if(e.keyCode == 39)
            $('div.pager>a:last').click();
    //e.preventDefault();
    }).on('mouseenter','div.post_item',function() {
        $post_item = $(this);
            
    })
        
;

} else {
    var $page = $('div.page'),
    $pre = $('a.prew',$page),
    $next = $('a.next',$page);
    $(document).keydown(function(e) {
        if (e.keyCode == 37)
            jump($pre.attr('href'));
        else if(e.keyCode == 39)
            jump($next.attr('href'));
    //e.preventDefault();
    });
    function jump(url) {
        if(url)
            location.href = url;
    }
}
   

