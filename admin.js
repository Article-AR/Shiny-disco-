document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const adminPanel = document.getElementById('admin-panel');
    const loginContainer = document.getElementById('login-container');
    const viewStatsBtn = document.getElementById('view-stats-btn');
    const statsContainer = document.getElementById('stats-container');
    const statsList = document.getElementById('stats-list');

    loginBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === 'A7med') {
            loginContainer.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    viewStatsBtn.addEventListener('click', () => {
        // Fetch stats from server (placeholder data for demonstration)
        const stats = [
            { ip: '192.168.1.1', country: 'مصر', score: '7/10' },
            { ip: '192.168.1.2', country: 'السعودية', score: '8/10' },
            // ... add more stats here
        ];

        statsList.innerHTML = '';
        stats.forEach(stat => {
            const statItem = document.createElement('li');
            statItem.textContent = `IP: ${stat.ip}, البلد: ${stat.country}, النتيجة: ${stat.score}`;
            statsList.appendChild(statItem);
        });

        statsContainer.style.display = 'block';
    });

    // Add more event listeners for add, delete, and update question functionalities
});
