async function clone(repo, desc) {
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`下载`)
    process.start()

    try {
        await download(repo, desc)
    } catch (e) {
        process.fail()
    }
    process.succeed()
}

exports.clone = clone