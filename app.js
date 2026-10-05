const plans={
41:{km:13,days:[
{day:"MAN",date:"5. okt.",type:"easy",icon:"⌁",title:"5 km",name:"Easy",meta:"Roligt og kontrolleret",description:"Rolig tur. Du skal kunne føre en samtale og slutte med følelsen af, at du kunne have løbet længere.",steps:["5 km easy","Lad følelsen styre; puls er kun støtte"]},
{day:"TIR",date:"6. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Ingen løb",description:"Ingen planlagt løbetræning.",steps:[]},
{day:"ONS",date:"7. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Ingen løb",description:"Ingen planlagt løbetræning.",steps:[]},
{day:"TOR",date:"8. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Ingen løb",description:"Ingen planlagt løbetræning.",steps:[]},
{day:"FRE",date:"9. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Ingen løb",description:"Ingen planlagt løbetræning.",steps:[]},
{day:"LØR",date:"10. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Ingen løb",description:"Ingen planlagt løbetræning.",steps:[]},
{day:"SØN",date:"11. okt.",type:"long",icon:"∞",title:"8 km",name:"Long easy",meta:"Rolig langtur",description:"Ugens længste tur. Hold tempoet komfortabelt hele vejen.",steps:["8 km roligt","Ingen fokus på pace"]}
]},
42:{km:16,days:weekDays("12. okt.","13. okt.","14. okt.","15. okt.","16. okt.","17. okt.","18. okt.",easy(5),rest(),rest(),easy(3),rest(),rest(),longRun(8))},
43:{km:17,days:weekDays("19. okt.","20. okt.","21. okt.","22. okt.","23. okt.","24. okt.","25. okt.",easy(5),rest(),rest(),easy(4),rest(),rest(),longRun(8))},
44:{km:18,days:weekDays("26. okt.","27. okt.","28. okt.","29. okt.","30. okt.","31. okt.","1. nov.",easy(5),rest(),rest(),strides(4),rest(),rest(),longRun(9))},
45:{km:13,days:weekDays("2. nov.","3. nov.","4. nov.","5. nov.","6. nov.","7. nov.","8. nov.",rest("London"),rest("London"),rest("London"),easy(5),rest(),rest(),longRun(8))},
46:{km:19,days:weekDays("9. nov.","10. nov.","11. nov.","12. nov.","13. nov.","14. nov.","15. nov.",easy(5),rest(),rest(),fartlek(5,"5 × 1 min frisk / 2 min easy"),rest(),rest(),longRun(9))},
47:{km:14,days:weekDays("16. nov.","17. nov.","18. nov.","19. nov.","20. nov.","21. nov.","22. nov.",easy(5),rest(),rest(),rest("Sommerhus"),rest("Sommerhus"),rest("Sommerhus"),longRun(9))},
48:{km:20,days:weekDays("23. nov.","24. nov.","25. nov.","26. nov.","27. nov.","28. nov.","29. nov.",easy(5),rest(),rest(),strides(5),rest(),rest(),longRun(10))},
49:{km:14,days:weekDays("30. nov.","1. dec.","2. dec.","3. dec.","4. dec.","5. dec.","6. dec.",rest("København"),rest("København"),rest(),fartlek(5,"6 × 1 min frisk / 2 min easy"),rest(),rest(),longRun(9))},
50:{km:21,days:weekDays("7. dec.","8. dec.","9. dec.","10. dec.","11. dec.","12. dec.","13. dec.",easy(6),rest(),rest(),strides(5),rest(),rest(),longRun(10))},
51:{km:21,days:weekDays("14. dec.","15. dec.","16. dec.","17. dec.","18. dec.","19. dec.","20. dec.",easy(6),rest(),rest(),fartlek(5,"4 × 2 min frisk / 2 min easy"),rest(),rest(),longRun(10))},
52:{km:13,days:weekDays("21. dec.","22. dec.","23. dec.","24. dec.","25. dec.","26. dec.","27. dec.",easy(5),rest(),rest("Jul"),rest("Jul"),rest("Jul"),rest(),longRun(8))}
};

function easy(km){return{type:"easy",icon:"⌁",title:km+" km",name:"Easy",meta:"Roligt og kontrolleret",description:"Rolig tur. Du skal kunne føre en samtale og slutte med følelsen af, at du kunne have løbet længere.",steps:[km+" km easy","Lad følelsen styre; puls er kun støtte"]}}
function longRun(km){return{type:"long",icon:"∞",title:km+" km",name:"Long easy",meta:"Rolig langtur",description:"Ugens længste tur. Hold tempoet komfortabelt hele vejen.",steps:[km+" km roligt","Ingen fokus på pace"]}}
function rest(note=""){return{type:"rest",icon:"⌑",title:"Hvile",name:"",meta:note||"Ingen løb",description:note?note+" – ingen planlagt løbetræning.":"Ingen planlagt løbetræning.",steps:[]}}
function strides(km){return{type:"easy",icon:"⌁",title:km+" km",name:"Easy + strides",meta:"Let fart · kontrolleret",description:"Rolig tur med korte, afslappede accelerationer mod slutningen. Formålet er fart uden at gøre passet hårdt.",steps:[km+" km i alt","4 × 20 sek. strides mod slutningen","Rolig gang/jog mellem hver"]}}
function fartlek(km,work){return{type:"quality",icon:"⚡",title:km+" km",name:"Fartlek",meta:"Kontrolleret kvalitet",description:"Løb de hurtige dele frisk og afslappet – ikke max. Du skal have overskud til én gentagelse mere.",steps:["1,5 km easy",work,"Easy til "+km+" km i alt"]}}
function weekDays(a,b,c,d,e,f,g,...sessions){const names=["MAN","TIR","ONS","TOR","FRE","LØR","SØN"],dates=[a,b,c,d,e,f,g];return sessions.map((s,i)=>({day:names[i],date:dates[i],...s}))}

let week=41;
const el=document.querySelector("#workouts");
const dayNames=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"];

function storageKey(){return "frida-plan-week-"+week}
function applySavedMoves(p){
 try{
  const saved=JSON.parse(localStorage.getItem(storageKey())||"null");
  if(saved&&Array.isArray(saved.days)&&saved.days.length===7){
   p.days=saved.days;
   p.km=p.days.reduce((sum,d)=>sum+(d.type!=="rest"?(parseFloat(d.title)||0):0),0);
  }
 }catch(e){}
}
function saveWeek(p){
 try{localStorage.setItem(storageKey(),JSON.stringify({days:p.days}))}catch(e){}
}
function moveWorkout(from,to){
 if(from===to)return;
 const p=plans[week]; if(!p)return;
 const source=p.days[from],target=p.days[to];
 if(!source||source.type==="rest")return;
 if(target.type!=="rest"&&!confirm(dayNames[to]+" har allerede et løb. Byt de to dage?"))return;
 const keepSource={day:source.day,date:source.date};
 const keepTarget={day:target.day,date:target.date};
 if(target.type==="rest"){
   p.days[from]={...rest(),...keepSource};
   p.days[to]={...source,...keepTarget};
 }else{
   p.days[from]={...target,...keepSource};
   p.days[to]={...source,...keepTarget};
 }
 saveWeek(p);render();
}
function render(){
 const p=plans[week]||{km:0,days:[]};
 applySavedMoves(p);
 document.querySelector("#weekTitle").textContent="Uge "+week;
 document.querySelector("#weekLabel").textContent="Uge "+week;
 document.querySelector("#weekKm").textContent=p.km+" km";
 if(!p.days.length){el.innerHTML='<div class="card"><div style="padding:28px;text-align:center;color:#77716c">Denne uge er ikke udfyldt endnu.</div></div>';return}
 el.innerHTML=p.days.map((d,i)=>`<article class="card" data-i="${i}">
 <button class="card-button" aria-expanded="false">
  <div class="day"><strong>${d.day}</strong><span>${d.date}</span></div>
  <div class="badge ${d.type}">${d.icon}</div>
  <div class="summary"><strong>${d.title}${d.name?'<br>'+d.name:''}</strong><span>${d.meta}</span></div>
  <span class="chevron">›</span>
 </button>
 <div class="details"><div><div class="detail-inner"><p>${d.description}</p>${d.steps.length?'<ul>'+d.steps.map(s=>'<li>'+s+'</li>').join('')+'</ul>':''}${d.type!=="rest"?'<div class="move-row"><label>Flyt løbet til <select class="move-select" data-from="'+i+'">'+dayNames.map((n,di)=>'<option value="'+di+'" '+(di===i?'selected':'')+'>'+n+'</option>').join('')+'</select></label></div>':''}<button class="complete">Markér som gennemført</button></div></div></div>
 </article>`).join("");
 document.querySelectorAll(".card-button").forEach(btn=>btn.addEventListener("click",()=>{const c=btn.closest(".card");c.classList.toggle("open");btn.setAttribute("aria-expanded",c.classList.contains("open"))}));
 document.querySelectorAll(".move-select").forEach(sel=>sel.addEventListener("change",e=>{e.stopPropagation();moveWorkout(Number(sel.dataset.from),Number(sel.value))}));
 document.querySelectorAll(".complete").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();btn.classList.toggle("done");btn.textContent=btn.classList.contains("done")?"✓ Gennemført":"Markér som gennemført"}));
}
document.querySelector("#prevBtn").addEventListener("click",()=>{week--;render()});
document.querySelector("#nextBtn").addEventListener("click",()=>{week++;render()});
document.querySelector("#todayBtn").addEventListener("click",()=>{window.location.reload()});
render();