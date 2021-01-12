const spinner = function() {
  const lst = ['|', '/','-','|','/','-','|'];
  let delay = 100;
  for (let i = 0; i < lst.length; i++) {
    setTimeout(() => {
      if (i === lst.length - 1) {
        process.stdout.write(`\r${lst[i]}`);
        console.log('\n');
      } else {
        process.stdout.write(`\r${lst[i]}`);
      }
    }, delay);
    delay += 200;
  }
};

spinner();

// ... fill in the rest yourself ...