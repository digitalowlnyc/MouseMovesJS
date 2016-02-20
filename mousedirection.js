function getMouseDistance(oldCoords, newCoords, useVectorsForDistance) {

        if(typeof useVectorsForDistance === "undefined" || useVectorsForDistance === null) { 
            useVectorsForDistance = false; 
        }

        var start = oldCoords;
        var finish = newCoords;

        var xDistanceVector = start.x - finish.x;
        var yDistanceVector = start.y - finish.y;
        var xDistance = Math.abs(xDistanceVector);
        var yDistance = Math.abs(yDistanceVector);

        var totalDistanceSquare = Math.pow(xDistance,2) + Math.pow(yDistance,2);
        var totalDistance = Math.sqrt(totalDistanceSquare);

        var returnX;
        var returnY;
        if(useVectorsForDistance) {
            returnX = xDistanceVector;
            returnY = yDistanceVector;
        } else {
            returnX = xDistance;
            returnY = yDistance;
        }
        return {
        	Total: totalDistance,
        	X:      returnX,
        	Y:      returnY,
        }
    }

/*
* Get the mouse compass direction. left is West, up is North
* Returns: null for no movement
*/
function getMouseDirection(oldCoords, newCoords) {

    var tolerance = 0;

    var xMovement = newCoords.x - oldCoords.x;
    var yMovement = newCoords.y - oldCoords.y;

    var moveDirection = "";

    // there was no X movement
    if(Math.abs(yMovement) > tolerance) {
    	if(yMovement > 0) {
    	     moveDirection += "N";
    	} else {
             moveDirection += "S";
    	}
    }

    // W-E movement
    if(Math.abs(xMovement) > tolerance) {
    	if(xMovement > 0) {
    	     moveDirection += "E";
    	} else {
             moveDirection += "W";
    	}
    }
    if(moveDirection === "") {
        return(null);
    }

    return(moveDirection);
}

