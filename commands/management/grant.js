const a62_0x4c9b=['exports','BASTION_ERROR_TYPE','grantMembers','test','GREEN','It\x20allows\x20you\x20to\x20grant\x20experience\x20or\x20coins\x20to\x20the\x20members\x20of\x20the\x20server.','Constants','grant','updateMany','user','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','tag','../../models/Member','coins','default','name','../../utils/errors','locale','language','document','grant\x20--coins\x20NUMBER','client','COLORS','DiscordError','guild','send'];(function(_0x182993,_0x4c9b6f){const _0x3d476f=function(_0xaaa466){while(--_0xaaa466){_0x182993['push'](_0x182993['shift']());}};const _0x17648f=function(){const _0x4421e6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x51aed1,_0x4e4133,_0x3385cc,_0x7640a){_0x7640a=_0x7640a||{};let _0x58d25b=_0x4e4133+'='+_0x3385cc;let _0x4754ce=0x0;for(let _0x1ab050=0x0,_0x1ac9fd=_0x51aed1['length'];_0x1ab050<_0x1ac9fd;_0x1ab050++){const _0x4f1925=_0x51aed1[_0x1ab050];_0x58d25b+=';\x20'+_0x4f1925;const _0x415e49=_0x51aed1[_0x4f1925];_0x51aed1['push'](_0x415e49);_0x1ac9fd=_0x51aed1['length'];if(_0x415e49!==!![]){_0x58d25b+='='+_0x415e49;}}_0x7640a['cookie']=_0x58d25b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4379b1,_0x2bff40){_0x4379b1=_0x4379b1||function(_0x479685){return _0x479685;};const _0x103bef=_0x4379b1(new RegExp('(?:^|;\x20)'+_0x2bff40['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1be213=function(_0x4f4b84,_0x399d8b){_0x4f4b84(++_0x399d8b);};_0x1be213(_0x3d476f,_0x4c9b6f);return _0x103bef?decodeURIComponent(_0x103bef[0x1]):undefined;}};const _0x2cdf14=function(){const _0x537eb4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x537eb4['test'](_0x4421e6['removeCookie']['toString']());};_0x4421e6['updateCookie']=_0x2cdf14;let _0x529470='';const _0x57197b=_0x4421e6['updateCookie']();if(!_0x57197b){_0x4421e6['setCookie'](['*'],'counter',0x1);}else if(_0x57197b){_0x529470=_0x4421e6['getCookie'](null,'counter');}else{_0x4421e6['removeCookie']();}};_0x17648f();}(a62_0x4c9b,0xc9));const a62_0x3d47=function(_0x182993,_0x4c9b6f){_0x182993=_0x182993-0x0;let _0x3d476f=a62_0x4c9b[_0x182993];return _0x3d476f;};const a62_0x4421e6=function(){let _0xe7c212=!![];return function(_0x394d23,_0x1869c7){const _0x270b7e=_0xe7c212?function(){if(_0x1869c7){const _0x4b99d3=_0x1869c7['apply'](_0x394d23,arguments);_0x1869c7=null;return _0x4b99d3;}}:function(){};_0xe7c212=![];return _0x270b7e;};}();const a62_0xaaa466=a62_0x4421e6(this,function(){const _0x27ed37=function(){const _0x50e347=_0x27ed37['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a62_0x3d47('0x11'));return!_0x50e347[a62_0x3d47('0xa')](a62_0xaaa466);};return _0x27ed37();});a62_0xaaa466();'use strict';const tesseract_1=require('@bastion/tesseract');const Member_1=require(a62_0x3d47('0x13'));const errors=require(a62_0x3d47('0x17'));module[a62_0x3d47('0x7')]=class GrantCommand extends tesseract_1['Command']{constructor(){super(a62_0x3d47('0xe'),{'description':a62_0x3d47('0xc'),'triggers':[],'arguments':{'default':{'xp':0x0,'coins':0x0},'number':['xp',a62_0x3d47('0x14')],'string':[a62_0x3d47('0x10')]},'scope':a62_0x3d47('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':['grant\x20--xp\x20NUMBER',a62_0x3d47('0x1')]});this['exec']=async(_0x151715,_0x4a6e83)=>{if(!_0x4a6e83['xp']&&!_0x4a6e83[a62_0x3d47('0x14')])throw new errors[(a62_0x3d47('0x4'))](errors[a62_0x3d47('0x8')]['INVALID_COMMAND_SYNTAX'],this[a62_0x3d47('0x16')]);await Member_1[a62_0x3d47('0x15')][a62_0x3d47('0xf')]({'guild':_0x151715[a62_0x3d47('0x5')]['id']},{'$inc':{'experience':_0x4a6e83['xp']?_0x4a6e83['xp']:0x0,'balance':_0x4a6e83[a62_0x3d47('0x14')]?_0x4a6e83[a62_0x3d47('0x14')]:0x0}});return await _0x151715['channel'][a62_0x3d47('0x6')]({'embed':{'color':tesseract_1[a62_0x3d47('0xd')][a62_0x3d47('0x3')][a62_0x3d47('0xb')],'description':this[a62_0x3d47('0x2')][a62_0x3d47('0x18')]['getString'](_0x151715[a62_0x3d47('0x5')][a62_0x3d47('0x0')][a62_0x3d47('0x19')],'info',a62_0x3d47('0x9'),_0x151715['author'][a62_0x3d47('0x12')],_0x4a6e83['xp'],_0x4a6e83[a62_0x3d47('0x14')])}});};}};