const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');
for (let i = 0; i < 1500; i++) {
  banner.innerHTML += "<span class='blocks'></span>";
}