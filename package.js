Package.describe({
  name: 'alonoslav:jquery-single-page-nav',
  version: '1.0.0',
  summary: 'Meteor wrapper for https://github.com/ChrisWojcik/single-page-nav.git',
  git: 'https://github.com/vadym-vorobel/jquery-single-page-nav.git',
  documentation: 'README.md',
});


Package.onUse((api) => {
  api.versionsFrom('1.3');

  api.use(['ecmascript', 'jquery'], 'client');

  api.mainModule('jquery-single-page-nav.js', 'client');
});
