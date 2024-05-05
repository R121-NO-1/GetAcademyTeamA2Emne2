document.addEventListener('DOMContentLoaded', () => {
    const add_to_cart = document.getElementById('add-to-cart');
    const product_popup = document.getElementById('product-popup');
    const close_btn = document.getElementById('close-btn');


    close_btn.addEventListener('click', () => {
        product_popup.style.display = 'none';
    });

    add_to_cart.addEventListener('click', () => {
        product_popup.style.display = 'flex';
    });

    window.addEventListener('click', (event) => {
        if (event.target.id === 'product-popup') {
            product_popup.style.display = 'none';
        }
    });
});