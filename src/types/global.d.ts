declare namespace GqlApp {
    namespace models {
        interface Book {
            id: number;
            name: string;
            genre: string;
            authorId: number;
        }

        interface Author {
            id: number;
            name: string;
            age: number;
        }
    }
}
