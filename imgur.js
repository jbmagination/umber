golf = document.querySelector('[src$="gif"]');
hotel = golf.nextSibling;
hotel.style.display = 'block';
hotel.src = golf.src.replace('gif', 'mp4');
hotel.removeAttribute('loop');
golf.parentNode.removeChild(golf);
