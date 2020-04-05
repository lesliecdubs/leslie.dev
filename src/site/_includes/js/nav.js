const smoothScroll = function (link) {
  return function (e) {
    e.preventDefault();
    const sectionName = link.getAttribute("href");

    document.querySelector(`${sectionName}[data-scroll-point]`).scrollIntoView({
      behavior: "smooth"
    });
  }
}

function handleClick() {
  const navLink = document.querySelectorAll('[data-scroll-to]');

  navLink.forEach(function (link) {
    link.addEventListener('click', smoothScroll(link));
  });
}

handleClick();