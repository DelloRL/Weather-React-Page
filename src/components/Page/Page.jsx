import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Loader from '../Loader';
import Error from '../Error';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = value => {
        console.log({ value });
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {!isLoading && <Form submitSearch={onSubmit} />}
                {isError && <Error message={isError} />}
                {isLoading && <Loader />}
            </div>

            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Page;
