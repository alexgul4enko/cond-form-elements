const federations = require('test-react-scripts-cond/federations')

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = federations({
  exposes: {
    './TextInput': './src/app/components/textInput',
  },
})
