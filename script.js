function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}.${month}.${day} ${hours}:${minutes}`;
    document.getElementById('dateTime').textContent = "Dati atjaunoti " + formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// For image dropdowns
function toggleImageDropdown(cell) {
    const dropdown = cell.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

function selectImage(imgElement) {
    const cell = imgElement.closest('.image-cell');
    const displayImg = cell.querySelector('img:first-child');
    displayImg.src = imgElement.src;
    const dropdown = cell.querySelector('.dropdown');
    dropdown.classList.remove('show');
}

// Close image dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.image-cell')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
    }
});

// For day selector dropdowns
function toggleDayDropdown(event) {
    event.stopPropagation();
    const cell = event.currentTarget;
    const menu = cell.querySelector('.dropdown-menu');
    
    // Close all other open menus
    document.querySelectorAll('.dropdown-menu.active').forEach(m => {
        if (m !== menu) {
            m.classList.remove('active');
        }
    });
    
    // Toggle current menu
    menu.classList.toggle('active');
}

function selectOption(event, snippet) {
    event.stopPropagation();
    const cell = event.currentTarget.closest('.dropdown-cell');
    const menu = cell.querySelector('.dropdown-menu');
    
    // Update cell text while preserving the menu
    cell.innerHTML = `
        ${snippet}
        <div class="dropdown-menu">
            <div class="dropdown-option" onclick="selectOption(event, 'Pr')">Pr</div>
            <div class="dropdown-option" onclick="selectOption(event, 'Ot')">Ot</div>
            <div class="dropdown-option" onclick="selectOption(event, 'Tr')">Tr</div>
            <div class="dropdown-option" onclick="selectOption(event, 'Ce')">Ce</div>
            <div class="dropdown-option" onclick="selectOption(event, 'Pk')">Pk</div>
            <div class="dropdown-option" onclick="selectOption(event, 'Se')">Se</div>
            <div class="dropdown-option" onclick="selectOption(event, 'Sv')">Sv</div>
        </div>
    `;
    
    console.log('Selected:', snippet);
}

// Close day dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
        menu.classList.remove('active');
    });
});

function setLightMode() {
    document.body.className = 'light-mode';
}

function setDarkMode() {
    document.body.className = 'dark-mode';
}