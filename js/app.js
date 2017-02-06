
var pollCurrentTrack = function() {
   $.getJSON( "http://stream.idmradio.net:8000/status-json.xsl", function( data ) {
      $('.currently_playing').text('now playing : ' + data.icestats.source.title.toLowerCase());
      setTimeout(function(){pollCurrentTrack()}, 5000);
   });
}

$(document).ready(function(){
   pollCurrentTrack();
});