// Remove or comment out these functions
function openSearchModal() {
    $('#searchModal').modal('show');
}

function searchItems() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const nodes = document.querySelectorAll('.searchable-item');
    const results = document.getElementById('searchResults');

    results.innerHTML = ''; // Clear previous results

    nodes.forEach(node => {
        if (node.innerText.toLowerCase().includes(filter)) {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = node.innerText;
            results.appendChild(li);
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const country = document.getElementById('country').value.trim();
    
            if (name === "" || phone === "" || email === "" || country === "") {
                alert("All fields are required.");
            } else {
                alert("Thank you for contacting us");
                form.reset();
            }
        });
    });
    
}
