import { Calzone } from "./Calzone";
import { NyPizza, Size } from "./NyPizza";
import { Topping } from "./Pizza";

const nyPizza = new NyPizza.Builder(Size.SMALL)
  .addTopping(Topping.SAUSAGE)
  .addTopping(Topping.ONION)
  .build();

const calzone = new Calzone.Builder()
  .addTopping(Topping.HAM)
  .addTopping(Topping.PEPPER)
  .sauceInside()
  .build();

console.log(nyPizza);
console.log(calzone);
