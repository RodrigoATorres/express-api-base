const toPlainObject = (json) => JSON.parse(JSON.stringify(json));

module.exports = (arr) => {
    const newArr = toPlainObject(arr);
    newArr.map((arrItem, index) => {
        if ("_id" in arrItem) {
            arrItem.id = arrItem._id;
            delete arrItem._id;
        }
        if (Array.isArray(arrItem)) {
            newArr[index] = renameId(arrItem);
        }
    });
    return newArr;
};
