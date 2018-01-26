/* an array of events with a type, a value attribute,
and in the case of an attack event a target */
const dragonEvents = [
  { type: 'attack', value: 12, target: 'player-khadgar' },
  { type: 'attack', value: 6, target: 'player-hero' },
  { type: 'yawn', value: 30 },
  { type: 'attack', value: 24, target: 'player-thrall' },
  { type: 'attack', value: 6, target: 'player-khadgar' },
  { type: 'sleep', value: 90 },
  { type: 'attack', value: 6, target: 'player-thrall' },
  { type: 'attack', value: 30, target: 'player-hero' },
];

const totalDamage = dragonEvents
  .filter(e => e.type === 'attack')
  .filter(e => e.target === 'player-hero')
  .map(e => e.value)
  .reduce((prev, value) => (prev || 0) + value);

const attacks = dragonEvents
  .filter( (e) => e.type == 'attack');

attacks.forEach( (e) => console.log(e) );

//console.log('Total Damage:', totalDamage);
