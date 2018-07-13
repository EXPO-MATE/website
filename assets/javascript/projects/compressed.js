function setCookie(t,e,n){var o="";if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),o="; expires="+a.toUTCString()}document.cookie=t+"="+(e||"")+o+"; path=/"}function getCookie(t){for(var e=t+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}function eraseCookie(t){document.cookie=t+"=; Max-Age=-99999999;"}function chooseCookie(){var t=navigator.language||navigator.userLanguage,e=getCookie("lang");null!=e&&""!==e||(t.match(/de/g)?setCookie("lang","en",7):t.match(/en/g)?setCookie("lang","en",7):(t.match(/nl/g),setCookie("lang","nl",7))),setTimeout(function(){$("#nav .active-loc").html(getCookie("lang"))},200)}function fixNav(t){var e=$("#nav");500<=t?e.addClass("fixed"):e.removeClass("fixed")}var map;function googleMapsInit(){var t=new google.maps.LatLng(51.372027,6.160478),e={zoom:15,center:t,scrollwheel:!1,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,disableDefaultUI:!0,styles:[{featureType:"landscape",stylers:[{visibility:"simplified"},{color:"#2b3f57"},{weight:.1}]},{featureType:"administrative",stylers:[{visibility:"on"},{hue:"#ff0000"},{weight:.4},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{weight:1.3},{color:"#FFFFFF"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:3}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:1.1}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#f55f77"},{weight:.4}]},{},{featureType:"road.highway",elementType:"labels",stylers:[{weight:.8},{color:"#ffffff"},{visibility:"on"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{color:"#ffffff"},{weight:.7}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{color:"#6c5b7b"}]},{featureType:"water",stylers:[{color:"#f3b191"}]},{featureType:"transit.line",stylers:[{visibility:"on"}]}]};map=new google.maps.Map(document.getElementById("map-canvas"),e);var n=new google.maps.Marker({position:t,icon:"//jansmolders.nl/expo-mate/assets/images/marker.png",map:map}),o=new google.maps.InfoWindow({content:$(".contact-details-map").html()});450<$(window).width()&&map.panBy(200,-150),google.maps.event.addListener(n,"click",function(){o.open(map,n)})}chooseCookie(),$(function(){var o=!1,a=$("#nav ul"),i=$(".hamburger"),t=$(window).scrollTop();$("#nav li a").on("click",function(t){t.preventDefault();var e=$(this).attr("href");if(-1!==e.indexOf("."))window.location.href=e;else if($(this).hasClass("loc"))eraseCookie("lang"),setCookie("lang",e,7),window.location.reload();else if(-1!==e.indexOf("#")){var n=$(e).offset().top;$("html, body").animate({scrollTop:n})}o&&(i.removeClass("is-active"),a.removeClass("open"),o=!1)}),i.click(function(){$(this).toggleClass("is-active"),a.toggleClass("open"),o=!0}),$(window).on("scroll",function(){fixNav(~~$(this).scrollTop())}),$(".contact-btn").on("click",function(){var t=$("footer").offset().top;$("html, body").animate({scrollTop:t})}),fixNav(t)}),$(function(){var v=$("body");$.ajax({url:"./assets/json/content.bin",scriptCharset:"utf-8",type:"GET",success:function(t){var e=JSON.parse(decodeURIComponent(escape(window.atob(t))))[getCookie("lang")],n=e.nav.labels,o=e.pages.homepage,a=o.header.content,i=o.content.intro,s=i.images,c=o.content.about,d=o.content.aboutUs,r=o.content.values,l=o.content.comparison,f=o.content.method,h=o.content.model,m=o.content.projects,p=o.footer;if(e&&v.removeClass("loading"),n){var u=$("#nav > ul > li ");u.find('a[href="#preabout"]').html(n.about),u.find('a[href="index.html#preabout"]').html(n.about),u.find('a[href="#method"]').html(n.method),u.find('a[href="index.html#method"]').html(n.method),u.find('a[href="#values"]').html(n.values),u.find('a[href="index.html#values"]').html(n.values),u.find('a[href="#aboutUs"]').html(n.aboutUs),u.find('a[href="index.html#aboutUs"]').html(n.aboutUs),u.find('a[href="projects.html"]').html(n.projects),u.find('a[href="#footer"]').html(n.contact),u.find('a[href="#footer"]').html(n.contact),u.find('a[href="#mission"]').html(n.mission),u.find('a[href="index.html#mission"]').html(n.mission),u.find('a[href="#model"]').html(n.model),u.find('a[href="index.html#model"]').html(n.model),u.find('a[href="#foundation"]').html(n.foundation),u.find('a[href="index.html#foundation"]').html(n.foundation),u.find('a[href="#comparison"]').html(n.comparison),u.find('a[href="index.html#comparison"]').html(n.comparison)}a&&($(".background-video").css({backgroundImage:a.backgroundImageSrc}),$(".youtube-video-embed iframe").attr("id",a.youtubeURL).attr("src","https://www.youtube.com/embed/"+a.youtubeURL+"?autoplay=0&rel=0&fs=1&enablejsapi=1"),$("video source#mp4").attr("src",a.backgroundVideoMp4Src),$("video source#webm").attr("src",a.backgroundVideoWebMSrc),v.find("[data-content='header-content-title']").html(a.header)),i&&(v.find("[data-content='content-intro-title']").html(i.header),v.find("[data-content='content-intro-desc']").html(i.description),0<$(".brandlist").length&&$.each(s,function(t,e){e.src&&v.find(".brandlist").append('<li><img src="'+e.src+'" alt="'+e.alt+'" /></li>')})),c&&(v.find("[data-content='content-about-row1-title']").html(c.row1.header),v.find("[data-content='content-about-row1-image']").css({backgroundImage:c.row1.image.src}),v.find("[data-content='content-about-row1-desc']").html(c.row1.description),v.find("[data-content='content-about-row2-title']").html(c.row2.header),v.find("[data-content='content-about-row2-image']").css({backgroundImage:c.row2.image.src}),v.find("[data-content='content-about-row2-desc']").html(c.row2.description)),d&&(v.find("[data-content='content-aboutUs-title']").html(d.header),v.find("[data-content='content-aboutUs-description']").html(d.description),v.find("[data-content='content-employee-niek-image']").attr("src",d.employees.niek.image.src).attr("alt",d.employees.niek.image.alt),v.find("[data-content='content-employee-niek-title']").html(d.employees.niek.header),v.find("[data-content='content-employee-niek-desc']").html(d.employees.niek.description),v.find("[data-content='content-employee-jan-image']").attr("src",d.employees.jan.image.src).attr("alt",d.employees.jan.image.alt),v.find("[data-content='content-employee-jan-title']").html(d.employees.jan.header),v.find("[data-content='content-employee-jan-desc']").html(d.employees.jan.description)),r&&(v.find("[data-content='content-values-image']").css({backgroundImage:r.image.src}),v.find("[data-content='content-values-title']").html(r.header),v.find("[data-content='content-values-desc']").html(r.description),v.find("[data-content='content-value1']").html(r.values.value1),v.find("[data-content='content-value2']").html(r.values.value2),v.find("[data-content='content-value3']").html(r.values.value3),v.find("[data-content='content-value4']").html(r.values.value4),v.find("[data-content='content-value5']").html(r.values.value5),v.find("[data-content='content-value6']").html(r.values.value6)),f&&(v.find("[data-content='content-method-title']").html(f.header),v.find("[data-content='content-method-desc']").html(f.description),v.find("[data-content='content-method-hoverLabel']").html(f.hoverLabel),v.find("[data-content='content-method-intro-title']").html(f.methods.intro.header),v.find("[data-content='content-method-intro-desc']").html(f.methods.intro.description),v.find("[data-content='content-method-design-title']").html(f.methods.design.header),v.find("[data-content='content-method-design-desc']").html(f.methods.design.description),v.find("[data-content='content-method-tuning-title']").html(f.methods.tuning.header),v.find("[data-content='content-method-tuning-desc']").html(f.methods.tuning.description),v.find("[data-content='content-method-construction-title']").html(f.methods.construction.header),v.find("[data-content='content-method-construction-desc']").html(f.methods.construction.description),v.find("[data-content='content-method-eval-title']").html(f.methods.eval.header),v.find("[data-content='content-method-eval-desc']").html(f.methods.eval.description)),h&&(v.find("[data-content='content-model-title']").html(h.header),v.find("[data-content='content-model-image']").css({backgroundImage:h.image.src}),v.find("[data-content='content-model-desc']").html(h.description)),m&&(v.find("[data-content='content-projects-title']").html(m.header),v.find("[data-content='content-projects-desc']").html(m.description),v.find("[data-content='content-projects-button']").html(m.button.label),v.find("[data-content='content-project1-image']").attr("src",m.project1.image.src).attr("alt",m.project1.image.alt),v.find("[data-content='content-project1-title']").html(m.project1.header),v.find("[data-content='content-project1-btn']").html(m.project1.button),v.find("[data-content='content-project2-image']").attr("src",m.project2.image.src).attr("alt",m.project2.image.alt),v.find("[data-content='content-project2-title']").html(m.project2.header),v.find("[data-content='content-project2-btn']").html(m.project2.button)),l&&(v.find("[data-content='content-projects-comparison-title']").html(l.header),v.find("[data-content='content-projects-comparison-desc']").html(l.description)),p&&(v.find("[data-content='footer-testimonials-title']").html(p.testimonials.header),v.find("[data-content='footer-contacts-header']").html(p.contacts.header),v.find("[data-content='footer-contacts-jan-title']").html(p.contacts.jan.header),v.find("[data-content='footer-contacts-jan-email']").attr("href",p.contacts.jan.links.email.src).html(p.contacts.jan.links.email.header),v.find("[data-content='footer-contacts-linkedin-jan']").attr("href",p.contacts.jan.links.linkedin.src),v.find("[data-content='footer-contacts-linkedin-jan-title']").html(p.contacts.jan.links.linkedin.header+" "),v.find("[data-content='footer-contacts-call-jan-phone']").attr("href",p.contacts.jan.phone),v.find("[data-content='footer-contacts-niek-title']").html(p.contacts.niek.header),v.find("[data-content='footer-contacts-niek-email']").attr("href",p.contacts.niek.links.email.src).html(p.contacts.niek.links.email.header),v.find("[data-content='footer-contacts-linkedin-niek']").attr("href",p.contacts.niek.links.linkedin.src),v.find("[data-content='footer-contacts-linkedin-niek-title']").html(p.contacts.niek.links.linkedin.header+" "),v.find("[data-content='footer-contacts-call-niek-phone']").attr("href",p.contacts.niek.phone),v.find("[data-content='footer-contacts-phone-header']").html(p.phone.header),v.find("[data-content='footer-contacts-visit-header']").html(p.visit.header),v.find("[data-content='footer-contacts-visit-desc']").html(p.visit.description),v.find("[data-content='footer-copyright-desc']").html(p.copyright.description))}})}),google.maps.event.addDomListener(window,"load",googleMapsInit);var testimonial=$("#google-reviews");function reviewSlider(){testimonial.removeClass("hidden"),testimonial.not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,infinite:!1,autoplaySpeed:8e3,arrows:!0})}function sliderInit(t){"string"==typeof t&&$("#"+t+" .slider").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,arrows:!0})}$(function(){$.ajax({url:"./assets/json/content.bin",scriptCharset:"utf-8",type:"GET",success:function(t){var e=JSON.parse(decodeURIComponent(escape(window.atob(t))))[getCookie("lang")].pages.projects;$.each(e,function(t,e){var n=e.review,o=n.author||"",a=n.description||"",i=n.date||"",s=o.replace(/[^A-Z0-9]+/gi,"-").toLowerCase(),c=n.stars||"";n&&void 0!==n&&""!==a&&void 0!==a&&(testimonial.addClass("hidden"),0<testimonial.length&&(testimonial.append('<div class="review" id="'+s+'">\n               <div class="review-author">'+o+'</div>\n               <div class="review-date">'+i+'</div>\n               <div class="review-stars"><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full fifth"></i></div>\n               <div class="review-text">'+n.description+"</div>\n            </div>"),4===c&&$(".review-stars").find(".fifth").remove()))}),setTimeout(function(){reviewSlider()},1e3)}})}),$(function(){if($("body").hasClass("projects")){var p=window.location.hash;$.ajaxSetup({scriptCharset:"utf-8",contentType:"application/json; charset=utf-8"}),$.ajax({url:"./assets/json/content.bin",scriptCharset:"utf-8",type:"GET",success:function(t){var e=JSON.parse(decodeURIComponent(escape(window.atob(t)))),n=getCookie("lang"),h=e[n].pages.homepage.content.projects.reviewLink||"",o=e[n].pages.projects,m=$("#projects .projects-wrapper");$.each(o,function(t,e){var n=[],o=e.images,a=parseInt(t)+1,i=e.review,s=i.author||"",c=i.description||"",d=i.date||"",r=s.replace(/[^A-Z0-9]+/gi,"-").toLowerCase(),l=i.stars||"";if(o&&0<o.length&&$.each(o,function(t,e){e&&n.push('<div class="project-image" style="background-image: url('+e.src+')"></div>')}),m.append('<div class="project" id="project'+a+'">\n\t<div class="project-close"></div>\n\t<div class="project-wrapper">\n\t\t<div class="project-images">\n\t\t\t<div class="slider">'+n.join("")+'</div>\n\t\t</div>\n\t\t<div class="project-desc-wrapper">\n\t\t\t<div class="project-desc-content">\n\t\t\t\t<div class="project-header">\n\t\t\t\t\t<h2 class="project-title">'+e.header+'</h2>\n\t\t\t\t\t<div class="project-sub-title">'+e.subTitle+'</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="project-desc"> \n\t\t\t\t   <span>'+e.description+'</span> \n\t\t\t\t   <a class="read-review" data-count="'+a+'">'+h+" "+e.header+'</a> \n\t\t\t   </div>\n\t\t\t</div>\n\t\t</div> \n\t</div>\n\t<div class="project-review">\n\t\t<div class="review-close"></div> \n\t\t<div class="review" id="'+r+'">\n\t\t\t<div class="review-author">'+s+'</div>\n\t\t\t<div class="review-date">'+d+'</div>\n           <div class="review-stars"><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full fifth"></i></div>\n\t\t\t<div class="review-text">'+c+"</div>\n\t\t</div>\n\t</div>\n</div>"),4===l&&$(".review-stars").find(".fifth").remove(),void 0!==i&&""!==c&&void 0!==c||$("#project"+a).find(".read-review").addClass("hidden"),$(".project-images").on("click",function(){if(!$("body").hasClass("open")){$(this).parent().parent(".project").addClass("open");var t=$(this).parent().parent(".project").attr("id");document.location.href="#"+t,$("body").addClass("open"),sliderInit(t)}}),$(".project-title").on("click",function(){if(!$("body").hasClass("open")){var t=$(this).parent().parent().parent().parent().parent();t.addClass("open");var e=t.attr("id");document.location.href="#"+e,$("body").addClass("open"),sliderInit(e)}}),$(".project-close").on("click",function(){$("body").removeClass("open"),$(this).parent(".project").removeClass("open");var t=$(this).parent(".project").attr("id");$("#"+t+" .slider").slick("unslick"),window.location.hash="",document.getElementById(t).scrollIntoView(!0)}),$(".read-review").on("click",function(t){t.preventDefault();var e=$(this).attr("data-count");$("#project"+e).addClass("show-review").find(".project-review").addClass("show")}),$(".review-close").on("click",function(){$(this).parent().removeClass("show").parent(".project").removeClass("show-review")}),p&&void 0!==p){var f="project"+a;f===(p=window.location.hash.substring(1))&&($("#"+p).addClass("open"),$("body").addClass("open"),sliderInit(f))}})}})}});