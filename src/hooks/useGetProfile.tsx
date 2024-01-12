import { useEffect, useState } from "react"

const UseGetProfile = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadAsyncProfile = async () => {
            try {
                const res = await fetch('/profile');
                const json = await res.json();

                setData(json);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoaded(true);
            }
        };
        loadAsyncProfile();
    }, []);

    return { data, error, loaded };
}

export default UseGetProfile;