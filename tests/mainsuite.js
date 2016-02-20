TestData = {};

TestData.oldCoords = {
		x: 100,
		y: 100,
	};

TestData.newCoords = {
	"zero": {
		x: TestData.oldCoords.x,
		y: TestData.oldCoords.y,
	},
	NE: {
		x: TestData.oldCoords.x + 300,
		y: TestData.oldCoords.y + 400,
	},
	NW: {
		x: TestData.oldCoords.x - 50,
		y: TestData.oldCoords.y + 200,
	},
	SE: {
		x: TestData.oldCoords.x + 50,
		y: TestData.oldCoords.y - 50,
	},
	SW: {
		x: TestData.oldCoords.x - 50,
		y: TestData.oldCoords.y - 50,
	},
	N: {
		x: TestData.oldCoords.x,
		y: TestData.oldCoords.y + 50,
	},
	S: {
		x: TestData.oldCoords.x,
		y: TestData.oldCoords.y - 50,
	},
	E: {
		x: TestData.oldCoords.x + 50,
		y: TestData.oldCoords.y,
	},
	W: {
		x: TestData.oldCoords.x - 50,
		y: TestData.oldCoords.y,
	},
};

TestData.expectedDistances = {
  "zero": {
    "Total": 0,
    "X": 0,
    "Y": 0
  },
  "NE": {
    "Total": 500,
    "X": -300,
    "Y": -400
  },
  "NW": {
    "Total": 206.15528128088303,
    "X": 50,
    "Y": -200
  },
  "SE": {
    "Total": 70.71067811865476,
    "X": -50,
    "Y": 50
  },
  "SW": {
    "Total": 70.71067811865476,
    "X": 50,
    "Y": 50
  },
  "N": {
    "Total": 50,
    "X": 0,
    "Y": -50
  },
  "S": {
    "Total": 50,
    "X": 0,
    "Y": 50
  },
  "E": {
    "Total": 50,
    "X": -50,
    "Y": 0
  },
  "W": {
    "Total": 50,
    "X": 50,
    "Y": 0
  }
}

QUnit.module( "Main module", {
  beforeEach: function() {
  },
  afterEach: function() {
    // clean up after each test
  }
});

QUnit.test( "test mouse DIRECTION computation", function( assert ) {
	for(var expectedDirection in TestData.newCoords) {
		var thisNewCoords = TestData.newCoords[expectedDirection];

		if(expectedDirection === "zero")
			expectedDirection = null;

		var dirActual = getMouseDirection(TestData.oldCoords, thisNewCoords);
		assert.strictEqual( dirActual, expectedDirection, "Passed!" );
	}
});

QUnit.test( "test mouse DISTANCE computation", function( assert ) {
	for(var direction in TestData.newCoords) {
		var thisNewCoords = TestData.newCoords[direction];
		
		var expectedDistanceMap = TestData.expectedDistances[direction];

		var actualDistanceMapVectored = getMouseDistance(TestData.oldCoords, thisNewCoords, true);
		var actualDistanceMap = getMouseDistance(TestData.oldCoords, thisNewCoords);

		//TestData.expectedDistances[direction] = actualDistanceMap;
		/// Vectors: yes
		assert.strictEqual( actualDistanceMapVectored.X, 		expectedDistanceMap.X, "Passed!" );
		assert.strictEqual( actualDistanceMapVectored.Y, 		expectedDistanceMap.Y, "Passed!" );
		assert.strictEqual( actualDistanceMapVectored.Total, 	expectedDistanceMap.Total, "Passed!" );

        // Vectors: no
		assert.strictEqual( actualDistanceMap.X, 			Math.abs(expectedDistanceMap.X), "Passed!" );
		assert.strictEqual( actualDistanceMap.Y, 			Math.abs(expectedDistanceMap.Y), "Passed!" );
		assert.strictEqual( actualDistanceMap.Total, 		Math.abs(expectedDistanceMap.Total), "Passed!" );

	}
	console.log(JSON.stringify(TestData.expectedDistances, null, 2));
});