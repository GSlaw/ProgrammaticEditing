// MUTES ALL AUDIO TRACKS
function muteAudioTracks() {
    audioTracks = app.project.activeSequence.audioTracks;

    for(i=0;i<audioTracks.numTracks;i++) {
        audioTracks[i].setMute(1);
        $.writeln("Muted audio track " + i);
    }
    $.writeln("");
}

// UNMUTES ALL AUDIO TRACKS
function unmuteAudioTracks() {
    audioTracks = app.project.activeSequence.audioTracks;

    for(i=0;i<audioTracks.numTracks;i++) {
        audioTracks[i].setMute(0);
        $.writeln("Unmuted audio track " + i);
    }
    $.writeln("");
}

// MUTES ALL VIDEO TRACKS
function muteVideoTracks() {
    videoTracks = app.project.activeSequence.videoTracks;

    for(i=0;i<videoTracks.numTracks;i++) {
        videoTracks[i].setMute(1);
        $.writeln("Muted video track " + i);
    }
    $.writeln("");
}

// UNMUTES ALL VIDEO TRACKS
function unmuteVideoTracks() {
    videoTracks = app.project.activeSequence.videoTracks;

    for(i=0;i<videoTracks.numTracks;i++) {
        videoTracks[i].setMute(0);
        $.writeln("Unmuted video track " + i);
    }
    $.writeln("");
}
