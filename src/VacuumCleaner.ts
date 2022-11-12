import tests from "./CaseTests.json";

interface VacuumCleanerProps {
  dimensions: { width: number; length: number };
  direction: "North" | "South" | "East" | "West";
  toSpinValue: 90;
  toSpinDirection: "left" | "right";
  movementHistory: string[];
  place: number[][];
  position: {
    X: number;
    Y: number;
  };
}

//coordenadas position sempre <= 0
//position X sempre < dimensions.width
//position Y sempre < dimensions.length
let VacuumCleaner = {
  direction: "East",
  dimensions: {
    length: 0,
    width: 0,
  },
  position: {
    X: 0,
    Y: 0,
  },
} as VacuumCleanerProps;

tests.data.tests.map(async (test, index: number) => {
  if (index > 0) return;

  const dimensions = test.input.line1.split(" ");
  console.log("s", dimensions, Number(dimensions[0]));
  VacuumCleaner.dimensions.width = Number(dimensions[0]);
  VacuumCleaner.dimensions.length = Number(dimensions[1]);
  let arraySteps = test.input.line2.split("");

  await arraySteps.forEach(async (step) => {
    await displacement(step as "F" | "T" | "E" | "D");
    console.log(
      step,
      VacuumCleaner.position,
      VacuumCleaner.direction,
      VacuumCleaner.dimensions
    );
  });

  console.log(VacuumCleaner.position, VacuumCleaner.direction);
});

async function displacement(step: "F" | "T" | "E" | "D") {
  switch (step) {
    case "F": //Passo para frente
      if (VacuumCleaner.direction === "East") {
        VacuumCleaner.position.Y += 1;
        return;
      }
      if (VacuumCleaner.direction === "West") {
        VacuumCleaner.position.Y -= 1;
        return;
      }
      if (VacuumCleaner.direction === "North") {
        VacuumCleaner.position.X -= 1;
        return;
      }
      if (VacuumCleaner.direction === "South") {
        VacuumCleaner.position.X += 1;
        return;
      }
      break;
    case "T": //Passo para trás
      if (VacuumCleaner.direction === "East") {
        VacuumCleaner.position.Y -= 1;
        return;
      }
      if (VacuumCleaner.direction === "West") {
        VacuumCleaner.position.Y += 1;
        return;
      }
      if (VacuumCleaner.direction === "North") {
        VacuumCleaner.position.X += 1;
        return;
      }
      if (VacuumCleaner.direction === "South") {
        VacuumCleaner.position.X -= 1;
        return;
      }
      break;
    case "E": // Rotação esquerda
      if (VacuumCleaner.direction === "North") {
        VacuumCleaner.direction = "West";
        return;
      }

      if (VacuumCleaner.direction === "East") {
        VacuumCleaner.direction = "North";
        return;
      }
      if (VacuumCleaner.direction === "South") {
        VacuumCleaner.direction = "East";
        return;
      }
      if (VacuumCleaner.direction === "West") {
        VacuumCleaner.direction = "South";
        return;
      }
      break;
    case "D": // Rotação deireita
      if (VacuumCleaner.direction === "North") {
        VacuumCleaner.direction = "East";
        return;
      }

      if (VacuumCleaner.direction === "East") {
        VacuumCleaner.direction = "South";
        return;
      }
      if (VacuumCleaner.direction === "South") {
        VacuumCleaner.direction = "West";
        return;
      }
      if (VacuumCleaner.direction === "West") {
        VacuumCleaner.direction = "North";
        return;
      }
      break;

    default:
      break;
  }
}

// F (indicando um passo para a frente),
// T (indicando um passo para trás),
// E (indicando uma rotação 90° à esquerda sem se deslocar)
// D (indicando uma rotação de 90° para a direita sem se deslocar).

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?`, (name: any) => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

// console.log("ola");
