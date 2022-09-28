#include "videoInsert.jsx"
#include "trackMute.jsx"

// Test overwrite ability
overWrite(0, 0);
overWrite(1, 14);
overWrite(2, 17);
overWrite(0, 29);
overWrite(1, 40);

// Test audio track mute/unmute
muteAudioTracks();
//unmuteAudioTracks();

// Test video track mute/unmute
muteVideoTracks();
unmuteVideoTracks();