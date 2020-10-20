export function generateUid() {
    let uidGenerated = '';
    const characters =
      '1A2B3C4D5E6F7G8H9IJKLMxyzNOPQWXYZabcdefghiRSTUVjklmnopqrs0tuvw';
    for (let i = 0; i < 13; i++) {
      uidGenerated += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return uidGenerated;
  }
  