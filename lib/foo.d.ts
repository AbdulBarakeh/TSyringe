import "reflect-metadata";
import { Database } from "./Database.js";
import { Bar } from "./Bar.js";
export declare class Foo {
    private bar;
    private Database;
    _bar: Bar;
    _database: Database;
    constructor(bar: Bar, Database: Database);
    runEverything(): void;
}
