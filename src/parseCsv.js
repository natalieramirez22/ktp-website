import Papa from 'papaparse';

export const parseCsv = (file, callback) => {
    Papa.parse(file, {
        header: true,
        download: true,
        complete: (results) => {
            callback(results.data);
        },
    });
};
