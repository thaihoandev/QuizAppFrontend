(()=>{var e=document.querySelector("#dealDuration");if(e&&e.flatpickr({mode:"range"}),window.Helpers.initCustomOptionCheck(),null!==(e=document.querySelector("#wizard-create-deal"))){var n=e.querySelector("#wizard-create-deal-form"),r=n.querySelector("#deal-type"),s=n.querySelector("#deal-details"),d=n.querySelector("#deal-usage"),u=n.querySelector("#review-complete"),c=[].slice.call(n.querySelectorAll(".btn-next")),n=[].slice.call(n.querySelectorAll(".btn-prev"));let o=new Stepper(e,{linear:!0}),t=FormValidation.formValidation(r,{fields:{dealAmount:{validators:{notEmpty:{message:"Please enter amount"},numeric:{message:"The amount must be a number"}}},dealRegion:{validators:{notEmpty:{message:"Please select region"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".form-control-validation"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){o.next()});e=$("#dealRegion");e.length&&(e.wrap('<div class="position-relative"></div>'),e.select2({placeholder:"Select an region",dropdownParent:e.parent()}).on("change",function(){t.revalidateField("dealRegion")}));let a=FormValidation.formValidation(s,{fields:{dealTitle:{validators:{notEmpty:{message:"Please enter deal title"}}},dealCode:{validators:{notEmpty:{message:"Please enter deal code"},stringLength:{min:4,max:10,message:"The deal code must be more than 4 and less than 10 characters long"},regexp:{regexp:/^[A-Z0-9]+$/,message:"The deal code can only consist of capital alphabetical and number"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".form-control-validation"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){o.next()});r=$("#dealOfferedItem");r.length&&(r.wrap('<div class="position-relative"></div>'),r.select2({placeholder:"Select an offered item",dropdownParent:r.parent()}).on("change",function(){}));let i=FormValidation.formValidation(d,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".form-control-validation"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){o.next()}),l=FormValidation.formValidation(u,{fields:{},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".form-control-validation"}),autoFocus:new FormValidation.plugins.AutoFocus,submitButton:new FormValidation.plugins.SubmitButton}}).on("core.form.valid",function(){alert("Submitted..!!")});c.forEach(e=>{e.addEventListener("click",e=>{switch(o._currentIndex){case 0:t.validate();break;case 1:a.validate();break;case 2:i.validate();break;case 3:l.validate()}})}),n.forEach(e=>{e.addEventListener("click",e=>{switch(o._currentIndex){case 3:case 2:case 1:o.previous()}})})}})();