const plans={
41:{km:24,days:[
{day:"MAN",date:"5. okt.",type:"easy",icon:"⌁",title:"5 km",name:"Easy",meta:"Z2 · RPE 2–3",description:"Roligt pas med fokus på lav intensitet og en afslappet rytme.",steps:["5 km i roligt tempo","Hold indsatsen omkring RPE 2–3"]},
{day:"TIR",date:"6. okt.",type:"quality",icon:"⚡",title:"6 km",name:"Intervaller",meta:"Ugens kvalitetspas",description:"Kontrolleret kvalitetspas. Løb hurtigt, men med overskud til sidste gentagelse.",steps:["10 min rolig opvarmning","6 × 2 min hurtigt / 2 min roligt","10 min nedjog"]},
{day:"ONS",date:"7. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Restitution",description:"Ingen planlagt træning. Prioritér restitution.",steps:[]},
{day:"TOR",date:"8. okt.",type:"easy",icon:"⌁",title:"5 km",name:"Easy + strides",meta:"Z2 · RPE 2–3",description:"Let løb afsluttet med korte, kontrollerede accelerationer.",steps:["5 km easy","4 × 20 sek. strides","Fuld rolig pause mellem strides"]},
{day:"FRE",date:"9. okt.",type:"strength",icon:"◇",title:"Strength",name:"Full body",meta:"Kontrolleret styrke",description:"Kort styrkepas med fokus på løbestyrke og stabilitet.",steps:["45–60 min","Rolig til moderat belastning"]},
{day:"LØR",date:"10. okt.",type:"long",icon:"∞",title:"8 km",name:"Langtur",meta:"Z2 · RPE 2–3",description:"Ugens længste tur. Tempoet skal føles komfortabelt hele vejen.",steps:["8 km sammenhængende","Hold dig i let intensitet"]},
{day:"SØN",date:"11. okt.",type:"rest",icon:"⌑",title:"Hvile",name:"",meta:"Restitution",description:"Fri fra planlagt træning.",steps:[]}
]}};
let week=41;
const el=document.querySelector("#workouts");
function render(){
 const p=plans[week]||{km:0,days:[]};
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
 <div class="details"><div><div class="detail-inner"><p>${d.description}</p>${d.steps.length?'<ul>'+d.steps.map(s=>'<li>'+s+'</li>').join('')+'</ul>':''}<button class="complete">Markér som gennemført</button></div></div></div>
 </article>`).join("");
 document.querySelectorAll(".card-button").forEach(btn=>btn.addEventListener("click",()=>{const c=btn.closest(".card");c.classList.toggle("open");btn.setAttribute("aria-expanded",c.classList.contains("open"))}));
 document.querySelectorAll(".complete").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();btn.classList.toggle("done");btn.textContent=btn.classList.contains("done")?"✓ Gennemført":"Markér som gennemført"}));
}
document.querySelector("#prevBtn").addEventListener("click",()=>{week--;render()});
document.querySelector("#nextBtn").addEventListener("click",()=>{week++;render()});
document.querySelector("#todayBtn").addEventListener("click",()=>{week=41;render()});
render();