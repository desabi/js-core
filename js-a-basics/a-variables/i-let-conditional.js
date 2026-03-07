// Vote counter fot a poll 
let voteForYes = 0;
let voteForNo = 0;

function castVote(choice) {
    if (choice === "yes") {
        voteForYes++;
    } else if (choice === "no") {
        voteForNo++;
    }

    console.log(`Yes: ${voteForYes} | No: ${voteForNo}`);
}

castVote("yes"); // Yes: 1 | No: 0
castVote("yes"); // Yes: 2 | No: 0
castVote("no"); // Yes: 2 | No: 1