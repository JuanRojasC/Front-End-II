const _0x4634=['opacity','input#uploadPhoto','change','393453oMbyGP','445520hXZEjO','inline','setItem','i#eyeOn','display','div.drop-down-menu\x20div.image\x20h2','https://ctd-todo-api.herokuapp.com/v1/users/getMe','4321OPfWxO','609614kEMlym','Registrarme\x20en\x20ToDo\x20List®','target','div.userPassword\x20p','log','blur(10px)','<span>Bienvenido</span>','split','1ufLvsM','flex','style','stopPropagation','userPhotoUrl','setAttribute','block','innerText','div.drop-down-menu','userAgent','70%','blur(0px)','label.chooseFile','click','100%','filter','top','body#settings','readAsDataURL','none','87869KQDVtB','test','value','14eypNWV','115894oABbSf','small#weight','getItem','offsetHeight','48783NqfkdJ','div.drop-down-menu\x20div.image\x20img','email','result','i#eyeOff','upload/','div.userJoined\x20p','i.mobileMenu','length','section.user\x20div.profilePhoto\x20p','innerHTML','lastName','addEventListener','repeat','div.user-image','mouseover','onload','div.user-info\x20div.userData','src','https://res.cloudinary.com/juanrojasc/image/upload/','files','textContent','2IPSoWF','div.userEmail\x20p','userToDoAccess','userToDoToken','firstName','div.user-info\x20.userData\x20p','querySelector','4zzWdYm'];function _0xae10(_0x3b530c,_0x5ca66a){return _0xae10=function(_0x4634f5,_0xae10a3){_0x4634f5=_0x4634f5-0xa9;let _0x4cdb58=_0x4634[_0x4634f5];return _0x4cdb58;},_0xae10(_0x3b530c,_0x5ca66a);}const _0x47ee0e=_0xae10;(function(_0x4e8989,_0x369860){const _0x3ea589=_0xae10;while(!![]){try{const _0x204fe8=parseInt(_0x3ea589(0xb3))+parseInt(_0x3ea589(0xdf))*parseInt(_0x3ea589(0xc3))+-parseInt(_0x3ea589(0xda))*-parseInt(_0x3ea589(0xba))+-parseInt(_0x3ea589(0xae))*parseInt(_0x3ea589(0xd7))+-parseInt(_0x3ea589(0xbb))+-parseInt(_0x3ea589(0xb2))*-parseInt(_0x3ea589(0xf5))+parseInt(_0x3ea589(0xdb));if(_0x204fe8===_0x369860)break;else _0x4e8989['push'](_0x4e8989['shift']());}catch(_0x5569e1){_0x4e8989['push'](_0x4e8989['shift']());}}}(_0x4634,0x7937b));import{uploadPhoto,destroyPhoto,getPhotoId}from'./cloudinaryAPI.js';import{loadUserData}from'./tasksFunctions.js';import{getUserData,getTasks,updateTask}from'./callAPI.js';window[_0x47ee0e(0xef)]=async function(){const _0x4608a6=_0x47ee0e;let _0xe2745b=sessionStorage[_0x4608a6(0xdd)](_0x4608a6(0xaa)),_0x9a557f=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x4608a6(0xd8)](navigator[_0x4608a6(0xcc)]);const _0x2b320d=_0x4608a6(0xf2);let _0x5e2972=await getUserData(_0x4608a6(0xb9),_0xe2745b),_0x5a26d5=_0x5e2972[_0x4608a6(0xab)][_0x4608a6(0xc2)]('\x20')[0x0]+'\x20'+_0x5e2972[_0x4608a6(0xea)][_0x4608a6(0xc2)]('\x20')[0x0],_0x5a4955=document['querySelector'](_0x4608a6(0xd4)),_0x2b270b=document[_0x4608a6(0xad)]('main'),_0x1c1e8f=document['querySelector'](_0x4608a6(0xf0)),_0xb374d2=document[_0x4608a6(0xad)](_0x4608a6(0xe6)),_0xecea8b=document[_0x4608a6(0xad)](_0x4608a6(0xed)),_0x365b68=document[_0x4608a6(0xad)]('div.user-image\x20img'),_0x451c64=document['querySelector'](_0x4608a6(0xe0)),_0x5433e1=document['querySelector'](_0x4608a6(0xac)),_0x1a0ac3=document[_0x4608a6(0xad)](_0x4608a6(0xb8)),_0x18c54b=![],_0x5c188f=document[_0x4608a6(0xad)](_0x4608a6(0xcb)),_0x2db90a=document[_0x4608a6(0xad)]('section.user\x20div.profilePhoto\x20img'),_0x5269e5=document['querySelector'](_0x4608a6(0xe8)),_0x2b48b1=document[_0x4608a6(0xad)](_0x4608a6(0xcf)),_0x4bce18=document[_0x4608a6(0xad)]('i.camera'),_0x3b9e40=document[_0x4608a6(0xad)](_0x4608a6(0xb0)),_0x3b8b9b=document[_0x4608a6(0xad)](_0x4608a6(0xdc)),_0x3c1a5d=![],_0xb2e33e=document[_0x4608a6(0xad)]('div.userName\x20p'),_0x21e432=document['querySelector'](_0x4608a6(0xf6)),_0x1d77ad=document['querySelector'](_0x4608a6(0xbe)),_0x2cf073=document[_0x4608a6(0xad)](_0x4608a6(0xe5)),_0x2ef3a7=document['querySelector'](_0x4608a6(0xb6)),_0x8138d0=document[_0x4608a6(0xad)](_0x4608a6(0xe3));if(localStorage[_0x4608a6(0xdd)](_0x4608a6(0xc7))){let _0x1560bb=decrypt(localStorage[_0x4608a6(0xdd)]('userPhotoUrl'))['split']('\x20®\x20')[0x0];_0x3c1a5d=decrypt(localStorage[_0x4608a6(0xdd)](_0x4608a6(0xc7)))['split']('\x20®\x20')[0x1],_0x2db90a['setAttribute']('src',_0x2b320d+_0x1560bb),_0x9a557f?(_0x1a0ac3[_0x4608a6(0xca)]=_0x5a26d5,_0x451c64[_0x4608a6(0xc8)](_0x4608a6(0xf1),_0x2b320d+_0x1560bb),_0xb374d2[_0x4608a6(0xc5)][_0x4608a6(0xaf)]='1'):(_0x5433e1[_0x4608a6(0xca)]=_0x5a26d5,_0x365b68[_0x4608a6(0xc8)](_0x4608a6(0xf1),_0x2b320d+_0x1560bb),_0x1c1e8f[_0x4608a6(0xc5)][_0x4608a6(0xaf)]=_0x4608a6(0xd1),_0xecea8b['style'][_0x4608a6(0xaf)]=_0x4608a6(0xd1));}_0x5269e5[_0x4608a6(0xe9)]=_0x4608a6(0xc1)+_0x5a26d5,_0xb2e33e[_0x4608a6(0xf4)]=_0x5e2972['firstName']+'\x20'+_0x5e2972[_0x4608a6(0xea)],_0x21e432['textContent']=_0x5e2972[_0x4608a6(0xe1)];let _0x2b9bfc=decrypt(sessionStorage[_0x4608a6(0xdd)](_0x4608a6(0xa9)))[_0x4608a6(0xe7)];_0x1d77ad[_0x4608a6(0xf4)]='*'['repeat'](_0x2b9bfc);let _0x57da73=await getTasks(!![],_0xe2745b);_0x57da73=await _0x57da73[0x0][0x0],_0x2cf073['textContent']=await new Date(_0x57da73['createdAt'])['toLocaleDateString'](),_0x9a557f?_0xb374d2[_0x4608a6(0xeb)](_0x4608a6(0xd0),function(_0x5a4fe3){const _0x9efdd1=_0x4608a6;_0x5a4fe3[_0x9efdd1(0xc6)](),_0x18c54b=_0x18c54b?![]:!![],_0x18c54b?(_0xb374d2[_0x9efdd1(0xc5)]['opacity']=_0x9efdd1(0xcd),_0x2b270b[_0x9efdd1(0xc5)][_0x9efdd1(0xd2)]=_0x9efdd1(0xc0),_0x5c188f[_0x9efdd1(0xc5)][_0x9efdd1(0xb7)]=_0x9efdd1(0xc4)):(_0x5c188f[_0x9efdd1(0xc5)]['display']='none',_0xb374d2[_0x9efdd1(0xc5)][_0x9efdd1(0xaf)]=_0x9efdd1(0xd1),_0x2b270b['style']['filter']=_0x9efdd1(0xce));}):_0x1c1e8f['addEventListener'](_0x4608a6(0xd0),function(_0x1af1f9){const _0x4f3481=_0x4608a6;_0x1af1f9[_0x4f3481(0xc6)](),_0x18c54b=_0x18c54b?![]:!![],_0x18c54b?(_0x1c1e8f['style'][_0x4f3481(0xaf)]=_0x4f3481(0xcd),_0x5c188f[_0x4f3481(0xc5)][_0x4f3481(0xd3)]=document[_0x4f3481(0xad)]('header')[_0x4f3481(0xde)]*(0x64/document['documentElement']['clientWidth'])-0.5+'vw',_0x5c188f[_0x4f3481(0xc5)][_0x4f3481(0xb7)]=_0x4f3481(0xc9)):(_0x5c188f[_0x4f3481(0xc5)][_0x4f3481(0xb7)]=_0x4f3481(0xd6),_0x1c1e8f[_0x4f3481(0xc5)][_0x4f3481(0xaf)]='100%');}),_0x2ef3a7['addEventListener'](_0x4608a6(0xd0),function(_0x33a596){const _0x2382ae=_0x4608a6;_0x2ef3a7[_0x2382ae(0xc5)][_0x2382ae(0xb7)]=_0x2382ae(0xd6),_0x8138d0['style'][_0x2382ae(0xb7)]='block',_0x1d77ad[_0x2382ae(0xf4)]=decrypt(sessionStorage[_0x2382ae(0xdd)](_0x2382ae(0xa9)));}),_0x8138d0['addEventListener']('click',function(_0x2e86db){const _0x25e273=_0x4608a6;_0x8138d0[_0x25e273(0xc5)][_0x25e273(0xb7)]='none',_0x2ef3a7[_0x25e273(0xc5)][_0x25e273(0xb7)]=_0x25e273(0xc9),_0x1d77ad[_0x25e273(0xf4)]='*'[_0x25e273(0xec)](_0x2b9bfc);}),!_0x9a557f&&(_0x2db90a[_0x4608a6(0xeb)]('mouseover',function(_0x49349e){const _0x193409=_0x4608a6;_0x2db90a[_0x193409(0xc5)][_0x193409(0xaf)]='70%',_0x2b48b1[_0x193409(0xc5)][_0x193409(0xb7)]=_0x193409(0xc4);}),_0x2db90a[_0x4608a6(0xeb)]('mouseout',function(_0x1a0297){const _0x3f399c=_0x4608a6;_0x2db90a[_0x3f399c(0xc5)]['opacity']=_0x3f399c(0xd1),_0x2b48b1[_0x3f399c(0xc5)]['display']=_0x3f399c(0xd6);}),_0x2b48b1['addEventListener'](_0x4608a6(0xee),function(_0x32894a){const _0x50d130=_0x4608a6;_0x2db90a['style'][_0x50d130(0xaf)]=_0x50d130(0xcd),_0x2b48b1[_0x50d130(0xc5)][_0x50d130(0xb7)]=_0x50d130(0xc4);})),_0x4bce18['addEventListener'](_0x4608a6(0xd0),function(_0x308f03){_0x2b48b1['click']();}),_0x3b9e40[_0x4608a6(0xeb)](_0x4608a6(0xb1),async function(_0x22d7c6){const _0xcb1e94=_0x4608a6;var _0x11ade6='';_0x11ade6=_0x22d7c6[_0xcb1e94(0xbd)][_0xcb1e94(0xd9)][_0xcb1e94(0xc2)]('\x5c')['pop']();if(_0x11ade6){let _0x117ff6=_0x3b9e40[_0xcb1e94(0xf3)][0x0],_0x4b6a11=_0x117ff6['size']/0xf4240;if(_0x4b6a11>=0x4)_0x3b8b9b[_0xcb1e94(0xc5)][_0xcb1e94(0xb7)]=_0xcb1e94(0xb4);else{_0x3b8b9b['style'][_0xcb1e94(0xb7)]='none';let _0x1a1428=new FileReader();_0x1a1428[_0xcb1e94(0xd5)](_0x117ff6),_0x1a1428[_0xcb1e94(0xef)]=async function(_0x35f876){const _0x57806e=_0xcb1e94;_0x2db90a['setAttribute']('src',''+_0x35f876['target']['result']),_0x365b68['setAttribute']('src',''+_0x35f876[_0x57806e(0xbd)][_0x57806e(0xe2)]),_0x451c64[_0x57806e(0xc8)](_0x57806e(0xf1),''+_0x35f876[_0x57806e(0xbd)][_0x57806e(0xe2)]),_0x2db90a[_0x57806e(0xc5)][_0x57806e(0xaf)]=_0x57806e(0xd1),_0x2b48b1['style'][_0x57806e(0xb7)]=_0x57806e(0xd6);let _0x16f024=![];if(_0x3c1a5d!==![]){_0x16f024=await destroyPhoto(_0x3c1a5d);if(_0x16f024[0x0]>=0xc8&&_0x16f024[0x0]<0x12c)_0x16f024=!![];}if(_0x16f024===!![]||_0x3c1a5d===![]){const _0x97d77a=await uploadPhoto(_0x117ff6);let _0x590459=await _0x97d77a[0x1][_0x57806e(0xc2)](_0x57806e(0xe4))[0x1];_0x3c1a5d=await _0x97d77a[0x2];let _0x509498=_0x590459?_0x57806e(0xbc)+_0x590459:![];if(_0x509498){const _0x13bdf8=await updateTask(![],_0xe2745b,_0x509498,!![],'profilePhotoUpdate');console[_0x57806e(0xbf)](_0x13bdf8[0x1]),localStorage[_0x57806e(0xb5)](_0x57806e(0xc7),encrypt(_0x590459+'\x20®\x20'+_0x3c1a5d));}}};}}!_0x9a557f&&(_0x2db90a[_0xcb1e94(0xc5)][_0xcb1e94(0xaf)]='100%',_0x2b48b1['style'][_0xcb1e94(0xb7)]=_0xcb1e94(0xd6));}),_0x5a4955[_0x4608a6(0xeb)]('click',function(_0x4a02bb){const _0x17b830=_0x4608a6;_0x18c54b&&(_0x18c54b=_0x18c54b?![]:!![],_0x1c1e8f[_0x17b830(0xc5)][_0x17b830(0xaf)]=_0x17b830(0xd1),_0x5c188f[_0x17b830(0xc5)][_0x17b830(0xb7)]='none');});};