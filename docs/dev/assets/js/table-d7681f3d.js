import{r as J,s as O,t as K,j as L,p as Q,u as R,v as W,q as X,w as Y,x as Z,y as ee,A as ae,B as te,C}from"./vendor-d18883b8b0cf97071b848f7ddd5e8c7d-a42c0299.js";import{G as le,B as oe,H as se,E as ne}from"./vendor-50e4dafc45a421887af307e4920b9da2-34ea3559.js";import{a as re}from"./vendor-38c3787939c7b0b6c77d73fce3d28891-7e0bed76.js";import{ab as T,d as k,r as v,aJ as de,o as h,c as ie,a as f,a9 as e,b1 as t,v as i,a8 as c,P as D,b3 as I,a2 as B}from"./vendor-e1f92d6dd78b37156c9468a675d2253f-74c9097a.js";import{_ as ce}from"./vendor-dd2349d317d74ca7a80b7b9367c72a84-bdf7e2bf.js";import"./vendor-61fb611e6bd6e41dfb66cf838f1d32c0-6ac1902e.js";import"./vendor-eb6677555573f02990f41d7923105813-64b458c9.js";import"./vendor-12e7d3ab8f59885f55dffca19f4bf54f-ea36b144.js";import"./vendor-951c1f757a9f918f0624cd5cb90b890d-6abd67e7.js";import"./vendor-5a93269d3ee5ba7d2c0a8f64966e32cf-ed0dc00a.js";import"./vendor-13d3464b13e18d062812c818b64e1045-0a5b1c59.js";import"./vendor-f3a119a8db2aef7c107dd2777fa080f1-dee29e8b.js";import"./vendor-a44dcf2a8879c0219241de5805670ddc-43a4208a.js";import"./vendor-28ee9a8430f9e12788896ab32ee5ca81-c75af06c.js";import"./vendor-f941badbb0a8a7d3b8ec47242556b76c-1d60d822.js";import"./vendor-fd49668b7919b44095b834dc15d7330f-ed76fb12.js";import"./vendor-2d991217d9735d01291a78c61e1d6036-71359fe8.js";const x=re.create({timeout:5e3});x.interceptors.request.use(o=>o,o=>(console.log(o),Promise.reject()));x.interceptors.response.use(o=>{if(o.status===200)return o;Promise.reject()},o=>(console.log(o),Promise.reject()));const ue=()=>x({url:"./table.json",method:"get"}),me={class:"container"},pe={class:"handle-box"},_e={class:"pagination"},fe={class:"dialog-footer"},ge=T({name:"basetable"}),be=T({...ge,setup(o){const n=k({address:"",name:"",pageIndex:1,pageSize:10}),m=v([]),V=v(0),g=()=>{ue().then(s=>{m.value=s.data.list,V.value=s.data.pageTotal||50})};g();const P=()=>{n.pageIndex=1,g()},$=s=>{n.pageIndex=s,g()},j=s=>{te.confirm("确定要删除吗？","提示",{type:"warning"}).then(()=>{C.success("删除成功"),m.value.splice(s,1)}).catch(()=>{})},p=v(!1);let r=k({name:"",address:""}),_=-1;const z=(s,l)=>{_=s,r.name=l.name,r.address=l.address,p.value=!0},S=()=>{p.value=!1,C.success(`修改第 ${_+1} 行成功`),m.value[_].name=r.name,m.value[_].address=r.address};return(s,l)=>{const y=J,U=O,b=K,u=L,d=Q,q=R,N=W,F=X,M=Y,E=Z,A=ee,G=ae,w=de("permiss");return h(),ie("div",null,[f("div",me,[f("div",pe,[e(U,{modelValue:n.address,"onUpdate:modelValue":l[0]||(l[0]=a=>n.address=a),placeholder:"地址",class:"handle-select mr10"},{default:t(()=>[e(y,{key:"1",label:"广东省",value:"广东省"}),e(y,{key:"2",label:"湖南省",value:"湖南省"})]),_:1},8,["modelValue"]),e(b,{modelValue:n.name,"onUpdate:modelValue":l[1]||(l[1]=a=>n.name=a),placeholder:"用户名",class:"handle-input mr10"},null,8,["modelValue"]),e(u,{type:"primary",icon:i(le),onClick:P},{default:t(()=>[c("搜索")]),_:1},8,["icon"]),e(u,{type:"primary",icon:i(oe)},{default:t(()=>[c("新增")]),_:1},8,["icon"])]),e(F,{data:m.value,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:t(()=>[e(d,{prop:"id",label:"ID",width:"55",align:"center"}),e(d,{prop:"name",label:"用户名"}),e(d,{label:"账户余额"},{default:t(a=>[c("￥"+D(a.row.money),1)]),_:1}),e(d,{label:"头像(查看大图)",align:"center"},{default:t(a=>[e(q,{class:"table-td-thumb",src:a.row.thumb,"z-index":10,"preview-src-list":[a.row.thumb],"preview-teleported":""},null,8,["src","preview-src-list"])]),_:1}),e(d,{prop:"address",label:"地址"}),e(d,{label:"状态",align:"center"},{default:t(a=>[e(N,{type:a.row.state==="成功"?"success":a.row.state==="失败"?"danger":""},{default:t(()=>[c(D(a.row.state),1)]),_:2},1032,["type"])]),_:1}),e(d,{prop:"date",label:"注册时间"}),e(d,{label:"操作",width:"220",align:"center"},{default:t(a=>[I((h(),B(u,{text:"",icon:i(se),onClick:H=>z(a.$index,a.row)},{default:t(()=>[c(" 编辑 ")]),_:2},1032,["icon","onClick"])),[[w,15]]),I((h(),B(u,{text:"",icon:i(ne),class:"red",onClick:H=>j(a.$index)},{default:t(()=>[c(" 删除 ")]),_:2},1032,["icon","onClick"])),[[w,16]])]),_:1})]),_:1},8,["data"]),f("div",_e,[e(M,{background:"",layout:"total, prev, pager, next","current-page":n.pageIndex,"page-size":n.pageSize,total:V.value,onCurrentChange:$},null,8,["current-page","page-size","total"])])]),e(G,{title:"编辑",modelValue:p.value,"onUpdate:modelValue":l[5]||(l[5]=a=>p.value=a),width:"30%"},{footer:t(()=>[f("span",fe,[e(u,{onClick:l[4]||(l[4]=a=>p.value=!1)},{default:t(()=>[c("取 消")]),_:1}),e(u,{type:"primary",onClick:S},{default:t(()=>[c("确 定")]),_:1})])]),default:t(()=>[e(A,{"label-width":"70px"},{default:t(()=>[e(E,{label:"用户名"},{default:t(()=>[e(b,{modelValue:i(r).name,"onUpdate:modelValue":l[2]||(l[2]=a=>i(r).name=a)},null,8,["modelValue"])]),_:1}),e(E,{label:"地址"},{default:t(()=>[e(b,{modelValue:i(r).address,"onUpdate:modelValue":l[3]||(l[3]=a=>i(r).address=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});const Se=ce(be,[["__scopeId","data-v-192bf27c"]]);export{Se as default};
