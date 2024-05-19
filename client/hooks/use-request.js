import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body }) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async (additionalBody = {}) => {
        try {
            setErrors(null);
            const response = await axios[method](url, { ...body, ...additionalBody });
            return response.data;
        } catch (err) {
            setErrors(
                <div className="alert alert-danger">
                    <h4>Ooops....</h4>
                    <ul className="my-0">
                        {err.response.data.map((error) => (
                            <li key={error.message}>{error.message}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return { doRequest, errors };
};

export default useRequest;
