document.getElementById('orderButton1').addEventListener('click', function() {
    // Replace with your phone number and message
    const phoneNumber = '087777871901';
    const message = 'Halo, sama mau pesan kopi gula aren.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

document.getElementById('orderButton2').addEventListener('click', function() {
    // Replace with your phone number and message
    const phoneNumber = '087777871901';
    const message = 'Halo, sama mau pesan kopi cremay latte.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});