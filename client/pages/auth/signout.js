import { useEffect } from "react";
import Router from 'next/router';
import useRequest from "../../hooks/use-request";

const Signout = () => {
    const { doRequest } = useRequest({
        url: '/api/users/signout', // Added leading slash for the URL
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/')
    });

    useEffect(() => {
        doRequest();
    }, [doRequest]); // Added doRequest as a dependency for good practice

    return <div>Signing you out...</div>;
}

export default Signout;
