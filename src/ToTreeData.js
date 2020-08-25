function toTreeData(rows, key = 'role_id', childKey = 'items', dataMapCallable = null)
{
    var rootId = 0;
    var data   = {0 : { [childKey]: [] } };

    rows.forEach(function (row) {

        if (!data[row[key]]) {
            data[row[key]] = { [childKey]: [] };
        }
        data[row[key]] = dataMapCallable(row, data[row[key]]);

        data[row['parent']][childKey].push(data[row[key]]);
    })

    return data;
}


var data = [
  {role_id:1, name: 'admin', parent: 0},
  {role_id:2, name: 'm1', parent: 1},
  {role_id:3, name: 'm2', parent: 1},
  {role_id:4, name: 'G', parent: 0},
];

toTreeData(data, 'role_id', 'items', (row, data) => { return {...row, ...data}; })

/*
{
    "0": {
        "items": [
            {
                "role_id": 1,
                "name": "admin",
                "parent": 0,
                "items": [
                    {
                        "role_id": 2,
                        "name": "m1",
                        "parent": 1,
                        "items": []
                    },
                    {
                        "role_id": 3,
                        "name": "m2",
                        "parent": 1,
                        "items": []
                    }
                ]
            },
            {
                "role_id": 4,
                "name": "G",
                "parent": 0,
                "items": []
            }
        ]
    },
    "1": {
        "role_id": 1,
        "name": "admin",
        "parent": 0,
        "items": [
            {
                "role_id": 2,
                "name": "m1",
                "parent": 1,
                "items": []
            },
            {
                "role_id": 3,
                "name": "m2",
                "parent": 1,
                "items": []
            }
        ]
    },
    "2": {
        "role_id": 2,
        "name": "m1",
        "parent": 1,
        "items": []
    },
    "3": {
        "role_id": 3,
        "name": "m2",
        "parent": 1,
        "items": []
    },
    "4": {
        "role_id": 4,
        "name": "G",
        "parent": 0,
        "items": []
    }
}
*/