const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const bottomTabs = document.querySelectorAll('.bottom-tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

bottomTabs.forEach(bottomTab => {
    bottomTab.addEventListener('click', () => {
        bottomTabs.forEach(bt => bt.classList.remove('active'));
        bottomTab.classList.add('active');
        
        if (bottomTab.getAttribute('data-bottom-tab') === 'bottom-enquete') {
            const enqueteContent = document.getElementById('enquete');
            enqueteContent.innerHTML = `
                <div class="qr-code">
                    <img src="https://img.icons8.com/ios-filled/150/000000/qr-code.png" alt="QR Code">
                    <p>Vous avez trouvé un Indice ?</p>
                </div>
            `;
        } else if (bottomTab.getAttribute('data-bottom-tab') === 'home') {
            const enqueteContent = document.getElementById('enquete');
            enqueteContent.innerHTML = `
                <h2>Onglet Enquête</h2>
                <p>Contenu de l'enquête...</p>
            `;
        }
    });
});
