"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameResult = void 0;
var matrici = new Array();
matrici[0] = new Array();
matrici[1] = new Array();
matrici[2] = new Array();
matrici[0][0] = {
  userLabel: "ha scelto carta",
  cpuLabel: "CPU ha scelto carta",
  label: "Pareggio",
  won: false,
  losses: false
};
matrici[0][1] = {
  userLabel: "ha scelto carta",
  cpuLabel: "CPU ha scelto forbice",
  label: "Hai perso",
  won: false,
  losses: true
};
matrici[0][2] = {
  userLabel: "ha scelto carta",
  cpuLabel: "CPU ha scelto sasso",
  label: "Hai vinto",
  won: true,
  losses: false
};
matrici[1][0] = {
  userLabel: "ha scelto forbice",
  cpuLabel: "CPU ha scelto carta",
  label: "Hai vinto",
  won: true,
  losses: false
};
matrici[1][1] = {
  userLabel: "ha scelto forbice",
  cpuLabel: "CPU ha scelto forbice",
  label: "Pareggio",
  won: false,
  losses: false
};
matrici[1][2] = {
  userLabel: "ha scelto forbice",
  cpuLabel: "CPU ha scelto sasso",
  label: "Hai perso",
  won: false,
  losses: true
};
matrici[2][0] = {
  userLabel: "ha scelto sasso",
  cpuLabel: "CPU ha scelto carta",
  label: "Hai perso",
  won: false,
  losses: true
};
matrici[2][1] = {
  userLabel: "ha scelto sasso",
  cpuLabel: "CPU ha scelto forbice",
  label: "Hai vinto",
  won: true,
  losses: false
};
matrici[2][2] = {
  userLabel: "ha scelto sasso",
  cpuLabel: "CPU ha scelto sasso",
  label: "Pareggio",
  won: false,
  losses: false
};
var GameResult = function GameResult(userChoice, cpuChoice) {
  return matrici[userChoice][cpuChoice];
};
exports.GameResult = GameResult;