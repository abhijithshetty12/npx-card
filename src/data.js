const chalk = require('chalk');

const primary = chalk.hex('#6366F1');
const secondary = chalk.hex('#EC4899');
const accent = chalk.hex('#10B981');
const muted = chalk.hex('#6B7280');

const header = `${primary.bold('Abhijith Mahesh Shetty')}`;
const title = secondary('Full Stack Developer & Software Engineer');

const createLink = (text, url) => `\u001B]8;;${url}\u001B\\${text}\u001B]8;;\u001B\\`;

const details = [
  `${chalk.bold('📷 Instagram:')}  ${createLink(`${muted('instagram.com/')}${chalk.hex('#E4405F')('trulyabhijith')}`, 'https://instagram.com/trulyabhijith')}`,
  `${chalk.bold('💻 GitHub:   ')}  ${createLink(`${muted('github.com/')}${chalk.white.bold('abhijithshetty12')}`, 'https://github.com/abhijithshetty12')}`,
  `${chalk.bold('💼 LinkedIn: ')}  ${createLink(`${muted('linkedin.com/in/')}${chalk.hex('#0A66C2')('abhijithshetty12')}`, 'https://linkedin.com/in/abhijithshetty12')}`,
  `${chalk.bold('🌐 Website:  ')}  ${createLink(chalk.hex('#3B82F6').underline('abhijithshetty.vercel.app'), 'https://abhijithshetty.vercel.app')}`,
  `${chalk.bold('📧 Email:    ')}  ${createLink(chalk.hex('#F59E0B')('abhijithshetty2006@gmail.com'), 'https://mail.google.com/mail/?view=cm&fs=1&to=abhijithshetty2006@gmail.com')}`,
  `${chalk.bold('🎴 Card:     ')}  ${primary('npx')} ${chalk.bold('abhijithshetty')}`
].join('\n');

const footer = accent.italic('✨ Open to opportunities & collaborations!');

module.exports = {
  header,
  title,
  details,
  footer,
  primary,
  secondary,
  accent,
  createLink
};
