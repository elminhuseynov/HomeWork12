function addStudent(name) {
    
    let participantsList = document.querySelector('.participants-list');

    
    let newParticipant = document.createElement('li');
    newParticipant.textContent = name;

    participantsList.appendChild(newParticipant);
}

addStudent('Elmin Huseynov');
