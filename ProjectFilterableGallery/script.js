(function () {
    const buttons = document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll('.store-item');
    let selectedButton = null;

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            // Reset the background color for all buttons
            buttons.forEach((btn) => {
                btn.style.backgroundColor = ''; // Reset background color
            });

            // Set the background color for the selected button
            e.target.style.backgroundColor = 'black';

            // Reset the background color for all items
            storeImages.forEach((item) => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Reset the background color for the previously selected button
            if (selectedButton && selectedButton !== e.target) {
                selectedButton.style.backgroundColor = '';
            }

            selectedButton = e.target;
        });
    });
})();
