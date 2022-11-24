"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameResult = void 0;
var matrici = new Array();
matrici[0] = new Array();
matrici[1] = new Array();
matrici[2] = new Array();
// regole
// vino : 0
// birra: 1
// martini: 2
// birra win martini | martini win wine | wine win beer 

matrici[0][0] = {
  userLabel: "Hai scelto il vino",
  cpuLabel: "CPU ha scelto il vino",
  label: "Pareggio",
  won: false,
  losses: false
};
matrici[0][1] = {
  userLabel: "Hai scelto il vino",
  cpuLabel: "CPU ha scelto la birra",
  label: "Hai vinto",
  won: true,
  losses: false
};
matrici[0][2] = {
  userLabel: "Hai scelto il vino",
  cpuLabel: "CPU ha scelto il martini",
  label: "Hai perso",
  won: false,
  losses: true
};
matrici[1][0] = {
  userLabel: "Hai scelto la birra",
  cpuLabel: "CPU ha scelto il vino",
  label: "Hai perso",
  won: false,
  losses: true
};
matrici[1][1] = {
  userLabel: "Hai scelto la birra",
  cpuLabel: "CPU Ha scelto la birra",
  label: "Pareggio",
  won: false,
  losses: false
};
matrici[1][2] = {
  userLabel: "Hai scelto la birra",
  cpuLabel: "CPU ha scelto il martini",
  label: "Hai vinto",
  won: true,
  losses: false
};
matrici[2][0] = {
  userLabel: "Hai scelto il martini",
  cpuLabel: "CPU ha scelto il vino",
  label: "Hai vinto",
  won: true,
  losses: false
};
matrici[2][1] = {
  userLabel: "Hai scelto il martini",
  cpuLabel: "CPU ha scelto la birra",
  label: "Hai perso",
  won: false,
  losses: true
};
matrici[2][2] = {
  userLabel: "Hai scelto il martini",
  cpuLabel: "CPU ha scelto il martini",
  label: "Pareggio",
  won: false,
  losses: false
};
var GameResult = function GameResult(userChoice, cpuChoice) {
  return matrici[userChoice][cpuChoice];
};
exports.GameResult = GameResult;