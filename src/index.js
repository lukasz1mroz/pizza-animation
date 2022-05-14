const elements = document.getElementsByClassName('sliceHolder');

console.log('test: ', elements);

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener(
    'mouseover',
    () => ((elements[i].style = '--scaler: 1.2'), (elements[i].style.transition = 'all 0.6s ease-in-out'))
  );
  elements[i].addEventListener(
    'mouseout',
    () => ((elements[i].style = '--scaler: 1'), (elements[i].style.transition = 'all 0.6s ease-in-out'))
  );
}
