import { useRecoilState } from 'recoil';
import routingAtom from '../atoms/routing';

function useRedirectTo(navigation, location) {
    const [_, setCurrentRoute] = useRecoilState(routingAtom);
    setCurrentRoute(location);

    return navigation.navigate(location);
}

export default useRedirectTo