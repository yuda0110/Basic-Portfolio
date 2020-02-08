document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  const headerHtml = `<div class="header-contents">
            <div class="name">Yuko Uda</div>
            <nav>
                <ul class="navigation">
                    <li><a href="./index.html">About</a></li>
                    <li><a href="./portfolio.html">Portfolio</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>`
  header.innerHTML = headerHtml

  const footer = document.querySelector('.footer')
  const footerHtml = 'Copyright © 2020 Yuko Uda'
  footer.innerHTML = footerHtml
})