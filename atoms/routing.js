import { atom } from 'recoil';

const routingAtom = atom({
    key: "activeRoute",
    default: "Home",
});

export default routingAtom;