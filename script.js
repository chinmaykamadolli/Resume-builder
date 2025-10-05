// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    const target=document.querySelector(this.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});

// Modal
const contactBtn=document.getElementById('contactBtn');
const contactModal=document.getElementById('contactModal');
const closeModal=document.getElementById('closeModal');
const contactForm=document.getElementById('contactForm');
const toast=document.getElementById('toast');
const phoneInput=document.getElementById('phone');

if(contactBtn){
  contactBtn.onclick=e=>{
    e.preventDefault();
    contactModal.style.display='flex';
  };
}
if(closeModal){closeModal.onclick=()=>contactModal.style.display='none';}
window.onclick=e=>{
  if(e.target===contactModal) contactModal.style.display='none';
};
if(phoneInput){phoneInput.oninput=()=>phoneInput.value=phoneInput.value.replace(/[^0-9]/g,'');}

if(contactForm){
  contactForm.onsubmit=e=>{
    e.preventDefault();
    if(!name.value||!email.value||!phone.value){
      alert('⚠️ Fill all fields');
      return;
    }
    contactModal.style.display='none';
    toast.style.display='block';
    setTimeout(()=>toast.style.display='none',3000);
    contactForm.reset();
  };
}
