document.addEventListener('DOMContentLoaded', () => {
  const cart = [];

  const image = document.querySelector('.image');
  const nameInput = document.querySelector('.name');
  const title = document.querySelector('.title');
  const date = document.querySelector('.date');
  const actionEl = document.querySelector('.action');

  function renderCart() {
    let html = '';

    cart.forEach((item, index) => {
      html += `
        <div style="display:flex; gap:17rem; align-items:center; border-bottom:1px solid black;">
          <div style="display:flex; align-items:center; gap:1rem;">
            <img width="40" height="40" style="border-radius:3rem;" src="${item.image}">
            <div>${item.name}</div>
          </div>

          <p style="font-size:x-large; font-weight:600;">${item.title}</p>
          <p>${item.date}</p>

          <div class="delete" data-index="${index}" style="cursor:pointer;">❌</div>
        </div>
      `;
    });

    actionEl.innerHTML = html;
  }

  document.querySelector('.add').addEventListener('click', (e) => {
    e.preventDefault();

    cart.push({
      image: image.value,
      name: nameInput.value,
      title: title.value,
      date: date.value
    });

    renderCart();
  });

  actionEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.delete');
    if (!btn) return;

    cart.splice(btn.dataset.index, 1);
    renderCart();
  });

  document.querySelector('.clear').addEventListener('click', () => {
    cart.length = 0;
    renderCart();
  });
});
