$(function() {		
});

//레이어 공통
function commonPop(name, option) {
    var opt = {
        escape:false,
        scrolllock: true,
        transition: 'all 0.3s',
        opacity: 0.6
    }
    $.extend(opt, option);
    $(name).popup(opt);
}

// 22.07.01 이현진 장바구니 토스트 팝업 추가
function toast(msg, timer) {
	if (!timer) { timer = 2000; }
	var $elem = $("<div class='toastWrap'><span class='toast'>" + msg + "</span></div>");
	$("#toast").append($elem); //top = prepend, bottom = append
	$elem.slideToggle(100, function() {
		$('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
		if (!isNaN(timer)) {
			setTimeout(function() {
				$elem.fadeOut(function() {
					$(this).remove();
				});
			}, timer);			
		}
	});
}