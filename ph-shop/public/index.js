let money = 0;
let id = null;

window.onload = init;

function init() {
  money = parseInt(document.querySelector('#money').innerHTML);
  const btns = document.querySelector('#productions').querySelectorAll('button');
  for (const btn of btns) btn.addEventListener('click', handleBuyButton);

  document.querySelector('#buy').addEventListener('click', buy);
  document.querySelector('#cancel').addEventListener('click', cancel);
}

function handleBuyButton(e) {
  id = e.currentTarget.id;
}

function buy() {
  if (!id) return;
  const toast = new bootstrap.Toast(document.getElementById('toast'));
  const error = new bootstrap.Toast(document.getElementById('error'));
  fetch('/buy', {
    method: 'POST',
    body: `id=${id}&money=${money}`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then((resp) => {
    if (resp.status === 200) return toast.show();

    resp
      .text()
      .then((t) => (document.querySelector('#msg').innerHTML = t))
      .then((_) => error.show());
  });
}

function cancel() {
  id = null;
}
