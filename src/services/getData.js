export class appService {
    static getData() {
        return fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11', {
            method: 'GET',
        }).then(response => {
            if (response.status !== 200) {
                throw new Error('Error');
            }
            return response.json();
        });
    }
}