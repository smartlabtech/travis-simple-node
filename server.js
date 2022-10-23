var FAVORIT_INTRUCTOR = process.env.NAME
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  while (true) {
    console.log(`${FAVORIT_INTRUCTOR} Microservices rock!`)
    await sleep(5000)
  }
}

main()
