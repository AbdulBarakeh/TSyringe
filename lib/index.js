import "reflect-metadata";
import pkg from 'tsyringe';
const { container } = pkg;
import { Foo } from "./foo.js";
const instance = container.resolve(Foo);
instance.runEverything();
console.log(container); // The Dependencies are mapped in the container
