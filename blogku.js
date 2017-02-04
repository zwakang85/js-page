var dataPostM=[];
var numItems = $('.homes').length;
function setPost(){
for (i=0;i<numItems;i++){
   var imPost= $('.homes:eq('+i+')').find('img').attr('src');
   var altPost= $('.homes:eq('+i+')').find('img').attr('alt');
   var linkPost=$('.homes:eq('+i+')').find('post-title a').attr('href');
   $('.homes:eq('+i+')').html('');
   $('.homes:eq('+i+')').html('<a href="'+linkPost+'"><img src="'+imPost+'" alt="'+altPost+'" class="img-responsive"/></a>');
   $('.homes:eq('+i+')').addClass( "grid-item" );
}
}
setPost();
