// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=staging` then `environment.staging.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  serverUrl:'/',
  firebase: {
    apiKey: 'AIzaSyCJsGUA9XKgUE4MwAMXO_DlkhycoYIshXQ',
    authDomain: 'staging-qd.firebaseapp.com',
    databaseURL: 'https://staging-qd.firebaseio.com',
    projectId: 'staging-qd',
    storageBucket: 'staging-qd.appspot.com',
    messagingSenderId: '460348710639'
  },
  navigationApi: '/assets/data/navigation',
  todoApi: '/assets/data/todo/list.json',
  mailApi: '/assets/data/mail/list.json',
  chatsApi: '/assets/data/chats/list.json',
  analysisApi: '/assets/data/analysis',
  crmApi: '/assets/data/crm',
  tableApi: '/assets/data/table'
};
