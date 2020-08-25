<?php

function toTreeData($rows, $key = 'role_id', $childKey = 'items', callable $dataMapCallable = null)
{
    $rootId = 0;
    $data   = array($rootId => array($childKey => array()));
    foreach ($rows as $row) {
        if (!isset($data[$row[$key]])) {
            $data[$row[$key]] = [];
        }
        $data[$row[$key]] = $dataMapCallable($row, $data[$row[$key]]);

        $data[$row['parent']][$childKey][] = &$data[$row[$key]];
    }

    return $data;
}


$data = [
  [
    'role_id' => 1,
    'name' => 'Admin',
    'parent' => 0
  ],
  [
    'role_id' => 2,
    'name' => 'Member 1',
    'parent' => 1
  ],
  [
    'role_id' => 3,
    'name' => 'Member 2',
    'parent' => 1
  ],
  [
    'role_id' => 4,
    'name' => 'Guest',
    'parent' => 0
  ],
];

$dataMapCallable = function ($row, $data) {
    return $data + array(
        'role_id'   => $row['role_id'],
        'text'      => $row['name'],
        'parent_id' => $row['parent'],
    );
};
$key = 'role_id';
$childKey = 'children';
print_r(toTreeData($data, $key, $childKey, $dataMapCallable)[0][$childKey]);