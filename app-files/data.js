var APP_DATA = {
  "scenes": [
    {
      "id": "0-popa",
      "name": "Popa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1207828272011433,
        "pitch": 0,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -0.9759319542254019,
          "pitch": 0.011905666316756935,
          "rotation": 0,
          "target": "2-solarium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-solarium-2",
      "name": "Solarium-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5902387956165125,
          "pitch": 0.3129004433754048,
          "rotation": 3.9269908169872414,
          "target": "0-popa"
        },
        {
          "yaw": 0.9202856393337449,
          "pitch": 0.173253026503577,
          "rotation": 9.42477796076938,
          "target": "2-solarium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-solarium",
      "name": "Solarium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0106952634912023,
          "pitch": 0.12826166901193048,
          "rotation": 3.9269908169872414,
          "target": "0-popa"
        },
        {
          "yaw": 0.029476685524405966,
          "pitch": -0.014720894611185642,
          "rotation": 9.42477796076938,
          "target": "1-solarium-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
