window.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
  const primaryNavigation = document.querySelector('.primary-navigation');
  const navLinkMenu = document.querySelectorAll('.nav-link');
  const body = document.querySelector('body');
  const url = window.location.pathname;

  const homeLink = document.querySelector('.home-link');
  const aboutLink = document.querySelector('.about-link');

  if (url === '/index.html' || url === '/' || url === '/capstone-htmlcssjs/index.html') {
    homeLink.classList.add('text-red');
    aboutLink.classList.remove('text-red');
  }
  if (url === '/about.html' || url === '/capstone-htmlcssjs/about.html') {
    aboutLink.classList.add('text-red');
    homeLink.classList.remove('text-red');
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const menuVisibility = primaryNavigation.getAttribute('data-visible');
      if (menuVisibility === 'false') {
        primaryNavigation.setAttribute('data-visible', true);
        mobileMenuToggle.setAttribute('aria-expanded', true);
        body.classList.add('prevent-scrolling');
      } else {
        primaryNavigation.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
        body.classList.remove('prevent-scrolling');
      }
    });
    navLinkMenu.forEach((element) => {
      element.addEventListener('click', () => {
        primaryNavigation.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
        body.classList.remove('prevent-scrolling');
      });
    });
  }

  const talentList = [
    {
      name: 'Slacks (Jake Kenner)',
      role: 'Stage Host / Reporter',
      brief:
        'Slacks has a colored history of involvement in the Dota 2 scene in many different roles and with numerous organizations. He is best known for his outgoing and friendly personality, as well as his energy when working at events.',
      img: 'assets/slacks-headshot.jpg',
    },
    {
      name: 'Sheever (Jorien van der Heijden)',
      role: 'Desk Host',
      brief: 'Jorien "Sheever" van der Heijden is an English language Dota 2 content creator. She\'s widely known for hosting DreamLeague, her work at several Dota Major Championships and The International Events.',
      img: 'assets/talent-Sheever-v1.jpg',
    },
    {
      name: 'Sheepsticked (Alexandra Roberts)',
      role: 'Commentators/Analysts',
      brief: 'Alexandra "Sheepsticked" Roberts (born October 29, 1996) is a British Dota 2 commentator and analyst. She is currently a streamer for beastcoast.',
      img: 'assets/talent-Sheepsticked-v1.jpg',
    },
    {
      name: 'Fear (Clinton Loomis)',
      role: 'Commentators/Analysts',
      brief: 'Clinton "Fear" Loomis is an American player from Medford, Oregon. Fear is one of the most storied Dota players, and is widely regarded as one of the greatest players to emerge from the North American region.',
      img: 'assets/talent-feardota-v1.jpg',
    },
    {
      name: 'N0tail (Johan Sundstein)',
      role: 'Commentators/Analysts',
      brief: 'Johan "N0tail" Sundstein (formerly known as "BigDaddy") (born October 8, 1993) is an inactive Danish/Faeroese Dota 2 player who is currently on the inactive roster of OG.',
      img: 'assets/notail.jpg',
    },
    {
      name: 'syndereN (Troels Lyngholt Nielsen)',
      role: 'Commentators/Analysts',
      brief: 'Troels Lyngholt "syndereN" Nielsen is a Danish Dota 2 caster.',
      img: 'assets/talent-synderen-v1.jpg',
    },
  ];

  const talentContainer = document.querySelector('.talents-container');

  function talentCard(talent) {
    return `<div class="talent-card" data-visible="true">
              <img class="talent-image" src="${talent.img}" alt="${talent.name}" />
              <div class="talent-info-wrapper">
                <h3>${talent.name}</h3>
                <p class="talent-role text-red">${talent.role}</p>
                <hr />
                <p>
                  ${talent.brief}
                </p>
              </div>
            </div>`;
  }

  const talents = talentList.map(talentCard);

  talentContainer.insertAdjacentHTML('afterbegin', talents.join(''));

  const talentButton = document.querySelector('.talent-button');
  const talentExpanded = talentButton.getAttribute('aria-expanded');
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  function handleTabletChange(e) {
    const talentCard = document.querySelectorAll('.talent-card');
    if (e.matches && talentExpanded !== true) {
      for (let i = 0; i < talentCard.length; i += 1) {
        if (i > 1) {
          talentCard[i].classList.add('hidden');
          talentCard[i].setAttribute('data-visible', false);
        }
      }
    } else {
      for (let i = 0; i < talentCard.length; i += 1) {
        if (i > 1) {
          talentCard[i].classList.remove('hidden');
          talentCard[i].setAttribute('data-visible', true);
        }
      }
      primaryNavigation.setAttribute('data-visible', true);
    }
  }

  mediaQuery.addEventListener('change', handleTabletChange);

  handleTabletChange(mediaQuery);

  talentButton.addEventListener('click', () => {
    const talentExpanded = talentButton.getAttribute('aria-expanded');
    const talentCard = document.querySelectorAll('.talent-card');
    if (talentExpanded === 'false') {
      for (let i = 0; i < talentCard.length; i += 1) {
        if (i > 1) {
          talentCard[i].classList.remove('hidden');
          talentCard[i].setAttribute('data-visible', true);
        }
      }
      talentButton.setAttribute('aria-expanded', true);
      talentButton.innerHTML = '<span>LESS <i class="fas fa-angle-up text-red"></i></span>';
    } else if (talentExpanded === 'true') {
      for (let i = 0; i < talentCard.length; i += 1) {
        if (i > 1) {
          talentCard[i].classList.add('hidden');
          talentCard[i].setAttribute('data-visible', false);
        }
      }
      talentButton.setAttribute('aria-expanded', false);
      talentButton.innerHTML = '<span>MORE <i class="fas fa-angle-down text-red"></i></span>';
    }
  });
});
