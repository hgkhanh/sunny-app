import { fetchUser } from '..';
import * as types from '../types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const mockStore = configureMockStore([thunk]);

// Moxios helpers to fake success and error
const mockSuccess = (data: any) => ({ status: 200, response: { data } })
const mockError = (error: string) => ({ status: 400, response: error })
describe('actions', () => {
    let store: any;
    // set up a fake store for all our tests
    beforeEach(() => {
        store = mockStore({});
        moxios.install();
    });
    afterEach(() => moxios.uninstall());
    it('should create an action to fetch the logged in user', () => {
        const user = {
            _id: "60142d1662196721fc595cba",
            googleId: "104858891962202193143",
            __v: 7
        }
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess(user));
        })
        return store.dispatch(fetchUser())
            .then(() => expect(store.getActions()).toStrictEqual([{
                type: types.FETCH_USER,
                payload: {
                    data: user
                }
            }])
            );
    });
});