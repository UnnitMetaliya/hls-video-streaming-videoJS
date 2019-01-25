(function(window, videojs) {
  var player = (window.player = videojs("example-video"));

  // hook up the video switcher
  var loadUrl = document.getElementById("load-url");
  var url = document.getElementById("url");
  var mimeType = document.getElementById("mimetype");
  loadUrl.addEventListener("submit", function(event) {
    event.preventDefault();
    player.src({
      src: url.value,
      type: mimeType.options[mimeType.selectedIndex].innerText
    });
    return false;
  });
})(window, window.videojs);
