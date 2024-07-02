import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { rootReducer } from '../redux';

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = configureStore({
            reducer: rootReducer,
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
