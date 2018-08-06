var video = document.getElementById('video');
var streamId = '1220b0336cf5c3c34c0a05e5f8d9a6fb8874a091ff47a9546cf748d8e93827b00501856a840a442dfe75e1c114f6849675e7eabb86f9a777de924b231950886b7a57'
var source = 'http://localhost:8935/stream/' + streamId + '.m3u8'
if(Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(source);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
});
}
