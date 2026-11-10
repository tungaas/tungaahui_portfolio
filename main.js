import links from './links.json';
const sections=[['About',1],['Services',3],['Research & Analysis',5],['Data Visualization',9],['Exhibitions',15],['Digital Products',21],['Publications',24],['Reports',28],['Event Design',31],['Contact',35]];
const viewer=document.getElementById('works'),nav=document.getElementById('sections');
const pads=n=>String(n).padStart(2,'0');
for(const [label,n] of sections){const b=document.createElement('button');b.textContent=label;b.dataset.page=n;b.addEventListener('click',()=>document.getElementById(`page-${n}`).scrollIntoView({behavior:'smooth'}));nav.append(b)}
for(let i=0;i<35;i++){
 const page=document.createElement('article');page.className='page';page.id=`page-${i+1}`;page.setAttribute('aria-label',`Portfolio page ${i+1}`);
 const img=document.createElement('img');img.src=`/pages/${pads(i+1)}.webp`;img.alt=`Tungaahui Data Studio portfolio, page ${i+1}`;img.loading=i<3?'eager':'lazy';img.decoding='async';page.append(img);
 for(const l of links[i]){if(!/^https?:\/\//.test(l.url))continue;const a=document.createElement('a');a.className='hotspot';a.href=l.url;a.target='_blank';a.rel='noopener noreferrer';a.title='Open project link';a.setAttribute('aria-label','Open linked project in a new tab');Object.assign(a.style,{left:`${l.x}%`,top:`${l.y}%`,width:`${l.w}%`,height:`${l.h}%`});page.append(a)}
 const tag=document.createElement('span');tag.className='page-index';tag.textContent=`${pads(i+1)} / 35`;page.append(tag);viewer.append(page);
}
let current=1;const counter=document.getElementById('counter');function update(n){current=n;counter.textContent=`${pads(n)} / 35`;let active=sections[0][1];for(const [,p] of sections)if(n>=p)active=p;for(const b of nav.children)b.classList.toggle('active',Number(b.dataset.page)===active)}
const obs=new IntersectionObserver(entries=>{let candidates=entries.filter(e=>e.isIntersecting);if(candidates.length){candidates.sort((a,b)=>Math.abs(a.boundingClientRect.top-100)-Math.abs(b.boundingClientRect.top-100));update(Number(candidates[0].target.id.split('-')[1]))}},{rootMargin:'-70px 0px -35% 0px',threshold:0});document.querySelectorAll('.page').forEach(p=>obs.observe(p));
function go(n){document.getElementById(`page-${Math.max(1,Math.min(35,n))}`).scrollIntoView({behavior:'smooth'})}document.getElementById('prev').onclick=()=>go(current-1);document.getElementById('next').onclick=()=>go(current+1);window.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA'].includes(document.activeElement?.tagName))return;if(e.key==='ArrowRight')go(current+1);if(e.key==='ArrowLeft')go(current-1)});
