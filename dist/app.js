const phone='https://wa.me/553493016633';
const defaultMessage='Olá, Clever! Tenho interesse em ser representante do Consórcio Gazin. Gostaria de conhecer o credenciamento.';
document.querySelectorAll('[data-whatsapp]').forEach(a=>{a.href=phone+'?text='+encodeURIComponent(defaultMessage);a.target='_blank';a.rel='noopener noreferrer'});
const segments=[
 ['Veículos','veiculos','Carros, motos e caminhões para os diferentes planos dos seus clientes.'],
 ['Imóveis','imoveis','Casas, apartamentos, terrenos, construção e reforma.'],
 ['Máquinas e implementos','agro','Possibilidades para quem trabalha e investe no campo.'],
 ['Energia solar','solar','Planejamento para a aquisição de sistemas fotovoltaicos.'],
 ['Náutica','nautica','Barcos, lanchas, motos aquáticas e motores de popa.'],
 ['Serviços','servicos','Viagens, formaturas, habilitação e outros projetos.'],
 ['Móveis e eletro','eletro','Móveis, eletrodomésticos e eletrônicos para renovar o lar.']
];
const list=document.querySelector('#segments-list');
segments.forEach(([name,img,description],i)=>{const li=document.createElement('li');li.className='splide__slide';li.innerHTML='<article class="segment-card"><img src="assets/'+img+'.jpg" alt="'+name+' — imagem da apresentação Gazin" loading="lazy"><div class="card-body"><div class="card-title"><h3>'+name+'</h3><span>0'+(i+1)+'</span></div><p>'+description+'</p><a target="_blank" rel="noopener noreferrer" href="'+phone+'?text='+encodeURIComponent('Olá, Clever! Quero conhecer a representação Gazin e o segmento de '+name.toLowerCase()+'.')+'">Conhecer este segmento <i data-lucide="arrow-up-right"></i></a></div></article>';list.append(li)});
if(window.lucide)lucide.createIcons();
if(window.Splide){const carousel=new Splide('.splide',{type:'slide',perPage:3,perMove:1,gap:22,arrows:false,pagination:false,rewind:true,trimSpace:true,breakpoints:{1024:{perPage:2,gap:18},640:{perPage:1,gap:16,padding:{right:'12%'}}},i18n:{prev:'Segmento anterior',next:'Próximo segmento',first:'Primeiro segmento',last:'Último segmento',slideLabel:'%s de %s',select:'Selecionar segmento %s',slide:'segmento',carousel:'carrossel',slideX:'Ir para o segmento %s'}}).mount();document.querySelector('.prev').addEventListener('click',()=>carousel.go('<'));document.querySelector('.next').addEventListener('click',()=>carousel.go('>'))}
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}});
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const text='Olá, Clever! Meu nome é '+data.get('name').trim()+', sou de '+data.get('city').trim()+'/'+data.get('state')+'. Tenho interesse em ser representante do Consórcio Gazin e gostaria de saber mais sobre o credenciamento.';window.location.href=phone+'?text='+encodeURIComponent(text)});
