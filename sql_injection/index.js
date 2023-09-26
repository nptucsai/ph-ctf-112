window.addEventListener('load', function () {
  document.querySelector('#user-id').addEventListener('keyup', function (e) {
    document.querySelector('#__user-id').innerHTML = e.target.value;
  });

  document.querySelector('#password').addEventListener('keyup', function (e) {
    document.querySelector('#__password').innerHTML = e.target.value;
  });
});
