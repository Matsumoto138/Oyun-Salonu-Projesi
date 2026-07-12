
document.addEventListener('DOMContentLoaded', () => {
    const kaydedilenAvatar = localStorage.getItem('selectedAvatar');
    if (kaydedilenAvatar) {
        const avatarImg = document.getElementById('profileImage');
        avatarImg.querySelector('img').src = '../../assets/' + kaydedilenAvatar;
    }
});