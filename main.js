const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  ScrollReveal().reveal('#hero-content, #hero-image-container', {
    delay: 200,
    distance: '50px',
    origin: 'left',
    reset: true
  });
ScrollReveal().reveal(".popular__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  let cartItems = 0;

  document.querySelectorAll('.popular__card').forEach(card => {
    const button = document.createElement('button');
    button.className = 'btn btn-custom mt-3';
    button.innerHTML = 'Add to Cart';
    
    button.addEventListener('click', () => {
      cartItems++;
      document.querySelector('.cart-count').textContent = cartItems;
      // Ajouter une animation
      button.classList.add('added');
      setTimeout(() => button.classList.remove('added'), 500);
    });
    
    card.querySelector('.popular__card__content').appendChild(button);
  });