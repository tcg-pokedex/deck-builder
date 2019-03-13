export function expandCards(cards) {
  return cards.reduce((lst, card) => {
    for (let i = 0; i < card.quantity; i++) {
      lst.push({
        id: card.id,
        quantity: card.quantiy,
        key: `${card.id}-${-i}`,
      });
    }
    return lst;
  }, []);
}

export function cardsToJson(cards) {
  return JSON.stringify(cards, null, 2);
}

export function imageURL(card) {
  return `https://pkmncards.com/lackey/cards/${card.id}.jpg`;
}
