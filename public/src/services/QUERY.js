const QUERY = {
    parse(queryString) {
        const queryProps = {};
        const searchParams = new URLSearchParams(queryString);
        searchParams.forEach((value, key) => {
            queryProps[key] = value;
        });
        return queryProps;
    },
    
    stringify(queryProps) {
        const searchParams = new URLSearchParams();
    
        const keys = Object.keys(queryProps);
        keys.forEach(key => {
            const value = queryProps[key];
            searchParams.set(key, value);
        });
    
        return searchParams.toString();
    }
};

export default QUERY;