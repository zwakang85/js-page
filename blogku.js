var dataPostM=[];
var numItems = $('.homes').length;
var countM=0;
function setPost(){
for (i=0;i<numItems;i++){
   var imPost= $('.homes:eq('+i+')').find('img').attr('src');
   var altPost= $('.homes:eq('+i+')').find('img').attr('alt');
   var linkPost=$('.homes:eq('+i+')').find('.post-title a').attr('href');
   $('.homes:eq('+i+')').html('');
   dataPostM['img'+i]=imPost;
   dataPostM['alt'+i]=altPost;
   dataPostM['link'+i]=linkPost;
   //$('.homes:eq('+i+')').html('<a href="'+linkPost+'"><img src="'+imPost+'" alt="'+altPost+'" class="img-responsive"/></a>');
//   $('.homes:eq('+i+')').addClass( "grid-item" );
}
   
}
setPost();
function showPost(){
  $('.homes:eq('+countM+')').html('<a href="'+dataPostM['link'+countM]+'"><img src="'+dataPostM['img'+countM]+'" alt="'+dataPostM['img'+countM]+'" class="img-responsive"/></a>');
   $('.homes:eq('+countM+')').addClass( "grid-item" );
   $('.homes:eq('+countM+')').imagesLoaded( {
  // options...
  },
  function() {
      $('.grid').masonry({
  itemSelector: 'grid-item'
});
     if(countM!=numItems){
        showPost();
     }
       countM++;
  });
}
showPost();
