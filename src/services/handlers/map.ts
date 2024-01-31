export function mapToArr(map) {
    const [keys, values, keyValuePairs] = [[], [], []];
    if (map && map.size)
        map.forEach((value, key) => {
            keys.push(key);
            values.push(value);
            keyValuePairs.push({[key]: value});
        });

    return {
        keys,
        values,
        keyValuePairs,
    };
}
