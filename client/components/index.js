/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navibar} from './navibar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllMugs} from './all-mugs'
export {default as SingleMug} from './single-mug'
export {default as Cart} from './cart'
export {default as Checkout} from './checkout'
export {default as Mug} from './mug'
