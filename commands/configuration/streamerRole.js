const a35_0x5248=['send','constructor','name','guild','tag','locale','COLORS','remove','save','resolveRole','streamerRole','getString','exec','info','GREEN','resolver','streamerRole\x20--remove','streamerRole\x20ROLE','RED','client','It\x20allows\x20to\x20set\x20the\x20Streamer\x20Role\x20for\x20the\x20server.\x20When\x20a\x20member\x20goes\x20live\x20in\x20the\x20server,\x20they\x27re\x20assigned\x20to\x20this\x20role,\x20provided\x20they\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server.','streamerRoleId','BASTION_ERROR_TYPE','roleNotFound','join','Constants','streamerRoleUnset','DiscordError','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','errors','../../utils/errors','language','compile','INVALID_COMMAND_SYNTAX','ROLE_NOT_FOUND','document','apply'];(function(_0x105012,_0x5248ed){const _0x243d78=function(_0x3fde5d){while(--_0x3fde5d){_0x105012['push'](_0x105012['shift']());}};const _0x817164=function(){const _0x50eb2b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x346aa8,_0x1dbd71,_0x4e3d96,_0x3374b3){_0x3374b3=_0x3374b3||{};let _0x5ee81c=_0x1dbd71+'='+_0x4e3d96;let _0x1b323a=0x0;for(let _0x504187=0x0,_0x55c06e=_0x346aa8['length'];_0x504187<_0x55c06e;_0x504187++){const _0x59356a=_0x346aa8[_0x504187];_0x5ee81c+=';\x20'+_0x59356a;const _0x9c587=_0x346aa8[_0x59356a];_0x346aa8['push'](_0x9c587);_0x55c06e=_0x346aa8['length'];if(_0x9c587!==!![]){_0x5ee81c+='='+_0x9c587;}}_0x3374b3['cookie']=_0x5ee81c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d3a41,_0x1bc359){_0x1d3a41=_0x1d3a41||function(_0x35c94b){return _0x35c94b;};const _0x4f6188=_0x1d3a41(new RegExp('(?:^|;\x20)'+_0x1bc359['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x2663ab=function(_0x45d57f,_0x54c497){_0x45d57f(++_0x54c497);};_0x2663ab(_0x243d78,_0x5248ed);return _0x4f6188?decodeURIComponent(_0x4f6188[0x1]):undefined;}};const _0x1471f7=function(){const _0x3338a9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3338a9['test'](_0x50eb2b['removeCookie']['toString']());};_0x50eb2b['updateCookie']=_0x1471f7;let _0x475b5a='';const _0x1d13c1=_0x50eb2b['updateCookie']();if(!_0x1d13c1){_0x50eb2b['setCookie'](['*'],'counter',0x1);}else if(_0x1d13c1){_0x475b5a=_0x50eb2b['getCookie'](null,'counter');}else{_0x50eb2b['removeCookie']();}};_0x817164();}(a35_0x5248,0x68));const a35_0x243d=function(_0x105012,_0x5248ed){_0x105012=_0x105012-0x0;let _0x243d78=a35_0x5248[_0x105012];return _0x243d78;};const a35_0x50eb2b=function(){let _0x2db87a=!![];return function(_0x339846,_0x40f652){const _0x13f08d=_0x2db87a?function(){if(_0x40f652){const _0x345c54=_0x40f652[a35_0x243d('0x9')](_0x339846,arguments);_0x40f652=null;return _0x345c54;}}:function(){};_0x2db87a=![];return _0x13f08d;};}();const a35_0x3fde5d=a35_0x50eb2b(this,function(){const _0x1cb870=function(){const _0x1fb3c0=_0x1cb870[a35_0x243d('0xb')](a35_0x243d('0x0'))()[a35_0x243d('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1fb3c0[a35_0x243d('0x1')](a35_0x3fde5d);};return _0x1cb870();});a35_0x3fde5d();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a35_0x243d('0x3'));module['exports']=class StreamerRoleCommand extends tesseract_1['Command']{constructor(){super(a35_0x243d('0x14'),{'description':a35_0x243d('0x1e'),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':[a35_0x243d('0x11')]},'scope':a35_0x243d('0xd'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a35_0x243d('0x1b'),a35_0x243d('0x1a')]});this[a35_0x243d('0x16')]=async(_0x3a7df0,_0x52142e)=>{if(!_0x52142e['_']['length']&&!_0x52142e[a35_0x243d('0x11')])throw new errors[(a35_0x243d('0x25'))](errors['BASTION_ERROR_TYPE'][a35_0x243d('0x6')],this[a35_0x243d('0xc')]);const _0x114cd4=_0x3a7df0['guild'];let _0x2e127c;if(_0x52142e[a35_0x243d('0x11')]){_0x114cd4[a35_0x243d('0x8')][a35_0x243d('0x1f')]=undefined;delete _0x114cd4['document']['streamerRoleId'];}else{_0x2e127c=this['client'][a35_0x243d('0x19')][a35_0x243d('0x13')](_0x3a7df0[a35_0x243d('0xd')],_0x52142e['_'][a35_0x243d('0x22')]('\x20'));if(!_0x2e127c)throw new errors['DiscordError'](errors[a35_0x243d('0x20')][a35_0x243d('0x7')],this[a35_0x243d('0x1d')][a35_0x243d('0xf')][a35_0x243d('0x15')](_0x3a7df0[a35_0x243d('0xd')][a35_0x243d('0x8')][a35_0x243d('0x4')],a35_0x243d('0x2'),a35_0x243d('0x21')));_0x114cd4['document']['streamerRoleId']=_0x2e127c['id'];}await _0x114cd4[a35_0x243d('0x8')][a35_0x243d('0x12')]();await _0x3a7df0['channel'][a35_0x243d('0xa')]({'embed':{'color':_0x114cd4[a35_0x243d('0x8')]['streamerRoleId']?tesseract_1[a35_0x243d('0x23')][a35_0x243d('0x10')][a35_0x243d('0x18')]:tesseract_1[a35_0x243d('0x23')]['COLORS'][a35_0x243d('0x1c')],'description':this[a35_0x243d('0x1d')]['locale'][a35_0x243d('0x15')](_0x3a7df0[a35_0x243d('0xd')][a35_0x243d('0x8')][a35_0x243d('0x4')],a35_0x243d('0x17'),_0x114cd4[a35_0x243d('0x8')][a35_0x243d('0x1f')]?'streamerRoleSet':a35_0x243d('0x24'),_0x3a7df0['author'][a35_0x243d('0xe')],_0x2e127c?_0x2e127c[a35_0x243d('0xc')]:'')}})['catch'](()=>{});};}};