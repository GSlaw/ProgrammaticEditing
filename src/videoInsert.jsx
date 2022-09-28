
function overWrite(targetTrackNumber, timeToInsertAt) {

    // Variable knobs
    var insertIntoTrack = targetTrackNumber;
    var overwrite = true;
    var insertAtEnd = false;
    var numberClipToInsert = 0;
    var time = timeToInsertAt;

    // Engage the active sequence
    var sequence = app.project.activeSequence;

    // Get a list of all the clips that are in the project panel
    var clip = app.project.rootItem.children[0].children[0].children[0];

    // Debug clip selection
    //for (i = 0; i < clip.length; i++) {
    //    $.writeln("Clip name is: " + availibleClips[i].name)
    //} 

    // Get the video track where we want to insert into
    var videoTrack = sequence.videoTracks[insertIntoTrack];

    // Check if we want to insert the clip at the end
    if(insertAtEnd){
        // If we want to insert the clip at the end, we need to get
        // the end time of the last clip
        var numClips = videoTrack.clips.numItems;
        var dstTicks = videoTrack.clips[numClips-1].end.ticks;
        
    }else{
        // Otherwise, we'll insert at 0
        var dstTicks =  time;
    }

    // If we want to overwrite the clip
    if (overwrite){
        videoTrack.overwriteClip(clip, dstTicks)
    }
    else{
        videoTrack.insertClip(clipToInsert, dstTicks)
    }
    $.writeln("Overwrote clip:");
    $.writeln("Clip name: " + clip.name);
    $.writeln("Written at: " + dstTicks + " seconds");
    $.writeln("On Track: " + insertIntoTrack);
    $.writeln("");



}



