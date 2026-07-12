const avatars = document.querySelectorAll('.avatar');

avatars.forEach(avatar => {
    avatar.addEventListener('click', ()=>{
        avatars.forEach(avatar=>avatar.classList.remove('selected'));
        avatar.classList.add('selected');
    })
})

const baslaButonu = document.querySelector('.login-input-area a');

baslaButonu.addEventListener('click', (e)=>{
    e.preventDefault();
    const selectedAvatar = document.querySelector('.avatar.selected img');
    if(selectedAvatar){
        const avatarSrc = selectedAvatar.getAttribute('src');
        const dosyaAdi = avatarSrc.split('/').pop();
        localStorage.setItem('selectedAvatar', dosyaAdi);
        window.location.href = 'src/pages/dashboard.html';
    } else {
        alert('Lütfen bir avatar seçin.');
    }
});