# CHANGELOG ONCOLENS

## How to get the differences
To get these differences we beautify the code so that we don't have to compare single line files. This doesn't mean these are the source code for the file `dist/zoomus-websdk.umd.min.js` for that we are directly editing the file with the changes mentioned below.

Beautified files can be found under the `src` folder.

## Version 1.7.2.1
- Fix chrome ios and firefox ios to not be detected as safari on ios.

Replace

`if (e.indexOf("safari") > 0 && e.indexOf("chrome") < 0) return e.indexOf("ipad") > 0 ? e.match(/ipad; cpu os (\d+_\d+)/gi).toString().replace("ipad; cpu os ", "ipados/") : e.match(/version\/[\d.]+/gi).toString().replace("version", "safari");`

with

`if (e.indexOf("safari") > 0 && e.indexOf("chrome") < 0 && e.indexOf("crios") < 0 && e.indexOf("fxios") < 0) return e.indexOf("ipad") > 0 ? e.match(/ipad; cpu os (\d+_\d+)/gi).toString().replace("ipad; cpu os ", "ipados/") : e.match(/version\/[\d.]+/gi).toString().replace("version", "safari");`

Replace

`return n || (e.indexOf("chrome") > 0 ? e.match(/chrome\/[\d.]+/gi).toString() : "other/")`

with 

```
var newE = e.replace('crios', 'chrome');
return n || (newE.indexOf("chrome") > 0 ? newE.match(/chrome\/[\d.]+/gi).toString() : "other/")
```

Replace

```
key: "componentDidMount",
value: function() {
    window.addEventListener("initMeeting", this.zmg_initMeeting), window.addEventListener("joinMeeting", this.zmg_joinMeeting), window.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), window.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), navigator.browserVersion = function() {
        var e, t = navigator.userAgent,
```

with

```
key: "componentDidMount",
value: function() {
    window.addEventListener("initMeeting", this.zmg_initMeeting), window.addEventListener("joinMeeting", this.zmg_joinMeeting), window.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), window.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), navigator.browserVersion = function() {
        var e, t = navigator.userAgent.replace('CriOS', 'Chrome'),
```

- Forward `createAVSocket` to window, to make it available for other to subscribe to it

```
key: "creatAVSocket",
value: function() {
    var e = this.props.baseStaticUrl,
        t = new JsMediaSDK_Instance,
        n = Object(l.q)(e),
        o = function(e, t) {
            this.initStatus = e, this.socketCallBack = t, this.canvasInfo = {}, this.joinVoipTimes = 0
        },
        r = Object(l.g)();
    o.prototype = {
```

with

```
key: "creatAVSocket",
value: function() {
    var e = this.props.baseStaticUrl,
        t = new JsMediaSDK_Instance,
        n = Object(l.q)(e),
        o = function(e, t) {
            this.initStatus = e, this.socketCallBack = t, this.canvasInfo = {}, this.joinVoipTimes = 0
        },
        r = Object(l.g)();
    window.dispatchEvent(new CustomEvent('creatAVSocket', {
        detail: t
    }));
```

- Make `socketCallback` event publicly available for others to subscribe to
```
key: "socketCallBack",
value: function(e, t) {
    var n = this.props,
        o = n.attendeesSize,
        r = n.dispatch,
        a = n.meetingOptions,
        i = n.meeting;
    switch (e !== u.JPEG_DATA && Object(v.a)(JSON.stringify({
```

with

```
key: "socketCallBack",
value: function(e, t) {
    var n = this.props,
        o = n.attendeesSize,
        r = n.dispatch,
        a = n.meetingOptions,
        i = n.meeting;
    window.dispatchEvent(new CustomEvent('socketCallBack', {
        detail: {
            eventId: e,
            data: t
        }
    }));
    switch (e !== u.JPEG_DATA && Object(v.a)(JSON.stringify({
```

## Version 1.4.2.1

- Update mute/unmute button copy

Below these lines:
```
"apac.toolbar_unmute": "Unmute",
"apac.toolbar_mute": "Mute",
```
Add: 
```
"apac.toolbar_phone_unmute": "Unmute (or *6)",
"apac.toolbar_phone_mute": "Mute (or *6)",
```

Replace:
```
    className: "img-sprite"
}))) : f = null, Object(g.A)(r) && !l ? a ? (e = "img-disallow-mic join-btn img-sprite", p = Object(u.w)("Audio", "apac.wc_audio"), d = "audio") : r.muted ? (e = Object(g.D)(r) ? "img-unmute join-btn img-sprite" : "img-unmute-phone join-btn img-sprite", p = Object(u.w)("Unmute", "apac.toolbar_unmute"), d = "unmute my microphone") : (e = Object(g.D)(r) ? r.hasAsn ? "img-mute-animation join-btn img-sprite" : "img-mute join-btn img-sprite" : "img-mute-phone join-btn img-sprite", p = Object(u.w)("Mute", "apac.toolbar_mute"), d = "mute my microphone") : Object(g.A)(r) && l ? (t = {
```

With:

```
    className: "img-sprite"
}))) : f = null, Object(g.A)(r) && !l ? a ? (e = "img-disallow-mic join-btn img-sprite", p = Object(u.w)("Audio", "apac.wc_audio"), d = "audio") : r.muted ? (e = Object(g.D)(r) ? "img-unmute join-btn img-sprite" : "img-unmute-phone join-btn img-sprite", p = Object(u.w)("Unmute", "apac.toolbar_phone_unmute"), d = "unmute my microphone") : (e = Object(g.D)(r) ? r.hasAsn ? "img-mute-animation join-btn img-sprite" : "img-mute join-btn img-sprite" : "img-mute-phone join-btn img-sprite", p = Object(u.w)("Mute", "apac.toolbar_phone_mute"), d = "mute my microphone") : Object(g.A)(r) && l ? (t = {
```

## Mute all changes

Replace 

```
        function M() {
            return function(e, t) {
                var n = t().meeting.bCanUnmute;
                e(Object(b.toggleInstanceOpen)(!0));
                var r = v.u,
                    o = v.s,
                    a = v.kb,
                    i = v.lb;
                c.a.confirm({
                    className: "zm-modal-legacy",
                    okText: r,
                    okButtonProps: w,
                    cancelText: o,
```

with

```
        function M() {
            return function(e, t) {
                var n = t().meeting.bCanUnmute;
                e(Object(b.toggleInstanceOpen)(!0));
                e(Object(b.toggleMuteAllUnmuteThemselvesChecked)(n));
                var r = v.u,
                    o = v.s,
                    a = v.kb,
                    i = v.lb;
                c.a.confirm({
                    className: "zm-modal-legacy",
                    okText: r,
                    okButtonProps: w,
                    cancelText: o,
```

The above change adds the line `e(Object(b.toggleMuteAllUnmuteThemselvesChecked)(n));` to the function. This ensures that state between the "allow user to unmute themselves" from the "More" button is synced with the "allow users to unmute themselves" checkbox state of the modal that pops up when a host clicks the mute all button.

## ch1949 - Fix participant list scroll offset
Replace
```h = r && n ? o.a.createElement("div", {
                            className: "participants-title"
                        }, l) : null,
                        m = c ? 500 : i.height,
```

with

```
h = r && n ? o.a.createElement("div", {
                            className: "participants-title"
                        }, l) : null,
                        m = c ? 500 : i.height - 25,
```
