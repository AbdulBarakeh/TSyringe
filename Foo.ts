import "reflect-metadata";
import {Database} from "./Database.js"
import {Bar} from "./Bar.js"
import pkg from 'tsyringe';
const { injectable } = pkg;

@injectable()
export class Foo {
    _bar: Bar
    _database: Database
  constructor(private bar: Bar, private Database: Database) {
      this._bar = bar
      this._database = Database
  }
    runEverything(){
        this._bar.test()
        this._database.test()
    }
}