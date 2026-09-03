// スマートフォン用メニュー：ボタンを押すたびに表示状態を切り替える
const menuButton = document.querySelector('.menu-button');
const globalNav = document.querySelector('.global-nav');

menuButton.addEventListener('click', function () {
  const isOpen = globalNav.classList.toggle('is-open');
  menuButton.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
});

// メニュー内のリンクを選んだら、移動後にメニューを閉じる
const navLinks = document.querySelectorAll('.global-nav a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    globalNav.classList.remove('is-open');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
  });
});

// FAQ：親要素のclassで回答を表示し、aria-expandedで開閉状態も伝える
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function (question) {
  question.addEventListener('click', function () {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    const faqItem = question.closest('.faq-item');

    // 回答欄を含む親要素にclassを付け、CSSで回答欄の高さを切り替える
    faqItem.classList.toggle('is-open', !isExpanded);
    question.setAttribute('aria-expanded', String(!isExpanded));
  });
});
