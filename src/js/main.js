import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { prepareAutoGenButton } from './autogen'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'

prepareAutoGenButton()
warnFacebookBrowserUserIfNecessary()
createForm()
prepareForm()
addVersion(process.env.VERSION)
