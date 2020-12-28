CHANGELOG ONCOLENS

How to get the differences

To get these differences we beautify the code so that we don't have to compare single line files. This doesn't mean these are the source code for the file dist/zoomus-websdk.umd.min.js for that we are directly editing the file with the changes mentioned below.

Beautified files can be found under the src folder.

Version 1.7.2.1

Replace

return n || (e.indexOf("chrome") > 0 ? e.match(/chrome\/[\d.]+/gi).toString() : "other/")

with

var newE = e.replace('crios', 'chrome');
return n || (newE.indexOf("chrome") > 0 ? newE.match(/chrome\/[\d.]+/gi).toString() : "other/")
Replace

key: "componentDidMount",
value: function() {
    window.addEventListener("initMeeting", this.zmg_initMeeting), window.addEventListener("preJoinMeeting", this.zmg_preJoinMeeting), window.addEventListener("joinMeeting", this.zmg_joinMeeting), window.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), window.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), window.addEventListener("joinMeetingLogin", this.zmg_joinMeetingLogin), window.addEventListener("message", this.zmg_messageCallBack), navigator.browserVersion = function() {
        var e, t = navigator.userAgent,
with

key: "componentDidMount",
value: function() {
    window.addEventListener("initMeeting", this.zmg_initMeeting), window.addEventListener("preJoinMeeting", this.zmg_preJoinMeeting), window.addEventListener("joinMeeting", this.zmg_joinMeeting), window.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), window.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), window.addEventListener("joinMeetingLogin", this.zmg_joinMeetingLogin), window.addEventListener("message", this.zmg_messageCallBack), navigator.browserVersion = function() {
        var e, t = navigator.userAgent.replace('CriOS', 'Chrome'),
Forward createAVSocket to window, to make it available for other to subscribe to it
this.socketInstance = new JsMediaSDK_Instance(l), this.socketInstance.JsMediaSDK_PreLoad(this.mediaWorkPath, n)
with

this.socketInstance = new JsMediaSDK_Instance(l), this.socketInstance.JsMediaSDK_PreLoad(this.mediaWorkPath, n)
window.dispatchEvent(new CustomEvent('creatAVSocket', {
                        detail: this.socketInstance
                    }));
Make socketCallback event publicly available for others to subscribe to
key: "socketCallBack",
value: function(e, t) {
    var n = this.props,
    r = n.attendeesSize,
    o = n.dispatch,
    a = n.meetingOptions;
    n.meeting;
    switch (e !== u.JPEG_DATA && Object(v.a)(JSON.stringify({
with

key: "socketCallBack",
value: function(e, t) {
    var n = this.props,
    r = n.attendeesSize,
    o = n.dispatch,
    a = n.meetingOptions;
    n.meeting;
    window.dispatchEvent(new CustomEvent('socketCallBack', {
        detail: {
            eventId: e,
            data: t
        }
    }));
    switch (e !== u.JPEG_DATA && Object(v.a)(JSON.stringify({
Version 1.7.4.1

Update mute/unmute button copy
Below these lines:

"apac.toolbar_unmute": "Unmute",
"apac.toolbar_mute": "Mute",
Add:

"apac.toolbar_phone_unmute": "Unmute (or *6)",
"apac.toolbar_phone_mute": "Mute (or *6)",
Replace:

key: "update",
                    value: function() {
                        l = Object(r.u)("Join Audio by Computer", "apac.wc_join_audio_by_pc"), p = Object(r.u)("Leave Computer Audio", "apac.wc_leave_pc_audio"), Object(r.u)("Computer Audio", "apac.wc_pc_audio"), Object(r.u)("Computer Audio - Connected", "apac.wc_pc_audio_connected"), d = Object(r.u)("Close", "apac.wc_chat.close"), f = Object(r.u)("Select a Microphone", "apac.wc_select_microphone"), m = Object(r.u)("Select a Speaker", "apac.wc_select_speaker"), h = Object(r.u)("Audio Options", "apac.wc_audio_options"), b = Object(r.u)("Audio", "apac.wc_audio"), g = Object(r.u)("Unmute", "apac.apac.toolbar_unmute"), v = Object(r.u)("Mute", "apac.toolbar_mute"), _ = Object(r.u)("Join Audio", "apac.toolbar_join_audio"), y = Object(r.u)("Audio Setting", "apac.wc_audio_setting"), w = Object(r.u)("Phone Call", "apac.wc_phone_call"), x = Object(r.u)("Phone Call - Connected", "apac.wc_phone_call_connect"), O = Object(r.u)("Computer Audio", "apac.wc_pc_audio"), A = Object(r.u)("Computer Audio - Connected", "apac.wc_pc_audio_connected"), k = Object(r.u)("Call Me", "apac.dialog.btn_callme"), E = Object(r.u)("Call Me - Connected", "apac.dialog.btn_callme_connected"), C = Object(r.u)("Join by 3rd Party Audio", "apac.join_3prty_audio"), S = Object(r.u)("Follow the instructions below to join audio", "apac.wc_follow_intro_join_audio"), j = Object(r.u)("Your browser doesn't support using computer's Audio device, please upgrade your browser to the lastest version.", "apac.wc_upgrade_browser"), I = Object(r.u)("Your browser does not support using the computer's Audio device. To use Zoom, install the latest version of a standard browser, such as Chrome.", "apac.wc_change_browser_2"), T = Object(r.u)("Your browser is preventing access to your microphone.", "apac.wc_prevent_access_mic"), R = Object(r.u)("Learn", "apac.wc_learn"), N = Object(r.u)("how to allow access to your microphone.", "apac.wc_how_to_allow"), P = Object(r.u)("Please use your phone", "apac.wc_please_use_your_phone"), D = Object(r.u)("to call in to the meeting", "apac.wc_to_call_in_to_the_meeting"), M = Object(r.u)("Already joined by telephone? Press #", "apac.wc_already_joined_by_telephone"), z = Object(r.u)("on your phone.", "apac.wc_on_your_phone"), L = Object(r.u)("Password", "apac.wc_tel_password"), B = Object(r.u)("Toll Free", "apac.dialog.tollfree"), U = Object(r.u)("Toll", "apac.dialog.toll"), H = Object(r.u)("Dial in based on your location", "apac.dialog.dial_in"), F = Object(r.u)("Conference ID", "apac.dialog.presscode"), W = Object(r.u)("Participant ID", "apac.wc_participant_id"), q = Object(r.u)("The meeting does not support dial in or Call me to join. You can not connect to the audio.", "apac.wc_pstn_warning_contact"), V = Object(r.u)("Calling...", "apac.meeting_calling2"), G = Object(r.u)("Ring...", "apac.meeting_ringing"), Q = Object(r.u)("Call accepted", "apac.meeting_accept"), K = Object(r.u)("Busy", "apac.meeting_busy"), Y = Object(r.u)("Fail to call", "apac.meeting_fail"), X = Object(r.u)("Phone Connected", "apac.wc_phone_connected"), Z = Object(r.u)("Disconnecting Call", "apac.meeting_disconnect"), J = Object(r.u)("Fail to disconnect call", "apac.meeting_fail_disconnect"), $ = Object(r.u)("The meeting does not support to call to your country. You can try to Phone Call to connect.", "apac.dialog.does_not_support_country"), ee = Object(r.u)("Phone Number", "apac.dialog.placeholder_phone_number"), te = Object(r.u)("Remember the number on this computer", "apac.dialog.remeber_number"), ne = Object(r.u)("We could not find your phone number. Please contact your admin.", "apac.dialog.cound_not_find_number"), oe = Object(r.u)("Call your phone number to join audio conference", "apac.dialog.call_your_number"), re = Object(r.u)("Hang Up", "apac.dialog.btn_hangup"), ae = Object(r.u)("Your audio is connected using Computer Audio", "apac.wc_audio.using_audio_tip"), ie = Object(r.u)("Your audio is connected using Dial In", "apac.wc_audio.using_audio_dial_tip"), ce = Object(r.u)("The host muted you", "apac.wc_audio.muted_notification1"), se = Object(r.u)("The host muted ereryone", "apac.wc_audio.muted_notification2"), ue = Object(r.u)("The host unmuted you", "apac.wc_audio.unmuted_notification1")
                    }
with

key: "update",
                    value: function() {
                        l = Object(r.u)("Join Audio by Computer", "apac.wc_join_audio_by_pc"), p = Object(r.u)("Leave Computer Audio", "apac.wc_leave_pc_audio"), Object(r.u)("Computer Audio", "apac.wc_pc_audio"), Object(r.u)("Computer Audio - Connected", "apac.wc_pc_audio_connected"), d = Object(r.u)("Close", "apac.wc_chat.close"), f = Object(r.u)("Select a Microphone", "apac.wc_select_microphone"), m = Object(r.u)("Select a Speaker", "apac.wc_select_speaker"), h = Object(r.u)("Audio Options", "apac.wc_audio_options"), b = Object(r.u)("Audio", "apac.wc_audio"), g = Object(r.u)("Unmute", "apac.apac.toolbar_phone_unmute"), v = Object(r.u)("Mute", "apac.toolbar_phone_mute"), _ = Object(r.u)("Join Audio", "apac.toolbar_join_audio"), y = Object(r.u)("Audio Setting", "apac.wc_audio_setting"), w = Object(r.u)("Phone Call", "apac.wc_phone_call"), x = Object(r.u)("Phone Call - Connected", "apac.wc_phone_call_connect"), O = Object(r.u)("Computer Audio", "apac.wc_pc_audio"), A = Object(r.u)("Computer Audio - Connected", "apac.wc_pc_audio_connected"), k = Object(r.u)("Call Me", "apac.dialog.btn_callme"), E = Object(r.u)("Call Me - Connected", "apac.dialog.btn_callme_connected"), C = Object(r.u)("Join by 3rd Party Audio", "apac.join_3prty_audio"), S = Object(r.u)("Follow the instructions below to join audio", "apac.wc_follow_intro_join_audio"), j = Object(r.u)("Your browser doesn't support using computer's Audio device, please upgrade your browser to the lastest version.", "apac.wc_upgrade_browser"), I = Object(r.u)("Your browser does not support using the computer's Audio device. To use Zoom, install the latest version of a standard browser, such as Chrome.", "apac.wc_change_browser_2"), T = Object(r.u)("Your browser is preventing access to your microphone.", "apac.wc_prevent_access_mic"), R = Object(r.u)("Learn", "apac.wc_learn"), N = Object(r.u)("how to allow access to your microphone.", "apac.wc_how_to_allow"), P = Object(r.u)("Please use your phone", "apac.wc_please_use_your_phone"), D = Object(r.u)("to call in to the meeting", "apac.wc_to_call_in_to_the_meeting"), M = Object(r.u)("Already joined by telephone? Press #", "apac.wc_already_joined_by_telephone"), z = Object(r.u)("on your phone.", "apac.wc_on_your_phone"), L = Object(r.u)("Password", "apac.wc_tel_password"), B = Object(r.u)("Toll Free", "apac.dialog.tollfree"), U = Object(r.u)("Toll", "apac.dialog.toll"), H = Object(r.u)("Dial in based on your location", "apac.dialog.dial_in"), F = Object(r.u)("Conference ID", "apac.dialog.presscode"), W = Object(r.u)("Participant ID", "apac.wc_participant_id"), q = Object(r.u)("The meeting does not support dial in or Call me to join. You can not connect to the audio.", "apac.wc_pstn_warning_contact"), V = Object(r.u)("Calling...", "apac.meeting_calling2"), G = Object(r.u)("Ring...", "apac.meeting_ringing"), Q = Object(r.u)("Call accepted", "apac.meeting_accept"), K = Object(r.u)("Busy", "apac.meeting_busy"), Y = Object(r.u)("Fail to call", "apac.meeting_fail"), X = Object(r.u)("Phone Connected", "apac.wc_phone_connected"), Z = Object(r.u)("Disconnecting Call", "apac.meeting_disconnect"), J = Object(r.u)("Fail to disconnect call", "apac.meeting_fail_disconnect"), $ = Object(r.u)("The meeting does not support to call to your country. You can try to Phone Call to connect.", "apac.dialog.does_not_support_country"), ee = Object(r.u)("Phone Number", "apac.dialog.placeholder_phone_number"), te = Object(r.u)("Remember the number on this computer", "apac.dialog.remeber_number"), ne = Object(r.u)("We could not find your phone number. Please contact your admin.", "apac.dialog.cound_not_find_number"), oe = Object(r.u)("Call your phone number to join audio conference", "apac.dialog.call_your_number"), re = Object(r.u)("Hang Up", "apac.dialog.btn_hangup"), ae = Object(r.u)("Your audio is connected using Computer Audio", "apac.wc_audio.using_audio_tip"), ie = Object(r.u)("Your audio is connected using Dial In", "apac.wc_audio.using_audio_dial_tip"), ce = Object(r.u)("The host muted you", "apac.wc_audio.muted_notification1"), se = Object(r.u)("The host muted ereryone", "apac.wc_audio.muted_notification2"), ue = Object(r.u)("The host unmuted you", "apac.wc_audio.unmuted_notification1")
                    }
ch2070 - "Not sharing screen" message stays after stopping screen share

Replace

e(Object(a.j)(c)), i.a.sendSocket(o.z, {}), e(Object(r.j)(o.w.ED))
with

window.dispatchEvent(new CustomEvent('stop_desktop_sharing'));
                    e(Object(a.j)(c)), i.a.sendSocket(o.z, {}), e(Object(r.j)(o.w.ED))
1.7.7

es6 compatibility problems

Replace all instances of const with var .

This is cause uglify is dumb and doesn't handle ES6. Our parcel/tsc in web-oncolens fixes this for IE.

ch2083 - Keep microsoft edge compatible with websdk

Replace

function N() {
            var e = navigator.userAgent.toLowerCase();
            return /edge\/(\d+)/.test(e)
        }
with

function N() {
            var e = navigator.userAgent.toLowerCase();
            return /xedgex\/(\d+)/.test(e)
        }