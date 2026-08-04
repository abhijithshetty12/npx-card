'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const { primary, secondary, accent } = require('./data');
const { createLink } = require('./data');

function displayCard() {
  const badge = chalk.bgHex('#6366F1').white.bold(' SOFTWARE ENGINEER ');
  const name = chalk.white.bold('Abhijith Mahesh Shetty');
  const tag = chalk.gray('@abhijithshetty');

  const profileHeader = `${badge}\n\n${name} ${tag}\n${secondary('Building web experiences & open-source tools')}`;

  const instagramLink = createLink(
    `${chalk.gray('instagram.com/')} ${chalk.hex('#E4405F').bold('trulyabhijith')}`,
    'https://instagram.com/trulyabhijith'
  );
  const githubLink = createLink(
    `${chalk.gray('github.com/')} ${chalk.white.bold('abhijithshetty12')}`,
    'https://github.com/abhijithshetty12'
  );
  const linkedinLink = createLink(
    `${chalk.gray('linkedin.com/in/')} ${chalk.hex('#0A66C2').bold('abhijithshetty12')}`,
    'https://linkedin.com/in/abhijithshetty12'
  );
  const websiteLink = createLink(
    chalk.hex('#3B82F6').underline.bold('https://abhijithshetty.vercel.app'),
    'https://abhijithshetty.vercel.app'
  );
  const emailLink = createLink(
    chalk.hex('#F59E0B').bold('abhijithshetty2006@gmail.com'),
    'mailto:abhijithshetty2006@gmail.com'
  );

  const details = [
    `${chalk.bold('📷 Instagram:')}  ${instagramLink}`,
    `${chalk.bold('💻 GitHub:   ')}  ${githubLink}`,
    `${chalk.bold('💼 LinkedIn: ')}  ${linkedinLink}`,
    `${chalk.bold('🌐 Website:  ')}  ${websiteLink}`,
    `${chalk.bold('📧 Email:    ')}  ${emailLink}`,
    `${chalk.bold('🎴 Card:     ')}  ${primary('npx')} ${chalk.bold('abhijithshetty')}`
  ].join('\n');

  const cardContent = [
    profileHeader,
    '',
    chalk.hex('#374151')('─────────────── Connect & Contact ───────────────'),
    '',
    details,
    '',
    accent.italic('✨ Open to opportunities & collaborations!')
  ].join('\n');

  const card = boxen(cardContent, {
    padding: { top: 1, bottom: 1, left: 3, right: 3 },
    margin: { top: 1, bottom: 1, left: 1, right: 1 },
    borderStyle: 'round',
    borderColor: '#6366F1',
    float: 'left'
  });

  console.log(card);
  console.log(`  ${chalk.yellow('💡 Tip:')} Hold ${chalk.bold('Cmd/Ctrl')} and click on any link above.\n`);
}

module.exports = { displayCard };