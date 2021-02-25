const federations = require('test-react-scripts-cond/federations')

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = federations({
  name: 'condFormElements',
  remotes: {
    condRootMf: 'condRootMf@http://localhost:3001/remoteEntry.js',
    condAuthPages: 'condAuthPages@http://localhost:3002/remoteEntry.js',
    condLayouts: 'condLayouts@http://localhost:3003/remoteEntry.js',
  },
  exposes: {
    './TextInput': './src/app/components/textInput',
  },
})
