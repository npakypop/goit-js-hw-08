!function(){var e={save:function(e,r){try{var t=JSON.stringify(r);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error",error.message)}}},r=document.querySelector(".feedback-form");r.addEventListener("submit",(function(r){r.preventDefault(),r.target.reset(),e.remove(t)})),r.addEventListener("input",(function(r){var a=r.target,n=a.name,c=a.value;o[n]=c,e.save(t,o)}));var t="feedback-form-state",o={};!function(){var o=e.load(t);for(var a in o)o.hasOwnProperty(a)&&(r.elements[a].value=o[a])}()}();
//# sourceMappingURL=03-feedback.7f77bc3d.js.map
