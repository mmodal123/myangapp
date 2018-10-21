import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {

        const bookDetails = [
            {id: 100, name: 'Angular by Sahosoft', category: 'Angular' },
            {id: 101, name: 'Core.Net by Sahosoft', category: 'Core.Net' },
            {id: 102, name: 'Java by Sahosoft', category: 'Java' },
            {id: 103, name: 'Hibernate by Sahosoft', category: 'Hibernate' },
        ];

        return {books: bookDetails};

    }

}
