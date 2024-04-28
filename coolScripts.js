function getValue(paramName, paramsArray) {
    if (paramName === "#") {
        const hashParam = paramsArray.find(param => param.startsWith("#"));
        if (hashParam) {
            return hashParam.substring(1); // Remove the "#" character
        }
    } else {
        const param = paramsArray.find(param => param.startsWith(`${paramName}=`));
        if (param) {
            return param.split('=')[1];
        }
    }
    return null;
}