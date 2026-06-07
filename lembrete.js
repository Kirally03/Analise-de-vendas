

const addReminderBtn = document.querySelector('.add-reminder');
const reminderModal = document.getElementById('reminder-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const reminderForm = document.getElementById('reminder-form');
const remindersContainer = document.querySelector('.reminders');

// Abrir o modal
addReminderBtn.addEventListener('click', () => {
    reminderModal.classList.add('active');
});

// Fechar por botão 
closeModalBtn.addEventListener('click', () => {
    reminderModal.classList.remove('active');
    reminderForm.reset();
});

// Fechar se clicar fora 
reminderModal.addEventListener('click', (e) => {
    if (e.target === reminderModal) {
        reminderModal.classList.remove('active');
        reminderForm.reset();
    }
});

// Criar o lembrete novo ao enviar o formulário
reminderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('reminder-title').value;
    const time = document.getElementById('reminder-time').value;

    const newNotification = document.createElement('div');
    newNotification.className = 'notification';
    newNotification.innerHTML = `
        <div class="icon" style="background-color: var(--color-primary);">
            <span class="material-icons-sharp">notifications_active</span>
        </div>
        <div class="content">
            <div class="info">
                <h3>${title}</h3>
                <small class="text-muted">${time}</small>
            </div>
            <span class="material-icons-sharp">more_vert</span>
        </div>
    `;

    remindersContainer.insertBefore(newNotification, addReminderBtn);

    reminderModal.classList.remove('active');
    reminderForm.reset();
});