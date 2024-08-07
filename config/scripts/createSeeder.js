const { exec } = require("child_process");

const seederName = process.argv[2];

if (!seederName) {
  console.error("Please provide a seeder name.");
  process.exit(1);
}

const command = `npx sequelize-cli seed:generate --name ${seederName} --seeders-path=./database/seeders`;
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
