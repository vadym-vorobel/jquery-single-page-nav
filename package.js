Package.describe({
  name: 'alonoslav:jquery-single-page-nav',
  version: '0.0.1',
  summary: 'Meteor wrapper for https://github.com/ChrisWojcik/single-page-nav.git',
  git: 'https://github.com/vadym-vorobel/jquery-single-page-nav.git',
  documentation: 'README.md',
});


Package.onUse((api) => {
  api.versionsFrom('1.3');
  api.use('ecmascript');

  api.mainModule('jquery-single-page-nav.js');
});
