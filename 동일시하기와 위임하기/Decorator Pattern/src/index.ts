import { EtiopiaAmericano } from "./EtiopiaAmericano";
import { KenyaAmericano } from "./KenyaAmericano";
import { Latte } from "./Latte";
import { Mocha } from "./Mocha";
import { WhippedCream } from "./WhippedCream";

const kenyaAmericano = new KenyaAmericano();
kenyaAmericano.brewing();
console.log("=====================");

const kenyaLatte = new Latte(kenyaAmericano);
kenyaLatte.brewing();
console.log("=====================");

const kenyaMocha = new Mocha(new Latte(new KenyaAmericano()));
kenyaMocha.brewing();
console.log("=====================");

const etiopiaWhippedMocha = new WhippedCream(new Mocha(new EtiopiaAmericano()));
etiopiaWhippedMocha.brewing();
