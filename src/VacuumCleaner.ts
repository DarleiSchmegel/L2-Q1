import tests from "./CaseTests.json";
// import promptSync from 'prompt-sync';

interface VacuumCleanerProps {
  dimensions: { width: number; length: number };
  direction: "North" | "South" | "East" | "West";
  position: {
    X: number;
    Y: number;
  };
}

//coordenadas position sempre <= 0
//position X sempre < dimensions.width
//position Y sempre < dimensions.length

async function executeTests() {
  tests.data.tests.map(async (test) => {
    let VacuumCleaner = {
      direction: "North",
      dimensions: {
        width: 0,
        length: 0,
      },
      position: {
        X: 0,
        Y: 0,
      },
    } as VacuumCleanerProps;

    // if (index > 2) return;

    const dimensions = test.input.line1.split(" ");
    // console.log("s", dimensions, Number(dimensions[0]));
    VacuumCleaner.dimensions.width = Number(dimensions[0]);
    VacuumCleaner.dimensions.length = Number(dimensions[1]);
    let arraySteps = test.input.line2.split("");

    await arraySteps.forEach(async (step) => {
      //posição X < width
      //posição Y < length.
      // F (indicando um passo para a frente),
      // T (indicando um passo para trás),
      // E (indicando uma rotação 90° à esquerda sem se deslocar)
      // D (indicando uma rotação de 90° para a direita sem se deslocar).

      switch (step) {
        case "F": //Passo para frente
          if (
            VacuumCleaner.direction === "East" &&
            VacuumCleaner.position.X < VacuumCleaner.dimensions.width
          ) {
            VacuumCleaner.position.X += 1;
            // console.log(VacuumCleaner.position)
            break;
          }
          if (
            VacuumCleaner.direction === "West" &&
            VacuumCleaner.position.X > 0
          ) {
            VacuumCleaner.position.X -= 1;
            break;
          }
          if (
            VacuumCleaner.direction === "North" &&
            VacuumCleaner.position.Y < VacuumCleaner.dimensions.length
          ) {
            VacuumCleaner.position.Y += 1;
            break;
          }
          if (
            VacuumCleaner.direction === "South" &&
            VacuumCleaner.position.Y > 0
          ) {
            VacuumCleaner.position.Y -= 1;
            break;
          }
          break;
        case "T": //Passo para trás
          if (
            VacuumCleaner.direction === "East" &&
            VacuumCleaner.position.X > 0
          ) {
            VacuumCleaner.position.X -= 1;
            break;
          }
          if (
            VacuumCleaner.direction === "West" &&
            VacuumCleaner.position.X < VacuumCleaner.dimensions.width
          ) {
            VacuumCleaner.position.X += 1;
            break;
          }
          if (
            VacuumCleaner.direction === "North" &&
            VacuumCleaner.position.Y > 0
          ) {
            VacuumCleaner.position.Y -= 1;
            break;
          }
          if (
            VacuumCleaner.direction === "South" &&
            VacuumCleaner.position.Y < VacuumCleaner.dimensions.length
          ) {
            VacuumCleaner.position.Y += 1;
            break;
          }
          break;
        case "E": // Rotação esquerda
          if (VacuumCleaner.direction === "North") {
            VacuumCleaner.direction = "West";
            break;
          }

          if (VacuumCleaner.direction === "East") {
            VacuumCleaner.direction = "North";
            break;
          }
          if (VacuumCleaner.direction === "South") {
            VacuumCleaner.direction = "East";
            break;
          }
          if (VacuumCleaner.direction === "West") {
            VacuumCleaner.direction = "South";
            break;
          }
          break;
        case "D": // Rotação deireita
          if (VacuumCleaner.direction === "North") {
            VacuumCleaner.direction = "East";
            break;
          }

          if (VacuumCleaner.direction === "East") {
            VacuumCleaner.direction = "South";
            break;
          }
          if (VacuumCleaner.direction === "South") {
            VacuumCleaner.direction = "West";
            break;
          }
          if (VacuumCleaner.direction === "West") {
            VacuumCleaner.direction = "North";
            break;
          }
          break;

        default:
          break;
      }
    });

    console.log(
      VacuumCleaner.direction,
      VacuumCleaner.position.X,
      VacuumCleaner.position.Y
    );
  });
}

async function main() {
  console.log("=============================");
  console.log("Testes feitos a partir do arquivo CaseTests.json");
  await executeTests();
  console.log("=============================");



// const prompt = promptSync();

// const input = prompt("Digite a entrada: \n");

// console.log(input)

}

main();

// console.log("ola");
