import {History} from 'history';
import { match } from 'react-router';
import { NotificationsApi, PopupApi, NavigationApi } from './components';

export interface AppContext {
    router: {
        history: History;
        route: {
            location: Location;
            match: match<any>;
        };
    };
    apis: {
        popup: PopupApi;
        notifications: NotificationsApi;
        navigation: NavigationApi;
        history: History;
        baseHref: string;
    };
}
