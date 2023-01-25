import { Characteres } from "../models/characteres.model";

export const CHARACTERES: Characteres[] = [
  {
    id: 1,
    name: 'Crash Bandicoot',
    description: 'The main protagonist of the Crash Bandicoot series, Crash is a spunky and adventurous bandicoot who must save the world from the evil Dr. Neo Cortex.',
    ptDeVie: 100,
    degats: 10,
    image: '//upload.wikimedia.org/wikipedia/en/thumb/a/a3/IAT_Crash_Bandicoot.png/220px-IAT_Crash_Bandicoot.png',
    abilities: ['spin attack', 'jump', 'crouch'],
    created: new Date()
  },
  {
    id: 2,
    name: 'Dr. Neo Cortex',
    description: 'The main antagonist of the Crash Bandicoot series, Dr. Neo Cortex is a brilliant but insane scientist who seeks to take over the world.',
    ptDeVie: 100,
    degats: 10,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae449238-46c7-46f8-93ae-e27c004c6e1e/ddp5dg6-764b9a96-6879-423e-86d3-c58c75d566b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlNDQ5MjM4LTQ2YzctNDZmOC05M2FlLWUyN2MwMDRjNmUxZVwvZGRwNWRnNi03NjRiOWE5Ni02ODc5LTQyM2UtODZkMy1jNThjNzVkNTY2YjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0IIC671VHMJ4BuATq2ed7ERNYejOPaUiSATIeoJcm5Y',
    abilities: ['genius intellect', 'control over mutants'],
    created: new Date()
  },
  {
    id: 3,
    name: 'Coco Bandicoot',
    description: 'Coco is Crash little sister and a supporting character in the Crash Bandicoot series. She is a genius inventor and helps Crash in his adventures.',
    ptDeVie: 100,
    degats: 10,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae449238-46c7-46f8-93ae-e27c004c6e1e/ddsf5zh-2a908c37-b650-4488-bed3-c4e33505f7b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlNDQ5MjM4LTQ2YzctNDZmOC05M2FlLWUyN2MwMDRjNmUxZVwvZGRzZjV6aC0yYTkwOGMzNy1iNjUwLTQ0ODgtYmVkMy1jNGUzMzUwNWY3YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aQgHuxw3YnYOHkG9J0fJ4SXpMHUaO-1NS55KyhEY8wc',
    abilities: ['hacking', 'shooting', 'platforming'],
    created: new Date()
  },
  {
    id: 4,
    name: 'Aku Aku',
    description: 'A powerful spirit and ally of Crash, Aku Aku provides guidance and protection to Crash on his journey.',
    ptDeVie: 100,
    degats: 10,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c592edf5-c11e-449c-8aa5-84cf1c6d9082/d9m5up1-cdd0c374-42ec-4879-8d46-a260c8c42108.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1OTJlZGY1LWMxMWUtNDQ5Yy04YWE1LTg0Y2YxYzZkOTA4MlwvZDltNXVwMS1jZGQwYzM3NC00MmVjLTQ4NzktOGQ0Ni1hMjYwYzhjNDIxMDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XZ2SGuXbmdmg3vjF3MQGfr30WBBi-091t9OPROGTC98',
    abilities: ['protection', 'power-ups'],
    created: new Date()
  },
  {
    id: 5,
    name: 'Tawna',
    description: 'A former love interest of Crash, Tawna is a tough and determined bandicoot who joins Crash on his journey to save the world.',
    ptDeVie: 100,
    degats: 10,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae449238-46c7-46f8-93ae-e27c004c6e1e/de6ufel-e45a6992-b070-4c39-b25d-bd2a91cf800f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlNDQ5MjM4LTQ2YzctNDZmOC05M2FlLWUyN2MwMDRjNmUxZVwvZGU2dWZlbC1lNDVhNjk5Mi1iMDcwLTRjMzktYjI1ZC1iZDJhOTFjZjgwMGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BAglL_hgvWdlTwqKXCzv9O3vCiwHVAwqE_7BRsfzh2s',
    abilities: ['agility', 'courage'],
    created: new Date()
  },
];
