exports.fileTree = [
  { name: 'App', path: '/App', fullPath: './documentation/code/App' },
  { name: 'assets', children: [] },
  { name: 'components', children: [{ name: 'HelloWorld', path: '/HelloWorld', fullPath: 'components/HelloWorld' }] },
  {
    name: 'views',
    children: [
      { name: 'About', path: '/About', fullPath: 'views/About' },
      { name: 'Home', path: '/Home', fullPath: 'views/Home' },
    ],
  },
];
exports.sidebarTree = (title = 'Mainpage') => ({
  '/code/': [
    { title: 'vue-huacloud-template', collapsable: false, children: [['', '' + title + ''], 'App'] },
    { title: 'components', collapsable: false, children: ['components/HelloWorld'] },
    { title: 'views', collapsable: false, children: ['views/About', 'views/Home'] },
  ],
});
