jQuery(document).ready(function(){
  var scripts = document.getElementsByTagName("script");
  var jsFolder = "";
  for (var i= 0; i< scripts.length; i++)
  {
    if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))
    jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
  }
  if ($(window).width() <= 1200 ) {
    amazingMobile();
  }else{
    amazing();
  }
  function amazingMobile(){
    jQuery("#amazingslider-1").amazingslider({

      sliderid:1,
      width:1200,

      height:500,

      jsfolder:jsFolder,

      skinsfoldername:"",

      loadimageondemand:false,

      videohidecontrols:false,

      donotresize:false,

      enabletouchswipe:true,

      fullscreen:false,

      autoplayvideo:false,

      addmargin:true,

      transitiononfirstslide:false,

      forceflash:false,

      isresponsive:true,

      forceflashonie11:true,

      forceflashonie10:true,

      pauseonmouseover:false,

      playvideoonclickthumb:true,

      slideinterval:5000,

      fullwidth:true,

      randomplay:false,

      scalemode:"fill",

      loop:0,

      autoplay:true,

      navplayvideoimage:"play-32-32-0.png",

      navpreviewheight:60,

      timerheight:2,

      descriptioncssresponsive:"font-size:12px;",

      shownumbering:false,

      navthumbresponsivemode:"samesize",

      skin:"Content",

      textautohide:true,

      lightboxshowtwitter:false,

      addgooglefonts:false,

      navshowplaypause:true,

      initsocial:false,

      navshowplayvideo:true,

      navshowplaypausestandalonemarginx:8,

      navshowplaypausestandalonemarginy:8,

      navbuttonradius:0,

      navthumbcolumn:5,

      navthumbnavigationarrowimageheight:32,

      navradius:0,

      navthumbsmallcolumn:3,

      lightboxshownavigation:true,

      showshadow:false,

      navfeaturedarrowimagewidth:16,

      lightboxshowsocial:false,

      navpreviewwidth:120,

      googlefonts:"",

      navborderhighlightcolor:"",

      navcolor:"#999999",

      lightboxdescriptionbottomcss:"{color:#333; font-size:12px; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",

      lightboxthumbwidth:80,

      navthumbnavigationarrowimagewidth:32,

      navthumbtitlehovercss:"text-decoration:underline;",

      navthumbmediumheight:64,

      texteffectresponsivesize:600,

      arrowwidth:40,//arrow width
      texteffecteasing:"easeOutCubic",

      texteffect:"slide",

      lightboxthumbheight:60,

      navspacing:8,

      navarrowimage:"navarrows-28-28-0.png",

      ribbonimage:"ribbon_topleft-0.png",

      navwidth:32,

      navheight:32,

      arrowimage:"arrows-32-32-4.png",

      timeropacity:0.6,

      titlecssresponsive:"font-size:12px;",

      navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",

      navshowplaypausestandalone:false,

      texteffect1:"slide",

      navpreviewbordercolor:"#ffffff",

      texteffect2:"slide",

      customcss:"",

      ribbonposition:"topleft",

      navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

      lightboxtitlebottomcss:"{color:#333; font-size:14px; overflow:hidden; text-align:left;}",

      arrowstyle:"mouseover",

      navthumbmediumsize:800,

      navthumbtitleheight:20,

      navpreviewarrowheight:8,

      textpositionmargintop:20,

      navshowbuttons:false,//margin top of title

      buttoncssresponsive:"",

      texteffectdelay:500,

      navswitchonmouseover:false,

      playvideoimage:"playvideo-64-64-0.png",

      arrowtop:50,

      textstyle:"dynamic",

      playvideoimageheight:64,

      navfonthighlightcolor:"#666666",

      showbackgroundimage:false,

      showpinterest:true,

      navpreviewborder:4,

      navshowplaypausestandaloneheight:28,

      navdirection:"horizontal",

      navbuttonshowbgimage:true,

      navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

      textbgcss:"display:none;",

      playvideoimagewidth:64,

      buttoncss:"display:block; position:relative; float:left; border-radius:30px; padding: 15px !important;",

      navborder:4,

      navshowpreviewontouch:false,

      bottomshadowimagewidth:96,

      showtimer:true,

      navmultirows:false,

      navshowpreview:false,

      navmarginy:-40,

      navmarginx:16,//margin-bottom navigation

      navfeaturedarrowimage:"featuredarrow-16-8-0.png",

      texteffectslidedirection1:"right",

      showribbon:false,

      navstyle:"bullets",

      textpositionmarginleft:20,//margin left of title

      descriptioncss:"display:block; position:relative; font-weight:300; font-style:normal; font-size:15px;text-transform: uppercase;  line-height:18px; color:#555; padding:10px; text-align:left",

      navplaypauseimage:"navplaypause-28-28-0.png",

      backgroundimagetop:-10,

      timercolor:"#ffffff",

      numberingformat:"%NUM/%TOTAL ",

      navthumbmediumwidth:64,

      navfontsize:12,

      navhighlightcolor:"#333333",

      texteffectdelay1:1000,

      navimage:"bullet-16-16-1.png",

      texteffectdelay2:1500,

      texteffectduration1:600,

      navshowplaypausestandaloneautohide:false,

      texteffectduration2:600,

      navbuttoncolor:"#999999",

      navshowarrow:true,

      texteffectslidedirection:"left",

      navshowfeaturedarrow:false,

      lightboxbarheight:64,

      showfacebook:true,

      titlecss:"display:table; position:relative; font-weight:300; text-transform: uppercase;   font-family: 'SFUFutura-Bold'; font-size:66px; text-shadow: 0 5px 10px #7d7d7d;  color:#fdaf49; padding:10px",

      ribbonimagey:0,

      ribbonimagex:0,

      texteffectresponsive:true,

      navthumbsmallheight:48,

      texteffectslidedistance1:60,

      texteffectslidedistance2:60,

      navrowspacing:8,

      navshowplaypausestandaloneposition:"bottomright",

      lightboxshowpinterest:false,

      lightboxthumbbottommargin:8,

      lightboxthumbtopmargin:12,

      arrowhideonmouseleave:1000,

      navshowplaypausestandalonewidth:28,

      showsocial:false,

      navthumbresponsive:false,

      navfeaturedarrowimageheight:8,

      navopacity:0.8,

      textpositionmarginright:24,

      backgroundimagewidth:120,

      bordercolor:"#ffffff",

      border:0,

      navthumbtitlewidth:120,

      navpreviewposition:"top",

      texteffectseparate:true,

      arrowheight:40,

      arrowmargin:0,

      texteffectduration:600,

      bottomshadowimage:"bottomshadow-110-95-1.png",

      lightboxshowfacebook:false,

      lightboxshowdescription:false,

      timerposition:"bottom",

      navfontcolor:"#333333",

      navthumbnavigationstyle:"arrow",

      borderradius:0,

      navbuttonhighlightcolor:"#333333",

      textpositionstatic:"bottom",

      texteffecteasing2:"easeOutCubic",

      navthumbstyle:"imageonly",

      texteffecteasing1:"easeOutCubic",

      textcss:"display:block; padding:8px 16px; text-align:center;",

      navthumbsmallwidth:48,

      navbordercolor:"#ffffff",

      navthumbmediumcolumn:4,

      navpreviewarrowimage:"previewarrow-16-8-0.png",

      showbottomshadow:false,

      texteffectslidedistance:200,

      shadowcolor:"#aaaaaa",

      showtwitter:true,

      textpositionmarginstatic:0,

      backgroundimage:"",

      navposition:"bottom",

      navthumbsmallsize:480,

      navpreviewarrowwidth:16,

      textformat:"Center box",

      texteffectslidedirection2:"right",

      bottomshadowimagetop:96,

      textpositiondynamic:"topleft",

      shadowsize:5,

      navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",

      textpositionmarginbottom:24,

      lightboxshowtitle:true,

      socialmode:"mouseover",

      slice: {

        checked:true,

        effectdirection:0,

        effects:"up,down,updown",

        slicecount:10,

        duration:1500,

        easing:"easeOutCubic"

      },

      blocks: {

        columncount:5,

        checked:true,

        rowcount:5,

        effects:"topleft,bottomright,top,bottom,random",

        duration:1500,

        easing:"easeOutCubic"

      },

      slide: {

        duration:1000,

        easing:"easeOutCubic",

        checked:true,

        effectdirection:0

      },

      fade: {

        duration:1000,

        easing:"easeOutCubic",

        checked:true

      },

      shuffle: {

        duration:1500,

        easing:"easeOutCubic",

        columncount:5,

        checked:true,

        rowcount:5

      },

      blinds: {

        duration:2000,

        easing:"easeOutCubic",

        checked:true,

        effectdirection:0,

        slicecount:3

      },

      transition:"slice,blocks,slide,fade,shuffle,blinds",

      scalemode:"fill",

      isfullscreen:false,

      textformat: {



      }

    });
  }
  function amazing(){
    jQuery("#amazingslider-1").amazingslider({

      sliderid:1,
      width:1920,

      height:600,

      jsfolder:jsFolder,

      skinsfoldername:"",

      loadimageondemand:false,

      videohidecontrols:false,

      donotresize:false,

      enabletouchswipe:true,

      fullscreen:false,

      autoplayvideo:false,

      addmargin:true,

      transitiononfirstslide:false,

      forceflash:false,

      isresponsive:true,

      forceflashonie11:true,

      forceflashonie10:true,

      pauseonmouseover:false,

      playvideoonclickthumb:true,

      slideinterval:5000,

      fullwidth:true,

      randomplay:false,

      scalemode:"fill",

      loop:0,

      autoplay:true,

      navplayvideoimage:"play-32-32-0.png",

      navpreviewheight:60,

      timerheight:2,

      descriptioncssresponsive:"font-size:12px;",

      shownumbering:false,

      navthumbresponsivemode:"samesize",

      skin:"Content",

      textautohide:true,

      lightboxshowtwitter:false,

      addgooglefonts:false,

      navshowplaypause:true,

      initsocial:false,

      navshowplayvideo:true,

      navshowplaypausestandalonemarginx:8,

      navshowplaypausestandalonemarginy:8,

      navbuttonradius:0,

      navthumbcolumn:5,

      navthumbnavigationarrowimageheight:32,

      navradius:0,

      navthumbsmallcolumn:3,

      lightboxshownavigation:true,

      showshadow:false,

      navfeaturedarrowimagewidth:16,

      lightboxshowsocial:false,

      navpreviewwidth:120,

      googlefonts:"",

      navborderhighlightcolor:"",

      navcolor:"#999999",

      lightboxdescriptionbottomcss:"{color:#333; font-size:12px; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",

      lightboxthumbwidth:80,

      navthumbnavigationarrowimagewidth:32,

      navthumbtitlehovercss:"text-decoration:underline;",

      navthumbmediumheight:64,

      texteffectresponsivesize:600,

      arrowwidth:40,//arrow width
      texteffecteasing:"easeOutCubic",

      texteffect:"slide",

      lightboxthumbheight:60,

      navspacing:8,

      navarrowimage:"navarrows-28-28-0.png",

      ribbonimage:"ribbon_topleft-0.png",

      navwidth:32,

      navheight:32,

      arrowimage:"arrows-32-32-4.png",

      timeropacity:0.6,

      titlecssresponsive:"font-size:12px;",

      navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",

      navshowplaypausestandalone:false,

      texteffect1:"slide",

      navpreviewbordercolor:"#ffffff",

      texteffect2:"slide",

      customcss:"",

      ribbonposition:"topleft",

      navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

      lightboxtitlebottomcss:"{color:#333; font-size:14px; overflow:hidden; text-align:left;}",

      arrowstyle:"mouseover",

      navthumbmediumsize:800,

      navthumbtitleheight:20,

      navpreviewarrowheight:8,

      textpositionmargintop:70,

      navshowbuttons:false,//margin top of title

      buttoncssresponsive:"",

      texteffectdelay:500,

      navswitchonmouseover:false,

      playvideoimage:"playvideo-64-64-0.png",

      arrowtop:50,

      textstyle:"dynamic",

      playvideoimageheight:64,

      navfonthighlightcolor:"#666666",

      showbackgroundimage:false,

      showpinterest:true,

      navpreviewborder:4,

      navshowplaypausestandaloneheight:28,

      navdirection:"horizontal",

      navbuttonshowbgimage:true,

      navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

      textbgcss:"display:none;",

      playvideoimagewidth:64,

      buttoncss:"display:block; position:relative; float:left; border-radius:30px; padding: 15px !important;",

      navborder:4,

      navshowpreviewontouch:false,

      bottomshadowimagewidth:96,

      showtimer:true,

      navmultirows:false,

      navshowpreview:false,

      navmarginy:-40,

      navmarginx:16,//margin-bottom navigation

      navfeaturedarrowimage:"featuredarrow-16-8-0.png",

      texteffectslidedirection1:"right",

      showribbon:false,

      navstyle:"bullets",

      textpositionmarginleft:100,//margin left of title

      descriptioncss:"display:block; position:relative; font-weight:300; font-style:normal; font-size:36px;text-transform: uppercase;  line-height:30px; color:#555; padding:10px; text-align:left",

      navplaypauseimage:"navplaypause-28-28-0.png",

      backgroundimagetop:-10,

      timercolor:"#ffffff",

      numberingformat:"%NUM/%TOTAL ",

      navthumbmediumwidth:64,

      navfontsize:12,

      navhighlightcolor:"#333333",

      texteffectdelay1:1000,

      navimage:"bullet-16-16-1.png",

      texteffectdelay2:1500,

      texteffectduration1:600,

      navshowplaypausestandaloneautohide:false,

      texteffectduration2:600,

      navbuttoncolor:"#999999",

      navshowarrow:true,

      texteffectslidedirection:"left",

      navshowfeaturedarrow:false,

      lightboxbarheight:64,

      showfacebook:true,

      titlecss:"display:table; position:relative; font-weight:300; text-transform: uppercase;   font-family: 'SFUFutura-Bold'; font-size:90px; text-shadow: 0 5px 10px #7d7d7d;  color:#fdaf49; padding:10px",

      ribbonimagey:0,

      ribbonimagex:0,

      texteffectresponsive:true,

      navthumbsmallheight:48,

      texteffectslidedistance1:60,

      texteffectslidedistance2:60,

      navrowspacing:8,

      navshowplaypausestandaloneposition:"bottomright",

      lightboxshowpinterest:false,

      lightboxthumbbottommargin:8,

      lightboxthumbtopmargin:12,

      arrowhideonmouseleave:1000,

      navshowplaypausestandalonewidth:28,

      showsocial:false,

      navthumbresponsive:false,

      navfeaturedarrowimageheight:8,

      navopacity:0.8,

      textpositionmarginright:24,

      backgroundimagewidth:120,

      bordercolor:"#ffffff",

      border:0,

      navthumbtitlewidth:120,

      navpreviewposition:"top",

      texteffectseparate:true,

      arrowheight:40,

      arrowmargin:0,

      texteffectduration:600,

      bottomshadowimage:"bottomshadow-110-95-1.png",

      lightboxshowfacebook:false,

      lightboxshowdescription:false,

      timerposition:"bottom",

      navfontcolor:"#333333",

      navthumbnavigationstyle:"arrow",

      borderradius:0,

      navbuttonhighlightcolor:"#333333",

      textpositionstatic:"bottom",

      texteffecteasing2:"easeOutCubic",

      navthumbstyle:"imageonly",

      texteffecteasing1:"easeOutCubic",

      textcss:"display:block; padding:8px 16px; text-align:center;",

      navthumbsmallwidth:48,

      navbordercolor:"#ffffff",

      navthumbmediumcolumn:4,

      navpreviewarrowimage:"previewarrow-16-8-0.png",

      showbottomshadow:false,

      texteffectslidedistance:200,

      shadowcolor:"#aaaaaa",

      showtwitter:true,

      textpositionmarginstatic:0,

      backgroundimage:"",

      navposition:"bottom",

      navthumbsmallsize:480,

      navpreviewarrowwidth:16,

      textformat:"Center box",

      texteffectslidedirection2:"right",

      bottomshadowimagetop:96,

      textpositiondynamic:"topleft",

      shadowsize:5,

      navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",

      textpositionmarginbottom:24,

      lightboxshowtitle:true,

      socialmode:"mouseover",

      slice: {

        checked:true,

        effectdirection:0,

        effects:"up,down,updown",

        slicecount:10,

        duration:1500,

        easing:"easeOutCubic"

      },

      blocks: {

        columncount:5,

        checked:true,

        rowcount:5,

        effects:"topleft,bottomright,top,bottom,random",

        duration:1500,

        easing:"easeOutCubic"

      },

      slide: {

        duration:1000,

        easing:"easeOutCubic",

        checked:true,

        effectdirection:0

      },

      fade: {

        duration:1000,

        easing:"easeOutCubic",

        checked:true

      },

      shuffle: {

        duration:1500,

        easing:"easeOutCubic",

        columncount:5,

        checked:true,

        rowcount:5

      },

      blinds: {

        duration:2000,

        easing:"easeOutCubic",

        checked:true,

        effectdirection:0,

        slicecount:3

      },

      transition:"slice,blocks,slide,fade,shuffle,blinds",

      scalemode:"fill",

      isfullscreen:false,

      textformat: {



      }

    });
  }
});
