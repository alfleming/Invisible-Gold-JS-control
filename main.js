function confirm_message(message)
{ return confirm(message); }
function confirm_deletetopic(message)
{ if (confirm("You are about to delete: " + message + "!  Are you sure you want to continue?")) {return true;} else {return false;} }
function confirm_delete(message)
{ return confirm("You are about to delete: " + message + ", and all the pages under it.  Are you sure you want to continue?"); }
function confirm_delete2()
{ return confirm("You are about to delete this image.  Are you sure you want to continue?"); }
function confirm_move()
{ return confirm("You are about move this item.  Are you sure you want to continue?"); }
function confirm_deleteitem(message)
{ return confirm("You are about to delete the item: " + message + ".  Are you sure you want to continue?"); }
function confirm_deletefile(message)
{ if (confirm("You are about to delete file: " + message + "!  Are you sure you want to continue?")){return true;}else{return false;}}
function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
function loadcss(filename, filetype){
	var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("media", "all")
		fileref.setAttribute("href", filename)
	if (typeof fileref!="undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}

var domainname = '//' + window.location.host;
var frameworkname = 'default2015';
var stylesheetlocation = domainname + '/Frameworks/' + frameworkname + '/css/'

//loadcss(stylesheetlocation + "font-awesome.min.css", "css");
loadcss(stylesheetlocation + "bootstrap-social.min.css", "css");
include('//use.fontawesome.com/2e09ea3714.js');
include(domainname + '/Frameworks/' + frameworkname + '/js/bootstrap.min.js');

;
(function ($) {
	var magone = $(".mfp-youtube");
	var magtwo = $(".gallery-popup-link");
	var magthree = $("#gallery-paginater-carousel");
    if (magone.length || magtwo.length || magthree.length) {
		loadcss(stylesheetlocation + "magnific-popup.min.css", "css");
       include(domainname + '/Frameworks/' + frameworkname + '/js/jquery.magnific-popup.min.js');
    }
})
(jQuery);

;
(function ($) {
	var slickone = $("#gallery-carousel");
	var slicktwo = $("#carousel-emg-testimonials");
	var slickthree = $(".slick-enable");
	var slickfour = $(".slick-enable-default");
	var slickfive = $(".slick-enable-here");
	var slicksix = $("#video-carousel");
    if (slickone.length || slicktwo.length || slickthree.length || slickfour.length || slickfive.length || slicksix.length) {
		loadcss(stylesheetlocation + "slick.min.css", "css");
       include(domainname + '/Frameworks/' + frameworkname + '/js/slick.min.js');
    }
})
(jQuery);

;
(function ($) {
    if ($("#signup").length) {
       include(domainname + '/Frameworks/' + frameworkname + '/js/jquery.validate.min.js');
        $(document).ready(function () {
				var form = $( '#signup' );
				form.validate();
		});
    }
})
(jQuery);


;
(function ($) {
    if ($(".mfp-youtube").length) {
        $(document).ready(function() {
					$('.mfp-youtube').magnificPopup({
						type: 'iframe',
						mainClass: 'mfp-fade',
						removalDelay: 0,
						preloader: false,
						fixedContentPos: false
					});
			});
    }
})
(jQuery);



;
(function ($) {
    if ($(".gallery-popup-link").length) {
        $(document).ready(function() {
			$('.gallery-popup-link').magnificPopup({type:'image', gallery:{enabled:true},titleSrc: 'title'});
		});
    }
})
(jQuery);

;
(function ($) {
    if ($("#gallery-paginater-carousel").length) {
        $(document).ready(function() {
			$('.magnific-img-link').magnificPopup({type:'image',gallery:{enabled:true},titleSrc: 'title'});
			var slicer = $(".thumb-collector");
				for(var i = 0; i < slicer.length; i+=16) {slicer.slice(i, i+16).wrapAll("<div class='item'></div>");};
			$('.item:first').addClass('active');
			$('#gallery-paginater-carousel.carousel').carousel({interval: false});
		});
    }
})
(jQuery);


;
(function ($) {
    if ($('#registerform').length) {
        include(domainname + '/Frameworks/' + frameworkname + '/js/jquery.validate.min.js');
        $(document).ready(function () {
            $(document).ready(function() {
				var form = $( '#registerform' );
				form.validate();
        	});
		});
    }
})(jQuery);


;
(function ($) {
    if ($('#gallery-carousel').length) {
        $(document).ready(function () {
				$('.thumb-par').slick({
				  centerMode: true,
				  centerPadding: '60px',
				  slidesToShow: 4,
				  focusOnSelect: true,
				  responsive: [
					{
					  breakpoint: 768,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 4
					  }
					},
					{
					  breakpoint: 499,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					  }
					}
				  ]
			});
        });
    }
})(jQuery);

;
(function ($) {
    if ($('#carousel-emg-testimonials').length) {
        $(document).ready(function () {
			$('#carousel-emg-testimonials').slick({arrows: false, dots: true});
        });
    }
})(jQuery);

;
(function ($) {
    if ($('#bootstrap-carousel').length) {
		$(document).ready(function() {
				$('#bootstrap-carousel').carousel({interval: 7500});
		});
    }
})(jQuery);

;
(function ($) {
    if ($('#birthdayselection').length) {
		document.write('<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>');
		$(document).ready(function() {
			$(function() {
				$( "#birthdayselection" ).datepicker({
					changeMonth: true,
        			changeYear: false,
        			showButtonPanel: true,
        			dateFormat: 'MM dd'
				});
			  });
		});
    }
})(jQuery);

;
(function ($) {
    if ($('.tooltp').length) {
		$(document).ready(function() {
			$('.tooltp').tooltip();
		});
    }
})(jQuery);
		
		;
(function ($) {
    if ($('#commentform').length) {
		include(domainname + '/Frameworks/' + frameworkname + '/js/jquery.validate.min.js');
		$(document).ready(function() {
			var form = $( '#commentform' );
			form.validate();
		});
    }
})(jQuery);



;
(function ($) {
    if ($('#video-carousel').length) {
		$(document).ready(function() {
			$('.slick-enable-video').slick({
				centerPadding: '60px',
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
				responsive: [
				{
					breakpoint: 768,
					settings: {
					centerPadding: '40px',
					slidesToScroll: 4,
					slidesToShow: 2
				}
				},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
							slidesToScroll: 1,
							slidesToShow: 1
					}
				}
				]
			});
			$('.carousel').carousel({pause:'false'});
		}); 
    }
})(jQuery);

;
(function ($) {
    if ($('.slick-enable-default').length) {
        $(document).ready(function () {
				$('.slick-enable-default').slick({
				  centerMode: true,
				  centerPadding: '60px',
				  slidesToShow: 4,
				  focusOnSelect: true,
				  responsive: [
					{
					  breakpoint: 768,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 4
					  }
					},
					{
					  breakpoint: 499,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					  }
					}
				  ]
			});
        });
    }
})(jQuery);

;
(function ($) {
    if ($('.slick-enable-here').length) {
        $(document).ready(function () {
				$('.slick-enable-here').slick({
				  centerMode: false,
				  arrows: true,
				  centerPadding: '60px',
				  slidesToShow: 4,
				  focusOnSelect: true,
				  responsive: [
					{
					  breakpoint: 768,
					  settings: {
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 4
					  }
					},
					{
					  breakpoint: 499,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					  }
					}
				  ]
			});
        });
    }
})(jQuery);

;
(function ($) {
    if ($('.slick-enable').length) {
        $(document).ready(function () {
				$('.slick-enable').slick({
	  centerPadding: '60px',
	  slidesToShow: 4,
  	  slidesToScroll: 1,
	  infinite: true,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			centerPadding: '40px',
			slidesToScroll: 1,
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToScroll: 1,
			slidesToShow: 1
		  }
		}
	  ]
			});
        });
    }
})(jQuery);