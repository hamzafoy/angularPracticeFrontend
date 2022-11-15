export class WidgetService {
    getTools(): string[] {
        return ["Angular", ".NET", "SQL"];
    }
    getWidgets() {
        return [
            {
                name: "First Widget",
                rating: 4,
                description: "Lorem ipsum. . ."
            },
            {
                name: "Second Widget",
                rating: 2,
                description: "Lorem ipsum. . ."
            },
            {
                name: "Third Widget",
                rating: 5,
                description: "Lorem ipsum. . ."
            }
        ]
    }
}