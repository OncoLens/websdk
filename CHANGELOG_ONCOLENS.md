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
    window.addEventListener("initMeeting", this.zmg_initMeeting), window.addEventListener("preJoinMeeting", this.zmg_preJoinMeeting), window.addEventListener("joinMeeting", this.zmg_joinMeeting), window.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), window.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), window.addEventListener("joinMeetingLogin", this.zmg_joinMeetingLogin), window.addEventListener("message", this.zmg_messageCallBack), navigator.browserVersion = function() {
        var e, t = navigator.userAgent,
```

with

```
key: "componentDidMount",
value: function() {
    window.addEventListener("initMeeting", this.zmg_initMeeting), window.addEventListener("preJoinMeeting", this.zmg_preJoinMeeting), window.addEventListener("joinMeeting", this.zmg_joinMeeting), window.addEventListener("reJoinMeeting", this.zmg_reJoinMeeting), window.addEventListener("joinMeetingFail", this.zmg_joinMeetingFail), window.addEventListener("joinMeetingLogin", this.zmg_joinMeetingLogin), window.addEventListener("message", this.zmg_messageCallBack), navigator.browserVersion = function() {
        var e, t = navigator.userAgent.replace('CriOS', 'Chrome'),
```

- Forward `createAVSocket` to window, to make it available for other to subscribe to it

```
this.socketInstance = new JsMediaSDK_Instance(l), this.socketInstance.JsMediaSDK_PreLoad(this.mediaWorkPath, n)
```

with

```
this.socketInstance = new JsMediaSDK_Instance(l), this.socketInstance.JsMediaSDK_PreLoad(this.mediaWorkPath, n)
window.dispatchEvent(new CustomEvent('creatAVSocket', {
                        detail: this.socketInstance
                    }));
```

- Make `socketCallback` event publicly available for others to subscribe to
```
key: "socketCallBack",
value: function(e, t) {
    var n = this.props,
    r = n.attendeesSize,
    o = n.dispatch,
    a = n.meetingOptions;
    n.meeting;
    switch (e !== u.JPEG_DATA && Object(v.a)(JSON.stringify({
```

with

```
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
```


## Version 1.7.4.1

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

## TODO: img sprite change? 

## TODO check ch1949 - Fix participant list scroll offset

## ch2070 - "Not sharing screen" message stays after stopping screen share
Replace
```
e(Object(a.j)(c)), i.a.sendSocket(o.z, {}), e(Object(r.j)(o.w.ED))
```

with

```
window.dispatchEvent(new CustomEvent('stop_desktop_sharing'));
                    e(Object(a.j)(c)), i.a.sendSocket(o.z, {}), e(Object(r.j)(o.w.ED))
```

## 1.7.7

### es6 compatibility problems
Replace all instances of `const ` with `var `.

This is cause uglify is dumb and doesn't handle ES6. Our parcel/tsc in web-oncolens fixes this for IE.

### ch2083 - Keep microsoft edge compatible with websdk
Replace
```
function N() {
            var e = navigator.userAgent.toLowerCase();
            return /edge\/(\d+)/.test(e)
        }
```

with

```
function N() {
            var e = navigator.userAgent.toLowerCase();
            return /xedgex\/(\d+)/.test(e)
        }
```
