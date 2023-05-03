const submitElement = document.querySelector('.submit');
const consultationElement = document.querySelector('.consultation__window');
const closeSubmitElement = document.querySelector('.submit_close-modal');

function openConsultation() {
    consultationElement.classList.add('consultation_visible');
}

function closeConsultation() {
    consultationElement.classList.remove('consultation_visible');
}

function handleCloseConsultationByEscape(event) {
    if (event.key === 'Escape') {
        closeConsultation();
    }
}

function handleCloseByOverlay(event) {
    if (event.target === consultationElement) {
        closeConsultation();
    }
}

console.log(closeSubmitElement);

submitElement.addEventListener('click', openConsultation);
document.addEventListener('keydown', handleCloseConsultationByEscape);
consultationElement.addEventListener('click', handleCloseByOverlay);
closeSubmitElement.addEventListener('click', closeConsultation);