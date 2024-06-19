// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon')
    const searchInput = document.getElementById('site-search')
    const searchContainer = document.querySelector('.search-container')

    searchIcon.addEventListener('click', function() {
        searchContainer.classList.toggle('active')
        if (searchContainer.classList.contains('active')) {
            searchInput.focus()
        } else {
            searchInput.blur()
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target)) {
            searchContainer.classList.remove('active')
            searchInput.blur()
        }
    });
});
