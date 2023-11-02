export const players = computed(() => {
  const players = playersList.value
    .filter((p) => p.isPicked)
    .map((p) => p.name);
  shuffleArray(totalWonders.value);
  shuffleArray(players);
  const res: any = [];
  for (let id = 0; id < players.length; id++) {
    res.push({
      id,
      name: players[id],
      wonder: totalWonders.value[id],
    });
  }
  return res;
});

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const totalWonders = computed(() => {
  const result = [...wonders.value];
  if (extensions.value.armada.isSelected) result.push("Syracusse");
  if (extensions.value.cities.isSelected) result.push("Petra", "Bizantium");
  if (extensions.value.edifices.isSelected) result.push("Hostens");
  return result;
});

export const wonders = ref([
  "Babylone",
  "Olympia",
  "Gizah",
  "Rhódos",
  "Halikarnassós",
  "Ephesos",
  "Alexandria",
]);

export const extensions = ref({
  armada: {
    name: "Armada",
    isSelected: true,
  },
  cities: {
    name: "Cities",
    isSelected: true,
  },
  edifices: {
    name: "Édifice",
    isSelected: true,
  },
});

export const tableColumns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Nom",
  },
  {
    key: "wonder",
    label: "Merveille",
  },
];

export type Player = {
  id: number;
  name: string;
  isPicked: boolean;
  imgSrc: string;
};

export const playersList = ref<Player[]>([
  {
    id: 0,
    name: "Louis",
    isPicked: false,
    imgSrc: "louis",
  },
  {
    id: 1,
    name: "Jean",
    isPicked: false,
    imgSrc: "jean",
  },
  {
    id: 2,
    name: "Martin",
    isPicked: false,
    imgSrc: "martin",
  },
  {
    id: 3,
    name: "Clotilde",
    isPicked: false,
    imgSrc: "clotilde",
  },
  {
    id: 4,
    name: "Marie",
    isPicked: false,
    imgSrc: "marie",
  },
  {
    id: 5,
    name: "Mélanie",
    isPicked: false,
    imgSrc: "melanie",
  },
  {
    id: 6,
    name: "Thomas",
    isPicked: false,
    imgSrc: "thomas",
  },
  {
    id: 7,
    name: "Benjamin",
    isPicked: false,
    imgSrc: "benjamin",
  },
]);
