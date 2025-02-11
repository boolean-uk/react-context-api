import imgDoge from '../images/doge.jpg'

export interface User {
    profileImage: any,
    name: string,
    handle: string
}

export default {
    profileImage: imgDoge,
    name: 'Doge',
    handle: '@doge'
} as User