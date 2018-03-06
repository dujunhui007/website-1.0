$(document).ready(function () {
  var isFullscreenForScroll, isChrome, isQQBrowser, is360,isUBrowser;

  isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
  if (isChrome) {
    isQQBrowser = window.navigator.userAgent.indexOf("QQBrowser") !== -1;
    isUBrowser = window.navigator.userAgent.indexOf("UBrowser") !== -1;
    is360 = _mime("type", "application/vnd.chromium.remoting-viewer");

    function _mime(option, value) {
      var mimeTypes = navigator.mimeTypes;
      for (var mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
          return true;
        }
      }
      return false;
    }

    if (isQQBrowser||isUBrowser||is360) {
      $("#top .container .containerTitle").addClass("isNoChorm")
    }

    $("#top .container .containerTitle").addClass("isChorm")
  }else {
    $("#top .container .containerTitle").addClass("isNoChorm")
  }


  $('.section1 #loading').hide();

  function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }

  GetRequest();
  isFullscreenForScroll = GetRequest().type;
  if (isFullscreenForScroll == undefined) {
    isFullscreenForScroll = "false"
  }

  $("#top .container hr").addClass("aschBoundary");
  $(window).keydown(function (event) {
    if (event.keyCode == 122) {
      if (isFullscreenForScroll == "false") {
        // alert(1);
        isFullscreenForScroll = "true";
      } else {
        // alert(2);
        isFullscreenForScroll = "false";
      }
      // isFullscreenForScroll="true";
      // alert(isFullscreenForScroll)
    }
  });

  // $("#top .container .containerTitle").click(function () {
  //   setTimeout(function () {
  //     $("#top .container hr").addClass("closeHr");
  //   }, 0);
  //
  //   setTimeout(function () {
  //     window.location.href = "aschVideo.html?" + "type=" + isFullscreenForScroll;
  //   }, 490);
  // });

});
