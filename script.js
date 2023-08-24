const registrationForm = document.getElementById('registration-form');
const studentList = document.getElementById('student-list');
const registeredStudents = new Set();
const examCenters = ['Delhi', 'Hyderabad', 'Mumbai', 'Bangalore', 'Chennai', 'Patna', 'Gandhinagar', 'Jaipur', 'Kolkata'];
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = registrationForm.name.value;
    const email = registrationForm.email.value;
    if (!registeredStudents.has(email)) {
        registeredStudents.add(email);
        const examCenter = getRandomExamCenter();
        const studentInfo = `${name} - ${email} - Exam Center: ${examCenter}`;
        addStudentToList(studentInfo);
    } else {
        alert('This email is already registered.');
    }
    registrationForm.reset();
});
function getRandomExamCenter() {
    const randomIndex = Math.floor(Math.random() * examCenters.length);
    return examCenters[randomIndex];
}
function addStudentToList(studentInfo) {
    const listItem = document.createElement('li');
    listItem.textContent = studentInfo;
    studentList.appendChild(listItem);
}
