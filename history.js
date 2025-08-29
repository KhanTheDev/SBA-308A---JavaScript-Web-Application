// history module - saves and loads search history

// save a city to history
export function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
    
    // add new city to front of list
    if (!history.includes(city)) {
        history.unshift(city);
        
        // only keep last 5 searches
        if (history.length > 5) {
            history = history.slice(0, 5);
        }
        
        localStorage.setItem('weatherHistory', JSON.stringify(history));
    }
}

// load history and show it on page
export function loadHistory(historyList) {
    const history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');
    
    historyList.innerHTML = '';
    
    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.style.cursor = 'pointer';
        
        // click to search again
        li.addEventListener('click', () => {
            document.getElementById('cityInput').value = city;
            document.getElementById('searchBtn').click();
        });
        
        historyList.appendChild(li);
    });
}

// clear all history
export function clearHistory() {
    localStorage.removeItem('weatherHistory');
}
