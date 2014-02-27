// ==UserScript==
// @name       DoubanFM-favorlist-tool
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Download myFavorList of DoubanFM
// @match      http://douban.fm/mine
// @copyright  2014 Sayue
// ==/UserScript==

$(document).ready(function(){
	$('#related_artists').append("<input type='submit' id='show_favors' value='显示我的红心歌曲名称'  />");
});

$('#show_favors').click(function(){
   	//alert('test');
    var myFavors = new Array();
    var j = 0;
     $('p').filter('.song_title').each(function(i){
    	myFavors[j++] = $(this).html()+'\n';
    });
    //document.write(myFavors);
    var x;
    document.write('红心歌曲列表如下：'+'<br/>');
    for(x in myFavors){
    	document.write(myFavors[x]+'<br/>');
    }
});