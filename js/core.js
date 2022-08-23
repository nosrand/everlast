

$(document).ready(function(){
  
    detailImgSwap('.productExplain #inputSrc','.productExplain #outputSrc');

    toggleActive();

    reviewRatingStar();

    gloveFinderActive();

    detailColorSwap();
    
    customRange();

    accountPopupActive()

    closePopup();

    addAndRemoveActive('a[data-popName=forgetActive]','div.ForgetPopup','[class*=Popup]');

    addAndRemoveActive('input[data-popName=ShoppingCartActive]','div.ShoppingCart','[class*=Popup]');

    addAndRemoveActive('.footerTop div:nth-of-type(2) ul li:nth-of-type(1) ol li:nth-of-type(2)','div.careerPopup','[class*=Popup]');

    addActive('div.ShoppingCart div:nth-of-type(2) form fieldset ul li:last-of-type','#ShoppingCartComplete');

    addActive('.footerTop div:nth-of-type(1) form fieldset input:nth-of-type(2)','#FooterEmailComplete');

    addActive('.careerPopup form fieldset ul li:nth-of-type(6) input','#careerComplete');
    
    addActive('input[data-popName=listPageDescriptionActive]','#listPageDescription');

    addActive('.headerBottom > input','.headerBottom nav');
})

function toggleActive(){

    $('.listPageContent > div input.filterAndClose').click(function(){
        $('.listPageContent').toggleClass('active')
    })

    $('.listPageContent aside ol li:nth-of-type(2) ul li input').click(function(){
        $(this).toggleClass('active')
    })

    $('input[value="wishheart"]').click(function(){
        $(this).toggleClass('active');
    })

    $('section[class$="Page"] ul li').click(function(){
        $(this).toggleClass('active');
    })

    $('li.careerbutton').click(function(){
        $(this).toggleClass('active');
    })
}

function addActive(clicktarget,addtarget){
    $(clicktarget).click(function(){
        $(addtarget).addClass('active')
    })
}

function addAndRemoveActive(clicktarget,addtarget,removetarget){

    $(clicktarget).click(function(){
        $(removetarget).removeClass('active');
        $(addtarget).addClass('active');
    })
}

function accountPopupActive(){

    $("a[data-popName=loginActive]").click(function(){
        $('.accountPopup').addClass('active');
        $("input[data-popName]").removeClass('active');
        $("input[data-popName=loginActive]").addClass('active');
        $('#signup').removeClass('active');
        $('#login').addClass('active');
    })
    $("a[data-popName=signUpActive]").click(function(){
        $('.accountPopup').addClass('active');
        $("input[data-popName]").removeClass('active');
        $("input[data-popName=signUpActive]").addClass('active');
        $('#login').removeClass('active');
        $('#signup').addClass('active');
    })
    $("input[data-popName=loginActive]").click(function(){
        $("input[data-popName]").removeClass('active');
        $("input[data-popName=loginActive]").addClass('active');
        $('#signup').removeClass('active');
        $('#login').addClass('active');
    })

    $("input[data-popName=signUpActive]").click(function(){
        $("input[data-popName]").removeClass('active');
        $("input[data-popName=signUpActive]").addClass('active');
        $('#login').removeClass('active');
        $('#signup').addClass('active');
    })

    $(".signUpContent div input").click(function(){
        $('.accountPopup').addClass('active');
        $("input[data-popName]").removeClass('active');
        $("input[data-popName=signUpActive]").addClass('active');
        $('#login').removeClass('active');
        $('#signup').addClass('active');
    })
}

function closePopup(){

    $('.popupDialog a').click(function(){
        $('div.ShoppingCart').removeClass('active');
        $('[class*=Popup]').removeClass('active');
        $('[class*=Dialog]').removeClass('active');
    })

    $('input.btn_close').click(function(){
        $('[class*=Popup]').removeClass('active');
        $('#listPageDescription').removeClass('active')
        $('.headerBottom nav').removeClass('active')
    })

    $('input.btn_closeCart').click(function(){
        $('div.ShoppingCart').removeClass('active');
    })
}

function reviewRatingStar(){

    $('input[value="RatingsScore"]').click(function(){
        var currentRatingsScore = $(this).attr('id');

        $('input[value="RatingsScore"]').parent('li').removeClass();

        if(currentRatingsScore == "RatingsScoreInput1"){
            $('input[value="RatingsScore"]').parent('li').addClass('oneStar');
        }else if(currentRatingsScore == "RatingsScoreInput2"){
            $('input[value="RatingsScore"]').parent('li').addClass('twoStar');
        }else if(currentRatingsScore == "RatingsScoreInput3"){
            $('input[value="RatingsScore"]').parent('li').addClass('threeStar');
        }else if(currentRatingsScore == "RatingsScoreInput4"){
            $('input[value="RatingsScore"]').parent('li').addClass('fourStar');
        }else if(currentRatingsScore == "RatingsScoreInput5"){
            $('input[value="RatingsScore"]').parent('li').addClass('fiveStar');
        }
    })
}

function detailColorSwap(){
   
   var inputPath = $('.productExplain div:nth-of-type(1) ol li')

   $('.productExplain div:nth-of-type(2) ul li input').click(function(){
    var valuePath = $(this).val();
    for(i = 0; i <inputPath.length; i++){
        var imgPath = 'images/listPage/' + valuePath + String(i+1) + '.jpg';
        $(inputPath).eq(i).children('img').attr('src',imgPath);
        
        var outputPath = $(inputPath).eq(0).children('img').attr('src');
        $('.productExplain #outputSrc').attr('src', outputPath);
    }
   })

}

function detailImgSwap(btn, imgPlace){
    $(btn).click(function(){
        var currentFileName = $(this).attr('src');
        $(imgPlace).attr('src',currentFileName);
        $('.productExplain div:nth-of-type(1) ol li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
}

function gloveFinderActive(){

    $('.gloveFinderContent > div div input').click(function(){
        $('.gloveFinderContent > div').removeClass('active');
        $('#step0').addClass('active');
    })

    $('li[data-stepName]').click(function(){

        var currentGlovesFinder = $(this).attr('data-stepName');

        $('.gloveFinderContent ul li').removeClass('active');

        if(currentGlovesFinder == "step1"){
            $('#step1').addClass('active');
        }else if(currentGlovesFinder == 'step2'){
            $('#step2').addClass('active');
        }else if(currentGlovesFinder == 'step3'){
            $('#step3').addClass('active');
        }else if(currentGlovesFinder == 'step4'){
            $('#step4').addClass('active');
        }else if(currentGlovesFinder == 'step5'){
            $('#step5').addClass('active');
        }else if(currentGlovesFinder == 'step6'){
            $('#step6').addClass('active');
        }else if(currentGlovesFinder == 'step7'){
            $('#step7').addClass('active');
        }else if(currentGlovesFinder == 'step8'){
            $('#step8').addClass('active');
        }else if(currentGlovesFinder == 'step9'){
            $('#step9').addClass('active');
        }else if(currentGlovesFinder == 'step10'){
            $('#step10').addClass('active');
        }else if(currentGlovesFinder == 'step11'){
            $('#step11').addClass('active');
        }else if(currentGlovesFinder == 'step12'){
            $('#step12').addClass('active');
        }else if(currentGlovesFinder == 'step13'){
            $('#step13').addClass('active');
        }else if(currentGlovesFinder == 'step14'){
            $('#step14').addClass('active');
        }else if(currentGlovesFinder == 'step15'){
            $('#step15').addClass('active');
        }
    })  
}

function customRange(){
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    function handleInputChange(e) {
        let target = e.target;
        if (e.target.type !== 'range') {
        target = document.getElementById('range');
        } 
        const min = target.min
        const max = target.max
        const val = target.value
        
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    
        var inputValue = $('input[type="range"]').val();
        var inputMaxValue = $('input[type="range"]').attr('max');
        var outputRange;
        
        var rangeleft = $('#rangevalue').css('left');
        if(rangeleft < '0%'){
            $('#rangevalue').css('left','0%');
        }

        if (matchMedia("screen and (min-width: 1280px)").matches) {
            var outputRange = inputValue / inputMaxValue * 100 - 12 + '%';
            $('#rangevalue').css('left',outputRange);
            var rangeleft = $('#rangevalue').css('left');
            if(rangeleft < '0%'){
                $('#rangevalue').css('left','0%');
            }
        }else if(matchMedia("screen and (min-width:768px) and (max-width:1279px)").matches){
            var outputRange = inputValue / inputMaxValue * 100 - 15 + '%';
            $('#rangevalue').css('left',outputRange);
            var rangeleft = $('#rangevalue').css('left');
            if(rangeleft < '0%'){
                $('#rangevalue').css('left','0%');
            }
        }else if(matchMedia("screen and (max-width:767px)").matches){
            var outputRange = inputValue / inputMaxValue * 100 - 18 + '%';
            $('#rangevalue').css('left',outputRange);
            var rangeleft = $('#rangevalue').css('left');
            if(rangeleft < '0%'){
                $('#rangevalue').css('left','0%');
            }
        }
    }
    
    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });




}