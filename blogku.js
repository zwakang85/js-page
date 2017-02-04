var dataPostM=[];
var numItems = $('.homes').length;
function setPost(){
for (i=0;i<numItems;i++){
   var imPost= $('.homes:eq('+i+')').find('img').attr('src');
   var altPost= $('.homes:eq('+i+')').find('img').attr('alt');
   $('.homes:eq('+i+')').html('');
}
}
