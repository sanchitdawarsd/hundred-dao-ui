export const gaugeControllerABI = [
  {
    name: 'CommitOwnership',
    inputs: [{ name: 'admin', type: 'address', indexed: false }],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'ApplyOwnership',
    inputs: [{ name: 'admin', type: 'address', indexed: false }],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'AddType',
    inputs: [
      { name: 'name', type: 'string', indexed: false },
      { name: 'type_id', type: 'int128', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'NewTypeWeight',
    inputs: [
      { name: 'type_id', type: 'int128', indexed: false },
      { name: 'time', type: 'uint256', indexed: false },
      { name: 'weight', type: 'uint256', indexed: false },
      { name: 'total_weight', type: 'uint256', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'NewGaugeWeight',
    inputs: [
      { name: 'gauge_address', type: 'address', indexed: false },
      { name: 'time', type: 'uint256', indexed: false },
      { name: 'weight', type: 'uint256', indexed: false },
      { name: 'total_weight', type: 'uint256', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'VoteForGauge',
    inputs: [
      { name: 'time', type: 'uint256', indexed: false },
      { name: 'user', type: 'address', indexed: false },
      { name: 'gauge_addr', type: 'address', indexed: false },
      { name: 'weight', type: 'uint256', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'NewGauge',
    inputs: [
      { name: 'addr', type: 'address', indexed: false },
      { name: 'gauge_type', type: 'int128', indexed: false },
      { name: 'weight', type: 'uint256', indexed: false },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_token', type: 'address' },
      { name: '_voting_escrow', type: 'address' },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'commit_transfer_ownership',
    inputs: [{ name: 'addr', type: 'address' }],
    outputs: [],
    gas: 38895,
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'apply_transfer_ownership',
    inputs: [],
    outputs: [],
    gas: 41034,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'gauge_types',
    inputs: [{ name: '_addr', type: 'address' }],
    outputs: [{ name: '', type: 'int128' }],
    gas: 3014,
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'add_gauge',
    inputs: [
      { name: 'addr', type: 'address' },
      { name: 'gauge_type', type: 'int128' },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'add_gauge',
    inputs: [
      { name: 'addr', type: 'address' },
      { name: 'gauge_type', type: 'int128' },
      { name: 'weight', type: 'uint256' },
    ],
    outputs: [],
  },
  { stateMutability: 'nonpayable', type: 'function', name: 'checkpoint', inputs: [], outputs: [], gas: 18295064817 },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'checkpoint_gauge',
    inputs: [{ name: 'addr', type: 'address' }],
    outputs: [],
    gas: 18349612985,
  },
//   {
//     stateMutability: 'view',
//     type: 'function',
//     name: 'gauge_relative_weight',
//     inputs: [{ name: 'addr', type: 'address' }],
//     outputs: [{ name: '', type: 'uint256' }],
//   },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'gauge_relative_weight',
    inputs: [
      { name: 'addr', type: 'address' },
      { name: 'time', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'gauge_relative_weight_write',
    inputs: [{ name: 'addr', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'gauge_relative_weight_write',
    inputs: [
      { name: 'addr', type: 'address' },
      { name: 'time', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'add_type',
    inputs: [{ name: '_name', type: 'string' }],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'add_type',
    inputs: [
      { name: '_name', type: 'string' },
      { name: 'weight', type: 'uint256' },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'change_type_weight',
    inputs: [
      { name: 'type_id', type: 'int128' },
      { name: 'weight', type: 'uint256' },
    ],
    outputs: [],
    gas: 36770184806,
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'change_gauge_weight',
    inputs: [
      { name: 'addr', type: 'address' },
      { name: 'weight', type: 'uint256' },
    ],
    outputs: [],
    gas: 36879354313,
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'vote_for_gauge_weights',
    inputs: [
      { name: '_gauge_addr', type: 'address' },
      { name: '_user_weight', type: 'uint256' },
    ],
    outputs: [],
    gas: 18404662719,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_gauge_weight',
    inputs: [{ name: 'addr', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 5362,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_type_weight',
    inputs: [{ name: 'type_id', type: 'int128' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 5395,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_total_weight',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 5020,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_weights_sum_per_type',
    inputs: [{ name: 'type_id', type: 'int128' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 5527,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'admin',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 2868,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'future_admin',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 2898,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'token',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 2928,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'voting_escrow',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    gas: 2958,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'n_gauge_types',
    inputs: [],
    outputs: [{ name: '', type: 'int128' }],
    gas: 2988,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'n_gauges',
    inputs: [],
    outputs: [{ name: '', type: 'int128' }],
    gas: 3018,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'gauge_type_names',
    inputs: [{ name: 'arg0', type: 'int128' }],
    outputs: [{ name: '', type: 'string' }],
    gas: 13646,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'gauges',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'address' }],
    gas: 3187,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'vote_user_slopes',
    inputs: [
      { name: 'arg0', type: 'address' },
      { name: 'arg1', type: 'address' },
    ],
    outputs: [
      { name: 'slope', type: 'uint256' },
      { name: 'power', type: 'uint256' },
      { name: 'end', type: 'uint256' },
    ],
    gas: 8354,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'vote_user_power',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3353,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'last_user_vote',
    inputs: [
      { name: 'arg0', type: 'address' },
      { name: 'arg1', type: 'address' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3598,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'points_weight',
    inputs: [
      { name: 'arg0', type: 'address' },
      { name: 'arg1', type: 'uint256' },
    ],
    outputs: [
      { name: 'bias', type: 'uint256' },
      { name: 'slope', type: 'uint256' },
    ],
    gas: 6062,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'time_weight',
    inputs: [{ name: 'arg0', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3443,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'points_sum',
    inputs: [
      { name: 'arg0', type: 'int128' },
      { name: 'arg1', type: 'uint256' },
    ],
    outputs: [
      { name: 'bias', type: 'uint256' },
      { name: 'slope', type: 'uint256' },
    ],
    gas: 6203,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'time_sum',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3397,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'points_total',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3433,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'time_total',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3348,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'points_type_weight',
    inputs: [
      { name: 'arg0', type: 'int128' },
      { name: 'arg1', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3789,
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'time_type_weight',
    inputs: [{ name: 'arg0', type: 'uint256' }],
    outputs: [{ name: '', type: 'uint256' }],
    gas: 3517,
  },
];

export const gaugeControllerV2ABI = [
  {
    "name": "CommitOwnership",
    "inputs": [
      {
        "name": "admin",
        "type": "address",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "ApplyOwnership",
    "inputs": [
      {
        "name": "admin",
        "type": "address",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "AddType",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "indexed": false
      },
      {
        "name": "type_id",
        "type": "int128",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "NewTypeWeight",
    "inputs": [
      {
        "name": "type_id",
        "type": "int128",
        "indexed": false
      },
      {
        "name": "time",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "weight",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "total_weight",
        "type": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "NewGaugeWeight",
    "inputs": [
      {
        "name": "gauge_address",
        "type": "address",
        "indexed": false
      },
      {
        "name": "time",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "weight",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "total_weight",
        "type": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "VoteForGauge",
    "inputs": [
      {
        "name": "time",
        "type": "uint256",
        "indexed": false
      },
      {
        "name": "user",
        "type": "address",
        "indexed": false
      },
      {
        "name": "gauge_addr",
        "type": "address",
        "indexed": false
      },
      {
        "name": "weight",
        "type": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "NewGauge",
    "inputs": [
      {
        "name": "addr",
        "type": "address",
        "indexed": false
      },
      {
        "name": "gauge_type",
        "type": "int128",
        "indexed": false
      },
      {
        "name": "weight",
        "type": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "stateMutability": "nonpayable",
    "type": "constructor",
    "inputs": [
      {
        "name": "_token",
        "type": "address"
      },
      {
        "name": "_voting_escrow",
        "type": "address"
      }
    ],
    "outputs": []
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "commit_transfer_ownership",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "outputs": [],
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "apply_transfer_ownership",
    "inputs": [],
    "outputs": [],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "gauge_types",
    "inputs": [
      {
        "name": "_addr",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int128"
      }
    ],
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "add_gauge",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "gauge_type",
        "type": "int128"
      }
    ],
    "outputs": []
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "add_gauge",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "gauge_type",
        "type": "int128"
      },
      {
        "name": "weight",
        "type": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "checkpoint",
    "inputs": [],
    "outputs": [],
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "checkpoint_gauge",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "outputs": [],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "gauge_relative_weight",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ]
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "gauge_relative_weight",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ]
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "gauge_relative_weight_write",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ]
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "gauge_relative_weight_write",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ]
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "add_type",
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "outputs": []
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "add_type",
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "weight",
        "type": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "change_type_weight",
    "inputs": [
      {
        "name": "type_id",
        "type": "int128"
      },
      {
        "name": "weight",
        "type": "uint256"
      }
    ],
    "outputs": [],
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "change_gauge_weight",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "weight",
        "type": "uint256"
      }
    ],
    "outputs": [],
  },
  {
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "vote_for_gauge_weights",
    "inputs": [
      {
        "name": "_gauge_addr",
        "type": "address"
      },
      {
        "name": "_user_weight",
        "type": "uint256"
      }
    ],
    "outputs": [],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "user_vote_power",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "vote_user_power_for_gauge",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "gauge",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "get_gauge_weight",
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "get_type_weight",
    "inputs": [
      {
        "name": "type_id",
        "type": "int128"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "get_total_weight",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "get_weights_sum_per_type",
    "inputs": [
      {
        "name": "type_id",
        "type": "int128"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "admin",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "future_admin",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "token",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "voting_escrow",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "n_gauge_types",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "int128"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "n_gauges",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "int128"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "gauge_type_names",
    "inputs": [
      {
        "name": "arg0",
        "type": "int128"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "gauges",
    "inputs": [
      {
        "name": "arg0",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "vote_user_slopes",
    "inputs": [
      {
        "name": "arg0",
        "type": "address"
      },
      {
        "name": "arg1",
        "type": "address"
      },
      {
        "name": "arg2",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "slope",
        "type": "uint256"
      },
      {
        "name": "power",
        "type": "uint256"
      },
      {
        "name": "end",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "vote_user_power",
    "inputs": [
      {
        "name": "arg0",
        "type": "address"
      },
      {
        "name": "arg1",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "last_user_vote",
    "inputs": [
      {
        "name": "arg0",
        "type": "address"
      },
      {
        "name": "arg1",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "points_weight",
    "inputs": [
      {
        "name": "arg0",
        "type": "address"
      },
      {
        "name": "arg1",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "bias",
        "type": "uint256"
      },
      {
        "name": "slope",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "time_weight",
    "inputs": [
      {
        "name": "arg0",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "points_sum",
    "inputs": [
      {
        "name": "arg0",
        "type": "int128"
      },
      {
        "name": "arg1",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "bias",
        "type": "uint256"
      },
      {
        "name": "slope",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "time_sum",
    "inputs": [
      {
        "name": "arg0",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "points_total",
    "inputs": [
      {
        "name": "arg0",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "time_total",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "points_type_weight",
    "inputs": [
      {
        "name": "arg0",
        "type": "int128"
      },
      {
        "name": "arg1",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  },
  {
    "stateMutability": "view",
    "type": "function",
    "name": "time_type_weight",
    "inputs": [
      {
        "name": "arg0",
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
  }
];