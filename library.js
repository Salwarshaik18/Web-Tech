function showDepartment(departmentId) {
    var sections = document.querySelectorAll('.book-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById('home').style.display = 'none';

    var selectedSection = document.getElementById(departmentId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Search functionality
function searchBooks() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    table = document.getElementById('searchTable');
    tr = table.getElementsByTagName('tr');

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = 'none'; // Hide all rows by default
        td = tr[i].getElementsByTagName('td');
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    tr[i].style.display = ''; // Show the row if match is found
                    break;
                }
            }
        }
    }
}