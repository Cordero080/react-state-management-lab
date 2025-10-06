// appHandlers.js
// Event handlers and utility functions for App.jsx

export function handleAddSlayer({
  slayer,
  money,
  setMessage,
  setCrew,
  crew,
  setZombieSlayers,
  zombieSlayers,
  setMoney,
  setPopup,
  setPopupType,
}) {
  if (money < slayer.price) {
    setMessage(
      `Out of your league! You need $${slayer.price.toLocaleString()} but only have $${money.toLocaleString()}`
    );
    return;
  }
  setCrew([...crew, slayer]);
  setZombieSlayers(zombieSlayers.filter((s) => s.id !== slayer.id));
  setMoney(money - slayer.price);
  setPopup(`${slayer.alias} added`);
  setPopupType("add");
  setTimeout(() => {
    setPopup("");
    setPopupType("");
  }, 1500);
}

export function handleRemoveSlayer({
  slayer,
  setCrew,
  crew,
  setZombieSlayers,
  zombieSlayers,
  setMoney,
  setPopup,
  setPopupType,
}) {
  setCrew(crew.filter((s) => s.id !== slayer.id));
  setZombieSlayers([...zombieSlayers, slayer]);
  setMoney((money) => money + slayer.price);
  setPopup(`${slayer.alias} removed`);
  setPopupType("remove");
  setTimeout(() => {
    setPopup("");
    setPopupType("");
  }, 1500);
}

export function getTotalStrength(crew) {
  return crew.reduce((sum, slayer) => sum + slayer.strength, 0);
}

export function getTotalAgility(crew) {
  return crew.reduce((sum, slayer) => sum + slayer.agility, 0);
}
