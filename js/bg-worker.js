/**
 * Created by jkorzekwa on 3/12/2015.
 */
var InfiniteRotator =
{
    init: function()
    {
        //initial fade-in time (in milliseconds)
        var initialFadeIn = 1000;

        //interval between items (in milliseconds)
        var itemInterval = 8000;

        //cross-fade time (in milliseconds)
        var fadeTime = 2500;

        //count number of items
        var numberOfItems = $('.rotating-item').length;

        //set current item
        var currentItem = 0;
        var prevItem = 0;

        //show first item
        $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

        //loop through the items
        var infiniteLoop = setInterval(function(){
            prevItem = currentItem
            if(currentItem == numberOfItems -1){
                currentItem = 0;
            }else{
                currentItem++;
            }
            $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
            $('.rotating-item').eq(prevItem).fadeOut(fadeTime);

        }, itemInterval);
    }
};

InfiniteRotator.init();