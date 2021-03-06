module.exports = towelSort = matrix => {
    if (matrix && matrix.length) {
        return matrix.reduce((acc, item, index) => {
            if (index % 2 !== 0) {
                item.reverse();
            }
            return [...acc, ...item];
        });
    }
    return [];
};
