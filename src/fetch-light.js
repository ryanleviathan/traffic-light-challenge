export function fetchLight() {
  return new Promise((resolve, reject) => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        resolve("red");
        break;
      case 1:
        resolve("yellow");
        break;
      case 2:
        resolve("green");
        break;
    }
  });
}

export function fetchNonRandomLight(color) {
  return new Promise((resolve, reject) => {
    switch(color) {
      case 'yellow':
        resolve("red");
        break;
      case 'green':
        resolve("yellow");
        break;
      case 'red':
        resolve("green");
        break;
    }
  });
}
