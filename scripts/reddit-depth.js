'use strict';
/* we cant match the <ul> because they are fucked */
document.querySelectorAll('.first').forEach(ab => {
   let cf = ab.parentNode;
   /* replace embed */
   let dh = cf.querySelector('.embed-comment, .post-sharing-button');
   let ek = document.createElement('a');
   ek.textContent = 'depth';
   ek.href = ab.querySelector('.bylink').href + '?depth=3';
   ek.style.color = '#BF1449';
   ek.style.fontWeight = 'bold';
   dh.replaceWith(ek);
   /* remove give award */
   cf.querySelector('.give-gold-button').remove();
});
