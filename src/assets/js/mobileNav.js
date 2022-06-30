const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body;

burger.addEventListener('click', event => {
    if (body.classList.contains('show__sidebar')) {
        closeSidebar();
    } else {
        showSidebar();
    }
});

function showSidebar() {
    let mask = document.createElement('div');

    mask.classList.add('page__mask');
    
    page.appendChild(mask);

    body.classList.add('show__sidebar');
    mask.addEventListener('click', closeSidebar);
}

function closeSidebar() {
    console.log('closed');
    document.querySelector('.page__mask').remove();
    body.classList.remove('show__sidebar');
}