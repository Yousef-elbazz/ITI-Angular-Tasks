  // Add some interactive functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Search functionality - show alert
            const searchInput = document.querySelector('.search-input');
            const searchBtn = document.querySelector('.search-btn');
            
            searchBtn.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    alert(`Search button clicked - Searching for: ${searchTerm}`);
                } else {
                    alert('Search button clicked - Please enter a search term');
                }
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchBtn.click();
                }
            });
            
            // Add Product button - shows modal with form
            const addProductBtn = document.querySelector('.btn-add-product');
            const addProductModal = new bootstrap.Modal(document.getElementById('addProductModal'));
            
            addProductBtn.addEventListener('click', function() {
                // Reset form for adding new product
                document.getElementById('productForm').reset();
                document.getElementById('addProductModalLabel').textContent = 'Add/Edit Product';
                addProductModal.show();
                // Show alert as requested
                // alert('Add Product form opened');
            });
            
            // Edit buttons
            const editButtons = document.querySelectorAll('.btn-edit');
            editButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const card = this.closest('.card');
                    const productName = card.querySelector('.card-title').textContent;
                    const productPrice = card.querySelector('.card-text').textContent.replace(/[^\d.]/g, '');
                    document.getElementById('productName').value = productName;
                    document.getElementById('productPrice').value = productPrice;
                    document.getElementById('productQuantity').value = Math.floor(Math.random() * 50) + 1; // Random quantity for demo
                    document.getElementById('addProductModalLabel').textContent = `Edit ${productName}`;
                    // Set category based on product
                    if (productName.toLowerCase().includes('laptop')) {
                        document.getElementById('productCategory').value = 'electronics';
                    } else if (productName.toLowerCase().includes('headphones')) {
                        document.getElementById('productCategory').value = 'accessories';
                    } else if (productName.toLowerCase().includes('keyboard')) {
                        document.getElementById('productCategory').value = 'accessories';
                    }
                    addProductModal.show();
                });
            });
            
            // Delete buttons - show alert
            const deleteButtons = document.querySelectorAll('.btn-delete');
            deleteButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const productName = this.closest('.card').querySelector('.card-title').textContent;
                    // Show alert as requested
                    alert(`Delete button clicked for ${productName}`);
                    if (confirm(`Are you sure you want to delete ${productName}?`)) {
                        alert(`${productName} deleted successfully`);
                    }
                });
            });
            
            // Form submission - Save Product button alert
            const productForm = document.getElementById('productForm');
            productForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = {
                    name: document.getElementById('productName').value,
                    price: document.getElementById('productPrice').value,
                    quantity: document.getElementById('productQuantity').value,
                    category: document.getElementById('productCategory').value,
                    imageUrl: document.getElementById('productImage').value
                };
                
                // Show alert for Save Product button click
                alert('Save Product button clicked');
                
                // Validate form
                if (!formData.name || !formData.price || !formData.quantity || !formData.category) {
                    alert('Please fill in all required fields (Product Name, Price, Quantity, Category)');
                    return;
                }
                
                // Show success message
                alert(`Product "${formData.name}" saved successfully!\nPrice: ${formData.price}\nQuantity: ${formData.quantity}\nCategory: ${formData.category}`);
                
                // Close modal and reset form
                addProductModal.hide();
                productForm.reset();
            });
            
            // Filter toggle icons
            const filterButtons = document.querySelectorAll('.filter-item');
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const icon = this.querySelector('i');
                    const target = this.getAttribute('data-bs-target');
                    const collapse = document.querySelector(target);
                    
                    collapse.addEventListener('shown.bs.collapse', function() {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    });
                    
                    collapse.addEventListener('hidden.bs.collapse', function() {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    });
                });
            });
        });