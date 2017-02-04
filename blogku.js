var dataPostM=[];
var numItems = $('.homes').length;
var imPost= $('.homes').find('img').attr('src');
var altPost= $('.homes').find('img').attr('alt');
for (i=0;i<numItems;i++){
   $('.homes:eq('+i+')').html('');
}
