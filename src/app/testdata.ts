import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        const bookDetails = [
            {id: 100, name: 'Angular by Sahosoft', category: 'Angular'},
            {id: 101, name: 'DotNet by Sahosoft', category: 'DotNet'},
            {id: 102, name: 'Java by Sahosoft', category: 'Java'},
        ];
        return {books: bookDetails};
    }
}
