function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=         Blum Airdrop Bot        ='.cyan);
  console.log('=     Created by Wahyu Haxor      ='.cyan);
  console.log('=    https://t.me/wahyuhaxor     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { displayHeader };