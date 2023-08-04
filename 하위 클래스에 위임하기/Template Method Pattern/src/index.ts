import { Player } from "./Player";
import { AdvancedLevel } from "./AdvancedLevel";
import { SuperLevel } from "./SuperLevel";

const player = new Player();
player.play(1);

const aLevel = new AdvancedLevel();
player.upgradeLevel(aLevel);
player.play(2);

const sLevel = new SuperLevel();
player.upgradeLevel(sLevel);
player.play(3);
