const a209_0x33ef=['../assets/emojis.json','apply','isUnicodeEmoji','getEmojis','constructor','./snowflake','includes','defineProperty','toString','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','__esModule','base64','parseEmoji','isValid','compile','utf-8','return\x20/\x22\x20+\x20this\x20+\x20\x22/','from','test'];(function(_0x1f3bd8,_0x33efae){const _0x54a3af=function(_0x467bf0){while(--_0x467bf0){_0x1f3bd8['push'](_0x1f3bd8['shift']());}};const _0x3fba3c=function(){const _0x4ba7cb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x351ff8,_0x1369e6,_0x288965,_0x34c744){_0x34c744=_0x34c744||{};let _0x14ee6d=_0x1369e6+'='+_0x288965;let _0x106dbe=0x0;for(let _0x999945=0x0,_0x3757a1=_0x351ff8['length'];_0x999945<_0x3757a1;_0x999945++){const _0x8a4ebc=_0x351ff8[_0x999945];_0x14ee6d+=';\x20'+_0x8a4ebc;const _0x25abae=_0x351ff8[_0x8a4ebc];_0x351ff8['push'](_0x25abae);_0x3757a1=_0x351ff8['length'];if(_0x25abae!==!![]){_0x14ee6d+='='+_0x25abae;}}_0x34c744['cookie']=_0x14ee6d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x95c158,_0x5e618d){_0x95c158=_0x95c158||function(_0x5a7746){return _0x5a7746;};const _0x535cf0=_0x95c158(new RegExp('(?:^|;\x20)'+_0x5e618d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x6a6ead=function(_0x833371,_0x192174){_0x833371(++_0x192174);};_0x6a6ead(_0x54a3af,_0x33efae);return _0x535cf0?decodeURIComponent(_0x535cf0[0x1]):undefined;}};const _0x3fb279=function(){const _0x440d39=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x440d39['test'](_0x4ba7cb['removeCookie']['toString']());};_0x4ba7cb['updateCookie']=_0x3fb279;let _0x220cd0='';const _0x1fe977=_0x4ba7cb['updateCookie']();if(!_0x1fe977){_0x4ba7cb['setCookie'](['*'],'counter',0x1);}else if(_0x1fe977){_0x220cd0=_0x4ba7cb['getCookie'](null,'counter');}else{_0x4ba7cb['removeCookie']();}};_0x3fba3c();}(a209_0x33ef,0xe7));const a209_0x54a3=function(_0x1f3bd8,_0x33efae){_0x1f3bd8=_0x1f3bd8-0x0;let _0x54a3af=a209_0x33ef[_0x1f3bd8];return _0x54a3af;};const a209_0x4ba7cb=function(){let _0x55d3d1=!![];return function(_0x250511,_0x38a954){const _0x221a7d=_0x55d3d1?function(){if(_0x38a954){const _0x571831=_0x38a954[a209_0x54a3('0x11')](_0x250511,arguments);_0x38a954=null;return _0x571831;}}:function(){};_0x55d3d1=![];return _0x221a7d;};}();const a209_0x467bf0=a209_0x4ba7cb(this,function(){const _0x441faa=function(){const _0x4496c5=_0x441faa[a209_0x54a3('0x1')](a209_0x54a3('0xd'))()[a209_0x54a3('0xb')](a209_0x54a3('0x6'));return!_0x4496c5[a209_0x54a3('0xf')](a209_0x467bf0);};return _0x441faa();});a209_0x467bf0();'use strict';Object[a209_0x54a3('0x4')](exports,a209_0x54a3('0x7'),{'value':!![]});exports[a209_0x54a3('0x9')]=exports[a209_0x54a3('0x12')]=exports[a209_0x54a3('0x0')]=void 0x0;const emojis=require(a209_0x54a3('0x10'));const snowflake=require(a209_0x54a3('0x2'));const getEmojis=()=>{return emojis;};exports['getEmojis']=getEmojis;const isUnicodeEmoji=_0x3483fd=>{return emojis['includes'](Buffer[a209_0x54a3('0xe')](_0x3483fd)['toString'](a209_0x54a3('0x8')));};exports[a209_0x54a3('0x12')]=isUnicodeEmoji;const parseEmoji=_0x2b7306=>{if(!_0x2b7306)return;let _0x4e863f;if(emojis[a209_0x54a3('0x3')](_0x2b7306)){_0x4e863f={'value':_0x2b7306,'reaction':Buffer[a209_0x54a3('0xe')](_0x2b7306,a209_0x54a3('0x8'))[a209_0x54a3('0x5')](a209_0x54a3('0xc'))};}else if(emojis['includes'](Buffer[a209_0x54a3('0xe')](_0x2b7306)[a209_0x54a3('0x5')]('base64'))){_0x4e863f={'value':Buffer[a209_0x54a3('0xe')](_0x2b7306)[a209_0x54a3('0x5')](a209_0x54a3('0x8')),'reaction':_0x2b7306};}else if(_0x2b7306[a209_0x54a3('0x3')](':')){const [,_0x277e97]=_0x2b7306['match'](/<a?:\w+:(\d+)>/i);_0x4e863f={'value':_0x277e97,'reaction':_0x277e97};}else if(snowflake[a209_0x54a3('0xa')](_0x2b7306)){_0x4e863f={'value':_0x2b7306,'reaction':_0x2b7306};}return _0x4e863f;};exports[a209_0x54a3('0x9')]=parseEmoji;