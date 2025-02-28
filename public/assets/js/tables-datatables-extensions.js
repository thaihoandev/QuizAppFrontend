document.addEventListener("DOMContentLoaded",function(e){let a=document.querySelector(".dt-scrollableTable");a&&new DataTable(a,{ajax:assetsPath+"json/table-datatable.json",columns:[{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"age"},{data:"experience"},{data:""},{data:""}],columnDefs:[{targets:-2,render:function(e,t,a,s){var a=a.status,r={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:"bg-label-success"},3:{title:"Rejected",class:"bg-label-danger"},4:{title:"Resigned",class:"bg-label-warning"},5:{title:"Applied",class:"bg-label-info"}};return void 0===r[a]?e:`
              <span class="badge ${r[a].class}">
                ${r[a].title}
              </span>
            `}},{targets:-1,title:"Actions",searchable:!1,className:"d-flex align-items-center",orderable:!1,render:function(e,t,a,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded icon-base"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="item-edit text-body"><i class="bx bxs-edit icon-base"></i></a>'}}],scrollY:"300px",scrollX:!0,layout:{topStart:{rowClass:"row mx-3 my-0 justify-content-between",features:[{pageLength:{menu:[7,10,25,50,100],text:"Show_MENU_entries"}}]},topEnd:{search:{placeholder:""}},bottomStart:{rowClass:"row mx-3 justify-content-between",features:["info"]},bottomEnd:{paging:{firstLast:!1}}},language:{paginate:{next:'<i class="icon-base bx bx-chevron-right scaleX-n1-rtl icon-sm"></i>',previous:'<i class="icon-base bx bx-chevron-left scaleX-n1-rtl icon-sm"></i>'}},initComplete:function(e,t){a.querySelector("tbody tr:first-child").classList.add("border-top-0")}});var t=document.querySelector(".dt-fixedheader");let s,r=(t&&(s=new DataTable(t,{ajax:assetsPath+"json/table-datatable.json",columns:[{data:""},{data:"id",orderable:!1,render:DataTable.render.select()},{data:"id"},{data:"full_name"},{data:"email"},{data:"start_date"},{data:"salary"},{data:"status"},{data:""}],columnDefs:[{className:"control",orderable:!1,targets:0,responsivePriority:3,render:function(e,t,a,s){return""}},{targets:1,orderable:!1,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},responsivePriority:4},{targets:2,visible:!1},{targets:3,render:function(e,t,a,s){var r=a.avatar,l=a.full_name,a=a.post;let n;return`
              <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-wrapper">
                  <div class="avatar me-2">
                    ${n=r?`<img src="${assetsPath}img/avatars/${r}" alt="Avatar" class="rounded-circle">`:`<span class="avatar-initial rounded-circle bg-label-${["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())]}">${(l.match(/\b\w/g)||[]).map(e=>e.toUpperCase()).join("")}</span>`}
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <span class="emp_name text-truncate">${l}</span>
                  <small class="emp_post text-truncate text-body-secondary">${a}</small>
                </div>
              </div>
            `},responsivePriority:5},{responsivePriority:1,targets:4},{responsivePriority:2,targets:6},{targets:-2,render:function(e,t,a,s){var a=a.status,r={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:"bg-label-success"},3:{title:"Rejected",class:"bg-label-danger"},4:{title:"Resigned",class:"bg-label-warning"},5:{title:"Applied",class:"bg-label-info"}};return void 0===r[a]?e:`
              <span class="badge ${r[a].class}">
                ${r[a].title}
              </span>
            `}},{targets:-1,title:"Actions",className:"d-flex align-items-center",orderable:!1,render:function(e,t,a,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded icon-base"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-icon item-edit"><i class="bx bxs-edit icon-base"></i></a>'}}],select:{style:"multi",selector:"td:nth-child(2)"},order:[[2,"desc"]],layout:{topStart:{rowClass:"row mx-3 my-0 justify-content-between",features:[{pageLength:{menu:[7,10,25,50,100],text:"Show_MENU_entries"}}]},topEnd:{search:{placeholder:""}},bottomStart:{rowClass:"row mx-3 justify-content-between",features:["info"]},bottomEnd:{paging:{firstLast:!1}}},displayLength:7,language:{paginate:{next:'<i class="icon-base bx bx-chevron-right scaleX-n1-rtl icon-sm"></i>',previous:'<i class="icon-base bx bx-chevron-left scaleX-n1-rtl icon-sm"></i>'}},responsive:{details:{display:DataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().full_name}}),type:"column",renderer:function(e,t,a){var s,r,l,a=a.map(function(e){return""!==e.title?`<tr data-dt-row="${e.rowIndex}" data-dt-column="${e.columnIndex}">
                      <td>${e.title}:</td>
                      <td>${e.data}</td>
                    </tr>`:""}).join("");return!!a&&((s=document.createElement("div")).classList.add("table-responsive"),r=document.createElement("table"),s.appendChild(r),r.classList.add("table"),(l=document.createElement("tbody")).innerHTML=a,r.appendChild(l),s)}}}}),window.Helpers.isNavbarFixed()?(t=document.getElementById("layout-navbar").offsetHeight,new DataTable.FixedHeader(s).headerOffset(t)):new DataTable.FixedHeader(s),document.addEventListener("click",function(e){e.target.classList.contains("delete-record")&&(s.row(e.target.closest("tr")).remove().draw(),e=document.querySelector(".dtr-bs-modal"))&&e.classList.contains("show")&&bootstrap.Modal.getInstance(e)?.hide()})),document.querySelector(".dt-fixedcolumns")),l;r&&((t=document.createElement("h5")).classList.add("card-title","mb-0","text-md-start","text-center","pb-md-0","pb-6"),t.innerHTML="Fixed Columns",l=new DataTable(r,{ajax:assetsPath+"json/table-datatable.json",columns:[{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"age"},{data:"experience"},{data:"status"},{data:"id"}],columnDefs:[{targets:-2,render:function(e,t,a,s){var a=a.status,r={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:"bg-label-success"},3:{title:"Rejected",class:"bg-label-danger"},4:{title:"Resigned",class:"bg-label-warning"},5:{title:"Applied",class:"bg-label-info"}};return void 0===r[a]?e:`
              <span class="badge ${r[a].class}">
                ${r[a].title}
              </span>
            `}},{targets:-1,title:"Actions",searchable:!1,className:"d-flex align-items-center",orderable:!1,render:function(e,t,a,s){return'<div class="d-inline-block"><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded icon-base"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record"></i>Delete</a></div></div><a href="javascript:;" class="item-edit text-body"><i class="bx bxs-edit icon-base"></i></a>'}}],layout:{topStart:{rowClass:"row card-header pt-0 pb-0",features:[t]},topEnd:{search:{placeholder:""}},bottomStart:{rowClass:"row mx-3 justify-content-between",features:["info"]},bottomEnd:{paging:{firstLast:!1}}},scrollY:300,scrollX:!0,scrollCollapse:!0,paging:!1,info:!1,fixedColumns:{start:1},initComplete:function(e,t){r.querySelector("tbody tr:first-child").classList.add("border-top-0")}}),document.addEventListener("click",function(e){e.target.classList.contains("delete-record")&&(l.row(e.target.closest("tr")).remove().draw(),e=document.querySelector(".dtr-bs-modal"))&&e.classList.contains("show")&&bootstrap.Modal.getInstance(e)?.hide()}));t=document.querySelector(".dt-select-table");t&&new DataTable(t,{ajax:assetsPath+"json/table-datatable.json",columns:[{data:"id",orderable:!1,render:DataTable.render.select()},{data:"full_name"},{data:"post"},{data:"email"},{data:"city"},{data:"start_date"},{data:"salary"},{data:"status"}],columnDefs:[{targets:0,searchable:!1,orderable:!1,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectRow:!0,selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:-1,render:function(e,t,a,s){var a=a.status,r={1:{title:"Current",class:"bg-label-primary"},2:{title:"Professional",class:"bg-label-success"},3:{title:"Rejected",class:"bg-label-danger"},4:{title:"Resigned",class:"bg-label-warning"},5:{title:"Applied",class:"bg-label-info"}};return void 0===r[a]?e:`
              <span class="badge ${r[a].class}">
                ${r[a].title}
              </span>
            `}}],order:[[1,"desc"]],layout:{topStart:{rowClass:"row mx-3 my-0 justify-content-between",features:[{pageLength:{menu:[7,10,25,50,100],text:"Show_MENU_entries"}}]},topEnd:{search:{placeholder:""}},bottomStart:{rowClass:"row mx-3 justify-content-between",features:["info"]},bottomEnd:{paging:{firstLast:!1}}},language:{paginate:{next:'<i class="icon-base bx bx-chevron-right scaleX-n1-rtl icon-sm"></i>',previous:'<i class="icon-base bx bx-chevron-left scaleX-n1-rtl icon-sm"></i>'}},select:{style:"multi"}}),setTimeout(()=>{[{selector:".dt-search .form-control",classToRemove:"form-control-sm",classToAdd:"ms-4"},{selector:".dt-length .form-select",classToRemove:"form-select-sm"},{selector:".dt-layout-table",classToRemove:"row mt-2"},{selector:".dt-layout-end",classToAdd:"mt-0"},{selector:".dt-layout-end .dt-search",classToAdd:"mt-0 mt-md-6"}].forEach(({selector:e,classToRemove:a,classToAdd:s})=>{document.querySelectorAll(e).forEach(t=>{a&&a.split(" ").forEach(e=>t.classList.remove(e)),s&&s.split(" ").forEach(e=>t.classList.add(e))})})},100)});