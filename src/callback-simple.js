main(() => {
  console.log('He sido ejecutado normalmente');
}, 100);

function main(cb, time) {
  setTimeout(() => {
    console.log('He sido ejecutado en el timeout!!!');
    cb();
  }, time);
}
