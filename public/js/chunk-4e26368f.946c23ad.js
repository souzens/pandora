(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e26368f"],{"02f4":function(t,a,e){var o=e("4588"),i=e("be13");t.exports=function(t){return function(a,e){var s,l,n=String(i(a)),r=o(e),c=n.length;return r<0||r>=c?t?"":void 0:(s=n.charCodeAt(r),s<55296||s>56319||r+1===c||(l=n.charCodeAt(r+1))<56320||l>57343?t?n.charAt(r):s:t?n.slice(r,r+2):l-56320+(s-55296<<10)+65536)}}},"41db":function(t,a,e){"use strict";e.d(a,"f",function(){return i}),e.d(a,"h",function(){return s}),e.d(a,"e",function(){return l}),e.d(a,"d",function(){return n}),e.d(a,"b",function(){return r}),e.d(a,"a",function(){return c}),e.d(a,"i",function(){return d}),e.d(a,"c",function(){return u}),e.d(a,"g",function(){return p}),e.d(a,"j",function(){return m}),e.d(a,"k",function(){return _}),e.d(a,"l",function(){return f}),e.d(a,"n",function(){return b}),e.d(a,"o",function(){return h}),e.d(a,"p",function(){return g}),e.d(a,"m",function(){return $});var o=e("ead3");function i(t){return Object(o["a"])("/deploy/apply/project/detail",t)}function s(t){return Object(o["b"])("/deploy/apply/submit",t)}function l(){return Object(o["a"])("/deploy/apply/project/all")}function n(t){return Object(o["a"])("/deploy/apply/list",t)}function r(t){return Object(o["a"])("/deploy/apply/detail",t)}function c(t){return Object(o["b"])("/deploy/apply/audit",t)}function d(t){return Object(o["b"])("/deploy/apply/update",t)}function u(t){return Object(o["b"])("/deploy/apply/drop",t)}function p(t){return Object(o["a"])("/deploy/apply/rollbacklist",t)}function m(t){return Object(o["b"])("/deploy/build/start",t)}function _(t){return Object(o["a"])("/deploy/build/status",t)}function f(t){return Object(o["b"])("/deploy/build/stop",t)}function b(t){return Object(o["b"])("/deploy/deploy/start",t)}function h(t){return Object(o["a"])("/deploy/deploy/status",t)}function g(t){return Object(o["b"])("/deploy/deploy/stop",t)}function $(t){return Object(o["b"])("/deploy/deploy/rollback",t)}},"454f":function(t,a,e){e("46a7");var o=e("584a").Object;t.exports=function(t,a,e){return o.defineProperty(t,a,e)}},"46a7":function(t,a,e){var o=e("63b6");o(o.S+o.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"5df3":function(t,a,e){"use strict";var o=e("02f4")(!0);e("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,a=this._t,e=this._i;return e>=a.length?{value:void 0,done:!0}:(t=o(a,e),this._i+=t.length,{value:t,done:!1})})},"7f7f":function(t,a,e){var o=e("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,l="name";l in i||e("9e1e")&&o(i,l,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"85f2":function(t,a,e){t.exports=e("454f")},c75b:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-card",{attrs:{shadow:"never"}},[e("el-row",{staticClass:"app-btn-group",attrs:{gutter:10}},[e("el-col",{attrs:{span:3}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("submit_time"),size:"medium",clearable:""},model:{value:t.searchTime,callback:function(a){t.searchTime=a},expression:"searchTime"}},t._l(t.timeList,function(t){return e("el-option",{key:t.time,attrs:{label:t.label,value:t.time}})}),1)],1),e("el-col",{attrs:{span:3}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("audit_status"),size:"medium",clearable:""},model:{value:t.searchAuditStatus,callback:function(a){t.searchAuditStatus=a},expression:"searchAuditStatus"}},t._l(t.auditStatusList,function(t){return e("el-option",{key:t.status,attrs:{label:t.label,value:t.status}})}),1)],1),e("el-col",{attrs:{span:3}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("deploy_status"),size:"medium",clearable:""},model:{value:t.searchStatus,callback:function(a){t.searchStatus=a},expression:"searchStatus"}},t._l(t.statusList,function(t){return e("el-option",{key:t.status,attrs:{label:t.label,value:t.status}})}),1)],1),e("el-col",{attrs:{span:9}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("select_project"),size:"medium",clearable:""},model:{value:t.searchProjectId,callback:function(a){t.searchProjectId=a},expression:"searchProjectId"}},t._l(t.projectList,function(a){return e("el-option",{key:a.project_id,attrs:{label:a.project_name,value:a.project_id}},[t._v("\n                        "+t._s(a.space_name)+" "),e("i",{staticClass:"el-icon-arrow-right"}),t._v(" "+t._s(a.project_name)+"\n                    ")])}),1)],1),e("el-col",{attrs:{span:6}},[e("el-input",{attrs:{size:"medium",placeholder:t.$t("please_input_keyword_id_or_name")},nativeOn:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.searchHandler(a):null}},model:{value:t.searchInput,callback:function(a){t.searchInput=a},expression:"searchInput"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchHandler},slot:"append"})],1)],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticClass:"app-table",attrs:{size:"medium",data:t.tableData}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),e("el-table-column",{attrs:{prop:"name",label:t.$t("name")}}),e("el-table-column",{attrs:{label:t.$t("project_name")},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n                     "+t._s(a.row.project_name)+"\n                     "),e("el-tooltip",{attrs:{effect:"dark",content:t.$t("belong_to_space")+": "+a.row.space_name,placement:"top"}},[e("span",{staticClass:"app-cursor"},[e("i",{staticClass:"iconfont icon-space small"})])])]}}])}),e("el-table-column",{attrs:{prop:"ssh_port",width:"100",label:t.$t("submit_time")},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{attrs:{effect:"dark",content:t.$root.FormatDateTime(a.row.ctime),placement:"top"}},[e("span",{staticClass:"app-cursor"},[t._v(t._s(t.$root.FormatDateFromNow(a.row.ctime)))])])]}}])}),e("el-table-column",{attrs:{prop:"ssh_port",width:"100",label:t.$t("submiter")},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tooltip",{attrs:{effect:"dark",content:a.row.email,placement:"top"}},[e("span",{staticClass:"app-cursor"},[t._v(t._s(a.row.username))])])]}}])}),e("el-table-column",{attrs:{prop:"audit_status",width:"100",label:t.$t("audit")},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.audit_status==t.$root.AuditStatusPending?e("span",{staticClass:"app-color-warning"},[t._v(t._s(t.$t("unaudit")))]):a.row.audit_status==t.$root.AuditStatusOk?e("span",{staticClass:"app-color-success"},[t._v(t._s(t.$t("pass")))]):a.row.audit_status==t.$root.AuditStatusRefuse?e("span",{staticClass:"app-color-error"},[t._v(t._s(t.$t("denied")))]):e("span",[t._v("--")])]}}])}),e("el-table-column",{attrs:{prop:"ssh_port",width:"100",label:t.$t("status")},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.status==t.$root.ApplyStatusNone?e("span",[e("i",{staticClass:"iconfont small left icon-wait"}),t._v(t._s(t.$t("wait_online")))]):a.row.status==t.$root.ApplyStatusIng?e("span",[e("i",{staticClass:"iconfont small left icon-fabu"}),t._v(t._s(t.$t("onlineing")))]):a.row.status==t.$root.ApplyStatusSuccess?e("span",{staticClass:"app-color-success"},[e("i",{staticClass:"iconfont small left icon-success"}),t._v(t._s(t.$t("success")))]):a.row.status==t.$root.ApplyStatusFailed?e("span",{staticClass:"app-color-error"},[e("i",{staticClass:"iconfont small left icon-failed"}),t._v(t._s(t.$t("failed")))]):a.row.status==t.$root.ApplyStatusDrop?e("span",{staticClass:"app-color-gray"},[e("i",{staticClass:"iconfont small left icon-drop"}),t._v(t._s(t.$t("drop")))]):a.row.status==t.$root.ApplyStatusRollback?e("span",{staticClass:"app-color-error"},[e("i",{staticClass:"iconfont small left icon-rollback"}),t._v(t._s(t.$t("rollback")))]):e("span",[t._v("--")])]}}])}),e("el-table-column",{attrs:{label:t.$t("operate"),width:"100",align:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-dropdown",{attrs:{trigger:"click"},on:{command:function(e){t.operateHandler(e,a.row)}}},[e("el-button",{attrs:{size:"small"}},[t._v("\n                            "+t._s(t.$t("operate"))),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{staticClass:"app-op-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[t.$root.CheckPriv(t.$root.Priv.DEPLOY_VIEW)?e("el-dropdown-item",{attrs:{command:"view"}},[e("i",{staticClass:"iconfont left small icon-view"}),t._v(t._s(t.$t("view"))+"\n                            ")]):t._e(),a.row.status!=t.$root.ApplyStatusNone||a.row.audit_status!=t.$root.AuditStatusPending&&a.row.audit_status!=t.$root.AuditStatusRefuse||!t.$root.CheckPriv(t.$root.Priv.DEPLOY_EDIT)?t._e():e("el-dropdown-item",{attrs:{command:"edit"}},[e("i",{staticClass:"iconfont left small icon-edit"}),t._v(t._s(t.$t("edit"))+"\n                            ")]),a.row.audit_status==t.$root.AuditStatusPending&&a.row.status==t.$root.ApplyStatusNone&&t.$root.CheckPriv(t.$root.Priv.DEPLOY_AUDIT)?e("el-dropdown-item",{attrs:{command:"audit"}},[e("i",{staticClass:"iconfont left small icon-audit"}),t._v(t._s(t.$t("audit"))+"\n                            ")]):t._e(),a.row.audit_status!=t.$root.AuditStatusOk||a.row.status!=t.$root.ApplyStatusNone&&a.row.status!=t.$root.ApplyStatusIng&&a.row.status!=t.$root.ApplyStatusSuccess&&a.row.status!=t.$root.ApplyStatusFailed&&a.row.status!=t.$root.ApplyStatusRollback||!t.$root.CheckPriv(t.$root.Priv.DEPLOY_DEPLOY)?t._e():e("el-dropdown-item",{attrs:{command:"deploy"}},[e("i",{staticClass:"iconfont left small icon-fabu"}),t._v(t._s(t.$t("online"))+"\n                            ")]),a.row.status!=t.$root.ApplyStatusIng&&a.row.status!=t.$root.ApplyStatusDrop&&t.$root.CheckPriv(t.$root.Priv.DEPLOY_DROP)?e("el-dropdown-item",{attrs:{command:"drop"}},[e("i",{staticClass:"iconfont left small icon-drop"}),t._v(t._s(t.$t("drop"))+"\n                            ")]):t._e()],1)],1)]}}])})],1),e("el-pagination",{staticClass:"app-pagination",attrs:{background:"",layout:"prev, pager, next","current-page":t.$root.Page,"page-size":t.$root.PageSize,total:t.$root.Total},on:{"current-change":t.currentChangeHandler,"update:currentPage":function(a){t.$set(t.$root,"Page",a)}}})],1),e("el-dialog",{attrs:{width:t.$root.DialogNormalWidth,title:t.dialogTitle,visible:t.dialogVisible},on:{"update:visible":function(a){t.dialogVisible=a},close:t.closeDialogHandler}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],staticClass:"app-dialog"},[e("el-form",{attrs:{size:"medium","label-width":"120px"}},[e("el-form-item",{attrs:{label:t.$t("space_name")}},[t._v("\n                    "+t._s(t.dialogDetail.space_name)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("project_name")}},[t._v("\n                    "+t._s(t.dialogDetail.project_name)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("apply_order")}},[t._v("\n                    "+t._s(t.dialogDetail.name)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("deploy_mode")}},[1==t.dialogDetail.deploy_mode?e("div",[e("i",{staticClass:"iconfont icon-branch"}),t._v(" "+t._s(this.$t("branch_deploy"))+" - "+t._s(t.$t("branch_name"))+": "+t._s(t.dialogDetail.branch_name)+" - "+t._s(t.$t("version"))+": "+t._s(t.dialogDetail.commit_version?t.dialogDetail.commit_version:"HEAD")+"\n                    ")]):e("div",[e("i",{staticClass:"iconfont icon-tag"}),t._v(" "+t._s(this.$t("tag_deploy"))+" - "+t._s(t.dialogDetail.branch_name)+"\n                    ")])]),e("el-form-item",{attrs:{label:t.$t("deploy_illustrate")}},[t._v("\n                    "+t._s(t.dialogDetail.description)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("audit_status")}},[t._v("\n                    "+t._s(this.auditStatusTitle(t.dialogDetail.audit_status))+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("submiter")}},[t._v("\n                    "+t._s(t.dialogDetail.username)+" - "+t._s(t.dialogDetail.email)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("submit_time")}},[t._v("\n                    "+t._s(this.$root.FormatDateTime(t.dialogDetail.ctime))+"\n                ")]),"audit"==t.dialogDetail.cmd?[t.dialogDetail.status==t.$root.ApplyStatusNone&&t.dialogDetail.audit_status==t.$root.AuditStatusPending?e("el-form-item",{attrs:{label:t.$t("audit")}},[e("div",[e("el-radio",{attrs:{label:t.$root.AuditStatusOk},model:{value:t.auditStatus,callback:function(a){t.auditStatus=a},expression:"auditStatus"}},[e("span",{staticClass:"app-color-success"},[t._v(t._s(t.$t("audit_pass")))])]),e("el-radio",{attrs:{label:t.$root.AuditStatusRefuse},model:{value:t.auditStatus,callback:function(a){t.auditStatus=a},expression:"auditStatus"}},[e("span",{staticClass:"app-color-error"},[t._v(t._s(t.$t("audit_denied")))])])],1)]):t._e(),t.dialogDetail.status==t.$root.ApplyStatusNone&&t.dialogDetail.audit_status==t.$root.AuditStatusPending&&t.auditStatus==t.$root.AuditStatusRefuse?e("el-form-item",{attrs:{label:t.$t("deined_reason")}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:t.auditRefusalReason,callback:function(a){t.auditRefusalReason=a},expression:"auditRefusalReason"}})],1):t._e(),e("el-form-item",[e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.dialogSubmitAuditStatusHandler}},[t._v(t._s(t.$t("audit")))]),e("el-button",{attrs:{size:"small"},on:{click:t.closeDialogHandler}},[t._v(t._s(t.$t("close")))])],1)]:t._e()],2)],1)]),e("el-dialog",{attrs:{width:t.$root.DialogNormalWidth,title:t.$t("edit_apply_order"),visible:t.dialogEditVisible},on:{"update:visible":function(a){t.dialogEditVisible=a},close:t.closeEditDialogHandler}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],staticClass:"app-dialog"},[e("el-form",{ref:"dialogRef",staticClass:"app-form",attrs:{model:t.dialogForm,size:"medium","label-width":"130px"}},[e("el-form-item",{attrs:{label:t.$t("project_name")}},[t._v("\n                    "+t._s(t.dialogDetail.project_name)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("apply_name")}},[t._v("\n                    "+t._s(t.dialogDetail.name)+"\n                ")]),e("el-form-item",{attrs:{label:t.$t("deploy_mode")}},[t.dialogDetail.deploy_mode==t.$root.DeployModeBranch?e("span",[e("i",{staticClass:"iconfont icon-branch"}),t._v(" - "+t._s(t.$t("branch_deploy"))),t.dialogDetail.repo_branch?[t._v(" - "),e("strong",[t._v(t._s(t.dialogDetail.repo_branch))]),t._v(" "+t._s(t.$t("branch")))]:t._e()],2):t._e(),t.dialogDetail.deploy_mode==t.$root.DeployModelTag?e("span",[e("i",{staticClass:"iconfont icon-tag"}),t._v(" "+t._s(t.$t("tag_deploy"))+"\n                    ")]):t._e()]),t.dialogDetail.deploy_mode==t.$root.DeployModelTag?e("el-form-item",{attrs:{label:t.$t("tag_name"),prop:"branch_name",rules:[{required:!0,message:t.$t("tag_name_cannot_empty"),trigger:"blur"}]}},[e("el-input",{staticClass:"app-input-mini",attrs:{placeholder:t.$t("please_input_tag_name"),autocomplete:"off"},model:{value:t.dialogForm.branch_name,callback:function(a){t.$set(t.dialogForm,"branch_name",a)},expression:"dialogForm.branch_name"}})],1):t._e(),t.dialogDetail.deploy_mode==t.$root.DeployModeBranch&&""==t.dialogDetail.repo_branch?e("el-form-item",{attrs:{label:t.$t("branch_name"),prop:"branch_name",rules:[{required:!0,message:t.$t("branch_name_cannot_empty"),trigger:"blur"}]}},[e("el-input",{staticClass:"app-input-mini",attrs:{placeholder:t.$t("please_input_branch_name"),autocomplete:"off"},model:{value:t.dialogForm.branch_name,callback:function(a){t.$set(t.dialogForm,"branch_name",a)},expression:"dialogForm.branch_name"}})],1):t._e(),t.dialogDetail.deploy_mode==t.$root.DeployModeBranch?e("el-form-item",{attrs:{label:t.$t("commit_version"),prop:"commit_version"}},[e("el-input",{staticClass:"app-input-normal",attrs:{placeholder:t.$t("please_input_commit_version"),autocomplete:"off"},model:{value:t.dialogForm.commit_version,callback:function(a){t.$set(t.dialogForm,"commit_version",a)},expression:"dialogForm.commit_version"}})],1):t._e(),e("el-form-item",{attrs:{label:t.$t("deploy_illustrate"),prop:"description",rules:[{required:!0,message:t.$t("deploy_illustrate_cannot_empty"),trigger:"blur"}]}},[e("el-input",{attrs:{rows:4,type:"textarea",placeholder:t.$t("please_input_deploy_illustrate"),autocomplete:"off"},model:{value:t.dialogForm.description,callback:function(a){t.$set(t.dialogForm,"description",a)},expression:"dialogForm.description"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:t.closeEditDialogHandler}},[t._v(t._s(t.$t("cancel")))]),e("el-button",{attrs:{loading:t.dialogBtnLoading,size:"small",type:"primary"},on:{click:t.dialogSubmitEditHandler}},[t._v(t._s(t.$t("enter")))])],1)],1)])],1)},i=[],s=e("85f2"),l=e.n(s);function n(t,a,e){return a in t?l()(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}e("7f7f"),e("ac6a"),e("5df3");var r=e("795b"),c=e.n(r),d=e("41db"),u={data:function(){return{searchInput:"",searchTime:void 0,searchAuditStatus:void 0,searchStatus:void 0,searchProjectId:void 0,tableLoading:!1,tableData:[],timeList:[{time:1,label:this.$t("today")},{time:7,label:this.$t("7day")},{time:30,label:this.$t("within_one_month")},{time:90,label:this.$t("within_three_months")},{time:365,label:this.$t("within_a_year")},{time:0,label:this.$t("any_time")}],statusList:[{status:this.$root.ApplyStatusNone,label:this.$t("not_online")},{status:this.$root.ApplyStatusIng,label:this.$t("onlineing")},{status:this.$root.ApplyStatusSuccess,label:this.$t("online_success")},{status:this.$root.ApplyStatusFailed,label:this.$t("online_failed")},{status:this.$root.ApplyStatusDrop,label:this.$t("deprecated")}],auditStatusList:[{status:this.$root.AuditStatusPending,label:this.$t("unaudit")},{status:this.$root.AuditStatusOk,label:this.$t("audit_pass")},{status:this.$root.AuditStatusRefuse,label:this.$t("audit_denied")}],projectList:[],dialogTitle:"",dialogVisible:!1,dialogEditVisible:!1,dialogLoading:!1,dialogBtnLoading:!1,dialogDetail:{},dialogForm:{id:0,branch_name:"",commit_version:"",description:""},auditStatus:2,auditRefusalReason:""}},methods:{operateHandler:function(t,a){switch(t){case"view":case"audit":this.viewHandler(t,a);break;case"edit":this.editHandler(t,a);break;case"drop":this.dropHandler(t,a);break;case"deploy":this.deployHandler(t,a);break}},closeDialogHandler:function(){this.dialogVisible=!1},openDialogHandler:function(t){this.dialogTitle=t,this.dialogVisible=!0},closeEditDialogHandler:function(){this.dialogEditVisible=!1},openEditDialogHandler:function(){this.dialogEditVisible=!0},dialogSubmitEditHandler:function(){var t=this;this.$refs.dialogRef.validate(function(a){if(!a)return!1;t.dialogBtnLoading=!0,Object(d["i"])(t.dialogForm).then(function(a){t.$message({message:t.$t("update_success"),type:"success",duration:1e3,onClose:function(){t.closeEditDialogHandler(),t.loadTableData(),t.dialogBtnLoading=!1}})}).catch(function(a){t.dialogBtnLoading=!1})})},dialogSubmitAuditStatusHandler:function(){var t=this,a={id:this.dialogDetail.id,audit_status:this.auditStatus,audit_refusal_reasion:this.auditRefusalReason};this.dialogBtnLoading=!0,Object(d["a"])(a).then(function(a){t.$message({message:t.$t("audit_success"),type:"success",duration:1e3,onClose:function(){t.closeDialogHandler(),t.loadTableData(),t.dialogBtnLoading=!1}})}).catch(function(a){t.dialogBtnLoading=!1})},deployHandler:function(t,a){this.$router.push({name:"deployRelease",query:{id:a.id}})},dropHandler:function(t,a){var e=this;this.$root.ConfirmDelete(function(){Object(d["c"])({id:a.id}).then(function(t){e.loadTableData()})},this.$t("drop_deploy_apply_tips"))},editHandler:function(t,a){var e=this;this.dialogLoading=!0,this.getApplyDetail(t,a).then(function(t){e.dialogLoading=!1,e.dialogDetail=t,e.dialogForm={id:a.id,branch_name:t.branch_name,commit_version:t.commit_version,description:t.description},e.openEditDialogHandler()}).catch(function(t){e.dialogLoading=!1})},viewHandler:function(t,a){var e=this;this.dialogLoading=!0,this.getApplyDetail(t,a).then(function(a){e.dialogLoading=!1,e.dialogDetail=a,e.openDialogHandler("view"==t?e.$t("view"):e.$t("audit"))}).catch(function(t){e.dialogLoading=!1})},getApplyDetail:function(t,a){var e=new c.a(function(e,o){var i=new c.a(function(t,e){Object(d["f"])({id:a.project_id}).then(function(a){t(a)}).catch(function(t){e(t)})}),s=new c.a(function(t,e){Object(d["b"])({id:a.id}).then(function(a){t(a)}).catch(function(t){e(t)})});c.a.all([i,s]).then(function(o){var i,s=o[0],l=o[1],r=(i={id:a.id,space_name:a.space_name,project_name:a.project_name,name:a.name,deploy_mode:s.deploy_mode,repo_branch:s.repo_branch,branch_name:l.branch_name,commit_version:l.commit_version,description:l.description,audit_status:a.audit_status,email:a.email,username:a.username,ctime:a.ctime},n(i,"audit_status",l.audit_status),n(i,"status",l.status),n(i,"cmd",t),i);e(r)}).catch(function(t){o(t)})});return e},searchHandler:function(){this.$root.PageInit(),this.loadTableData()},currentChangeHandler:function(){this.loadTableData()},auditStatusTitle:function(t){var a="";return this.auditStatusList.forEach(function(e){t==e.status&&(a=e.label)}),a},loadTableData:function(){var t=this;this.tableLoading=!0;var a={keyword:this.searchInput,time:this.searchTime,audit_status:this.searchAuditStatus,status:this.searchStatus,project_id:this.searchProjectId,offset:this.$root.PageOffset(),limit:this.$root.PageSize};Object(d["d"])(a).then(function(a){t.tableData=a.list,t.$root.Total=a.total,t.tableLoading=!1}).catch(function(a){t.tableLoading=!1})},loadProjectAll:function(){var t=this;Object(d["e"])().then(function(a){a&&a.length>0&&(t.projectList=a)})}},mounted:function(){this.$route.query.id&&(this.searchInput=this.$route.query.id),this.$root.PageInit(),this.loadTableData(),this.loadProjectAll()}},p=u,m=e("2877"),_=Object(m["a"])(p,o,i,!1,null,null,null);_.options.__file="Deploy.vue";a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-4e26368f.946c23ad.js.map