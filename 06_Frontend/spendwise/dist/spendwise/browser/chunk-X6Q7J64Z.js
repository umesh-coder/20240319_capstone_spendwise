import{a as me}from"./chunk-566DN4AD.js";import{a as ee}from"./chunk-JUFPAQTD.js";import{$ as fe,A as te,Aa as j,B as ie,C as O,Ca as Re,Da as Ve,E as V,F as ne,J as oe,P,Q as N,R as F,S as re,T as ae,U as L,V as se,W as pe,X as de,Y as le,_ as ce,aa as ue,ba as _e,ca as he,da as ge,ea as Ce,fa as xe,ga as ye,ha as ve,i as T,j as $,ja as we,ka as Se,l as R,la as be,m as Q,ma as Ee,n as J,na as Me,o as X,oa as Ie,p as Z,pa as ke,qa as De,ra as Te,ta as A,za as B}from"./chunk-WAPFYI2K.js";import{Ac as D,Bb as f,Cc as W,Db as I,Kb as k,Lb as o,Nb as Y,Sa as l,Ta as C,_ as z,hb as u,ia as S,ja as q,jb as c,qa as h,ra as g,sb as t,tb as n,ub as x,vb as E,wb as M,yb as b,za as G,zc as U}from"./chunk-FOHSYZOF.js";function Ye(e,i){e&1&&o(0,"Import")}function Ke(e,i){e&1&&(t(0,"th",26),o(1,"Name"),n())}function ze(e,i){e&1&&(t(0,"td",27),o(1,"Required"),n())}function qe(e,i){e&1&&(t(0,"th",26),o(1,"Amount"),n())}function Ge(e,i){e&1&&(t(0,"td",27),o(1,"Required"),n())}function Ue(e,i){e&1&&(t(0,"th",26),o(1,"Expense Date"),n())}function We(e,i){e&1&&(t(0,"td",27),o(1,"Required Format (DD/MM/YYYY)"),n())}function $e(e,i){e&1&&(t(0,"th",26),o(1,"Expense Category"),n())}function Qe(e,i){e&1&&(t(0,"td",27),o(1,"Optional(default - Unassigned)"),n())}function Je(e,i){e&1&&(t(0,"th",26),o(1,"Payment Type"),n())}function Xe(e,i){e&1&&(t(0,"td",27),o(1,"Optional(default - Card)"),n())}function Ze(e,i){e&1&&(t(0,"th",26),o(1,"Comment"),n())}function et(e,i){e&1&&(t(0,"td",27),o(1,"Optional(default - Unassigned)"),n())}function tt(e,i){e&1&&x(0,"tr",28)}function it(e,i){e&1&&x(0,"tr",29)}function nt(e,i){e&1&&o(0,"Review")}function ot(e,i){e&1&&(t(0,"p"),o(1,"Please Procced with Save Button.."),n())}function rt(e,i){e&1&&(t(0,"p"),o(1,"Please Reupload File in CSV format with Back Button"),n())}function at(e,i){e&1&&o(0,"Done")}var Ne=(()=>{let i=class i{constructor(r,a,s,d){this.route=r,this.dialog=a,this.snackBar=s,this.businessData=d,this.isCorrect=!1,this.displayedColumns=["name","amount","date","category","payment","comment"],this.dataSource=[{name:"",amount:"",date:"",category:"",payment:"",comment:""}],this.propertyNames=[],this.dataRows=[],this.header=!1}ngOnInit(){}onView(){this.route.navigate(["dashboard"])}onSaveImport(){this.propertyNames=this.csvRecords[0],console.log(this.csvRecords);let r={},a=!1,s=!1,d=!1,_=!1,v=!1,w=!1;for(let p=1;p<this.csvRecords.length-1;p++){r={},a=!1,s=!1,_=!1,d=!1,v=!1,w=!1;for(let m=0;m<this.propertyNames.length;m++)this.propertyNames[m].toLowerCase(),this.propertyNames[m]==="name"||this.propertyNames[m]==="expense_name"||this.propertyNames[m]==="expense name"?this.csvRecords[p][m]&&(this.csvRecords[p][m]!=""||this.csvRecords[p][m]!=" ")&&(r.expense_name=this.csvRecords[p][m],a=!0):this.propertyNames[m]==="amount"||this.propertyNames[m]==="amounts"?this.csvRecords[p][m]&&(this.csvRecords[p][m]!=""||this.csvRecords[p][m]!=" ")&&(r.amount=parseInt(this.csvRecords[p][m]),s=!0):this.propertyNames[m]==="expense date"||this.propertyNames[m]==="date"||this.propertyNames[m]==="expense_date"?this.csvRecords[p][m]&&(this.csvRecords[p][m]!=""||this.csvRecords[p][m]!=" ")&&(r.expense_date=this.csvRecords[p][m],d=!0):this.propertyNames[m]==="payment"||this.propertyNames[m]==="payment_type"||this.propertyNames[m]==="payment type"?this.csvRecords[p][m]&&(this.csvRecords[p][m]!=""||this.csvRecords[p][m]!=" ")&&(r.payment_type=this.csvRecords[p][m],v=!0):this.propertyNames[m]==="expense_category"||this.propertyNames[m]==="expense category"||this.propertyNames[m]==="category"?this.csvRecords[p][m]&&(this.csvRecords[p][m]!=""||this.csvRecords[p][m]!=" ")&&(r.expense_category=this.csvRecords[p][m],_=!0):(this.propertyNames[m]==="comments"||this.propertyNames[m]==="comment")&&this.csvRecords[p][m]&&(this.csvRecords[p][m]!=""||this.csvRecords[p][m]!=" ")&&(r.comment=this.csvRecords[p][m],w=!0);if(!a||!s||!d){this.snackBar.open("Please Mention required Fields Properly","",{duration:2e3});return}if(r.expense_date.split("/")[2].length!=4){this.snackBar.open("Date Format DD/MM/YYYY","",{duration:2e3});return}if(parseInt(r.expense_date.split("/")[1])>12){this.snackBar.open("Date Format DD/MM/YYYY","",{duration:2e3});return}_||(r.expense_category="Unassigned"),v||(r.payment_type="Card"),w||(r.comment="Unassigned Expense"),this.onSaveExpense(r)}}onSaveExpense(r){this.businessData.onImportExpense(r).subscribe(a=>{a.status===!0&&console.log("Added")},a=>{this.snackBar.open(a.message," ",{duration:2e3})})}importDataFromCSV(r){if(r.target.files[0].type!=="text/csv"){this.dialog.open(B,{data:{type:"error"}});return}let s=r.target.files[0];var d=new FileReader;d.readAsText(s),d.onload=_=>{let v=_.target.result;v=v.toString();let w=v.split(/\r\n|\n/),p=w[0].split(",");for(let m=0;m<w.length-1;m++)w[m]=w[m].split(",");this.csvRecords=w}}};i.\u0275fac=function(a){return new(a||i)(C(T),C(A),C(X),C(O))},i.\u0275cmp=S({type:i,selectors:[["app-import"]],decls:47,vars:5,consts:[["stepper",""],["filePicker",""],["linear","true"],["editable","true"],["matStepLabel",""],[1,"tables"],[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","date"],["matColumnDef","category"],["matColumnDef","payment"],["matColumnDef","comment"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[2,"padding-top","10px"],["mat-raised-button","","color","accent","matStepperNext","","type","button",3,"click"],["type","file","hidden","",3,"change"],[4,"ngIf"],["mat-raised-button","","matStepperPrevious",""],["mat-raised-button","","matStepperNext","","color","primary",3,"click"],[1,"view"],["mat-raised-button","","color","primary",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,s){if(a&1){let d=b();t(0,"mat-stepper",2,0)(2,"mat-step",3),u(3,Ye,1,0,"ng-template",4),t(4,"div",5)(5,"div",6)(6,"table",7),E(7,8),u(8,Ke,2,0,"th",9)(9,ze,2,0,"td",10),M(),E(10,11),u(11,qe,2,0,"th",9)(12,Ge,2,0,"td",10),M(),E(13,12),u(14,Ue,2,0,"th",9)(15,We,2,0,"td",10),M(),E(16,13),u(17,$e,2,0,"th",9)(18,Qe,2,0,"td",10),M(),E(19,14),u(20,Je,2,0,"th",9)(21,Xe,2,0,"td",10),M(),E(22,15),u(23,Ze,2,0,"th",9)(24,et,2,0,"td",10),M(),u(25,tt,1,0,"tr",16)(26,it,1,0,"tr",17),n()()(),t(27,"div",18)(28,"button",19),f("click",function(){h(d);let v=k(31);return g(v.click())}),o(29," Import File "),n(),t(30,"input",20,1),f("change",function(v){return h(d),g(s.importDataFromCSV(v))}),n()()(),t(32,"mat-step",3),u(33,nt,1,0,"ng-template",4),t(34,"div",18),u(35,ot,2,0,"p",21)(36,rt,2,0,"p",21),n(),t(37,"div")(38,"button",22),o(39,"Back"),n(),t(40,"button",23),f("click",function(){return h(d),g(s.onSaveImport())}),o(41," Save "),n()()(),t(42,"mat-step"),u(43,at,1,0,"ng-template",4),t(44,"div",24)(45,"button",25),f("click",function(){return h(d),g(s.onView())}),o(46," View Expenses "),n()()()()}a&2&&(l(6),c("dataSource",s.dataSource),l(19),c("matHeaderRowDef",s.displayedColumns),l(),c("matRowDefColumns",s.displayedColumns),l(9),c("ngIf",s.isCorrect),l(),c("ngIf",!s.isCorrect))},dependencies:[D,R,ce,ue,Ce,_e,fe,xe,he,ge,ye,ve,Se,we,be,Ee,Me],styles:[".mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-mdc-form-field[_ngcontent-%COMP%]{margin-top:16px}.view[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}table[_ngcontent-%COMP%]{width:100%;overflow-x:hidden}.table-container[_ngcontent-%COMP%]{max-width:100%;overflow-x:scroll}.tables[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:contents}"]});let e=i;return e})();function pt(e,i){e&1&&(t(0,"mat-card-content",8)(1,"div",9)(2,"span",10),o(3,"Loading..."),n()(),t(4,"div",11)(5,"span",10),o(6,"Loading..."),n()(),t(7,"div",9)(8,"span",10),o(9,"Loading..."),n()()())}function dt(e,i){if(e&1&&(t(0,"mat-chip-row"),o(1),n()),e&2){let y=i.$implicit;l(),Y(" ",y," ")}}function lt(e,i){if(e&1){let y=b();t(0,"mat-chip-row",18),f("removed",function(){let a=h(y).$implicit,s=I(2);return g(s.removeKeyword(a))}),o(1),t(2,"button",19)(3,"mat-icon"),o(4,"cancel"),n()()()}if(e&2){let y=i.$implicit;l(),Y(" ",y," ")}}function ct(e,i){if(e&1){let y=b();t(0,"mat-card-content",12)(1,"mat-form-field",13)(2,"mat-label"),o(3,"Avaiable Expense Categories"),n(),t(4,"mat-chip-grid",14,0),u(6,dt,2,1,"mat-chip-row",15)(7,lt,5,1,"mat-chip-row",16),n(),t(8,"input",17),f("matChipInputTokenEnd",function(a){h(y);let s=I();return g(s.add(a))}),n()()()}if(e&2){let y=k(5),r=I();l(6),c("ngForOf",r.keywords),l(),c("ngForOf",r.newKeywords),l(),c("matChipInputFor",y)}}function ft(e,i){if(e&1){let y=b();t(0,"button",20),f("click",function(){h(y);let a=I();return g(a.onSave())}),t(1,"mat-icon"),o(2,"save"),n(),o(3," Save "),n()}if(e&2){let y=I();c("disabled",y.newKeywords.length===0)}}function ut(e,i){e&1&&(t(0,"button",21),x(1,"span",22),o(2," Saving... "),n())}var Le=(()=>{let i=class i{constructor(r){this.businesData=r,this.categoryAdded=new G,this.keywords=[],this.newKeywords=[],this.CategoryLoad=!0,this.isSaving=!1}ngOnInit(){this.CategoryLoad=!0,this.isSaving=!1,this.businesData.onGetAllCategory().subscribe(r=>{r&&(this.CategoryLoad=!1,this.keywords=r.data)})}removeKeyword(r){let a=this.newKeywords.indexOf(r);a>=0&&this.newKeywords.splice(a,1)}add(r){let a=(r.value||"").trim();a&&this.newKeywords.push(a),r.chipInput.clear()}onSave(){this.isSaving=!0,this.categoryAdded.emit(this.keywords),this.businesData.onCreateCategory(this.newKeywords).subscribe(r=>{r&&(this.keywords.push(...this.newKeywords),this.newKeywords=[],this.isSaving=!1)})}onReset(){this.newKeywords=[]}};i.\u0275fac=function(a){return new(a||i)(C(O))},i.\u0275cmp=S({type:i,selectors:[["app-add-category"]],outputs:{categoryAdded:"categoryAdded"},decls:19,vars:4,consts:[["chipGrid",""],[1,"example-card"],["style","padding-top: 15px;display: flex; justify-content: center;align-items: center;",4,"ngIf"],["style","padding-top: 15px",4,"ngIf"],["align","end"],["mat-raised-button","",3,"click"],["mat-raised-button","",3,"disabled","click",4,"ngIf"],["class","btn btn-success","type","button","disabled","",4,"ngIf"],[2,"padding-top","15px","display","flex","justify-content","center","align-items","center"],["role","status",1,"spinner-grow","text-danger"],[1,"visually-hidden"],["role","status",1,"spinner-grow","text-danger",2,"margin","0px 5px"],[2,"padding-top","15px"],["appearance","outline",1,"example-form-field"],["aria-label","Enter New Category"],[4,"ngFor","ngForOf"],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New Categories...",2,"border","2px solid black",3,"matChipInputTokenEnd","matChipInputFor"],[3,"removed"],["matChipRemove","","aria-label","'remove ' + keyword"],["mat-raised-button","",3,"click","disabled"],["type","button","disabled","",1,"btn","btn-success"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"]],template:function(a,s){a&1&&(t(0,"mat-card",1)(1,"mat-card-header")(2,"mat-card-title")(3,"div")(4,"p"),o(5,"Add Expense Category "),t(6,"mat-icon"),o(7,"note_add"),n()()()(),t(8,"mat-card-subtitle"),o(9,"Add/Remove Expense Categories"),n()(),u(10,pt,10,0,"mat-card-content",2)(11,ct,9,3,"mat-card-content",3),t(12,"mat-card-actions",4)(13,"button",5),f("click",function(){return s.onReset()}),t(14,"mat-icon"),o(15,"autorenew"),n(),o(16,"Reset "),n(),u(17,ft,4,1,"button",6)(18,ut,3,0,"button",7),n()()),a&2&&(l(10),c("ngIf",s.CategoryLoad),l(),c("ngIf",!s.CategoryLoad),l(6),c("ngIf",!s.isSaving),l(),c("ngIf",s.isSaving))},dependencies:[U,D,R,V,oe,ne,P,ae,F,L,re,N,De,Te,Ie,ke],styles:[".example-form-field[_ngcontent-%COMP%]{width:100%}.example-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:0 12px}.myCard[_ngcontent-%COMP%]{margin-top:25px}.btns[_ngcontent-%COMP%]{position:fixed;bottom:10%;right:5%;z-index:100}"]});let e=i;return e})();var Be=(()=>{let i=class i{constructor(r,a){this.route=r,this.dialog=a}ngOnInit(){}handleCategory(r){this.keywords=r}openDialog(){this.dialog.open(j,{width:"600px"})}onView(){this.route.navigate(["dashboard"])}};i.\u0275fac=function(a){return new(a||i)(C(T),C(A))},i.\u0275cmp=S({type:i,selectors:[["app-dashboard"]],decls:31,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","col-md-6","offset-md-3","myCard"],[3,"categoryAdded"],[3,"tags"],[1,"col-12","col-md-6","offset-md-3","myCard",2,"margin-bottom","30px"],["href","https://drive.google.com/file/d/1-i_q2joBrYUqi2jYuiOmD6OeFHH9rwQL/view?usp=sharing"],[2,"font-size","20px","width","20px","height","20px"],["mat-mini-fab","","color","accent",1,"btns",3,"click"],[1,"footers"]],template:function(a,s){a&1&&(t(0,"div",0)(1,"div",1),x(2,"div",2),t(3,"div",2)(4,"app-add-category",3),f("categoryAdded",function(_){return s.handleCategory(_)}),n()()(),t(5,"div",1)(6,"div",2),x(7,"app-add-expense",4),n(),t(8,"div",5)(9,"mat-card")(10,"mat-card-header")(11,"mat-card-title")(12,"div")(13,"p"),o(14,"Import CSV Expenses "),n()()()(),t(15,"mat-card-content")(16,"div")(17,"p"),o(18,"Download "),t(19,"a",6),o(20,"Sample"),n(),o(21," File "),t(22,"mat-icon",7),o(23,"downloading"),n()()(),x(24,"app-import"),n()()()(),t(25,"div")(26,"button",8),f("click",function(){return s.onView()}),t(27,"mat-icon"),o(28,"equalizer"),n()()()(),t(29,"div",9),x(30,"app-footer"),n()),a&2&&(l(7),c("tags",s.keywords))},dependencies:[Re,Q,V,P,F,L,N,Ne,Le,me],styles:['.container-fluid[_ngcontent-%COMP%]{background-image:url("./media/add_exp-PC3EDSYG.jpg");background-size:cover;background-repeat:no-repeat;width:100%}.example-form-field[_ngcontent-%COMP%]{width:100%}.example-button-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:0 12px}.myCard[_ngcontent-%COMP%]{margin-top:25px}.btns[_ngcontent-%COMP%]{position:fixed;bottom:10%;right:5%;z-index:100}']});let e=i;return e})();function gt(e,i){e&1&&(t(0,"div"),x(1,"app-loader"),n())}function Ct(e,i){e&1&&(t(0,"div"),x(1,"app-dashboard"),n())}var je=(()=>{let i=class i{constructor(r,a,s){this.route=r,this.dialog=a,this.authService=s,this.isLoading=!0}ngOnInit(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},4e3);let r=sessionStorage.getItem("LEAD_ID");this.authService.authAfterReferesh(!0,r)}openDialog(){this.dialog.open(j,{width:"600px"})}onView(){this.route.navigate(["dashboard"])}onLogout(){this.dialog.open(B,{data:{type:"alert"}})}};i.\u0275fac=function(a){return new(a||i)(C(T),C(A),C(Z))},i.\u0275cmp=S({type:i,selectors:[["app-header"]],decls:35,vars:2,consts:[["drawer",""],["hasBackdrop","True","autosize","",1,"example-container",2,"height","100vh"],["mode","over",1,"example-sidenav",2,"height","100%"],[2,"border-bottom","2px solid red","font-family","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"],[2,"margin-top","20px"],["mat-raised-button","","color","primary",3,"click"],[2,"border-bottom","1px solid black"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],[1,"example-spacer"],["mat-raised-button","","color","accent",3,"click"],[4,"ngIf"]],template:function(a,s){if(a&1){let d=b();t(0,"mat-drawer-container",1)(1,"mat-drawer",2,0)(3,"h2",3),o(4," Spend Wise "),n(),t(5,"div")(6,"div",4)(7,"button",5),f("click",function(){return h(d),g(s.openDialog())}),t(8,"mat-icon"),o(9,"perm_identity"),n(),o(10,"Profile "),n()(),t(11,"div",4)(12,"button",5),f("click",function(){return h(d),g(s.onView())}),t(13,"mat-icon"),o(14,"equalizer"),n(),o(15,"View Expenses "),n()(),t(16,"div",4)(17,"button",5),f("click",function(){return h(d),g(s.onLogout())}),t(18,"mat-icon"),o(19,"logout"),n(),o(20,"Logout "),n()()()(),t(21,"div")(22,"mat-toolbar",6)(23,"button",7),f("click",function(){h(d);let v=k(2);return g(v.toggle())}),t(24,"mat-icon"),o(25,"list"),n()(),t(26,"span"),o(27,"Spend Wise"),n(),x(28,"span",8),t(29,"button",9),f("click",function(){return h(d),g(s.onLogout())}),t(30,"mat-icon"),o(31,"logout"),n(),o(32,"Logout "),n()()(),u(33,gt,2,0,"div",10)(34,Ct,2,0,"div",10),n()}a&2&&(l(33),c("ngIf",s.isLoading),l(),c("ngIf",!s.isLoading))},dependencies:[D,se,pe,de,le,R,J,V,Be],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.example-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.example-sidenav[_ngcontent-%COMP%]{padding-left:50px;padding-right:100px;padding-top:50px}"]});let e=i;return e})();var xt=[{path:"",component:je,canActivate:[ee],title:"Home | SpendWise"}],Zt=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=q({type:i}),i.\u0275inj=z({imports:[W,Ve,ie,te,$.forChild(xt)]});let e=i;return e})();export{Zt as HeaderModule};