# MouseMovesJS
------------
Javascript library for computing mouse movements (distance and direction)

## Usage
------------

Distance - returns {X: ..., Y: ..., Total: ...}
```javascript
getMouseDistance({x: oldX, y: oldY}, {x: newX, y: newY});
```

Direction - Returns one of: [NE,NW,SE,SW,N,S,W,E]
```javascript
getMouseDirection({x: oldX, y: oldY}, {x: newX, y: newY});
```
