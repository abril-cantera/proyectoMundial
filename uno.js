const data = [
  {
    "id": 1,
    "nameGroup": "Grupo A",
    "selection": [
      {
        "id": 2,
        "nameEquipment": "Mexico",
        "image": "http://placeimg.com/640/680",
        "groupId": 1
      },
      {
        "id": 1,
        "nameEquipment": "Argentina",
        "image": "http://placeimg.com/640/680",
        "groupId": 1
      }
    ]
  },
  {
    "id": 2,
    "nameGroup": " Grupo B",
    "selection": [
      {
        "id": 4,
        "nameEquipment": "otro 2",
        "image": "http://placeimg.com/640/680",
        "groupId": 2
      },
      {
        "id": 3,
        "nameEquipment": "otro",
        "image": "http://placeimg.com/640/680",
        "groupId": 2
      }
    ]
  }
]
data.map(item => {
  console.log(item.nameGroup)
  return (item.selection.map(item => {
    console.log(item.nameEquipment)
  }))
});