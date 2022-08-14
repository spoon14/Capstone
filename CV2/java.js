const link = document.getElementsByTagName('img');
    function show(dataimg) {
        for (let i = 0; i < link.length; i++)
        {
            if(link[i].id == dataimg)
            {
                link[i].className = '';
            }
            else{
                link[i].className = 'hide';
        }}}

const elem = document.querySelectorAll('div.menu li a');
    for(i=0; i <elem.length; i++) {
        elem[i].addEventListener('click',function() {show(this.getAttribute('data-img'));});
    }
    
const fb = document.querySelectorAll('div.social-icons li a')[0];
fb.addEventListener('click', () => {
  const newTab = window.open('https://facebook.com/srmatillano', '_blank');
});

const twit = document.querySelectorAll('div.social-icons li a')[1];
twit.addEventListener('click', () => {
  const newTab = window.open('https://twitter.com/@srmatillano', '_blank');
});

const tel = document.querySelectorAll('div.social-icons li a')[2];
tel.addEventListener('click', () => {
  const newTab = window.open('https:/t.me/spoon14', '_blank');
});

const insta = document.querySelectorAll('div.social-icons li a')[3];
insta.addEventListener('click', () => {
  const newTab = window.open('https://instagram.com/srmatillano', '_blank');
});

const yt = document.querySelectorAll('div.social-icons li a')[4];
yt.addEventListener('click', () => {
  const newTab = window.open('https://youtube.com/channel/UCiZwJlSBy56ADcC9Q3gdniQ', '_blank');
});

const git = document.querySelectorAll('div.social-icons li a')[5];
git.addEventListener('click', () => {
  const newTab = window.open('https://github.com/spoon14', '_blank');
});




            