document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',           // Use 'loop' to enable continuous looping
        perPage: 1,             // Number of slides per page
        autoplay: true,         // Auto play the slider
        interval: 4000,       // Autoplay interval in milliseconds (2 seconds)
        pauseOnHover: true,     // Pause autoplay on hover
        arrows: true,           // Show arrows for navigation
        pagination: true,      // Hide pagination bullets
    
    }).mount();  // Initialize the Splide instance
});

  
  const container = document.querySelector('.zoom-container');
  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const offsetX = (x / container.offsetWidth) * 100;
    const offsetY = (y / container.offsetHeight) * 100;
    container.querySelector('img').style.transformOrigin = `${offsetX}% ${offsetY}%`;
  });


  
  let count = 1;
  let btnMinus = document.getElementById('bnt-minus');
  let btnPlus = document.getElementById('bnt-plus');
  let Count = document.getElementById('bnt-count');
  Count.innerHTML = count;


  btnMinus.addEventListener('click', () => {
      if (count > 1) {
          count--;
      }
      Count.innerHTML = count;
  })
  btnPlus.addEventListener('click', () => {
      count++;
      Count.innerHTML = count;
  })

  let countOrder = 1;
  let btnOrderMinus = document.getElementById('bnt-order-minus');
  let btnOrderPlus = document.getElementById('bnt-order-plus');
  let CountOrder = document.getElementById('bnt-order-count');
  CountOrder.innerHTML = countOrder;

  btnOrderMinus.addEventListener('click', () => {
    if (countOrder > 1) {
        countOrder--;
    }
    CountOrder.innerHTML = countOrder;
  })
  btnOrderPlus.addEventListener('click', () => {
    countOrder++;
    console.log("first")
      CountOrder.innerHTML = countOrder;
  })