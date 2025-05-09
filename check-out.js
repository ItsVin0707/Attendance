document.getElementById('paymentBtn').addEventListener('click', function() {
    Swal.fire({
      title: 'Proceed to Payment?',
      text: 'You are about to complete your order.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Thank you!',
          text: 'Your order has been placed successfully ☕',
          icon: 'success',
          confirmButtonText: 'Close'
        });
      }
    });
  });