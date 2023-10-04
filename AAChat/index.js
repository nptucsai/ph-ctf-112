window.onload = function () {
  const chatInput = document.querySelector('#chat-input');
  const chatList = document.querySelector('#chat-list');
  const chatBtn = document.querySelector('#chat-btn');

  chatInput.addEventListener('keydown', function ({ key }) {
    if (key === 'Enter') addNewChatItem();
  });

  chatBtn.addEventListener('click', addNewChatItem);

  function addNewChatItem() {
    const value = chatInput.value;

    if (value === '') return;

    chatList.appendChild(newChatItem(value, 'right'));
    chatInput.value = '';
    chatList.scrollTo(0, chatList.scrollHeight);
  }

  function newChatItem(context, direction) {
    const item = document.createElement('div');

    item.innerHTML = context;
    item.classList.add('say');
    item.classList.add(`say-${direction}`);

    return item;
  }
};
