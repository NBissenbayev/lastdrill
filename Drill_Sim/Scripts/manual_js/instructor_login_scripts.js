var fullscreen_off_height = $(window).height();
var isClickedPracticeOrExam = 0;
var isDriller = 0;
var indexOfChosenDriller = -1;
var indexOfChosenSnapshot = -1;

var imagePath = 'http://localhost:52863/Content/Images/';

function repaint_window(onOff){
		var width = $(window).width();
  		var height = $(window).height();

        $('body').css('font-size',(width*18)/1920);
                     
        if(onOff=='on'){
	        if((width/height)<=(16/9)){
	            $(".container").width(width).height(width/(16/9));	
			}else $(".container").width(height*(16/9)).height(height);
		}else{
			if((width/fullscreen_off_height)<=(16/9)){
			$(".container").width(width).height(width/(16/9));	
			}else $(".container").width(fullscreen_off_height*(16/9)).height(fullscreen_off_height);
		}
}

$(document).ready(function () {

    $('.instructor_login_submit_btn').click(function () {
        console.log("btn clicked");
        alert("I am clicked!");
        $('#login_form_id').submit();
    });

	repaint_window('on');
});


$(window).on("fullscreen-on", function(){
	repaint_window('on');
});

$(window).on("fullscreen-off", function(){
	repaint_window('off');                
});