import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/+esm";
import { CONFIG } from "./config.js";
var IMG={LOGO:"assets/logo.png",DIR:"assets/directeur.jpg",S1:"assets/salle1.jpg",S2:"assets/salle2.jpg"};
var P={
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',
 cap:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
 monitor:'<rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/>',
 bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
 network:'<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>',
 calc:'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
 mega:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
 trend:'<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
 pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
 phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
 mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7L2 7"/>',
 chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 award:'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
 cal:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
 img:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
 shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
 wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
 quote:'<path d="M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"/>',
 laptop:'<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
 mobile:'<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
 kb:'<path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
 printer:'<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
 wifi:'<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0"/>',
 disc:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/>',
 cpu:'<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
 dash:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
 inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
 edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',check:'<path d="M20 6 9 17l-5-5"/>',
 logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
 lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
 globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'
};
function ic(n,s,sw){s=s||20;return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||1.75)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+P[n]+'</svg>'}
function E(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

var DOMS=['Informatique','Systèmes et réseaux','Gestion financière','Communication','Commerce et marketing'];
var DICO=['monitor','network','calc','mega','trend'];
var CATS=['Ordinateurs','Téléphones et tablettes','Accessoires','Consommables','Réseau','Logiciels','Pièces détachées'];
var CICO=['laptop','mobile','kb','printer','wifi','disc','cpu'];
var DISPO=['Disponible','Sur commande','Indisponible','À confirmer'];
var STAT=['Nouvelle','Contactée','Inscrite'];


var sb=createClient(CONFIG.url,CONFIG.key);
var S={formations:[],produits:[],annonces:[],demandes:[],messages:[],settings:{whatsapp:"224625687115",tel1:"+224 625 68 71 15",tel2:"+224 669 69 40 98",email:"tenohtv22@gmail.com",adresse:"Sanoyah textile, Corniche Général Baldé, Conakry",horaires:"À définir"}};
var HP='<input class="sr" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">';
var adminIn=false,menuOpen=false,FQ={q:"",doms:[],duree:"",cert:false},BQ={q:"",cat:""};

function wa(t){return "https://wa.me/"+S.settings.whatsapp+"?text="+encodeURIComponent(t)}
function dcat(d){return /semaine/.test(d)?"court":(/^1 mois/.test(d)?"un":"long")}
function domIdx(d){var i=DOMS.indexOf(d);return i<0?0:i}
function today(){return new Date().toLocaleDateString("fr-FR")}
function nid(k){S.seq[k]=(S.seq[k]||100)+1;return S.seq[k]}

/* ---------- pages du site ---------- */
var NAV=[["accueil","Accueil"],["formations","Formations"],["services","Services numériques"],["boutique","Boutique"],["apropos","À propos"],["contact","Contact"]];
function shell(active,inner){
 var s=S.settings;
 return '<div class="top"><div class="wrap"><div><span>'+ic("pin",15)+E(s.adresse)+'</span><span>'+ic("phone",15)+E(s.tel1)+'</span></div><span style="margin:0">'+ic("mail",15)+E(s.email)+'</span></div></div>'+
 '<header class="hd'+(menuOpen?' open':'')+'"><div class="wrap"><a class="logo" href="#accueil" aria-label="Tenoh Concepts, accueil"><img src="'+IMG.LOGO+'" alt="Tenoh Concepts"></a>'+
 '<nav class="mn" aria-label="Navigation principale">'+NAV.map(function(n){return '<a href="#'+n[0]+'"'+(n[0]===active?' class="on" aria-current="page"':'')+'>'+n[1]+'</a>'}).join("")+'</nav>'+
 '<a class="btn p wcta" target="_blank" rel="noopener" href="'+wa("Bonjour Tenoh Concepts, j'ai une question.")+'">'+ic("chat")+'WhatsApp</a>'+
 '<button class="burger" data-act="menu" aria-label="Menu">'+ic(menuOpen?"x":"menu",22)+'</button></div></header>'+
 '<main>'+inner+'</main>'+
 '<a class="fab" target="_blank" rel="noopener" href="'+wa("Bonjour Tenoh Concepts, j'ai une question.")+'">'+ic("chat",20)+'WhatsApp</a>'+
 '<footer class="ft"><div class="wrap"><div class="fg"><div><div class="lg"><img src="'+IMG.LOGO+'" alt="Tenoh Concepts"></div><p>Tenoh Concepts rapproche les jeunes, les professionnels et les entrepreneurs des outils et compétences du numérique.</p></div>'+
 '<div><h4>Navigation</h4><ul>'+NAV.slice(0,5).map(function(n){return '<li><a href="#'+n[0]+'">'+n[1]+'</a></li>'}).join("")+'</ul></div>'+
 '<div><h4>Domaines</h4><ul>'+DOMS.map(function(d){return '<li>'+E(d)+'</li>'}).join("")+'</ul></div>'+
 '<div><h4>Contact</h4><ul><li>'+ic("pin",16)+E(s.adresse)+'</li><li>'+ic("phone",16)+'<span>'+E(s.tel1)+'<br>'+E(s.tel2)+'</span></li><li>'+ic("mail",16)+E(s.email)+'</li></ul></div></div>'+
 '<div class="lgl"><span>© 2026 Tenoh Concepts · RCCM GN.TCC.2025.A.06672 · NIF 683835219</span><span><a href="#admin">Espace administrateur</a></span></div></div></footer>';
}
function ctaBand(){return '<section class="sec" style="padding-top:20px"><div class="wrap"><div class="ctab"><div><h2>Une question, une inscription, une commande ?</h2><p>Écrivez-nous sur WhatsApp, nous répondons rapidement.</p></div><div class="g"><a class="btn p" target="_blank" rel="noopener" href="'+wa("Bonjour Tenoh Concepts, j'ai une question.")+'">'+ic("chat")+'Écrire sur WhatsApp</a></div></div></div></section>'}

function pgHome(){
 var vis=S.formations.filter(function(f){return f.visible}),ann=S.annonces.filter(function(a){return a.visible});
 return '<section class="hero"><div class="wrap g"><div><div class="eyebrow">Formation professionnelle · Services numériques · Commerce général</div><h1>Le numérique à la portée de tous.</h1><p class="sub">Formations pratiques, services numériques et matériel informatique : tout pour réussir à l’ère digitale.</p>'+
 '<div class="cta"><a class="btn p" href="#formations">S\'inscrire à une formation '+ic("arrow",18)+'</a><a class="btn o" href="#boutique">Voir la boutique</a></div>'+
 '<div class="facts"><div><b>Formations courtes</b>pratiques et certifiantes</div><div><b>Prix accessibles</b>à toutes les couches sociales</div><div><b>Entreprise enregistrée</b>RCCM et NIF</div></div></div>'+
 '<div class="shot"><img src="'+IMG.S1+'" alt="Apprenants et formateur dans la salle de formation de Tenoh Concepts"><span class="cap">La salle de formation</span></div></div></section>'+
 '<section class="sec" style="padding-top:24px"><div class="wrap"><div class="eyebrow">Nos activités</div><h2 class="t">Se former, se faire accompagner, s’équiper.</h2><p class="lead">Un seul endroit à Conakry pour apprendre le numérique, faire réaliser vos projets et acheter votre matériel.</p><div class="g3">'+
 '<div class="card"><div class="ico">'+ic("cap",26)+'</div><h3>Formation professionnelle</h3><p>Informatique, systèmes et réseaux, gestion financière, communication, commerce et marketing.</p><a class="lk" href="#formations">Voir les formations '+ic("arrow",16)+'</a></div>'+
 '<div class="card"><div class="ico">'+ic("monitor",26)+'</div><h3>Services numériques</h3><p>Développement informatique, services Internet et réseaux, design graphique et multimédia, démarches administratives.</p><a class="lk" href="#services">Découvrir les services '+ic("arrow",16)+'</a></div>'+
 '<div class="card"><div class="ico">'+ic("bag",26)+'</div><h3>Commerce général</h3><p>Matériels et consommables informatiques, logiciels, pièces détachées et maintenance.</p><a class="lk" href="#boutique">Aller à la boutique '+ic("arrow",16)+'</a></div></div></div></section>'+
 (ann.length?'<section class="sec" style="padding:0 0 40px"><div class="wrap"><div class="eyebrow">Annonces</div>'+ann.map(function(a){return '<div class="ann"><div class="ico">'+ic("mega",22)+'</div><div><b>'+E(a.titre)+'</b><span>'+E(a.texte)+'</span></div></div>'}).join("")+'</div></section>':'')+
 '<section class="sec" style="padding-top:20px"><div class="wrap"><div class="eyebrow">Domaines de formation</div><h2 class="t">Choisissez votre domaine.</h2><p class="lead">Chaque formation a sa fiche : programme, durée, horaires, prix et certificat.</p><div class="g5">'+
 DOMS.map(function(d,i){var n=vis.filter(function(f){return f.domaine===d}).length;return '<button class="dom" data-act="dom" data-d="'+i+'"><div class="ico">'+ic(DICO[i],22)+'</div><h3>'+E(d)+'</h3><span>'+n+' formation'+(n>1?'s':'')+'</span></button>'}).join("")+'</div></div></section>'+
 '<section class="sec"><div class="wrap dg"><div class="ph"><img src="'+IMG.DIR+'" alt="Saidou Mohamed Kanté, Directeur Général"><div class="nm"><b>Saidou Mohamed Kanté</b><span>Directeur Général</span></div></div><div><div class="qi">'+ic("quote",24)+'</div><p class="big">Le numérique ne doit pas être réservé à quelques-uns.</p><p>Chez Tenoh Concepts, on apprend en pratiquant, avec des formations courtes, concrètes et accessibles.</p><a class="btn o" href="#apropos">Lire le mot du directeur</a></div></div></section>'+
 '<section class="band"><div class="wrap"><div class="eyebrow">Pourquoi Tenoh Concepts</div><h2 class="t">Des services rapides, personnalisés et de qualité.</h2><div class="g4" style="margin-top:30px">'+atouts()+'</div></div></section>'+ctaBand();
}
function atouts(){return [["wallet","Prix accessibles","Des tarifs pensés pour toutes les couches sociales."],["clock","Formations courtes","Du concret et de la pratique, sans perdre de temps."],["award","Formations certifiantes","Une attestation pour valoriser vos compétences."],["shield","Équipe expérimentée","Des formateurs disponibles et flexibles."]].map(function(a){return '<div><div class="ico">'+ic(a[0],24)+'</div><h3>'+a[1]+'</h3><p>'+a[2]+'</p></div>'}).join("")}

function fCards(){
 var q=FQ.q.trim().toLowerCase();
 var L=S.formations.filter(function(f){
  if(!f.visible)return false;
  if(q&&(f.titre+" "+f.domaine+" "+f.objectifs+" "+f.programme).toLowerCase().indexOf(q)<0)return false;
  if(FQ.doms.length&&FQ.doms.indexOf(f.domaine)<0)return false;
  if(FQ.duree&&dcat(f.duree)!==FQ.duree)return false;
  if(FQ.cert&&!f.certificat)return false;return true});
 var h='<div class="bar"><span><b>'+L.length+' formation'+(L.length>1?'s':'')+'</b> trouvée'+(L.length>1?'s':'')+'</span></div>';
 if(!L.length)return h+'<div class="empty"><b style="color:var(--head)">Aucune formation ne correspond.</b><p>Essayez d’autres mots ou retirez un filtre, ou écrivez-nous sur WhatsApp.</p></div>';
 return h+L.map(function(f){var i=domIdx(f.domaine);
  return '<article class="fc"><div><div class="tags"><span class="tag d'+i+'">'+E(f.domaine)+'</span>'+(f.certificat?'<span class="tag c">'+ic("award",13)+'Certifiante</span>':'')+'</div><h3><a href="#formation-'+f.id+'">'+E(f.titre)+'</a></h3>'+
  '<div class="meta"><span>'+ic("clock",16)+E(f.duree)+'</span><span>'+ic("users",16)+E(f.pub)+'</span><span>'+ic("cal",16)+'Session : '+E(f.debut)+'</span></div></div>'+
  '<div class="side"><div class="pr"><small>Tarif</small><b>'+E(f.prix)+'</b></div><button class="btn p" data-act="preinscrire" data-id="'+f.id+'">Se pré-inscrire</button></div></article>'}).join("");
}
function pgFormations(){
 var dc=[["","Toutes les durées"],["court","Moins d'un mois"],["un","1 mois"],["long","2 à 3 mois"]];
 return '<div class="ban"><div class="wrap"><div class="bc">Accueil / Formations</div><h1>Trouvez votre formation</h1></div></div>'+
 '<div class="wrap"><div class="sbar" role="search">'+ic("search",20)+'<input type="search" id="fq" data-f="q" placeholder="Rechercher une formation…" aria-label="Rechercher une formation" value="'+E(FQ.q)+'"></div>'+
 '<div class="lay"><aside><div class="fl"><label class="chk"><input type="checkbox" data-f="cert"'+(FQ.cert?' checked':'')+'>Avec attestation seulement</label></div>'+
 '<div class="fl"><h4>Domaines</h4>'+DOMS.map(function(d){var n=S.formations.filter(function(f){return f.visible&&f.domaine===d}).length;return '<label class="chk"><input type="checkbox" data-f="dom" value="'+E(d)+'"'+(FQ.doms.indexOf(d)>=0?' checked':'')+'>'+E(d)+'<em>'+n+'</em></label>'}).join("")+'</div>'+
 '<div class="fl"><h4>Durée</h4>'+dc.map(function(x){return '<label class="chk"><input type="radio" name="du" data-f="duree" value="'+x[0]+'"'+(FQ.duree===x[0]?' checked':'')+'>'+x[1]+'</label>'}).join("")+'</div></aside>'+
 '<div id="flist">'+fCards()+'</div></div></div>'+
 '<section class="sec" style="padding-top:0"><div class="wrap"><div class="ctab"><div><h2>Contactez-nous ou soyez rappelé.</h2><p>Une question sur une formation ? L’équipe Tenoh Concepts est à votre disposition.</p></div><div class="g"><a class="btn p" target="_blank" rel="noopener" href="'+wa("Bonjour, je voudrais des informations sur vos formations.")+'">'+ic("chat")+'Écrire sur WhatsApp</a><a class="btn w" href="#contact">'+ic("phone")+'Être rappelé</a></div></div></div></section>';
}
function pgFormation(id){
 var f=S.formations.filter(function(x){return x.id===id&&x.visible})[0];
 if(!f)return '<div class="wrap" style="padding:80px 20px"><div class="empty"><b style="color:var(--head)">Cette formation n’est pas disponible.</b><p><a class="btn o" style="margin-top:14px" href="#formations">Voir toutes les formations</a></p></div></div>';
 var i=domIdx(f.domaine),prog=String(f.programme||"").split(";").map(function(x){return x.trim()}).filter(Boolean);
 var sim=S.formations.filter(function(x){return x.visible&&x.domaine===f.domaine&&x.id!==f.id}).slice(0,3);
 return '<div class="ban" style="padding-bottom:40px"><div class="wrap"><div class="bc"><a href="#accueil">Accueil</a> / <a href="#formations">Formations</a> / '+E(f.domaine)+'</div><h1>'+E(f.titre)+'</h1></div></div>'+
 '<div class="wrap det"><div><div class="tags"><span class="tag d'+i+'">'+E(f.domaine)+'</span>'+(f.certificat?'<span class="tag c">'+ic("award",13)+'Certifiante</span>':'')+'</div>'+
 '<h3 style="margin-top:6px">Objectifs</h3><p>'+E(f.objectifs)+'</p><h3>Programme</h3><ul>'+prog.map(function(p){return '<li>'+E(p)+'</li>'}).join("")+'</ul><h3>Public visé</h3><p>'+E(f.pub)+'</p><h3>Conditions d’inscription</h3><p>'+E(f.conditions)+'</p>'+
 (sim.length?'<h3>Dans le même domaine</h3><div class="chips">'+sim.map(function(s){return '<a class="chip" href="#formation-'+s.id+'">'+E(s.titre)+'</a>'}).join("")+'</div>':'')+'</div>'+
 '<aside><div class="kv"><div><span>Durée</span><b>'+E(f.duree)+'</b></div><div><span>Horaires</span><b>'+E(f.horaires)+'</b></div><div><span>Début</span><b>'+E(f.debut)+'</b></div><div><span>Tarif</span><b>'+E(f.prix)+'</b></div><div><span>Attestation</span><b>'+(f.certificat?'Oui':'Non')+'</b></div>'+
 '<div style="display:block;border:0;padding-top:16px"><button class="btn p" style="width:100%" data-act="preinscrire" data-id="'+f.id+'">Se pré-inscrire</button><a class="btn o" style="width:100%;margin-top:10px" target="_blank" rel="noopener" href="'+wa("Bonjour, je voudrais des informations sur la formation : "+f.titre)+'">'+ic("chat",18)+'Poser une question sur WhatsApp</a></div></div></aside></div>';
}
var SERV=[["monitor","Développement informatique","Applications et logiciels de gestion, sites web, outils sur mesure.","Exemples de travaux à confirmer avec le directeur."],
 ["network","Services Internet et réseaux","Installation et configuration de réseaux, connexion Internet, Wi-Fi.","Exemples de travaux à confirmer avec le directeur."],
 ["mega","Design graphique et multimédia","Logos, affiches, visuels et vidéos pour votre activité.","Exemples de travaux à confirmer avec le directeur."],
 ["cap","Services administratifs numériques","Saisie et mise en forme de documents, démarches en ligne, assistance administrative.","Exemples de travaux à confirmer avec le directeur."]];
function pgServices(){
 return '<div class="ban" style="padding-bottom:40px"><div class="wrap"><div class="bc">Accueil / Services numériques</div><h1>Des services numériques pour vos projets</h1></div></div>'+
 '<section class="sec"><div class="wrap"><div class="sv">'+SERV.map(function(s,i){return '<div class="card"><div class="ico">'+ic(s[0],26)+'</div><h3>'+s[1]+'</h3><p>'+s[2]+'</p><p style="margin-top:8px;font-size:13.5px">'+s[3]+'</p><button class="btn o sm" style="margin-top:16px" data-act="devis" data-i="'+i+'">Demander un devis</button></div>'}).join("")+'</div></div></section>'+
 '<section class="sec" style="padding-top:0"><div class="wrap"><div class="card" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;justify-content:space-between"><div><h3>Réalisations</h3><p>Cet espace présentera vos affiches, applications et installations, avec photos et captures fournies par le directeur.</p></div><div class="note">Photos à fournir</div></div></div></section>'+ctaBand();
}
function pgBoutique(){
 return '<div class="ban" style="padding-bottom:40px"><div class="wrap"><div class="bc">Accueil / Boutique</div><h1>Matériel et outils informatiques</h1></div></div>'+
 '<section class="sec" style="padding-top:36px"><div class="wrap"><div class="sbar" style="margin-top:0;margin-bottom:22px" role="search">'+ic("search",20)+'<input type="search" data-b="q" placeholder="Rechercher un produit…" aria-label="Rechercher un produit" value="'+E(BQ.q)+'"></div>'+
 '<div class="chips" id="bchips">'+bChips()+'</div><div id="blist">'+bList()+'</div>'+
 '<div class="note" style="margin-top:22px">Les prix ne sont pas affichés : écrivez-nous sur WhatsApp pour connaître le prix et la disponibilité.</div></div></section>'+ctaBand();
}
function bChips(){return '<button class="chip'+(BQ.cat===""?' on':'')+'" data-act="cat" data-c="">Tout</button>'+CATS.map(function(c){return '<button class="chip'+(BQ.cat===c?' on':'')+'" data-act="cat" data-c="'+E(c)+'">'+E(c)+'</button>'}).join("")}
function bList(){
 var q=BQ.q.trim().toLowerCase(),L=S.produits.filter(function(p){return p.visible&&(!BQ.cat||p.categorie===BQ.cat)&&(!q||(p.nom+" "+(p.description||"")+" "+p.categorie).toLowerCase().indexOf(q)>=0)});
 if(!L.length)return '<div class="empty"><b style="color:var(--head)">Aucun produit trouvé.</b><p>Essayez une autre catégorie ou demandez-nous sur WhatsApp.</p></div>';
 return '<div class="pg4">'+L.map(function(p){var ci=Math.max(0,CATS.indexOf(p.categorie)),cls=p.dispo==="Disponible"?"ok":(p.dispo==="Indisponible"?"no":(p.dispo==="À confirmer"?"cf":""));
  var im=/^https:\/\//.test(p.photo_url||"")?'<img src="'+E(p.photo_url)+'" alt="'+E(p.nom)+'" loading="lazy">':ic(CICO[ci],44,1.5)+'<span>Photo à venir</span>';
  return '<article class="pc"><div class="im">'+im+'</div><div class="bd"><div style="display:flex;gap:6px;flex-wrap:wrap"><span class="st '+cls+'">'+E(p.dispo)+'</span><span class="st">'+E(p.etat||"")+'</span></div><h3>'+E(p.nom)+'</h3><p>'+E(p.description)+'</p><a class="btn p sm" target="_blank" rel="noopener" href="'+wa("Bonjour, je suis intéressé par : "+p.nom)+'">'+ic("chat",16)+'Commander sur WhatsApp</a></div></article>'}).join("")+'</div>';
}
function pgApropos(){
 return '<section class="hero" style="padding-bottom:20px"><div class="wrap" style="max-width:1000px"><div class="eyebrow">À propos de Tenoh Concepts</div><h1 style="font-size:clamp(30px,4.6vw,50px);line-height:1.08;margin-bottom:16px">Rapprocher chacun des outils et des compétences du numérique.</h1><p class="sub" style="font-size:19px;color:var(--muted)">Tenoh Concepts est un centre de formation professionnelle, de services numériques et de commerce général installé à Conakry.</p></div></section>'+
 '<section class="sec" style="padding-top:30px"><div class="wrap dg"><div class="ph"><img src="'+IMG.DIR+'" alt="Saidou Mohamed Kanté, Directeur Général"><div class="nm"><b>Saidou Mohamed Kanté</b><span>Directeur Général</span></div></div><div><div class="qi">'+ic("quote",24)+'</div>'+
 '<p class="big">Le numérique ne doit pas être réservé à quelques-uns.</p><p>Bienvenue chez Tenoh Concepts. Que vous soyez élève, étudiant, employé ou entrepreneur, vous pouvez maîtriser les outils d’aujourd’hui, à condition d’être bien accompagné.</p>'+
 '<p>Mon parcours en génie logiciel, en comptabilité et en gestion, comme formateur et comme enseignant, m’a appris une chose : on apprend mieux en pratiquant. Nos formations sont donc courtes, concrètes et centrées sur ce que vous utiliserez vraiment au travail.</p>'+
 '<p>Au-delà de la formation, nous vous accompagnons dans vos projets : services numériques, matériel informatique, maintenance. Un seul lieu, une équipe disponible, des services rapides, fiables et professionnels, à des prix accessibles.</p>'+
 '<p>Passez nous voir ou écrivez-nous sur WhatsApp. Nous serons heureux de vous aider à franchir votre prochaine étape.</p><div class="sig"><b>Saidou Mohamed Kanté</b><span>Directeur Général, Tenoh Concepts</span></div></div></div></section>'+
 '<section class="sec" style="padding-top:0"><div class="wrap gal"><div class="ph"><img src="'+IMG.S1+'" alt="Salle de formation de Tenoh Concepts"><span class="cap">La salle de formation</span></div><div class="ph"><img src="'+IMG.S2+'" alt="Travaux pratiques au centre"><span class="cap">Travaux pratiques</span></div></div></section>'+
 '<section class="band"><div class="wrap"><div class="eyebrow">Nos atouts</div><h2 class="t">Ce qui nous distingue.</h2><div class="g4" style="margin-top:30px">'+atouts()+'</div></div></section>'+
 '<section class="sec"><div class="wrap legal"><div class="card"><h3>Notre mission</h3><p>Permettre à chaque jeune, étudiant ou professionnel de maîtriser les outils essentiels du numérique, de valoriser ses compétences et de développer son potentiel grâce à des services accessibles et adaptés.</p></div>'+
 '<div class="card"><h3>Informations légales</h3><table><tr><td>Raison sociale</td><td>Tenoh Concepts (T.C)</td></tr><tr><td>RCCM</td><td>GN.TCC.2025.A.06672</td></tr><tr><td>NIF</td><td>683835219</td></tr><tr><td>Siège</td><td>Sanoyah textile, Corniche Général Baldé</td></tr></table></div></div></section>'+ctaBand();
}
function pgContact(){
 var s=S.settings;
 return '<div class="ban" style="padding-bottom:40px"><div class="wrap"><div class="bc">Accueil / Contact</div><h1>Venez nous rencontrer</h1></div></div>'+
 '<section class="sec"><div class="wrap cg"><div><ul class="il"><li><div class="ico">'+ic("pin",22)+'</div><div><b>Adresse</b>'+E(s.adresse)+'</div></li><li><div class="ico">'+ic("phone",22)+'</div><div><b>Téléphones</b>'+E(s.tel1)+'<br>'+E(s.tel2)+'</div></li><li><div class="ico">'+ic("mail",22)+'</div><div><b>E-mail</b>'+E(s.email)+'</div></li><li><div class="ico">'+ic("clock",22)+'</div><div><b>Horaires</b>'+E(s.horaires)+'</div></li></ul>'+
 '<a class="btn p" target="_blank" rel="noopener" href="'+wa("Bonjour Tenoh Concepts, j'ai une question.")+'">'+ic("chat")+'Écrire sur WhatsApp</a><div class="map">'+ic("pin",30)+'<span>Carte et itinéraire vers le siège (à intégrer dans la version finale)</span></div></div>'+
 '<div class="card"><h3>Envoyez-nous un message</h3><p>Nous vous répondons rapidement.</p><form data-form="contact">'+HP+'<label class="f" for="c-nom">Nom</label><input class="in" id="c-nom" name="nom" required autocomplete="name">'+
 '<div class="fr"><div><label class="f" for="c-tel">Téléphone</label><input class="in" id="c-tel" name="tel" required inputmode="tel" autocomplete="tel"></div><div><label class="f" for="c-sujet">Sujet</label><select class="in" id="c-sujet" name="sujet"><option>Inscription</option><option>Devis</option><option>Achat</option><option>Autre</option></select></div></div>'+
 '<label class="f" for="c-msg">Message</label><textarea class="in" id="c-msg" name="texte" required></textarea><div class="bt" style="display:flex;margin-top:18px"><button class="btn s" type="submit">Envoyer le message</button></div></form></div></div></section>';
}

/* ---------- fenêtres ---------- */
function modal(h){var m=document.getElementById("modal");m.innerHTML='<div class="ov" data-act="ovclose"><div class="md" role="dialog" aria-modal="true">'+'<button class="x" data-act="close" aria-label="Fermer">'+ic("x",22)+'</button>'+h+'</div></div>';var f=m.querySelector("input,select,textarea,button.btn");if(f)try{f.focus()}catch(e){}}
function closeModal(){document.getElementById("modal").innerHTML=""}
function field(l,id,v,o){o=o||{};return '<label class="f" for="'+id+'">'+l+'</label><input class="in" id="'+id+'" name="'+id+'" value="'+E(v)+'"'+(o.req?' required':'')+(o.type?' type="'+o.type+'"':'')+'>'}
function sel(l,id,opts,v){return '<label class="f" for="'+id+'">'+l+'</label><select class="in" id="'+id+'" name="'+id+'">'+opts.map(function(o){return '<option'+(o===v?' selected':'')+'>'+E(o)+'</option>'}).join("")+'</select>'}
function preForm(id){
 var f=S.formations.filter(function(x){return x.id===id})[0];
 modal('<h3>Se pré-inscrire</h3><p style="color:var(--muted)">Laissez vos coordonnées, le centre vous rappelle.</p><form data-form="pre">'+HP+
 field("Nom complet","p-nom","",{req:1})+field("Téléphone","p-tel","",{req:1,type:"tel"})+field("E-mail (facultatif)","p-email","",{type:"email"})+
 sel("Formation","p-formation",S.formations.filter(function(x){return x.visible}).map(function(x){return x.titre}),f?f.titre:"")+
 '<label class="f" for="p-message">Message (facultatif)</label><textarea class="in" id="p-message" name="p-message"></textarea><div class="bt"><button class="btn p" type="submit">Envoyer ma demande</button><button class="btn o" type="button" data-act="close">Annuler</button></div></form>');
}
function devisForm(i){
 modal('<h3>Demander un devis</h3><p style="color:var(--muted)">Décrivez votre besoin, nous vous répondons.</p><form data-form="devis">'+HP+field("Nom","d-nom","",{req:1})+field("Téléphone","d-tel","",{req:1,type:"tel"})+
 sel("Service","d-service",SERV.map(function(s){return s[1]}),SERV[i][1])+'<label class="f" for="d-texte">Votre besoin</label><textarea class="in" id="d-texte" name="d-texte" required></textarea><div class="bt"><button class="btn p" type="submit">Envoyer la demande</button><button class="btn o" type="button" data-act="close">Annuler</button></div></form>');
}
function thanks(t,wtxt){modal('<h3>Merci, c’est envoyé</h3><p style="margin-top:8px">'+E(t)+'</p><div class="bt"><a class="btn p" target="_blank" rel="noopener" href="'+wa(wtxt)+'">'+ic("chat",18)+'Continuer sur WhatsApp</a><button class="btn o" data-act="close">Fermer</button></div>')}

/* ---------- administration ---------- */
var ATABS=[["vue","Vue d'ensemble","dash"],["formations","Formations","cap"],["produits","Produits","bag"],["demandes","Demandes d'inscription","inbox"],["messages","Messages","mail"],["annonces","Annonces","mega"],["parametres","Paramètres","gear"]];
var loginMsg="";
function pgLogin(){var m=loginMsg;loginMsg="";return '<div class="login"><div class="md"><div class="logo" style="margin-bottom:18px"><img src="'+IMG.LOGO+'" alt="Tenoh Concepts" style="height:48px"></div><h3>Espace administrateur</h3><p style="color:var(--muted)">Réservé à l’équipe Tenoh Concepts.</p>'+(m?'<p class="note" role="alert" style="margin-top:12px">'+E(m)+'</p>':'')+'<form data-form="login">'+field("E-mail","l-mail","",{type:"email",req:1})+'<label class="f" for="l-pw">Mot de passe</label><input class="in" id="l-pw" name="l-pw" type="password" required autocomplete="current-password"><div class="bt"><button class="btn s" type="submit">'+ic("lock",18)+'Se connecter</button><a class="btn o" href="#accueil">Retour au site</a></div></form></div></div>'}
function pgAdmin(tab){
 var nD=S.demandes.filter(function(d){return d.statut==="Nouvelle"}).length,nM=S.messages.filter(function(m){return !m.traite}).length;
 var badge={formations:S.formations.length,produits:S.produits.length,demandes:S.demandes.length,messages:nM};
 var body=({vue:aVue,formations:aForm,produits:aProd,demandes:aDem,messages:aMsg,annonces:aAnn,parametres:aPar}[tab]||aVue)();
 return '<div class="adm"><aside class="sb"><div class="lg"><img src="'+IMG.LOGO+'" alt="Tenoh Concepts"></div><small>Gestion</small>'+
 ATABS.map(function(t){return '<a href="#'+(t[0]==="vue"?"admin":"admin-"+t[0])+'"'+(t[0]===tab?' class="on"':'')+'>'+ic(t[2],19)+t[1]+(badge[t[0]]!=null?'<em>'+badge[t[0]]+'</em>':'')+'</a>'}).join("")+
 '<a href="#accueil">'+ic("globe",19)+'Voir le site</a><div class="me"><div class="av">SK</div><div>Saidou Mohamed Kanté<small>Directeur Général</small></div></div><a href="#admin" data-act="logout">'+ic("logout",19)+'Se déconnecter</a></aside><div class="am">'+body+'</div></div>';
}
function aVue(){
 var now=new Date(),M=["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],bk=[];
 for(var i=5;i>=0;i--){var d0=new Date(now.getFullYear(),now.getMonth()-i,1);bk.push({y:d0.getFullYear(),m:d0.getMonth(),n:0})}
 S.demandes.forEach(function(x){var d=new Date(x.created_at);bk.forEach(function(b){if(b.y===d.getFullYear()&&b.m===d.getMonth())b.n++})});
 var mx=Math.max(1,Math.max.apply(null,bk.map(function(b){return b.n}))),last=S.demandes.slice(0,5);
 var nN=S.demandes.filter(function(d){return d.statut==="Nouvelle"}).length,nM=S.messages.filter(function(m){return !m.traite}).length;
 return '<h1>Tableau de bord</h1><p class="sub">Bienvenue. Voici l’état de votre site.</p><div class="k4">'+
 '<div class="kp"><small>Formations publiées</small><b>'+S.formations.filter(function(f){return f.visible}).length+'</b><span>sur '+S.formations.length+' au total</span></div>'+
 '<div class="kp"><small>Produits en boutique</small><b>'+S.produits.filter(function(f){return f.visible}).length+'</b><span>sur '+S.produits.length+' au total</span></div>'+
 '<div class="kp"><small>Demandes d’inscription</small><b>'+S.demandes.length+'</b><span>'+nN+' nouvelle(s)</span></div>'+
 '<div class="kp"><small>Messages reçus</small><b>'+S.messages.length+'</b><span>'+nM+' à traiter</span></div></div>'+
 '<div class="cols"><div><div class="pn"><h3>Demandes d’inscription, 6 derniers mois</h3><div class="chart">'+bk.map(function(b,i){var cur=i===bk.length-1;return '<div class="b"><i class="'+(cur?"hl":"")+'" style="height:'+(Math.round(b.n/mx*150)+4)+'px">'+(cur?"<u>"+b.n+"</u>":"")+'</i><span>'+M[b.m]+'</span></div>'}).join("")+'</div></div>'+
 '<div class="pn"><h3>Dernières demandes</h3><div class="tw"><table class="t"><tr><th>Nom</th><th>Formation</th><th>Date</th><th>Statut</th></tr>'+(last.length?last.map(function(d){return '<tr><td><b>'+E(d.nom)+'</b></td><td>'+E(d.formation)+'</td><td>'+fdate(d.created_at)+'</td><td><span class="st '+(d.statut==="Inscrite"?"ok":(d.statut==="Nouvelle"?"no":""))+'">'+E(d.statut)+'</span></td></tr>'}).join(""):'<tr><td colspan="4" style="color:var(--muted)">Aucune demande pour le moment.</td></tr>')+'</table></div></div></div>'+
 '<div><div class="pn"><h3>Formations par domaine</h3>'+DOMS.map(function(d){var n=S.formations.filter(function(f){return f.visible&&f.domaine===d}).length;return '<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:14px"><span>'+E(d)+'</span><b>'+n+'</b></div><div style="height:8px;background:var(--tint);border-radius:99px"><div style="height:8px;border-radius:99px;background:var(--btn);width:'+Math.min(100,n*25)+'%"></div></div></div>'}).join("")+'</div>'+
 '<div class="pn"><h3>Raccourcis</h3><div style="display:flex;flex-direction:column;gap:10px"><a class="btn s sm" href="#admin-formations">Modifier une formation</a><a class="btn o sm" href="#admin-produits">Ajouter un produit</a><a class="btn o sm" href="#admin-annonces">Publier une annonce</a></div></div></div></div>';
}
function tog(on,act,id){return '<button class="sw'+(on?' on':'')+'" role="switch" aria-checked="'+(on?'true':'false')+'" aria-label="Visible sur le site" data-act="'+act+'" data-id="'+id+'"></button>'}
function aForm(){
 return '<div class="tb"><div><h1>Formations</h1><p class="sub" style="margin:0">Ce que vous modifiez ici apparaît tout de suite sur le site.</p></div><button class="btn p" data-act="fadd">'+ic("plus",18)+'Ajouter une formation</button></div>'+
 '<div class="pn"><div class="tw"><table class="t"><tr><th>Intitulé</th><th>Domaine</th><th>Durée</th><th>Tarif</th><th>Visible</th><th></th></tr>'+S.formations.map(function(f){return '<tr><td><b>'+E(f.titre)+'</b></td><td>'+E(f.domaine)+'</td><td>'+E(f.duree)+'</td><td>'+E(f.prix)+'</td><td>'+tog(f.visible,"ftog",f.id)+'</td><td style="white-space:nowrap"><button class="ib" data-act="fedit" data-id="'+f.id+'" aria-label="Modifier">'+ic("edit",16)+'</button> <button class="ib dg2" data-act="fdel" data-id="'+f.id+'" aria-label="Supprimer">'+ic("trash",16)+'</button></td></tr>'}).join("")+'</table></div></div>';
}
function fFormModal(id){
 var f=S.formations.filter(function(x){return x.id===id})[0]||{titre:"",domaine:DOMS[0],prix:"À définir",duree:"",horaires:"À définir",debut:"À définir",certificat:true,pub:"",objectifs:"",programme:"",conditions:"",visible:true};
 modal('<h3>'+(id?"Modifier la formation":"Ajouter une formation")+'</h3><form data-form="fsave" data-id="'+(id||"")+'">'+field("Intitulé","f-titre",f.titre,{req:1})+sel("Domaine","f-domaine",DOMS,f.domaine)+
 '<div class="fr"><div>'+field("Tarif (GNF)","f-prix",f.prix)+'</div><div>'+field("Durée","f-duree",f.duree,{req:1})+'</div></div><div class="fr"><div>'+field("Horaires et jours","f-horaires",f.horaires)+'</div><div>'+field("Date de début","f-debut",f.debut)+'</div></div>'+
 sel("Attestation","f-cert",["Oui","Non"],f.certificat?"Oui":"Non")+field("Public visé","f-pub",f.pub)+'<label class="f" for="f-obj">Objectifs</label><textarea class="in" id="f-obj" name="f-obj">'+E(f.objectifs)+'</textarea>'+
 '<label class="f" for="f-prog">Programme (séparer les modules par un point-virgule)</label><textarea class="in" id="f-prog" name="f-prog">'+E(f.programme)+'</textarea>'+field("Conditions d'inscription","f-cond",f.conditions)+
 '<div class="bt"><button class="btn p" type="submit">Enregistrer</button><button class="btn o" type="button" data-act="close">Annuler</button></div></form>');
}
function aProd(){
 return '<div class="tb"><div><h1>Produits</h1><p class="sub" style="margin:0">Ajoutez une photo à chaque produit. Sans prix, le client écrit sur WhatsApp.</p></div><button class="btn p" data-act="padd">'+ic("plus",18)+'Ajouter un produit</button></div>'+
 '<div class="pn"><div class="tw"><table class="t"><tr><th>Produit</th><th>Catégorie</th><th>État</th><th>Disponibilité</th><th>Visible</th><th></th></tr>'+(S.produits.length?S.produits.map(function(p){return '<tr><td><div class="tbn">'+(/^https:\/\//.test(p.photo_url||"")?'<img src="'+E(p.photo_url)+'" alt="">':'')+'<b>'+E(p.nom)+'</b></div></td><td>'+E(p.categorie)+'</td><td>'+E(p.etat)+'</td><td><select class="sel" data-act="pdispo" data-id="'+p.id+'" aria-label="Disponibilité">'+DISPO.map(function(d){return '<option'+(d===p.dispo?' selected':'')+'>'+d+'</option>'}).join("")+'</select></td><td>'+tog(p.visible,"ptog",p.id)+'</td><td style="white-space:nowrap"><button class="ib" data-act="pedit" data-id="'+p.id+'" aria-label="Modifier">'+ic("edit",16)+'</button> <button class="ib dg2" data-act="pdel" data-id="'+p.id+'" aria-label="Supprimer">'+ic("trash",16)+'</button></td></tr>'}).join(""):'<tr><td colspan="6" style="color:var(--muted)">Aucun produit.</td></tr>')+'</table></div></div>';
}
var ETATS=["Neuf","Occasion","Neuf et occasion"];
function pFormModal(id){
 var p=S.produits.filter(function(x){return x.id===id})[0]||{nom:"",categorie:CATS[0],etat:"Neuf et occasion",dispo:"À confirmer",description:"",photo_url:"",visible:true};
 modal('<h3>'+(id?"Modifier le produit":"Ajouter un produit")+'</h3><form data-form="psave" data-id="'+(id||"")+'">'+field("Nom du produit","pr-nom",p.nom,{req:1})+sel("Catégorie","pr-cat",CATS,p.categorie)+'<div class="fr"><div>'+sel("État","pr-etat",ETATS,p.etat)+'</div><div>'+sel("Disponibilité","pr-dispo",DISPO,p.dispo)+'</div></div>'+
 '<label class="f" for="pr-desc">Description</label><textarea class="in" id="pr-desc" name="pr-desc">'+E(p.description)+'</textarea>'+
 '<label class="f" for="pr-photo">Photo du produit</label><input class="in" type="file" id="pr-photo" name="pr-photo" accept="image/*">'+(p.photo_url?'<img class="thumb" src="'+E(p.photo_url)+'" alt="Photo actuelle"><label class="chk" style="margin-top:10px"><input type="checkbox" name="pr-rm" id="pr-rm">Retirer la photo actuelle</label>':'')+
 '<div class="bt"><button class="btn p" type="submit">Enregistrer</button><button class="btn o" type="button" data-act="close">Annuler</button></div></form>');
}
function aDem(){
 return '<h1>Demandes d’inscription</h1><p class="sub">Appelez ou écrivez à la personne, puis changez le statut.</p><div class="pn"><div class="tw"><table class="t"><tr><th>Nom</th><th>Téléphone</th><th>Formation</th><th>Date</th><th>Statut</th></tr>'+(S.demandes.length?S.demandes.map(function(d){return '<tr><td><b>'+E(d.nom)+'</b>'+(d.message?'<br><span style="color:var(--muted);font-size:13px">'+E(d.message)+'</span>':'')+'</td><td style="white-space:nowrap">'+E(d.tel)+' <a class="ib" target="_blank" rel="noopener" href="'+waTo(d.tel,"Bonjour "+d.nom+", ici Tenoh Concepts, à propos de votre demande : "+(d.formation||""))+'" aria-label="Écrire sur WhatsApp">'+ic("chat",16)+'</a></td><td>'+E(d.formation)+'</td><td>'+fdate(d.created_at)+'</td><td><select class="sel" data-act="dstat" data-id="'+d.id+'" aria-label="Statut">'+STAT.map(function(s){return '<option'+(s===d.statut?' selected':'')+'>'+s+'</option>'}).join("")+'</select></td></tr>'}).join(""):'<tr><td colspan="5" style="color:var(--muted)">Aucune demande pour le moment.</td></tr>')+'</table></div></div>';
}
function aMsg(){
 return '<h1>Messages et devis</h1><p class="sub">Messages du formulaire de contact et demandes de devis.</p><div class="pn">'+(S.messages.length?S.messages.map(function(m){return '<div class="msg"><b>'+E(m.nom)+'</b> · '+E(m.tel)+' · <span class="st">'+E(m.sujet)+'</span><p>'+E(m.texte)+'</p><span style="font-size:12.5px;color:var(--muted)">'+fdate(m.created_at)+'</span> <a class="btn o sm" style="margin-left:10px" target="_blank" rel="noopener" href="'+waTo(m.tel,"Bonjour "+m.nom+", ici Tenoh Concepts, nous répondons à votre message.")+'">'+ic("chat",16)+'WhatsApp</a> <button class="btn o sm" data-act="mtog" data-id="'+m.id+'">'+(m.traite?"Marquer à traiter":"Marquer comme traité")+'</button></div>'}).join(""):'<p style="color:var(--muted)">Aucun message pour le moment.</p>')+'</div>';
}
function aAnn(){
 return '<h1>Annonces</h1><p class="sub">Elles s\'affichent sur la page d\'accueil.</p><div class="pn"><h3>Nouvelle annonce</h3><form data-form="ann">'+field("Titre","a-titre","",{req:1})+'<label class="f" for="a-texte">Texte</label><textarea class="in" id="a-texte" name="a-texte" required></textarea><div class="bt"><button class="btn p" type="submit">Publier</button></div></form></div>'+
 '<div class="pn"><h3>Annonces publiées</h3>'+(S.annonces.length?S.annonces.map(function(a){return '<div class="msg"><div style="display:flex;justify-content:space-between;gap:12px;align-items:center"><b>'+E(a.titre)+'</b><span style="white-space:nowrap">'+tog(a.visible,"atog",a.id)+' <button class="ib dg2" data-act="adel" data-id="'+a.id+'" aria-label="Supprimer">'+ic("trash",16)+'</button></span></div><p>'+E(a.texte)+'</p></div>'}).join(""):'<p style="color:var(--muted)">Aucune annonce.</p>')+'</div>';
}
function aPar(){
 var s=S.settings;
 return '<h1>Paramètres</h1><p class="sub">Ces informations s’affichent sur tout le site.</p><div class="pn"><form data-form="par">'+field("Numéro WhatsApp (chiffres seulement, avec l’indicatif)","s-wa",s.whatsapp)+'<div class="fr"><div>'+field("Téléphone 1","s-t1",s.tel1)+'</div><div>'+field("Téléphone 2","s-t2",s.tel2)+'</div></div>'+field("E-mail","s-mail",s.email)+field("Adresse","s-adr",s.adresse)+field("Horaires d’ouverture","s-hor",s.horaires)+'<div class="bt" style="display:flex"><button class="btn p" type="submit">Enregistrer</button></div></form></div>'+
 '<div class="pn"><h3>Changer mon mot de passe</h3><form data-form="pw"><label class="f" for="w1">Nouveau mot de passe (8 caractères minimum)</label><input class="in" id="w1" name="w1" type="password" minlength="8" required autocomplete="new-password"><label class="f" for="w2">Répéter le mot de passe</label><input class="in" id="w2" name="w2" type="password" minlength="8" required autocomplete="new-password"><div class="bt" style="display:flex"><button class="btn s" type="submit">Changer le mot de passe</button></div></form></div>';
}
/* ---------- données ---------- */
function fdate(s){return s?new Date(s).toLocaleDateString("fr-FR"):""}
function waTo(tel,txt){var d=String(tel||"").replace(/\D/g,"");if(d.length<=9)d="224"+d;return "https://wa.me/"+d+"?text="+encodeURIComponent(txt)}
var toastT;
function toast(m){var t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";t.setAttribute("role","status");document.body.appendChild(t)}t.textContent=m;t.style.display="block";clearTimeout(toastT);toastT=setTimeout(function(){t.style.display="none"},4500)}
async function run(p){var r=await p;if(r.error){toast("Erreur : "+(r.error.message||"action impossible"));return false}return true}

async function loadPublic(){
 var r=await Promise.all([
  sb.from("formations").select("*").eq("visible",true).order("id"),
  sb.from("produits").select("*").eq("visible",true).order("id"),
  sb.from("annonces").select("*").eq("visible",true).order("id",{ascending:false}),
  sb.from("settings").select("*").eq("id",1).maybeSingle()]);
 if(r[0].error||r[1].error)return false;
 S.formations=r[0].data||[];S.produits=r[1].data||[];S.annonces=r[2].data||[];
 if(r[3].data)S.settings=r[3].data;
 return true;
}
async function loadAdmin(){
 var q=function(t,asc){return sb.from(t).select("*").order("id",{ascending:asc})};
 var r=await Promise.all([q("formations",true),q("produits",true),q("annonces",false),q("demandes",false),q("messages",false),sb.from("settings").select("*").eq("id",1).maybeSingle()]);
 S.formations=r[0].data||[];S.produits=r[1].data||[];S.annonces=r[2].data||[];S.demandes=r[3].data||[];S.messages=r[4].data||[];
 if(r[5].data)S.settings=r[5].data;
}

/* ---------- photos ---------- */
function resizeImg(file,max){return new Promise(function(res,rej){var img=new Image(),u=URL.createObjectURL(file);
 img.onload=function(){var s=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(u);c.toBlob(function(b){b?res(b):rej(new Error("Image illisible"))},"image/jpeg",.82)};
 img.onerror=function(){rej(new Error("Image illisible"))};img.src=u})}
async function uploadPhoto(file){
 var blob=await resizeImg(file,1000),path="produits/"+Date.now()+"-"+Math.random().toString(36).slice(2,8)+".jpg";
 var r=await sb.storage.from("photos").upload(path,blob,{contentType:"image/jpeg",cacheControl:"31536000"});
 if(r.error)throw r.error;
 return sb.storage.from("photos").getPublicUrl(path).data.publicUrl;
}

/* ---------- routeur ---------- */
var rid=0,adminUid=null;
async function render(){
 var my=++rid,h=(location.hash||"#accueil").slice(1),m=/^([a-z]+)(?:-(.+))?$/.exec(h)||["","accueil"],name=m[1],arg=m[2],root=document.getElementById("root"),html;
 if(!root.innerHTML)root.innerHTML='<div class="empty" style="margin:80px 20px">Chargement…</div>';
 try{
  if(name==="admin"){
   var ses=(await sb.auth.getSession()).data.session;
   if(!ses){adminIn=false;adminUid=null}
   else if(adminUid!==ses.user.id){
    var ok=await sb.rpc("is_admin");
    if(ok.data===true){adminUid=ses.user.id;adminIn=true}
    else{await sb.auth.signOut();adminIn=false;adminUid=null;loginMsg="Ce compte n’a pas accès à l’administration."}
   }else adminIn=true;
   if(adminIn)await loadAdmin();
   if(my!==rid)return;
   html=adminIn?pgAdmin(arg||"vue"):pgLogin();document.title="Administration | Tenoh Concepts";
  }else{
   var ok2=await loadPublic();
   if(my!==rid)return;
   var pages={accueil:[pgHome,"Accueil"],formations:[pgFormations,"Formations"],services:[pgServices,"Services numériques"],boutique:[pgBoutique,"Boutique"],apropos:[pgApropos,"À propos"],contact:[pgContact,"Contact"]};
   if(!ok2&&!S.formations.length){html=shell("accueil",'<div class="wrap" style="padding:80px 20px"><div class="empty"><b style="color:var(--head)">Impossible de charger les données.</b><p>Vérifiez votre connexion Internet puis réessayez.</p><p><a class="btn o" style="margin-top:14px" href="#accueil" onclick="location.reload()">Réessayer</a></p></div></div>')}
   else if(name==="formation"){html=shell("formations",pgFormation(parseInt(arg,10)));document.title="Formation | Tenoh Concepts"}
   else{var p=pages[name]||pages.accueil;html=shell(pages[name]?name:"accueil",p[0]());document.title=(name==="accueil"||!pages[name]?"Tenoh Concepts | Le numérique à la portée de tous":p[1]+" | Tenoh Concepts")}
  }
 }catch(err){
  if(my!==rid)return;
  html=shell("accueil",'<div class="wrap" style="padding:80px 20px"><div class="empty"><b style="color:var(--head)">Impossible de charger la page.</b><p>Vérifiez votre connexion Internet puis réessayez.</p></div></div>');
 }
 root.innerHTML=html;
}
function go(){menuOpen=false;closeModal();render();window.scrollTo(0,0)}
window.addEventListener("hashchange",go);

/* ---------- événements ---------- */
function find(list,id){return list.filter(function(x){return x.id===id})[0]}
document.addEventListener("click",async function(e){
 var t=e.target.closest("[data-act]");if(!t)return;var a=t.getAttribute("data-act"),id=parseInt(t.getAttribute("data-id"),10);
 if(a==="ovclose"){if(e.target===t)closeModal();return}
 if(a==="close"){closeModal();return}
 if(a==="menu"){menuOpen=!menuOpen;render();return}
 if(a==="dom"){FQ={q:"",doms:[DOMS[parseInt(t.getAttribute("data-d"),10)]],duree:"",cert:false};location.hash="#formations";return}
 if(a==="preinscrire"){preForm(id);return}
 if(a==="devis"){devisForm(parseInt(t.getAttribute("data-i"),10));return}
 if(a==="cat"){BQ.cat=t.getAttribute("data-c");document.getElementById("bchips").innerHTML=bChips();document.getElementById("blist").innerHTML=bList();return}
 if(a==="logout"){e.preventDefault();await sb.auth.signOut();adminIn=false;adminUid=null;location.hash="#admin";render();return}
 if(a==="fadd"){fFormModal(0);return}
 if(a==="fedit"){fFormModal(id);return}
 if(a==="ftog"){var f=find(S.formations,id);if(await run(sb.from("formations").update({visible:!f.visible}).eq("id",id)))render();return}
 if(a==="fdel"){var f2=find(S.formations,id);modal('<h3>Supprimer cette formation ?</h3><p style="margin-top:8px">« '+E(f2?f2.titre:"")+' » sera retirée du site.</p><div class="bt"><button class="btn p" data-act="fdel2" data-id="'+id+'">Supprimer</button><button class="btn o" data-act="close">Annuler</button></div>');return}
 if(a==="fdel2"){if(await run(sb.from("formations").delete().eq("id",id))){closeModal();render()}return}
 if(a==="padd"){pFormModal(0);return}
 if(a==="pedit"){pFormModal(id);return}
 if(a==="ptog"){var p=find(S.produits,id);if(await run(sb.from("produits").update({visible:!p.visible}).eq("id",id)))render();return}
 if(a==="pdel"){var p2=find(S.produits,id);modal('<h3>Supprimer ce produit ?</h3><p style="margin-top:8px">« '+E(p2?p2.nom:"")+' » sera retiré de la boutique.</p><div class="bt"><button class="btn p" data-act="pdel2" data-id="'+id+'">Supprimer</button><button class="btn o" data-act="close">Annuler</button></div>');return}
 if(a==="pdel2"){if(await run(sb.from("produits").delete().eq("id",id))){closeModal();render()}return}
 if(a==="mtog"){var m=find(S.messages,id);if(await run(sb.from("messages").update({traite:!m.traite}).eq("id",id)))render();return}
 if(a==="atog"){var an=find(S.annonces,id);if(await run(sb.from("annonces").update({visible:!an.visible}).eq("id",id)))render();return}
 if(a==="adel"){if(await run(sb.from("annonces").delete().eq("id",id)))render();return}
});
document.addEventListener("change",async function(e){
 var t=e.target,a=t.getAttribute&&t.getAttribute("data-act"),id=parseInt(t.getAttribute&&t.getAttribute("data-id"),10);
 if(a==="pdispo"){if(await run(sb.from("produits").update({dispo:t.value}).eq("id",id))){var p=find(S.produits,id);if(p)p.dispo=t.value;toast("Enregistré")}return}
 if(a==="dstat"){if(await run(sb.from("demandes").update({statut:t.value}).eq("id",id))){var d=find(S.demandes,id);if(d)d.statut=t.value;toast("Statut enregistré")}return}
 var f=t.getAttribute&&t.getAttribute("data-f");
 if(f==="dom"){var i=FQ.doms.indexOf(t.value);if(t.checked&&i<0)FQ.doms.push(t.value);if(!t.checked&&i>=0)FQ.doms.splice(i,1);document.getElementById("flist").innerHTML=fCards()}
 if(f==="duree"){FQ.duree=t.value;document.getElementById("flist").innerHTML=fCards()}
 if(f==="cert"){FQ.cert=t.checked;document.getElementById("flist").innerHTML=fCards()}
});
document.addEventListener("input",function(e){
 var t=e.target;
 if(t.getAttribute("data-f")==="q"){FQ.q=t.value;document.getElementById("flist").innerHTML=fCards()}
 if(t.getAttribute("data-b")==="q"){BQ.q=t.value;document.getElementById("blist").innerHTML=bList()}
});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal()});
document.addEventListener("submit",async function(e){
 var f=e.target.getAttribute("data-form");if(!f)return;e.preventDefault();
 var g=function(n){var el=e.target.elements[n];return el?el.value.trim():""},btn=e.target.querySelector("button[type=submit]"),txt=btn?btn.innerHTML:"";
 if(btn){btn.disabled=true}
 var done=function(){if(btn){btn.disabled=false;btn.innerHTML=txt}};
 try{
  if(f==="login"){
   var r=await sb.auth.signInWithPassword({email:g("l-mail"),password:e.target.elements["l-pw"].value});
   if(r.error){loginMsg="E-mail ou mot de passe incorrect.";adminUid=null;render();return}
   adminUid=null;location.hash="#admin";render();return}
  if(f==="pre"){
   if(g("website")){thanks("Votre demande est envoyée.","Bonjour");return}
   if(!(await run(sb.from("demandes").insert({nom:g("p-nom"),tel:g("p-tel"),email:g("p-email")||null,formation:g("p-formation"),message:g("p-message")||null}))))return;
   thanks("Votre demande de pré-inscription est envoyée. Le centre vous rappelle bientôt.","Bonjour, je viens de me pré-inscrire à la formation : "+g("p-formation"));return}
  if(f==="devis"){
   if(g("website")){thanks("Votre demande est envoyée.","Bonjour");return}
   if(!(await run(sb.from("messages").insert({nom:g("d-nom"),tel:g("d-tel"),sujet:"Devis : "+g("d-service"),texte:g("d-texte")}))))return;
   thanks("Votre demande de devis est envoyée. Nous vous répondons rapidement.","Bonjour, je viens d’envoyer une demande de devis : "+g("d-service"));return}
  if(f==="contact"){
   if(g("website")){thanks("Votre message est envoyé.","Bonjour");return}
   if(!(await run(sb.from("messages").insert({nom:g("nom"),tel:g("tel"),sujet:g("sujet"),texte:g("texte")}))))return;
   e.target.reset();thanks("Votre message est envoyé. Nous vous répondons rapidement.","Bonjour, je viens d’envoyer un message depuis le site.");return}
  if(f==="fsave"){
   var id=parseInt(e.target.getAttribute("data-id"),10),o={titre:g("f-titre"),domaine:g("f-domaine"),prix:g("f-prix")||"À définir",duree:g("f-duree"),horaires:g("f-horaires")||"À définir",debut:g("f-debut")||"À définir",certificat:g("f-cert")==="Oui",pub:g("f-pub"),objectifs:g("f-obj"),programme:g("f-prog"),conditions:g("f-cond")};
   var ok=await run(id?sb.from("formations").update(o).eq("id",id):sb.from("formations").insert(o));
   if(ok){closeModal();render()}return}
  if(f==="psave"){
   var pid=parseInt(e.target.getAttribute("data-id"),10),po={nom:g("pr-nom"),categorie:g("pr-cat"),etat:g("pr-etat"),dispo:g("pr-dispo"),description:g("pr-desc")};
   var file=e.target.elements["pr-photo"]&&e.target.elements["pr-photo"].files[0];
   if(file){if(btn)btn.textContent="Envoi de la photo…";po.photo_url=await uploadPhoto(file)}
   else if(e.target.elements["pr-rm"]&&e.target.elements["pr-rm"].checked)po.photo_url=null;
   var ok3=await run(pid?sb.from("produits").update(po).eq("id",pid):sb.from("produits").insert(po));
   if(ok3){closeModal();render()}return}
  if(f==="ann"){if(await run(sb.from("annonces").insert({titre:g("a-titre"),texte:g("a-texte"),visible:true})))render();return}
  if(f==="par"){
   var s={id:1,whatsapp:g("s-wa").replace(/\D/g,"")||S.settings.whatsapp,tel1:g("s-t1"),tel2:g("s-t2"),email:g("s-mail"),adresse:g("s-adr"),horaires:g("s-hor")||"À définir"};
   if(await run(sb.from("settings").upsert(s))){toast("Paramètres enregistrés");render()}return}
  if(f==="pw"){
   if(g("w1")!==g("w2")){toast("Les deux mots de passe ne sont pas identiques.");return}
   var u=await sb.auth.updateUser({password:g("w1")});
   if(u.error){toast("Erreur : "+u.error.message);return}
   e.target.reset();toast("Mot de passe changé.");return}
 }catch(err){toast("Erreur : "+(err&&err.message?err.message:"action impossible"))}
 finally{done()}
});
render();
