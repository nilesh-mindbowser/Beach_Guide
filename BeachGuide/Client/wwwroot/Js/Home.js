var currentPage = 1;
var itemsPerPage = 3; // Number of items to display per page

function displayContent(page) {
    var content = document.getElementById('content');
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;

    // Hide all content items
    var allItems = content.children;
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].style.display = 'none';
    }

    // Display items for the current page
    for (var j = startIndex; j < endIndex; j++) {
        if (allItems[j]) {
            allItems[j].style.display = 'block';
        }
    }
}

function generatePagination(totalItems) {
    var paginationList = document.getElementById('pagination-list');
    paginationList.innerHTML = '';

    var totalPages = Math.ceil(totalItems / itemsPerPage);

    for (var i = 1; i <= totalPages; i++) {
        var listItem = document.createElement('li');
        listItem.className = 'pagination-item';
        listItem.innerText = i;

        // Set active class for the current page
        if (i === currentPage) {
            listItem.classList.add('active');
        }

        // Add click event listener to handle page selection
        listItem.addEventListener('click', function () {
            currentPage = parseInt(this.innerText);
            displayContent(currentPage);
            generatePagination(totalItems);
        });

        paginationList.appendChild(listItem);
    }
}

// Example usage: You should replace this with your own data and event listeners
var totalItems = 20; // Total number of items to paginate
displayContent(currentPage);
generatePagination(totalItems);
