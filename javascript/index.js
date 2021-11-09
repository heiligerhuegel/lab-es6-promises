// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => {
    console.error(err);
  });

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  // ... Your code here
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {}
}

makeBroccoli();

// Bonus 2 - Promise all
// ...

// let p0 = obtainInstruction("brusselsSprouts", 0);
// let p1 = obtainInstruction("brusselsSprouts", 1);
// let p2 = obtainInstruction("brusselsSprouts", 2);
// let p3 = obtainInstruction("brusselsSprouts", 3);
// let p4 = obtainInstruction("brusselsSprouts", 4);
// let p5 = obtainInstruction("brusselsSprouts", 5);
// let p6 = obtainInstruction("brusselsSprouts", 6);
// let p7 = obtainInstruction("brusselsSprouts", 7);

// Promise.all([p1, p2, p3, p4, p5, p6, p7])
//   .then((value) => {
//     value.forEach((element) => {
//       document.querySelector(
//         "#brusselsSprouts"
//       ).innerHTML += `<li>${element}</li>`;
//     });
//     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function makeBrusselsSprouts() {
  let p0 = await obtainInstruction("brusselsSprouts", 0);
  let p1 = await obtainInstruction("brusselsSprouts", 1);
  let p2 = await obtainInstruction("brusselsSprouts", 2);
  let p3 = await obtainInstruction("brusselsSprouts", 3);
  let p4 = await obtainInstruction("brusselsSprouts", 4);
  let p5 = await obtainInstruction("brusselsSprouts", 5);
  let p6 = await obtainInstruction("brusselsSprouts", 6);
  let p7 = await obtainInstruction("brusselsSprouts", 7);

  const valuesArray = [p0, p1, p2, p3, p4, p5, p6, p7];

  valuesArray.forEach((element) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${element}</li>`;
  });

  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}
makeBrusselsSprouts();
