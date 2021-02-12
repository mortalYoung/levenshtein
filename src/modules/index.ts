const levenshetein = (s: string, t: string, config) => {
    if (s === t) {
        return 0;
    }
    // Step 1.
    const n = s.length;
    const m = t.length;
    if (n === 0) {
        return m;
    }
    if (m === 0) {
        return n;
    }

    // Step 2.
    const matrix: Array<Array<number>> = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

    for (let i = 0; i < matrix.length; i++) {
        const rows = matrix[i];
        for (let j = 0; j < rows.length; j++) {
            if (i === 0 && j === 0) {
                matrix[i][j] = 0;
            } else if (j === 0) {
                // Step 3.
                matrix[i][j] = i;
            } else if (i === 0) {
                // Step 4.
                matrix[i][j] = j;
            } else {
                // Step 5.
                const cost = s[i - 1] === t[j - 1] ? 0 : 1;
                // Step 6.
                const value = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
                matrix[i][j] = value;
            }
        }
    }
    // Step 7.
    return matrix[m][n];
}

export default levenshetein;