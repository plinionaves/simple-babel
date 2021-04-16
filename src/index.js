const main = async () => {
  console.log('Hello World!')
}

Promise.resolve().finally()

main().catch(console.log)
