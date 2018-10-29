// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverUrl:'/',
  firebase: {
    apiKey: 'AIzaSyCMPRAOrfXnBgEJJNf00j3GydTb2DK3IVs',
    authDomain: 'local-ctk-qd.firebaseapp.com',
    databaseURL: 'https://local-ctk-qd.firebaseio.com',
    projectId: 'local-ctk-qd',
    storageBucket: 'local-ctk-qd.appspot.com',
    messagingSenderId: '776973084993'
  },
  navigationApi: '/assets/data/navigation',
  todoApi: '/assets/data/todo/list.json',
  mailApi: '/assets/data/mail/list.json',
  chatsApi: '/assets/data/chats/list.json',
  analysisApi: '/assets/data/analysis',
  crmApi: '/assets/data/crm',
  tableApi: '/assets/data/table'
};
