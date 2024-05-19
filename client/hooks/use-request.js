import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async (additionalBody = {}) => {
        try {
            setErrors(null);
            const response = await axios[method](url, { ...body, ...additionalBody });
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err) {
            const errorResponse = err.response && err.response.data && err.response.data.errors;
            if (errorResponse) {
                setErrors(
                    <div className="alert alert-danger">
                        <h4>Ooops....</h4>
                        <ul className="my-0">
                            {errorResponse.map((error) => (
                                <li key={error.message}>{error.message}</li>
                            ))}
                        </ul>
                    </div>
                );
            } else {
                setErrors(
                    <div className="alert alert-danger">
                        <h4>Ooops....</h4>
                        <p>Something went wrong.</p>
                    </div>
                );
            }
        }
    };

    return { doRequest, errors };
};

export default useRequest;
