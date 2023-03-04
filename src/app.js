import { calculateSubtotal, decrementQty, incrementQty } from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const kodePromo = document.querySelector('#code');
const confirmCode = document.querySelector('#codeButton');

let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${calculateSubtotal(price.value, qtyInput.value, discount)}`
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${calculateSubtotal(price.value, qtyInput.value, discount)}`
});

confirmCode.addEventListener('click', () => {
  if (kodePromo.value == 'KODE27') {
    discount = 27;
    subtotal.textContent = `Rp. ${calculateSubtotal(price.value, qtyInput.value, discount)}`
  } else {
    discount = 0;
  }
})
