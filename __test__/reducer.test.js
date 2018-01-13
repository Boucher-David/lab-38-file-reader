import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';
import raf from '../client/lib/tempPolyfills';

import reducer from '../client/reducers/auth-reducer';


Enzyme.configure({ adapter: new Adapter() });

let initialState = {
    loggedIn: false
}

test('Test that init will make loggedIn false because there is no cookie exists', () => {
    let action = {type: 'INIT', payload: false};
    let state = reducer(initialState, action);

    expect(state.loggedIn).toEqual(false);
});

test('Test that if we pass true in, loggedIn will change to true', () => {
    let action = {type: 'INIT', payload: true};
    let state = reducer(initialState, action);

    expect(state.loggedIn).toEqual(true);
});

test('Test that calling SIGNOUT action will change loggedIn to false', () => {


    let inititalState = {
        loggedIn: true
    }

    let action = {type: 'SIGNOUT', payload: null}
    let state = reducer(initialState, action);

    expect(state.loggedIn).toEqual(false);
});

test('Test that signin gets an authenticated payload and changes loggedIn accordingly', () => {
    let initialState = {
        loggedIn: false
    };

    let action = {type: 'SIGNIN', payload: {
        authenticated: true,
        message: "Signed in successfully"
    }};

    let state = reducer(initialState, action);

    // authenticated true makes loggedIn true
    expect(state.loggedIn).toEqual(action.payload.authenticated);

});

// signup just changes state.message to something. Hardly worth testing.
// tests below are for 38

test('test that updating password logs user out', () => {
    let initialState = {
        loggedIn: true
    };
    let action = {
        type: 'UPDATE',
        payload: {
            message: "Account updated",
            authenticated: false
        }
    };

    let state = reducer(initialState, action);
    expect(state.loggedIn).toEqual(!action.payload.authenticated);
})