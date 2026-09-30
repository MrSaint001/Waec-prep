
function setProgress(){document.querySelectorAll("[data-progress]").forEach(e=>{e.querySelector("i").style.width=(localStorage.getItem(e.dataset.progress)||0)+"%"})}
function markDone(key,el){localStorage.setItem(key,100); if(el){el.textContent="Completed ✓";el.disabled=true} setProgress()}
document.addEventListener("DOMContentLoaded",setProgress);
