# CHANGELOG ONCOLENS

## How to get the differences
To get these differences we beautify the code so that we don't have to compare single line files. This doesn't mean these are the source code for the file `dist/zoomus-websdk.umd.min.js` for that we are directly editing the file with the changes mentioned below.

Beautified files can be found under the `src` folder.

## Version 1.7.2.1
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
    this.body.addEventListener("initMeeting", this.zmg_initMeeting), this.body.addEventListener("preJoinMeeting", this.zmg_preJoinMeeting), this.body.addEventListener("joinMeeting", this.zmg_joinMeeting), this.body.addEventListener("continueJoin", this.zmg_continueJoin), this.body.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), this.body.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), this.body.addEventListener("joinMeetingLogin", this.zmg_joinMeetingLogin), this.body.addEventListener("checkRegisterMeetingStatus", this.zmg_checkRegisterMeetingStatus), window.addEventListener("message", this.zmg_messageCallBack), navigator.browserVersion = function() {
        var e, t = navigator.userAgent,
```

with

```
key: "componentDidMount",
value: function() {
   this.body.addEventListener("initMeeting", this.zmg_initMeeting), this.body.addEventListener("preJoinMeeting", this.zmg_preJoinMeeting), this.body.addEventListener("joinMeeting", this.zmg_joinMeeting), this.body.addEventListener("continueJoin", this.zmg_continueJoin), this.body.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), this.body.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), this.body.addEventListener("joinMeetingLogin", this.zmg_joinMeetingLogin), this.body.addEventListener("checkRegisterMeetingStatus", this.zmg_checkRegisterMeetingStatus), window.addEventListener("message", this.zmg_messageCallBack), navigator.browserVersion = function() {
        var e, n = navigator.userAgent.replace('CriOS', 'Chrome'),
```

- Forward `createAVSocket` to window, to make it available for other to subscribe to it

```
this.mediaWorkPath = Object(s.f)(), this.socketInstance = new JsMediaSDK_Instance(l), this.socketInstance.JsMediaSDK_PreLoad(this.mediaWorkPath, n)
```

with

```
this.mediaWorkPath = Object(s.f)(), this.socketInstance = new JsMediaSDK_Instance(l), this.socketInstance.JsMediaSDK_PreLoad(this.mediaWorkPath, n)
window.dispatchEvent(new CustomEvent('creatAVSocket', {
                        detail: this.socketInstance
                    }));
```

- Make `socketCallback` event publicly available for others to subscribe to
```
key: "socketCallBack",
value: function(e, n) {
    var t = this.props,
        o = (t.attendeesSize, t.dispatch),
        r = t.meetingOptions;
    switch (t.meeting, e !== l.JPEG_DATA && Object(h.a)(JSON.stringify({
        type: e,
        data: n
    }), e), e) {
```

with

```
key: "socketCallBack",
value: function(e, n) {
    var t = this.props,
        o = (t.attendeesSize, t.dispatch),
        r = t.meetingOptions;
    window.dispatchEvent(new CustomEvent('socketCallBack', {
        detail: {
            eventId: e,
            data: t
        }
    }));
    switch (t.meeting, e !== l.JPEG_DATA && Object(h.a)(JSON.stringify({
        type: e,
        data: n
    }), e), e) {
```

## ch2070 - "Not sharing screen" message stays after stopping screen share
Replace

```
                    var t = n().meeting.currentUser.userId,
                        r = {
                            evt: a.i,
                            body: {
                                id: t,
                                bOn: !0
                            }
                        };
                    e(Object(c.j)(r)), u.a.sendSocket(a.E, {}), e(Object(o.u)(a.A.ED))
```

with
```
                return function(e, n) {
                    var t = n().meeting.currentUser.userId,
                        r = {
                            evt: a.i,
                            body: {
                                id: t,
                                bOn: !0
                            }
                        };
                    window.dispatchEvent(new CustomEvent('stop_desktop_sharing'));
                    e(Object(c.j)(r)), u.a.sendSocket(a.E, {}), e(Object(o.u)(a.A.ED))
```

## 1.7.7

### es6 compatibility problems
Replace all instances of `const ` with `var `.

This is cause uglify is dumb and doesn't handle ES6. Our parcel/tsc in web-oncolens fixes this for IE.

## ch5943 - Force chat height to be 100vh

This attempts to fix some sort of error with height calculation of the virtual window that renders chat messages. It seems like the calculation fails sometimes. This might be because messages are not processed properly when they are received or perhaps they aren not received at all. I'm not sure what the exact issue is- this is just speculation. We attempt to fix this by:
    * forcing the scroll container of chat messages to always be `100vh` (`height` and `max-height`)
    * removing `overflow: "hidden"` so that the user can still scroll down and see messages if there are enough message to fill up more than the view height (i.e., `vh`)

Replace 

```
                            className: "ReactVirtualized__Grid__innerScrollContainer",
                            role: s,
                            style: a()({
                                width: n ? "auto" : A,
                                height: k,
                                maxWidth: A,
                                maxHeight: k,
                                overflow: "hidden",
                                pointerEvents: w ? "none" : "",
                                position: "relative"
                            }, c)
```

with

```
                            className: "ReactVirtualized__Grid__innerScrollContainer",
                            role: s,
                            style: a()({
                                width: n ? "auto" : A,
                                height: "100vh",
                                maxWidth: A,
                                maxHeight: "100vh",
                                overflow: "hidden",
                                pointerEvents: w ? "none" : "",
                                position: "relative"
                            }, c)
```

## 1.8.5

Add `function checkSystemRequirements(): any;` to the `ZoomMtg` namespace in index.d.ts.

## TODO
We had to back out changes to mute/unmute (adding `* 6` hint for phone audio). It will require some more investigation on how to show this hint only for phone audio since it seems to be more closely tied to computer audio copy now. 