import{b as P,c as X}from"./index-rRFGLrRk.js";import{I as tt,q as et,w as at,z as lt,B as ot,x as nt,J as st,K as it,y as ut,H as rt}from"./element-plus-CxSlioY7.js";import{r as h,E as mt,c as _,a as E,v as e,j as n,ae as y,W as a,M as w,F as D,o as d,k as N,e as dt,l as pt,a6 as u,t as C,Y as ct,Z as _t}from"./@vue-kKykbxn7.js";import{a as ft}from"./alova-Dc8ujYEb.js";/* empty css                      */import"./vue-router-2E4jhvu7.js";import"./@element-plus-CVcQ0kpg.js";import"./@alova-Cz8T9Pb0.js";import"./pinia-BiPvFv_h.js";import"./highlight.js-DTDMDN_T.js";import"./dayjs-BZIFujmo.js";import"./@highlightjs-CGChwgod.js";import"./@kjgl77-Dnb-6Rt9.js";import"./pinia-plugin-persistedstate-n2tMOXAx.js";import"./vxe-table-CidieOr-.js";import"./xe-utils-CkIl7JsB.js";import"./@vxe-ui-Cro8wKBv.js";import"./dom-zindex-DlWB42XF.js";import"./vxe-pc-ui-CyqLebZs.js";import"./@vueuse-Ds_1xoyw.js";import"./lodash-es-L85KEEkL.js";import"./async-validator-9PlIezaS.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D_chPuIy.js";import"./normalize-wheel-es-BQoi3Ox2.js";const gt=r=>P.Post("/admin/timedMessageList",r),vt=r=>P.Post("/admin/timedMessageSave",r),yt=r=>P.Post("/admin/timedMessageDel",r),bt=r=>P.Post("/admin/timedMessageStatusSet",r),xt={style:{height:"80%"}},Vt={style:{"margin-bottom":"5px"}},ht={key:0},Et={key:1},Zt={__name:"index",setup(r){const f=h(!1),s=h({attachment:[],type:2}),{proxy:F}=mt(),$={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},{data:I,total:T,page:k,pageSize:B,loading:q,send:g}=ft((o,t)=>gt({page:o,pageSize:t}),{initialData:{total:0,data:[]},data:o=>(o==null?void 0:o.list)||[],initialPage:1,initialPageSize:10}),L=h({content:[{required:!0,message:"请输入回复文本",trigger:"blur"}],attachment:[{required:!0,message:"请输入附件",trigger:"blur"}],time:[{validator:(o,t,p)=>{const m=/^([01]\d|2[0-3]):([0-5]\d)$/;t&&t.length&&t.filter(c=>c).forEach(c=>{c.split(",").forEach(S=>{m.test(S.trim())||p(new Error("请填写正确的时间格式 (HH:mm)"))})}),p()},message:"请填写正确的时间格式",trigger:"blur"}]}),H=({page:o,pageSize:t})=>{g(o,t)},U=o=>{s.value={...o},o.attachment.length&&(s.value.attachment=o.attachment.map(t=>({url:t,uid:new Date().getTime()}))),f.value=!0},J=o=>{rt({title:"提示",message:"确定要删除定时消息吗?",showCancelButton:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then(async()=>{await yt({id:o.id}),await g(),$message.success("删除成功")}).catch(()=>{})},j=()=>{F.$refs.formRef.validate(async o=>{if(o)try{await vt({...s.value,attachment:s.value.attachment.map(t=>t.url),time:s.value.type==1?s.value.time.filter((t,p)=>!p):s.value.time}),f.value=!1,await g(),$message.success(s.value.id?"修改成功":"创建成功")}catch{}})},G=h([{name:"新增",code:"add",status:"success"}]),K=({code:o})=>{U({type:1,time:["","","","","","",""],attachment:[]})},W=async o=>{try{await bt({id:o.id,status:o.status?0:1}),await g(),$message.success(o.status?"停用成功":"启用成功")}catch{}};return(o,t)=>{const p=y("vxe-toolbar"),m=y("vxe-column"),c=tt,b=et,S=y("vxe-table"),Y=y("vxe-pager"),R=it,Z=st,v=nt,x=ot,V=lt,z=ut,A=y("a-upload"),O=at,Q=X;return d(),_(D,null,[E("div",xt,[e(p,{buttons:n(G),onButtonClick:K,refresh:{queryMethod:n(g)}},null,8,["buttons","refresh"]),e(S,{ref:"tableRef",data:n(I),border:!0,round:"",stripe:"",height:"100%",loading:n(q)},{default:a(()=>[e(m,{type:"seq",width:"70"}),e(m,{field:"id",title:"ID",width:"70"}),e(m,{field:"name",title:"定时配置"},{default:a(({row:l})=>[(d(!0),_(D,null,N(l.time,(i,M)=>(d(),_("div",Vt,[i?(d(),dt(c,{key:0},{default:a(()=>[l.type==2?(d(),_("span",ht," 周"+C($[M])+" : ",1)):(d(),_("span",Et," 规划时间 : ")),u(" "+C(i),1)]),_:2},1024)):pt("",!0)]))),256))]),_:1}),e(m,{field:"status",title:"状态"},{default:a(({row:l})=>[e(c,{type:l.status?"success":"danger"},{default:a(()=>[u(C(l.status?"运行中":"未开始"),1)]),_:2},1032,["type"])]),_:1}),e(m,{field:"content",title:"消息内容"}),e(m,{title:"操作",width:"250"},{default:a(({row:l})=>[e(b,{type:"primary",onClick:i=>U(l)},{default:a(()=>t[6]||(t[6]=[u("编辑")])),_:2},1032,["onClick"]),e(b,{type:"danger",onClick:i=>J(l)},{default:a(()=>t[7]||(t[7]=[u("删除")])),_:2},1032,["onClick"]),e(b,{type:l.status?"warning":"success",onClick:i=>W(l)},{default:a(()=>[u(C(l.status?"停用":"启用"),1)]),_:2},1032,["type","onClick"])]),_:1})]),_:1},8,["data","loading"]),e(Y,{currentPage:n(k),"onUpdate:currentPage":t[0]||(t[0]=l=>w(k)?k.value=l:null),pageSize:n(B),"onUpdate:pageSize":t[1]||(t[1]=l=>w(B)?B.value=l:null),total:n(T),layouts:["Home","PrevJump","PrevPage","Number","NextPage","NextJump","End","Sizes","FullJump","Total"],onPageChange:H},null,8,["currentPage","pageSize","total"])]),e(Q,{modelValue:n(f),"onUpdate:modelValue":t[5]||(t[5]=l=>w(f)?f.value=l:null),title:n(s).id?`修改定时消息: ${n(s).id}`:"新增定时消息","destroy-on-close":"",onSubmit:j},{default:a(()=>[e(O,{"label-width":"100px",model:n(s),ref:"formRef",rules:n(L)},{default:a(()=>[e(V,null,{default:a(()=>[e(x,{span:12},{default:a(()=>[e(v,{label:"定时类型"},{default:a(()=>[e(Z,{modelValue:n(s).type,"onUpdate:modelValue":t[2]||(t[2]=l=>n(s).type=l)},{default:a(()=>[e(R,{value:1},{default:a(()=>t[8]||(t[8]=[u("每日")])),_:1}),e(R,{value:2},{default:a(()=>t[9]||(t[9]=[u("自定义")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),(d(),_(D,null,N(7,(l,i)=>ct(e(V,null,{default:a(()=>[e(x,{span:12},{default:a(()=>[e(v,{label:n(s).type==1?"规划时间":`周${$[i]}`,prop:"time"},{default:a(()=>[e(z,{modelValue:n(s).time[i],"onUpdate:modelValue":M=>n(s).time[i]=M,placeholder:"请输入时间"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]),_:2},1024)]),_:2},1536),[[_t,n(s).type==2?!0:!i]])),64)),e(v,null,{default:a(()=>t[10]||(t[10]=[E("div",null,[u(" 注意: 多个关键字可用 "),E("span",{class:"text-[red]"},"英文逗号"),u(" 分割 ")],-1)])),_:1}),e(V,null,{default:a(()=>[e(x,{span:18},{default:a(()=>[e(v,{label:"回复文本",prop:"content"},{default:a(()=>[e(z,{modelValue:n(s).content,"onUpdate:modelValue":t[3]||(t[3]=l=>n(s).content=l),placeholder:"请输入回复文本",type:"textarea",rows:4},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(x,{span:24},{default:a(()=>[e(v,{label:"附件"},{default:a(()=>[e(A,{modelValue:n(s).attachment,"onUpdate:modelValue":t[4]||(t[4]=l=>n(s).attachment=l),type:"list"},null,8,["modelValue"]),t[11]||(t[11]=E("div",null," 注意: 上传图片不大于10MB,多个附件将以多条消息方式发送,支持图片,视频文件,其他文档等,但不大于30MB ",-1))]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])],64)}}};export{Zt as default};
